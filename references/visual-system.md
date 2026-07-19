# Visual System

Use client VI first. Use a user-provided reference deck before any fallback style. Use this guide only when no stronger visual source exists. For page density and rhythm, use `layout-rhythm.md`. For richer default color choices, use `palette-library.md`. For reusable public template families and the three-page sample gate, use `style-template-strategy.md`. For component-level style transformations, use `style-template-strategy.md`, `visual-system-card.md`, and `font-system.md`.

## Visual Strength Standard

Strong proposal design is not a layer of decoration. It is the visible organization of the argument. Judge the direction on five things:

1. **Chapter grammar** — a section opening must be unmistakable at a glance through a canvas shift, chapter number, one decisive sentence, and a clear cue to what follows.
2. **Body-page hierarchy** — a normal reasoning page needs one dominant claim, one proof form, and one conclusion path; it should not read like a stack of independent widgets.
3. **Content-form fit** — choose the form that best explains the evidence: chart for comparison or change, system map for causality, table for accountability, image for a real scene or artifact, editorial spread for a cultural or brand argument.
4. **Cross-page art direction** — typography, crop behavior, rules, captions, chart treatment, and accent logic stay coherent while page silhouettes vary.
5. **Projection readability** — contrast, line weight, type size, and internal spacing must survive a meeting-room screen, not only a laptop preview.

A strong route should be recognizable after removing logos and decorative labels. If it becomes a generic card grid, the direction has not been designed deeply enough.

## Page Archetypes

Lock at least these three archetypes before scaling a deck:

| Archetype | Visual job | Required behavior |
|---|---|---|
| Chapter / reset | Make a narrative turn visible | One sentence, chapter marker, deliberate canvas or image shift; no table disguised as a divider |
| Reasoning / body | Advance one commercial judgment | One dominant axis, one proof form, controlled support copy, clear lower-third role |
| Proof-dense | Make delivery, data, boundary, or acceptance inspectable | Shared baselines, readable units and labels, clear conclusion; density without spreadsheet clutter |

Do not reuse one composition for all three. The art direction should stay the same; the page silhouette should change.

## Visual Style Families

Choose one primary family, then pick a specific palette from `palette-library.md`. If no client VI exists, first route to one of the four public template families in `style-template-strategy.md`: `premium-boardroom`, `editorial-brand`, `tech-launch`, or `consumer-lifestyle`. If the user asks for a specific custom style such as magazine, launch, cinematic, Web3, pixel, oil, or e-reader, use `style-template-strategy.md` as a transformation reference instead of merely changing colors. Do not reuse the same green/gold palette for every proposal.

When no VI exists, choose one of two routes:

1. **Clean business route**: use a palette from `palette-library.md` plus the layout recipes in `layout-rhythm.md`.
2. **Strong style route**: use `style-template-strategy.md`, run the three-page style sample gate, and only then scale the style.

Do not mix many style families in one deck. A proposal may use one primary style plus one restrained accent language. For example, `fashion-beauty-editorial` may use clean clinical tables, but it should not also introduce pixel frames or Web3 glass unless the brief explicitly demands a multi-world concept.

### corporate-trust

Use for consulting, B2B, finance, government-adjacent, annual service, and formal tenders.

- Base: `#FFFFFF`, `#F7F8FB`, `#EEF2F7`
- Text: `#0B1220`, `#172033`, `#5C667A`
- Primary: `#123C69`, `#0E5E43`
- Accent: `#C6A15B`, `#2F80ED`
- Feel: restrained, precise, evidence-led.

### brand-growth

Use for brand marketing, social media, content, creative campaigns, and growth proposals.

- Base: `#FFFFFF`, `#F8FAFE`, `#F2F6FF`
- Text: `#101828`, `#344054`, `#667085`
- Primary: `#0052D9`, `#0E5E43`
- Accent: `#FF7A45`, `#6C5CE7`
- Feel: energetic but not decorative; enough room for samples and screenshots.

### consumer-lifestyle

Use for FMCG, food and beverage, beauty, fashion, home, and lifestyle scenes.

- Base: `#FFFFFF`, `#FBF8F1`, `#FAF7F0`
- Text: `#101814`, `#4F5B52`, `#77746A`
- Primary: `#0E5E43`, `#8A4B2D`
- Accent: `#CDA34B`, `#D86D55`, `#3D83A5`
- Feel: warm, product-friendly, real-scene oriented.

### tech-intelligence

Use for AI, SaaS, digital platforms, automation, data, and productized services.

- Base: `#FFFFFF`, `#F6F8FC`, `#ECF3FF`
- Text: `#0A1020`, `#27364A`, `#637083`
- Primary: `#143D8F`, `#0B6B78`
- Accent: `#3B82F6`, `#16A34A`, `#F59E0B`
- Feel: structured, clear, architecture-driven.

## Layout Standards

- Use 16:9 widescreen.
- Use stable margins. Suggested safe area: left/right 56-72 px, top 36-48 px, bottom 32-44 px.
- Keep title zone, content zone, footer, and page numbers consistent.
- Align title, cards, tables, and diagrams to a grid.
- Use at most three information levels on normal slides: title, key content, support note.
- Break complex pages instead of shrinking core text.
- Distribute content through the intended content field. Avoid clustering all objects in the top half while leaving the lower third visually dead.
- Use empty space deliberately. A page may be sparse only when it is a title, section divider, big idea, quote, transition, or visual focus slide.
- Never place a large empty bordered placeholder on a client-facing slide. If an asset is missing, use a compact `待确认` note or restructure the slide.
- Do not use more than two consecutive pure tables or pure matrices without a strategy/sample/mechanism page.
- Use page numbers as two digits when appropriate: `01`, `02`, `03`.
- Before drawing a slide, choose a named layout recipe from `layout-rhythm.md`; after drawing, check whether the page still looks balanced when the title is hidden.
- In strong style decks, each repeated component should inherit the style grammar. A Web3 proof object can be a glass dashboard; a magazine proof object can be a captioned clipping board; a pixel mechanism can be a quest path. Ordinary rounded cards are allowed only when the chosen style calls for them.
- When two or more slides share the same split layout, align the top of the proof block, the bottom of the proof block, the table/image height, and the conclusion strip. Similar pages should look intentionally templated, not approximately arranged.

## Typography

Preferred fonts:

- Chinese: PingFang SC, Microsoft YaHei, Source Han Sans
- English/numbers: Arial, Helvetica, Inter, Aptos

For style-specific and open-source font pairings, use `font-system.md`.

Suggested PPT sizes:

- Cover title: 48-64 pt
- Chapter title: 40-56 pt
- Normal slide title: 30-40 pt
- Lead/subtitle: 16-22 pt
- Body: 12-18 pt
- Dense table text: 10-13 pt
- Notes/source: 8-10 pt

When using a runtime-specific PPTX/presentation backend with no template, follow that backend's minimum font-size and compatibility requirements unless the deck has a stronger template or explicit compact business style. See `runtime-compatibility.md`.

Rules:

- Do not use text below 8 pt.
- Do not use negative letter spacing.
- Use no more than two font families and three weights.
- Keep title size, footer position, page number position, and table style stable across the deck.

## Graphics and Charts

- Prefer editable shapes, tables, and charts over blurry screenshots.
- Every chart needs a conclusion, not only a label.
- Prefer direct labels over complex legends.
- Keep flow diagrams to 3-6 major steps.
- Keep matrices to 2x2, 3x3, or up to 5 columns unless using an appendix.
- Use 1-1.5 pt lines for dividers and connectors.
- Keep icon style consistent. Use text labels when platform/logo use is not authorized.

## Images and Screenshots

- Use images only when they prove a commercial judgment or show real execution.
- Prefer real products, real scenes, platform screenshots, case screenshots, sample boards, and data dashboards.
- Crop screenshots cleanly.
- Crop around the subject and the argument, not around the original image center. Check faces, hands, products, UI focus, and text-safe space at full-slide size.
- Use consistent frame style for screenshot groups.
- Do not stretch images.
- Do not rely on stock-looking dark, blurred, decorative images to carry the argument.
- Cite or label third-party sources when needed.
- For AI-generated images, HTML/SVG backgrounds, or texture assets, follow `visual-system-card.md`.
- Keep commercial text, tables, budgets, KPI, and risk controls editable whenever possible. Use generated/HTML assets mainly as background, texture, collage, or hero visual layers.
- Treat image, caption, and conclusion as one proof object. A floating image beside an unrelated text block is not visual integration.

## Minimal Template Asset

`assets/minimal-proposal-template.pptx` is a fallback starter only. Use it when:

- no client VI exists,
- no reference deck is supplied,
- the user still needs an editable PPTX quickly.

Do not force this template when the client has an established style.
Do not treat the fallback template as a quality benchmark for strong visual directions. For editorial, cinematic, pixel, oil, Web3/glass, or product-launch styles, use `style-template-strategy.md` and `visual-system-card.md` instead of repainting the fallback template.
