# tech-launch Style Spec

## Position

Keynote-focused, product/interface-led, clear and modern. Use when the proposal must make a technical or AI solution feel simple, controlled, and measurable.

## Color System

| Role | Hex | Use |
|---|---|---|
| Canvas | `#F4F6F9` | Cool light background |
| Secondary canvas | `#EAEFF5` | Bands, subtle panels |
| Panel | `#FFFFFF` | UI mockups, metric cards |
| Ink | `#0D1620` | Main text |
| Soft ink | `#3D4D5C` | Body and descriptions |
| Muted | `#76858F` | Metadata, labels, source |
| Rule | `#DDE3EA` | Dividers and table lines |
| Signal blue | `#2B6CFF` | Product claim, selected state, main chart line |
| Success green | `#12A672` | Accepted, resolved, verified |
| Warning orange | `#E0633A` | Exceptions, risks, not-ready states |

Rules:

- One electric signal color per page.
- Green is status/proof only; do not use it as general decoration.
- Rounded panels are for interface/system modules, not every business table.
- Use one hero interface, architecture, or workflow object as the visual center; surrounding labels should explain it rather than form a wall of equal cards.

## Typography

| Layer | Font | Rule |
|---|---|---|
| Launch headlines | Inter / SF Pro / PingFang SC | Large, bold, direct, 56-76px HTML or 32-48pt PPTX |
| Body | Inter / PingFang SC | Short technical explanations with business implication |
| UI labels | Inter / Arial | Uppercase, small, status-like |
| Metrics | Inter Display / system sans | Large, high contrast, unit visible |

Rules:

- Big type must reveal one idea, not a paragraph.
- Technical terms need translation into buying criteria: control, cost, reliability, acceptance, owner.

## Image And Asset Behavior

- Prefer interface mockups, product UI, architecture diagrams, dashboards, API/status cards, and before/after workflow proof.
- Concept UI is acceptable only if clearly a mockup and not presented as a real screenshot.
- Use blur/glass sparingly; clarity beats sci-fi atmosphere.

## Charts And Tables

- Line charts: clean grid, one main signal line, direct endpoint label.
- KPI cards: metric, baseline, target, owner, status.
- Architecture diagrams: 3-5 nodes max per layer, clear direction, no broken lines.
- Risk and budget pages should revert to business-clean tables.

## Module System

| Module | Treatment |
|---|---|
| Cover | Left claim + right interface/product hero + proof strip |
| Winning thesis | Big statement + audit criteria list |
| System map | Layered capability path, owners, triggers |
| KPI | Dashboard cards + acceptance roadmap |
| Roadmap | Release phases and measurable gates |
| Risk | Trigger/action/owner status table |

## Reject Rules

- Neon glass decoration that makes proof unreadable.
- Dashboard cards with no owner, unit, or acceptance.
- A SaaS card wall used as the default layout for unrelated page types.
- Decorative curves with no data meaning.
- Broken connector lines or unbalanced empty canvas.
- A technical page that fails to say what client decision it supports.
