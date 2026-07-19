# Templates

Reusable, flow-based slide templates for proposal demos. Each family is one
`.theme.css` file layered on top of `engine.css`.

## Why flow-based

The page skeleton uses normal document flow (`flex` / `grid`) so elements
**cannot overlap or reverse order by construction**. Absolute positioning is
reserved for chrome and decoration only. This is the lesson from
`references/layout-rhythm.md` → "Text Flow and Overlap Prevention": hand-tuned
absolute coordinates drift and overlap; flex gutters do not.

## Files

| File | Purpose |
|---|---|
| `engine.css` | Base layout. Page frame, chrome, content primitives (`.row-split`, `.ledger`, `.implication`, `.pillars`). Family-agnostic. |
| `premium-boardroom.theme.css` | B2B / consulting / finance / tenders. Square corners, thin rules, board-document clarity. |
| `editorial-brand.theme.css` | *(planned)* Image/typography-led magazine layouts for brand, fashion, beauty. Current public demo is self-contained HTML, not yet a reusable theme file. |
| `tech-launch.theme.css` | Keynote focus, product/interface heroes, controlled radius. |
| `consumer-lifestyle.theme.css` | *(planned)* Product scenes, catalog proof walls, commerce clarity. The style spec exists; no public reusable theme is claimed yet. |
| `style-specs/` | Reusable color, typography, image, chart, module, density, and reject-rule contracts for each core family. |

## Using a template

```html
<link rel="stylesheet" href="../../templates/engine.css">
<link rel="stylesheet" href="../../templates/premium-boardroom.theme.css">

<article class="slide premium-boardroom">
  <div class="topbar">…</div>
  <div class="eyebrow">…</div>
  <h2 class="page-title">…</h2>
  <div class="row-split"><div class="main">…</div><div class="side">…</div></div>
  <div class="implication">…</div>
  <div class="footbar">…</div>
</article>
```

## Verifying

Before treating a demo as done, run the objective visual audit and require a
human visual sign-off (see the Hard Rule in `SKILL.md`):

```bash
node scripts/audit_html_demo.mjs path/to/demo.html --render out/
```

This catches element overlap and boundary overflow that boundary checks and
agent self-review miss. Aesthetic balance still needs a human eye.

## Style Specs

Before using a family in a real deck, load the matching file under
`style-specs/` and convert it into the project-specific visual system card from
`references/visual-system-card.md`.
