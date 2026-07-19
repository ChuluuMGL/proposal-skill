# Style Template Strategy

Use this file before creating or revising reusable proposal PPT style templates. This file defines how to turn a visual direction into a real proposal template system, not a one-page mood demo.

## Core Judgment

A proposal template is acceptable only when it changes the full visual grammar:

- composition and page frame,
- typography and scale contrast,
- image and asset behavior,
- proof-object treatment,
- component shape language,
- slide-to-slide rhythm,
- QA rules and anti-examples.

Do not treat a style as a palette. Do not create a public template by recoloring the same card layout.

## Market Reference Gate

Before creating or revising a public style template, inspect 3-6 strong market references from sources such as Behance, Pitch, Envato/Creative Market, Slidesgo, Canva, SlideModel, or high-quality agency decks. Use references only as design grammar; never copy protected layouts, screenshots, imagery, logos, mastheads, or exact slide compositions.

The audit must extract:

- page-type coverage: cover, brief/problem, strategy, proof, KPI, budget, roadmap, risk, team, close,
- asset behavior: photography, screenshots, product mockups, interface visuals, texture, icons,
- graph/table treatment: header style, line weight, row rhythm, highlight behavior, caption/source behavior,
- layout grammar: margins, columns, crop rules, asymmetry, title zone, footer/folio,
- component kit: reusable chart, table, timeline, gallery, matrix, caption rail, and source note patterns,
- anti-patterns to avoid in the generated deck.

Reject the template direction if the audit only describes colors or mood words. A usable audit must explain how business proof pages are handled.

## Visual Discovery Gate

When the user has no client VI, approved reference deck, or chosen template family, use a visual discovery step before building a full proposal. This is especially important for public skill demos and style-rich requests.

Create 2-3 visual directions or three-page sample candidates that the user can judge visually. Each candidate must look like a real proposal page, not an internal diagnostic card.

Preview rules:

- Use real proposal content or neutral sample business content, not visible labels such as `preview`, `template`, `option A`, file paths, or process notes.
- Make the directions meaningfully different in proof language, not only palette.
- Include at least one conservative/business-safe option for high-stakes B2B work.
- Include at most one expressive/bold option unless the user explicitly asked for experimental styles.
- Do not scale to a full deck until the user selects a direction or the three-page gate passes.
- If a large template library is available, shortlist from compact metadata first; load full design rules only for the chosen family.

This gate is inspired by visual-first slide workflows such as `frontend-slides`, but proposal-ppt must keep business proof, budget, KPI, risk, and presenter-script requirements above motion or decorative style.

## Public Template Families

Default to these four public style families when the user has no client VI or reference deck. They are separated by commercial posture and proof style, so the default options do not collapse into one visual template.

| Template family | Best for | Visual source logic | Default density |
|---|---|---|---|
| `premium-boardroom` | B2B, consulting, finance, formal tenders, annual service retainers | strict grid, high-trust editorial reports, board documents | standard / proof-dense |
| `editorial-brand` | brand marketing, fashion, beauty, premium consumer, hospitality | magazine spread, art direction, product/people/scene-led pages | breathing / standard |
| `tech-launch` | AI, SaaS, product launch, Web3/fintech when clarity matters | keynote minimalism, product hero, interface/system diagrams | breathing / standard |
| `consumer-lifestyle` | FMCG, food/beverage, retail, consumer-brand proposals | catalog, campaign moodboard, product scene, social proof wall | standard / proof-dense |

Do not use oil, pixel, kindle/e-reader, or other expressive modes as default public templates. Use them only when the user explicitly asks and after 2-3 full-size samples pass review. The default public skill should feel broadly useful, not like a novelty style gallery.

## Public Demo Scope

Do not create a public demo by placing multiple unrelated style families into one showcase deck unless the goal is explicitly a style sampler. A sampler is useful for direction selection, but it is a weak proof of deck-making quality.

For a skill showcase, prefer one focused family at a time:

1. choose one benchmark family,
2. build 6-10 pages that include cover, brief/problem, strategy/mechanism, proof gallery, KPI/budget/risk, and close,
3. inspect every page full-size,
4. reject the demo if any page fails the public demo hard-fail rules in `quality-check.md`,
5. only then expand to more styles.

A public demo should prove that the skill can produce a coherent proposal, not merely that it can repaint components in different palettes.

## Style DNA Contract

Before generating a style-rich PPTX, complete this contract:

| Field | Requirement |
|---|---|
| Template family | one of the four public families, or explicit custom user style |
| Commercial fit | why this style helps the client decide |
| Layout grammar | margins, grid, axis, asymmetry, whitespace, page chrome |
| Typography signature | heading/body/data fonts, scale contrast, max number of weights |
| Asset behavior | required real assets, AI-generated conceptual assets, textures, screenshots |
| Component grammar | how cards, tables, matrices, timelines, proof galleries, diagrams look |
| Density rhythm | breathing/standard/proof-dense sequence and where transitions happen |
| Business-clean pages | pages that must stay clear even if the style is expressive |
| Reject if | concrete anti-examples that trigger a rebuild |

## Design System Contract

Every reusable public template family must include a lightweight design system contract before it is converted into PPTX or published as a skill asset. This is separate from the sample pages. It prevents the style from becoming a one-off composition that other agents cannot reproduce.

At minimum, document:

| System | Requirement |
|---|---|
| Color system | semantic color roles, hex values, usage rules, accent limits, and replacement logic when client VI exists |
| Typography system | font stack, fallback fonts, size ladder, weights, line-height rules, and dense-page minimum sizes |
| Icon system | whether icons are used, icon style, stroke weight, allowed icon categories, and when numbers/labels replace icons |
| Module system | reusable treatment for cover, strategy map, brief translation, table, chart, timeline, budget, risk, proof gallery, team, and close |
| Shape language | radius, stroke, shadow, divider, card, panel, and table-border behavior |
| Asset behavior | photography, screenshots, AI-generated conceptual visuals, illustration, texture, cropping, captioning, and source notes |
| Layout recipes | density classes, page chrome, margins, title zones, lower-third plan, and rhythm rules |
| QA rejects | concrete visual failures that require rebuild rather than small polish |

Do not rely on raw palette variables alone. If two related colors are used, such as a bright signal red and a darker wine red, define their roles explicitly. Otherwise users will read the difference as accidental inconsistency.

The design system contract should be stored next to the demo or template files and referenced by the public README or skill documentation when the template is published.

For the public template families in this repository, the reusable design-system contracts live in `templates/style-specs/`. When a family is selected, load that spec and convert it into the shorter, project-specific Visual System Card from `visual-system-card.md`.

The relationship is:

1. `style-template-strategy.md` chooses the family and checks whether it is commercially appropriate.
2. `templates/style-specs/<family>.md` provides the reusable color, typography, asset, chart, and module grammar.
3. `visual-system-card.md` turns those reusable rules into the concrete rules for the current client deck.

## Three-Page Sample Gate

For a new style family, visual route, or public reusable template, do not build a full deck first. Build or specify three sample pages:

1. `chapter-or-big-idea`: the style must make a narrative reset recognizable at first glance.
2. `strategy-or-mechanism`: a normal body page must support commercial reasoning, not only atmosphere.
3. `proof-dense`: budget, KPI, risk, timeline, or brief-coverage content must remain readable and editable.

Gate rules:

- Review each page full-size, not only in a contact sheet.
- If all three samples use the same card-grid structure, reject the system.
- If the style disappears when the title text is removed, reject the system.
- If proof-dense pages become image screenshots or unreadable art boards, reject the system.
- If the lower third is accidentally empty, add a conclusion band, rebalance the layout, or convert the slide to a deliberate breathing page.
- If the three pages share the same title/body/footer silhouette, reject the system even when the colors and components are polished.
- If chapter, body, and dense pages look like three unrelated templates, reject the system for lack of art-direction continuity.

## Case-To-Rule Boundary

Reusable visual and workflow rules may be learned from client projects, but client project content must not enter the core skill.

- Keep out brand names, proprietary method names, project-specific channel combinations, KPI labels, target amounts, budget categories, phase names, and system stacks.
- Convert a case lesson into a neutral rule such as `repeated split pages need identical proof-block heights` or `next-step pages belong after the current-scope conclusion`.
- Public demos must use neutral fictional content and clearly mark all figures as conceptual placeholders.
- A route-specific term is allowed only inside its route or neutral demo when it represents a common proposal type; it must not become a universal default.

## Reference Imitation Score

After the market reference audit and sample generation, record the benchmark and imitation score:

| Field | Requirement |
|---|---|
| Benchmark reference type | Examples: Swiss consulting memo, editorial brand proposal, product-launch pitch deck, catalog commerce proposal. |
| What is being borrowed | Grid, crop behavior, table treatment, caption rail, page rhythm, typography contrast, proof-object language. |
| What is not being copied | Exact layouts, imagery, screenshots, logos, mastheads, slogans, or protected template assets. |
| Sample score | 0-10 layout/style score from `layout-rhythm.md`. |
| Imitation level | Approximate percentage versus a good market template preview. |
| Remaining gap | Specific changes needed to reach 8+ quality. |

Do not claim a sample is high-end only because it has different colors. If the sample is below `7.5/10`, call it a draft. A public reusable template should aim for `8.2/10` or higher after real assets and component variants are added.

## Component Kit Requirement

A reusable public proposal template must define a component kit, not only sample pages. At minimum, specify how these components look in the selected style:

| Component | Required behavior |
|---|---|
| Hero visual | Real/client/generative image or a refined visual asset frame; not crude rectangles. |
| Caption rail | Explains what the image proves and how it transfers into the proposal. |
| KPI strip | Metrics with unit, definition, status, and owner; no decorative numbers. |
| Budget table | Amount, usage, deliverable, acceptance, exclusions, assumptions. |
| Risk register | Risk, trigger, response, owner, escalation boundary. |
| Roadmap | Phase, milestone, deliverable, dependency, review point. |
| Proof gallery | Source-backed images/screenshots/cases with captions and usage rights. |
| Platform/module matrix | Role, content action, asset produced, KPI, boundary. |
| Source/footer system | Low-contrast but readable sources, assumptions, and page folios. |

If the same rounded-card or flat-color-block component appears across every family, the template has failed. Each family must have its own proof language: board memo, editorial spread, launch interface, or product/catalog shelf.

## Template Family DNA

### premium-boardroom

Use for high-stakes commercial trust. The slide should feel like a partner-quality board memo, not a startup UI.

DNA:

- strict 12-column or 6-column grid,
- high whitespace discipline,
- small folios and source notes,
- one sharp accent color,
- audit tables, numbered judgments, understated dividers.

Components:

- Brief translation: audit table with requirement, interpretation, response, slide reference.
- Decision criteria: numbered board grid with large numeric anchors.
- Budget: clean table plus one commercial implication strip.
- Timeline: thin phased roadmap with accountable milestones.
- Proof gallery: restrained source-backed evidence, not decorative screenshots.

Reject if:

- it looks like generic green/gold consulting cards,
- every page is a rounded-card dashboard,
- accents appear on every object,
- the slide cannot be printed as a serious appendix.

### editorial-brand

Use when taste, brand feeling, product imagery, or cultural fluency is part of the selling point.

DNA:

- image-led or typography-led spreads,
- high contrast between headline and caption,
- serif/display accent allowed for headings,
- product/person/scene imagery with clean captions,
- asymmetry and editorial whitespace.

Components:

- Insight: pull quote, image proof, implication caption.
- Content sample: moodboard or editorial spread, not equal cards.
- Benchmark: image/case board with "method to transfer" labels.
- Budget/KPI: return to clear tables using editorial typography and thin rules.

Reject if:

- it is only cream background plus serif title,
- imagery is generic stock atmosphere,
- captions do not explain business relevance,
- beauty/fashion styling makes proof unreadable.

### tech-launch

Use when the proposal must feel focused, productized, and executive-friendly.

DNA:

- one idea per reveal slide,
- large statement or product/interface hero,
- low density before proof,
- clean system diagrams after the reveal,
- dark or light canvas with controlled contrast.

Components:

- Winning thesis: one-line reveal with product/interface/idea hero.
- Strategy map: 3-5 layer system, not a decorative flow.
- KPI: clean dashboard with units, owners, and data status.
- Roadmap: milestone cards, release path, or operating phases.
- Risk: business-clean table, not neon decoration.

Reject if:

- neon circles replace architecture,
- small text sits on glowing backgrounds,
- the deck looks like a crypto website instead of a proposal,
- all pages become dark dashboards.

### consumer-lifestyle

Use for FMCG, food, beverage, retail, consumer-brand proposals where product scenes and execution samples matter.

DNA:

- warm premium base,
- product scene or social sample as proof,
- catalog-like proof walls,
- clear package/module structure,
- friendly but not cute typography.

Components:

- Platform strategy: role matrix plus sample content proof.
- Content mechanism: columns, scenario map, sample board, asset reuse.
- Campaign rhythm: calendar or issue-planning spread.
- Creator/scene pool: catalog grid with tags and evidence captions.
- Budget: clear spend-to-deliverable table with included/not-included tags.

Reject if:

- it becomes beige food-blog decoration,
- there are product photos with no commercial implication,
- social screenshots are scattered without labels,
- proof pages are too cute or too crowded to sell execution certainty.

## Asset Policy

Strong style usually needs assets. Use this priority:

1. user/client-provided real assets,
2. sourced public assets with labels and rights suitable for the context,
3. AI-generated conceptual assets with disclosure in the script,
4. generated textures/background layers,
5. clean editable placeholders marked `待补充`.

Keep core business text, tables, budgets, KPI, risks, and page numbers editable. Use generated/HTML/SVG assets mainly for backgrounds, textures, hero visuals, collage layers, and style-specific atmosphere.

Do not let large flat color blocks do the job of real visuals. If a slide depends on color blocks to look "designed", replace them with a real image, screenshot, mockup, chart, table, or captioned proof object. Color is an accent and hierarchy tool, not the primary evidence.

## Build Sequence

1. Select template family.
2. Complete the Market Reference Gate.
3. Complete the Style DNA Contract.
4. Define the component kit.
5. Create a slide rhythm map with density classes.
6. Create an asset plan.
7. Build the three-page sample gate.
8. Visually review full-size samples.
9. Only after approval, scale the system to the full deck.
10. Render final full-size slides and contact sheet.
11. Fix layout, style, readability, and compatibility issues.
