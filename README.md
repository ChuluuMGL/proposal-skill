# proposal-skill

> **Commercial proposal logic, delivered as editable PPT or interactive HTML.**
> Turn client evidence into connected diagnosis, strategy, proof, deliverables, schedule and pricing. Retain the existing slide-design and final-polish tools, and add responsive web interactions with format-specific acceptance.
>
> Created and maintained by **Chuluu**. A useful first draft still needs project judgment and review; this skill does not promise one-pass approval.

[Simplified Chinese](./README.zh-CN.md) | English

[![Skill](https://img.shields.io/badge/AI%20Skill-proposal-0E5E43)](./SKILL.md)
[![Version](https://img.shields.io/badge/version-0.6.0-green)](./skill.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)
[![QA](https://img.shields.io/badge/QA-audited%20deck-0E5E43)](./scripts/audit_proposal_pptx.py)
[![Workflow](https://img.shields.io/badge/workflow-stage--gated-purple)](./references/workflow.md)
[![by Chuluu](https://img.shields.io/badge/by-Chuluu-0E5E43)](https://github.com/ChuluuMGL)

### New in 0.6.0

- One `proposal` entry point; shared argument, distinct PPT and web layouts.
- [Diagnosis-to-delivery traceability](references/argument-traceability.md) and [anonymized revision examples](examples/proposal-revisions.md).
- [Responsive HTML guidance](references/web-proposals.md) and [purpose-based interaction selection](references/web-interactions.md).
- [Runnable web behavior starter](templates/web-components/README.md): cycle, image dialog, timeline, inquiry demo, reversible two-state price comparison, navigation and expandable appendix. It is a neutral starter, not an approved client theme.
- [Learning from revisions](references/iteration-learning.md), with customer data kept out of reusable resources.

**Migration:** this repository was previously `proposal-ppt-skill`; older metadata also used `chuluu-proposal-ppt`. The canonical invocation is now `$proposal`. Existing installs should update the checkout, use a single `proposal` skill directory, and refresh the host's skill discovery. Preserve local modifications first; avoid duplicate old/new installs. No change to other proposal repositories or production sites is required.

**Try the web route:** “Use $proposal to build a responsive HTML proposal from this brief. Connect diagnosis to delivery, choose only useful interactions, and check desktop, phone and reduced-motion states. Do not deploy.”

### Demo

Three sample pages per style family (cover · winning thesis · budget / acceptance). Click an image to view it full-size:

**premium-boardroom** — Strict grid, board-document clarity, high-trust proof pages.
[![premium-boardroom · cover / thesis / budget](./assets/demo/premium-boardroom-3up.png)](./assets/demo/premium-boardroom-3up.png)

**editorial-brand** — Magazine-like typography, editorial rhythm, premium consumer tone.
[![editorial-brand · cover / thesis / budget](./assets/demo/editorial-brand-3up.png)](./assets/demo/editorial-brand-3up.png)

**tech-launch** — Product/interface hero, launch clarity, KPI and acceptance proof.
[![tech-launch · cover / thesis / acceptance](./assets/demo/tech-launch-3up.png)](./assets/demo/tech-launch-3up.png)

> The HTML sources live under [`docs/demo/`](./docs/demo) — open them locally for full interactivity. Real client photography is replaced with conceptual visuals; final `.pptx` fidelity depends on the host runtime's presentation backend.

### Style library at a glance

When the client has no VI, `proposal` routes to the **4 core template families** below. Not "100 styles" — four families cover a full proposal, so the effort goes into the argument, not a visual rabbit hole.

**Core families · full-deck coverage**

| Family | Suited for |
|---|---|
| `premium-boardroom` | B2B, consulting, finance, formal tenders, annual retainers |
| `editorial-brand` | Brand marketing, fashion, beauty, premium consumer, travel |
| `tech-launch` | AI, SaaS, product launches, fintech, technical solutions |
| `consumer-lifestyle` | FMCG, food & beverage, retail, consumer goods, creator content |

> The four families are specified in [`references/style-template-strategy.md`](./references/style-template-strategy.md). `premium-boardroom` and `tech-launch` currently have reusable themes, `editorial-brand` has a self-contained HTML demo, and `consumer-lifestyle` remains a specification rather than a claimed finished public theme. Any new style must pass the three-page sample gate (chapter / body / dense page) before scaling.

### Why this skill, not another "pretty slides" tool

Pitches are won on the **argument**, not the decoration. A beautiful deck with a weak thesis loses to a plain deck with a sharp one — but a plain deck never gets read. So this skill optimizes for the part that actually wins (the **winning thesis**, proof objects, budget boundaries, and risk removal) and treats premium design as the *permission to be heard*, not the product.

It is **anti-fabrication by design**: it never invents data, cases, pricing, awards, or permissions, and it never claims a PowerPoint was delivered when only markdown, HTML, or a PDF exists. Deliverables are also **objectively auditable** — see [Objective QA](#objective-qa-dont-trust-verify).

### What you get

`proposal` turns messy proposal inputs into a structured commercial proposal package:

| Output | What It Contains |
|---|---|
| Interactive HTML | Responsive chapters, explanatory diagrams, optional case/price interactions and browser validation. |
| Editable `.pptx` | A business proposal deck with a coherent storyline, slide-by-slide proof objects, visual system, and QA-ready layout. |
| Presenter script `.md` | The proposal logic, section rhythm, slide-by-slide talk track, transition lines, and assumptions to confirm. |
| Missing-information list | A clear list of unknowns that should be marked instead of invented. |
| Style and asset plan | Optional rich style system, font pairing, asset plan, and AI-image/HTML/SVG background route when needed. |

### Table of contents

[Use cases](#use-cases) · [Workflow](#workflow) · [Objective QA](#objective-qa-dont-trust-verify) · [Work modes](#work-modes) · [Style template families](#style-template-families) · [Rich style workflow](#rich-style-workflow) · [Proposal routes](#proposal-routes) · [Runtime compatibility](#runtime-compatibility) · [Installation](#installation) · [Recommended prompts](#recommended-prompts) · [Design principles](#design-principles) · [FAQ](#faq) · [Included files](#included-files) · [Related skills](#related-skills)

---

## Use Cases

| Scenario | Typical Request |
|---|---|
| Business proposal deck | "Create a proposal PPT from this client brief." |
| Bid / RFP / tender presentation | "Turn this tender document into a pitch deck and script." |
| Annual operation plan | "Create an annual social/content operation proposal." |
| Brand and social marketing proposal | "Build a brand campaign or social media proposal deck." |
| Live commerce / event / activation plan | "Create an execution proposal with budget, SOP, risk, and KPI." |
| AI / SaaS / digital consulting proposal | "Create a solution deck with roadmap, architecture, and value model." |
| Partnership / sponsorship proposal | "Create a cooperation proposal with packages and activation scenarios." |
| Existing deck revision | "Improve this PPT's logic, titles, proof objects, and presenter script." |

---

## Workflow

This skill uses a stage-gated workflow inspired by professional proposal production:

| Stage | Gate | Deliverable |
|---|---|---|
| 0. Start and route | Choose mode, proposal type, depth, visual source, and deliverables. | Startup judgment |
| 1. Brief intake | Separate confirmed facts from missing information. | Brief audit |
| 2. Proposal blueprint | Build the winning thesis, chapter flow, page plan, and proof objects. | Blueprint for approval |
| 3. Slide copy | Write concise slide copy and proof-object content. | Slide-level copy draft |
| 4. Deck build | Create or edit the deck in the chosen format. | `.pptx` / `.html` / `.pdf` |
| 5. Presenter script | Write the proposal logic and slide-by-slide talk track. | `.md` script |
| 6. Final QA | Check logic, evidence, visual layout, budget, KPI, and risk. | Delivery-ready package |

Default mode is `guided`: the agent stops after the blueprint and waits for confirmation before building the deck. If you ask it to proceed directly, it uses `auto` mode and marks missing information as "to be confirmed."

---

## Objective QA — don't trust, verify

Deliverables are checked by an objective script, not only the agent's self-assessment. [`scripts/audit_proposal_pptx.py`](./scripts/audit_proposal_pptx.py) verifies a finished deck **without the agent in the loop**:

- the `.pptx` is a valid Office Open XML package (zip + `[Content_Types].xml`);
- actual slide count (and warns when a deck is too thin);
- placeholder leakage (`待补充` / `TODO` / `TBC` / `lorem ipsum` / …) that should not survive into a shipped deck;
- presenter-notes coverage and slide-count alignment against the `.md` script;
- oversized empty "dead frame" regions (when `python-pptx` is available).

```bash
# audit a delivered deck against its presenter script
python3 scripts/audit_proposal_pptx.py outputs/proposal.pptx --script outputs/proposal.md

# audit the bundled blank template (fill-in markers are allowed)
python3 scripts/audit_proposal_pptx.py assets/minimal-proposal-template.pptx --template
```

Pure standard library (`zipfile` + `xml`); `python-pptx` is optional and unlocks the deeper blank-frame checks. This closes the loop on the skill's *"do not claim a PPTX was delivered when it was not"* Hard Rule.

---

## Work Modes

| Mode | When to Use | Behavior |
|---|---|---|
| `guided` | You want to review the strategy before slides are built. | Produces the audit and blueprint first, then waits for confirmation. |
| `auto` | You need a complete first draft quickly. | Builds the full deck (`.pptx`, `.html`, or `.pdf`) and script with assumptions clearly marked. |
| `edit` | You already have a PPTX. | Preserves the deck's visual system unless you ask for a redesign. |
| `audit` | You only want review feedback. | Reviews the deck and returns findings, risks, and revision suggestions. |

---

## Rich Style Workflow

If you ask for a strong direction such as pixel retro, fashion editorial, launch minimal, Japanese minimal, Japanese magazine collage, oil salon, or Web3/AI glass, the skill should not merely repaint a generic template.

It first defines the Style DNA and prefers a three-page sample gate:

| Sample | Purpose | What It Checks |
|---|---|---|
| Cover / big-idea page | Tests the visual peak of the style. | The style is recognizable without reading the style name. |
| Proof / mechanism page | Tests whether the style can carry commercial evidence. | Proof objects change component form, not only color. |
| Dense business page | Tests budget, KPI, risk, timeline, or brief-coverage readability. | The style does not sacrifice legibility or acceptance boundaries. |

If a style only works for cover or divider pages, the skill restricts it to expressive pages. Budget, KPI, risk, and brief-coverage pages return to clearer business structures.

Rich styles are the **exception**, not the default: only when you explicitly ask and can supply assets or art direction; otherwise the four core families above are used. Any rich style must pass the three-page sample gate before it ships.

---

## Runtime Compatibility

This skill is not a standalone PPTX rendering engine — it provides proposal strategy, page planning, visual systems, presenter scripts, and QA gates.

- **Where it runs**: any environment that can read `SKILL.md` and write files (Claude Code, Codex, Cursor, Windsurf, Trae, Qoder, …). Claude Code and Codex are tested; others are expected but not individually verified.
- **PPTX**: needs a backend (`python-pptx` / `pptxgenjs` / Office automation / a host presentation tool).
- **HTML**: file authoring plus browser verification; choose responsive proposal or fixed-stage deck. **PDF** requires an export/print backend. An explicitly requested PPTX is never silently substituted.
- **When even HTML is impossible**: falls back to blueprint / slide copy / visual spec.

See [`references/runtime-compatibility.md`](./references/runtime-compatibility.md) for details.

---

## Proposal Routes

The skill does not force every proposal into the same template. It routes the project into one primary proposal type:

| Route | Best For |
|---|---|
| Brand, social, and content marketing | Brand campaigns, social operation, creative concepts, content systems. |
| Annual operation and retainer service | Always-on operations, account management, B2B content assets, customer operations. |
| Project execution, live commerce, and activation | Live commerce, event execution, production-heavy work, complex project delivery. |
| Consulting, digital, AI, SaaS, and tooling | Transformation, AI tools, SaaS platforms, workflow automation, consulting proposals. |
| Partnership, sponsorship, and resource integration | Sponsorship, channel cooperation, joint marketing, investment packages. |

See [`references/proposal-routes.md`](./references/proposal-routes.md) for the full routing logic.

---

## Included Files

| File / Folder | Purpose |
|---|---|
| [`SKILL.md`](./SKILL.md) | Core skill metadata and instructions. |
| [`references/workflow.md`](./references/workflow.md) | Guided workflow, stage gates, recommended prompts. |
| [`references/proposal-routes.md`](./references/proposal-routes.md) | Proposal type routing and chapter structures. |
| [`references/page-types.md`](./references/page-types.md) | Page-type library and proof-object standards. |
| [`references/layout-rhythm.md`](./references/layout-rhythm.md) | Slide density, whitespace balance, and deck pacing rules. |
| [`references/visual-system.md`](./references/visual-system.md) | Visual families, typography, layout, chart, and screenshot rules. |
| [`references/visual-system-card.md`](./references/visual-system-card.md) | Required pre-build visual decision card: colors, fonts, images, charts, modules, density, rejects. |
| [`references/palette-library.md`](./references/palette-library.md) | Default high-taste palette presets when no client visual identity exists. |
| [`references/style-template-strategy.md`](./references/style-template-strategy.md) | Four public style-template families, Style DNA contract, and three-page sample gate. |
| [`references/font-system.md`](./references/font-system.md) | Free/commercial-safe font pairings and fallbacks. |
| [`references/output-contract.md`](./references/output-contract.md) | Required PPTX and presenter-script output format. |
| [`references/runtime-compatibility.md`](./references/runtime-compatibility.md) | Agent compatibility, PPTX backend requirements, and fallback modes. |
| [`references/quality-check.md`](./references/quality-check.md) | Final QA checklist and common failure modes. |
| [`scripts/audit_proposal_pptx.py`](./scripts/audit_proposal_pptx.py) | Objective delivery QA — validates the pptx, slide count, placeholder leakage, and script alignment. |
| [`assets/minimal-proposal-template.pptx`](./assets/minimal-proposal-template.pptx) | Neutral fallback PowerPoint template. |
| [`assets/demo/`](./assets/demo) | Rendered concept-demo images of the three style families (shown at the top). |
| [`templates/style-specs/`](./templates/style-specs/) | Reusable color, font, image, chart, table, module, and reject-rule contracts for core families. |
| [`agents/openai.yaml`](./agents/openai.yaml) | Codex/OpenAI-style skill UI metadata. |
| [`skill.json`](./skill.json) | Machine-readable metadata for directories and marketplaces. |

The fallback template is used only when there is no client visual identity, no reference deck, and no stronger design direction.

---

## Installation

### Ask an AI Agent

You can ask your AI coding agent:

> Install the proposal skill from https://github.com/ChuluuMGL/proposal-skill

### Manual Install

| Agent / IDE | Suggested Skill Directory |
|---|---|
| Codex | `~/.codex/skills/proposal/` |
| Claude Code | `.claude/skills/proposal/` |
| Cursor | `.cursor/skills/proposal/` |
| Qoder | `.qoder/skills/proposal/` |
| Trae | `.trae/skills/proposal/` |
| Windsurf | `.windsurf/skills/proposal/` |
| Generic agents | `.agents/skills/proposal/` |

Example:

```bash
git clone https://github.com/ChuluuMGL/proposal-skill.git \
  ~/.codex/skills/proposal
```

Restart your agent after installation so the skill metadata is reloaded.

---

## Recommended Prompts

### Blueprint first, then confirm

```text
Use $proposal to create a business proposal from the brief below.

Do not build the deck yet. First return:
1. Brief audit + compliance matrix (extract every scored requirement with weight and source)
2. Winning thesis
3. Chapter structure
4. Slide-by-slide titles, proof object, and which brief requirement each slide maps to
5. Visual system card (colors / fonts / charts / modules / reject rules)
6. Questions that need my confirmation

brief:
...
```

### Generate deck and script directly

```text
Use $proposal to produce, from the brief below:
1. The deck format that fits this runtime (.pptx if a backend exists, else .html)
2. A same-name Markdown presenter script
3. The Brief Compliance Matrix (as an appendix)

Requirements: infer type and page count; mark unknowns as to-be-confirmed; do not invent data; emit the visual system card before drawing; run the compliance gate before delivery.
brief:
...
```

> Full prompts for style-rich proposals and existing-deck revision are in [`references/workflow.md`](./references/workflow.md).

---

## Design Principles

- Start from the client's business problem, not the vendor's service list.
- Every slide should make one judgment and show one proof object.
- Use precise subject titles or supported conclusions according to the page purpose.
- Put reasoning and oral explanation into the presenter script, not dense slide text.
- Do not invent data, cases, awards, platform permissions, pricing, or performance results.
- Mark unknowns clearly instead of hiding them.
- Make budget, KPI, ownership, acceptance criteria, and risk boundaries visible.

## Final-polish an existing client deck (v0.5.0)

Use `edit-final-polish` when a current PPTX contains manual edits and the user supplies page-level feedback or screenshots. It preserves protected text, image geometry/crops, and brand elements; creates a story map and feedback ledger before revision; then reports technical, visual, and commercial acceptance separately. See `references/final-polish-workflow.md`.

It never treats a passing package audit as visual or commercial approval.

---

## FAQ

**Is this a PowerPoint template or an AI skill?**  
It is an AI skill. The included PPTX is only a neutral fallback template. The main value is the workflow, page planning, proof-object logic, and presenter-script structure.

**Does it create the PPTX automatically?**  
Yes, when used inside an agent that can create or edit PowerPoint files, such as a host presentation tool, `python-pptx`, `pptxgenjs`, an Office-compatible exporter, or PowerPoint / Keynote / LibreOffice automation. Without a PPTX backend, disclose the limitation and offer HTML with the same presenter script; confirm a substitute if PPTX was explicitly required.

**Does it require an MCP server?**  
No. This is a local skill package, not an MCP server.

**Can it use a client's existing PPT template?**  
Yes. User-provided templates, existing PPTX files, or client visual identity always take priority over the fallback template.

**Will it invent market data or case results?**  
No. The skill explicitly requires unknown data to be marked as missing or to be confirmed.

**Can other agents use it?**  
Yes, if they support skill folders or can read `SKILL.md`-style packages. Installation paths differ by client.

---

## Technical Specs

| Item | Description |
|---|---|
| Skill name | `proposal` |
| Repository | `ChuluuMGL/proposal-skill` |
| Format | Local skill folder with `SKILL.md`, references, assets, and metadata |
| Primary output | Editable PPTX or interactive HTML, PDF export and Markdown script |
| Bundled asset | Neutral fallback PowerPoint template |
| PPTX generation | Depends on the host agent's presentation / PPTX backend |
| License | MIT |
| Author | Chuluu |

## Related Skills

- [business-website-skill](https://github.com/ChuluuMGL/business-website-skill) — the sibling skill for long-lived marketing websites. Its Phase 1 evidence map and visual system can be reused here, so the same client materials feed both a proposal deck and a website without being collected twice.

## License

MIT. Copyright (c) 2026 Chuluu.

## Ownership

| Item | Value |
|---|---|
| Copyright holder | Chuluu |
| Maintainer / GitHub publisher | [ChuluuMGL](https://github.com/ChuluuMGL) |
| Website | [github.com/ChuluuMGL](https://github.com/ChuluuMGL) |
| Notice | [NOTICE](./NOTICE) |

---

<!-- Structured Data for SEO: JSON-LD -->
<!-- {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "proposal-skill",
  "alternateName": "Business Proposal Presentation Skill",
  "description": "Open-source AI agent skill for creating stage-gated business proposal decks, visual system cards, and presenter scripts from briefs, research, budgets, cases, and execution plans.",
  "url": "https://github.com/ChuluuMGL/proposal-skill",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "description": "The skill is open source under the MIT license."
  },
  "author": {
    "@type": "Person",
    "name": "Chuluu",
    "url": "https://github.com/ChuluuMGL"
  },
  "softwareVersion": "0.6.0"
} -->
