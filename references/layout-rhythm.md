# Layout Rhythm and Page Balance

Use this guide to prevent proposal decks from becoming visually crowded, top-heavy, or monotonous.

## Core Principle

A business proposal should alternate between evidence and persuasion. Dense proof pages build credibility; breathing pages make the decision easy to remember.

Do not fill every page with cards, tables, and small text. Do not leave dead space by accident.

## Density Classes

Assign each slide a density class during page planning.

| Density | Use For | Visual Rule |
|---|---|---|
| `breathing` | Cover, section divider, big idea, slogan, key shift, closing line | One main sentence or one image/visual idea. Content may occupy 20-45% of the canvas, but the empty space must feel intentional. |
| `standard` | Strategy, module explanation, 3-4 points, platform roles | Content occupies 55-75% of the content field with clear gutters and balanced vertical distribution. |
| `proof-dense` | Budget, KPI, brief coverage, risk register, detailed matrix | Content may occupy 70-88% of the field, but must use tables or grids and remain readable. |
| `appendix` | Back-up details, raw lists, long assumptions | Dense but clearly marked. Do not use appendix density in the main story unless required. |

## Deck Rhythm Rules

- Insert a `breathing` or low-density slide every 3-5 pages.
- After any `proof-dense` table/matrix, use a summary, implication, or visual proof page before another dense page.
- Use chapter dividers or big-idea slides at major narrative turns.
- A 20-30 slide proposal should usually include 4-7 breathing pages.
- A 30-60 slide annual proposal should include chapter dividers plus periodic summary pages.
- Do not run more than two consecutive card-grid pages.
- Do not run more than two consecutive table/matrix pages.

## Section And Silhouette Rules

- A chapter divider must not look like a normal content page with less text. Change at least two of these: canvas, scale, image behavior, grid, or title position.
- Show the chapter number or chapter name prominently enough that the audience knows a new part has begun without reading the footer.
- Plan the deck as a sequence of silhouettes: chapter/reset, thesis, split proof, system map, image-led proof, ledger/table, summary. Repeat the art direction, not the same wireframe.
- If three neighboring pages have the same title position, same three-column body, and same conclusion strip, replace at least one with a different proof form.

## Repeated-Layout Alignment

When a layout is intentionally reused, make it exact:

- use the same content top and bottom coordinates,
- keep image, chart, and table blocks at the same height when they play the same role,
- align row baselines, divider endpoints, caption rails, and conclusion bands,
- keep gutters and internal padding identical,
- compare the pages side by side at full size.

Near alignment reads as a mistake; exact alignment reads as a system.

## Page Balance Rules

Use the full content field deliberately.

- Keep a stable page frame: title zone, content zone, footer/source zone.
- In standard pages, content should visually occupy the middle 60-75% of the slide height, not only the upper half.
- In proof-dense pages, the proof object should usually span at least 70% of the content field width and 60% of its height unless an image or side panel intentionally balances it.
- In two-column pages, neither column should carry more than roughly 65% of the visual weight unless the other side has a strong visual anchor.
- If the lower 25-30% is empty, either:
  - expand/rebalance the proof object,
  - add a conclusion strip,
  - move supporting notes into a side column,
  - convert the page to a deliberate breathing slide,
  - or split/rewrite the slide.
- Do not add a blank rectangle, media frame, or border only to fill space.
- Avoid orphan groups: no single small table or card cluster should sit in one area while the rest of the canvas is visually dead.
- Use optical balance: a sparse left side needs a visual anchor on the right; a heavy top needs a grounded lower conclusion or proof band.
- Do not solve empty space with a decorative border or blank media frame. The added element must be proof, conclusion, navigation, source status, or an intentional visual anchor.
- Keep internal safety distance inside tables, ledgers, cards, and column modules. Text should sit at least 18-24 px away from dividers, borders, and vertical rules. If a divider touches or nearly touches the first character of a column, the page fails detail QA even when there is no formal overlap.

## Text Flow and Overlap Prevention

These rules exist because hand-tuned absolute positioning and long CJK lines are the two most common sources of shipping defects. They were confirmed by a real production session where a 3-page demo leaked overlap and ragged wrapping across many revision rounds despite a DOM-boundary checker passing. An element being "inside the canvas" does not mean it is not overlapping another element.

### Prefer document flow over absolute coordinates

- Default to normal document flow (`block`, `flex`, `grid`) for the page skeleton. Elements that flow cannot overlap or reverse order by construction.
- Reserve absolute positioning for chrome and decoration only (page frame, folio, eyebrow, decorative rules, a signature mark). Do not build the primary content table, ledger, or column layout out of absolutely-positioned siblings.
- If two content blocks must sit side by side, use a flex/grid row, not two independent `position: absolute` boxes with hand-calculated x/y. Hand-calculated coordinates drift; flex gutters do not.
- Never put a data table or repeated row set inside a flex container with default `align-items: stretch` and a `flex:1` child — this can pull the header out of order. Tables belong in normal block flow.

### Long CJK headlines must be broken on purpose

- Do not let a long Chinese title auto-wrap. Auto-wrap breaks at the last fitting character and leaves a ragged, unbalanced second line.
- Break headlines manually with explicit line breaks at natural phrase boundaries (after a colon, comma, or clause end), and aim for roughly equal character counts per line.
- Before sizing a headline, check the fit: `font-size × max-chars-on-longest-line ≤ container-width × 0.8`. If it does not fit with 20% margin, reduce the font size or shorten the text — do not hope it will wrap nicely.
- Keep each line of a large headline short (typically ≤ 8-10 CJK characters at display sizes). A 15+ character line at 70px+ almost always rag-wraps.
- Do not mix inline Latin emphasis (`<em>`, italic) mid-Chinese-line unnecessarily; it changes run metrics and can trigger uneven wrapping.

### Subtitles and body copy

- Constrain body and subtitle widths so they break at intended points. A 45-character Chinese sentence in a 760px column at 23px will wrap to a short, ragged tail — either widen the column, shorten the sentence, or raise it to a controlled two-line break.

### Overlap is a delivery blocker, not a warning

- Two text elements overlapping by even a few pixels reads as a broken deck to a non-technical viewer. Treat any element-to-element text overlap as a hard fail, equal to fabricating data.
- Boundary checks ("nothing leaves the canvas") are necessary but not sufficient. Always also check element-to-element overlap before claiming a page is clean.
- Because agents cannot reliably self-verify rendered visuals, a style sample or public demo must receive a human visual review before it is declared done. See the Hard Rule on visual sign-off in `SKILL.md`.

## Layout Beauty Score

Before delivering a style sample or full proposal, score the layout honestly. Use this as a design gate, not as a client-facing page.

| Dimension | 0-2 pts |
|---|---|
| Visual weight | Main content is balanced across the content field; no accidental top-heavy, left-heavy, or dead lower-third composition. |
| Grid discipline | Objects share clear axes, gutters, baselines, and column logic. |
| Text-object pairing | Titles, captions, images, tables, and callouts visually belong together instead of floating as separate pieces. |
| Density rhythm | Breathing, standard, and proof-dense pages alternate intentionally. |
| Component taste | Cards, tables, labels, sidebars, dividers, and proof objects match the chosen style rather than generic UI. |

Scoring guide:

- `0-5`: internal wireframe only.
- `6-7`: usable draft, but not publishable as a public template.
- `7.5-8`: acceptable market-facing skill sample.
- `8.2+`: strong enough to scale into a full reusable template family.

If the score is below `7.5`, revise before presenting the sample as a template. If the score is below `8`, name the remaining weaknesses clearly.

## Shape Radius Rule

Choose shape language by proposal posture:

- `premium-boardroom`: mostly square or 0-3 px radius; use thin rules, ledgers, memo panels, and straight document frames. Avoid rounded SaaS cards.
- `editorial-brand`: square image crops, caption rails, thin rules, and occasional sharp color blocks. Use rounded corners only when the brand reference requires softness.
- `tech-launch`: controlled 10-18 px radius for interface panels, status modules, and product UI; do not round every proof object.
- `consumer-lifestyle`: 10-18 px radius is acceptable for catalog cards and sample boards, but tables and budget pages should stay sharper.

Do not mix square and rounded components randomly. If a page contains both, the reason should be clear: for example, a square proof table plus rounded product sample cards.

## Layout Selection Gate

Choose the recipe before placing objects. For every slide, record:

```markdown
Layout recipe:
Density class:
Content field:
Primary visual weight:
Lower-third plan:
Breathing / transition role:
```

Reject the page draft if:

- more than one-third of the slide is accidentally unused,
- all content sits in the top half without a lower proof band or conclusion,
- a large blank rectangle is used as placeholder,
- cards have inconsistent widths, heights, gutters, or internal padding,
- the page would still look unbalanced when the title is hidden.

## Preferred Layout Recipes

Choose a recipe before drawing.

| Recipe | Best For | Structure |
|---|---|---|
| `hero-thesis` | Winning thesis, big idea, key recommendation | Large title or statement + one compact proof row / next-step cue. |
| `section-reset` | Chapter opening | Full-bleed or dark/quiet band + one line + 2-3 keywords. |
| `two-column-proof` | Brief interpretation, benchmark learning, risk explanation | 55/45 or 60/40 split with table/list on one side and implication/callout on the other. |
| `balanced-2x2` | Decision standards, criteria, role split | Four equal cells occupying most of the content field. |
| `timeline-band` | Roadmap, monthly rhythm, launch sequence | Horizontal or vertical timeline spanning the width/height with phase cards distributed evenly. |
| `table-plus-insight` | Budget, KPI, coverage check | Table takes 60-70%; insight callout or decision line takes the remaining field. |
| `proof-gallery` | Screenshots, samples, cases | 2-4 media frames with direct labels and a takeaway column. |
| `system-map` | Strategy architecture, closed loop, operating model | Diagram centered in the field with a concise conclusion strip. |
| `quote-or-manifesto` | Transition, creative idea, closing | One strong sentence, oversized type, minimal support. |

## Missing Evidence Handling

If a proof object is required but the asset/data is missing:

- Do not draw a large empty frame.
- Add a compact tag such as `数据待确认` or `案例待补充`.
- Use a text-based proof substitute: assumption table, method checklist, or source-status row.
- Put missing items in the script's information list.
- If the missing proof is critical, stop at blueprint stage and ask for the source.

## Contact Sheet QA

Before delivery, render a contact sheet and review it at small size.

At contact-sheet size, the deck should show:

- visible variation in slide silhouettes,
- recurring but not repetitive page chrome,
- no long run of identical card grids,
- no obvious blank lower thirds,
- clear section transitions,
- consistent but not monotonous colors.

Use the contact sheet to inspect page silhouettes and chapter visibility. Then inspect every slide full-size for type, crop, contrast, baseline, and optical balance. A contact sheet cannot approve detail quality.

If the contact sheet looks like 20 versions of the same slide, revise the rhythm before delivery.
