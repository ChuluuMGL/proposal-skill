# premium-boardroom Style Spec

## Position

Formal, restrained, board-document clarity. Use when the client must believe the proposal is controlled, accountable, and procurement-safe.

## Color System

| Role | Hex | Use |
|---|---|---|
| Light canvas | `#F4F1EA` | Default canvas for body, governance, budget, and proof pages |
| Light surface | `#FFFFFF` | Tables, evidence objects, and quiet side panels |
| Deep canvas | `#0F1A24` | Cover, chapter divider, and rare thesis reset only |
| Panel | `#16242F` / `#E7ECEF` | Dark or light evidence panels according to canvas |
| Warm text | `#F3ECE0` | Primary text on dark canvas |
| Dark ink | `#15212B` | Primary text on light canvas |
| Soft text | `#C4D0D8` | Body copy, captions, lower hierarchy |
| Muted text | `#8294A0` | Folios, source notes, metadata |
| Light muted | `#5B6C75` | Folios, source notes, metadata on light canvas |
| Rule | `#2C4150` | Thin grid lines and dividers |
| Steel accent | `#6FA8C7` | Key thesis emphasis, section markers, selected labels |
| Ochre accent | `#C79A4B` | Figures, budget totals, acceptance highlights |
| Alert | `#D97757` | Risk, exclusion, warning, not-included items |

Rules:

- Use only one accent family per page: steel or ochre, not both everywhere.
- Use light pages as the default working surface. Reserve dark canvas for cover, chapter, and decisive thesis pages so the deck has rhythm and proof pages stay readable.
- Avoid gradients and glowing effects.
- Alert color must indicate a real risk or boundary, never decoration.

## Typography

| Layer | Font | Rule |
|---|---|---|
| Main headings | Inter / PingFang SC / system sans | Heavy, tight but not negative tracking, 48-76px in HTML or 30-46pt in PPTX |
| Figures | Playfair Display / Georgia fallback | Large numeric anchors only, not long body text |
| Body | Inter / PingFang SC | 16-22px HTML or 10-14pt PPTX equivalent |
| Metadata | Inter / Arial | Uppercase, letter-spaced, low contrast |

Rules:

- Sans-led system; serif is only for numbers or rare figure anchors.
- Dense pages must keep body text readable; do not shrink proof text below 10pt PPTX equivalent.

## Image And Asset Behavior

- Prefer tables, system diagrams, audit matrices, source-backed screenshots, and restrained evidence frames.
- Use screenshots sparingly and caption what they prove.
- Do not use decorative lifestyle stock imagery.
- If an image is unavailable, use a compact `待确认` evidence slot rather than an empty lower-third placeholder.

## Charts And Tables

- Tables: thin rules, no heavy fills, strong top rule, consistent row height.
- KPI strips: metric, unit, owner, acceptance status.
- Roadmaps: accountable milestones, not decorative arrows.
- Trend lines: muted grid, one highlighted line, direct labels.
- Budget: amount, use, delivery, acceptance, boundary.

## Module System

| Module | Treatment |
|---|---|
| Cover | Large numeric or thesis anchor + KPI/proof strip |
| Brief translation | Audit table: requirement, interpretation, response, proof slide |
| Strategy map | Governance / system / operation layers with owners |
| Budget | Ledger table + boundary sidebar + commercial implication strip |
| Risk | Risk, trigger, action, owner, escalation |
| Close | Return to winning thesis and next decision |

## Reject Rules

- Generic rounded-card dashboard.
- An all-dark deck with no chapter/body contrast.
- Decorative blue/gold blocks without proof.
- Too many accent colors on one slide.
- Dead lower third under a table.
- A chart that does not name owner, unit, or acceptance logic.
