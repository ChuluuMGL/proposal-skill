#!/usr/bin/env node
/**
 * audit_html_demo.mjs — rendered-visual QA for proposal-ppt HTML demos.
 *
 * The pptx audit (audit_proposal_pptx.py) checks the .pptx file structurally,
 * but real line-wrapping only happens inside a renderer. This script renders an
 * HTML style demo headlessly and reports two classes of defect that a boundary
 * check alone misses and that agents cannot reliably self-verify:
 *
 *   1. element-to-element text overlap (reads as a broken deck)
 *   2. boundary overflow / internal clipping
 *
 * Requires Playwright. Set PLAYWRIGHT_MODULE_PATH to point at a specific
 * Playwright install (e.g. a runtime-bundled node_modules/playwright);
 * otherwise a normal `playwright` require is attempted.
 *
 * Usage:
 *   node scripts/audit_html_demo.mjs path/to/demo.html
 *   node scripts/audit_html_demo.mjs path/to/demo.html --render out/   # also save PNGs
 *
 * Exit code: 0 if clean, 1 if any issue found.
 */

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
function loadPlaywright() {
  const candidates = [process.env.PLAYWRIGHT_MODULE_PATH, "playwright"].filter(Boolean);
  for (const c of candidates) {
    try { return require(c).chromium; } catch { /* try next */ }
  }
  console.error("Playwright not found. Install with: npm i -D playwright && npx playwright install chromium");
  process.exit(2);
}

const args = process.argv.slice(2);
const htmlArg = args.find(a => !a.startsWith("--"));
const renderIdx = args.indexOf("--render");
const renderDir = renderIdx >= 0 ? args[renderIdx + 1] : undefined;
if (!htmlArg) {
  console.error("Usage: audit_html_demo.mjs <demo.html> [--render out/]");
  process.exit(2);
}
const htmlPath = path.resolve(htmlArg);
if (!fs.existsSync(htmlPath)) {
  console.error(`file not found: ${htmlPath}`);
  process.exit(2);
}

const chromium = loadPlaywright();
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 2048, height: 1220 }, deviceScaleFactor: 1 });
await page.goto(`file://${htmlPath}`, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts && document.fonts.ready);
await page.waitForTimeout(600);

const findings = await page.evaluate(() => {
  const out = [];
  const isLeafText = (el) =>
    el.children.length === 0 && (el.textContent || "").trim().length > 0;
  const slides = document.querySelectorAll(".slide");
  if (!slides.length) return { slides: 0, findings: out };
  slides.forEach((slide, si) => {
    const sr = slide.getBoundingClientRect();
    const leaves = [];
    slide.querySelectorAll("*").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      const cls = typeof el.className === "string" ? el.className : "";
      const label = `${el.tagName.toLowerCase()}.${cls}`.replace(/\s+/g, ".");
      const st = getComputedStyle(el);
      const clips = st.overflowX !== "visible" || st.overflowY !== "visible";
      const outside = r.left < sr.left - 1 || r.top < sr.top - 1 || r.right > sr.right + 1 || r.bottom > sr.bottom + 1;
      const overflow = clips && (el.scrollWidth > el.clientWidth + 2 || el.scrollHeight > el.clientHeight + 2);
      if (outside || overflow) {
        out.push({
          slide: si + 1, kind: outside ? "boundary-out" : "clipped",
          el: label,
          text: (el.textContent || "").trim().slice(0, 30),
        });
      }
      if (isLeafText(el)) leaves.push({ el, r, label });
    });
    // element-to-element overlap (skip ancestor/descendant pairs)
    for (let i = 0; i < leaves.length; i++) {
      for (let j = i + 1; j < leaves.length; j++) {
        const a = leaves[i], b = leaves[j];
        if (a.el.contains(b.el) || b.el.contains(a.el)) continue;
        const ox = Math.min(a.r.right, b.r.right) - Math.max(a.r.left, b.r.left);
        const oy = Math.min(a.r.bottom, b.r.bottom) - Math.max(a.r.top, b.r.top);
        if (ox > 6 && oy > 6) {
          out.push({
            slide: si + 1, kind: "overlap",
            a: a.label, b: b.label,
            aText: (a.el.textContent || "").trim().slice(0, 20),
            bText: (b.el.textContent || "").trim().slice(0, 20),
            px: Math.round(ox), py: Math.round(oy),
          });
        }
      }
    }
  });
  return { slides: slides.length, findings: out };
});

if (renderDir) {
  fs.mkdirSync(renderDir, { recursive: true });
  const shells = await page.locator(".slide-shell").all();
  for (let i = 0; i < shells.length; i++) {
    await shells[i].screenshot({ path: path.join(renderDir, `slide-${String(i + 1).padStart(2, "0")}.png`) });
  }
}

await browser.close();

console.log(`\n=== audit: ${path.basename(htmlPath)} (${findings.slides} slide(s)) ===`);
if (!findings.findings.length) {
  console.log("  no boundary, clipping, or element-overlap issues found.");
  console.log("=== result: CLEAN ===");
  process.exit(0);
}
for (const f of findings.findings) {
  if (f.kind === "overlap") {
    console.log(`  [ERROR] slide ${f.slide}: overlap ${f.px}×${f.py}px  '${f.aText}' ↔ '${f.bText}'`);
  } else {
    console.log(`  [ERROR] slide ${f.slide}: ${f.kind}  <${f.el}>  '${f.text}'`);
  }
}
console.log(`=== result: ${findings.findings.length} issue(s) found ===`);
process.exit(1);
