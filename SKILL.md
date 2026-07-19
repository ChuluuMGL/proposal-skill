---
name: proposal-ppt
description: Create, write, design, edit, or audit commercial proposal presentations and presenter scripts. Use when the user asks for a proposal PPT, business proposal deck, pitch deck, bid/RFP deck, client proposal, tender presentation, annual operation plan deck, marketing/social/content proposal, execution plan deck, budget proposal, style-rich proposal template, AI-generated proposal visuals, or a PPT plus逐字稿 from briefs, research, brand assets, budgets, cases, timelines, or existing PPTX files.
---

# Proposal PPT

> **Core value: the winning thesis and proof logic — *why this proposal should win*. Premium design is the gate that gets the deck read, not the reason it wins. Optimize for the argument first; treat visual quality as a pass/fail gate, not the goal.**

Use this skill to turn client briefs, tender files, research, brand materials, budgets, cases, and execution plans into a commercial proposal package:

- a deck in the chosen format — `.pptx` (editable), `.html` (web / high-fidelity, works in any runtime), or `.pdf` (email / print)
- a same-name presenter script `.md`
- a missing-information list when inputs are incomplete

The goal is not to decorate information. The goal is to help the client decide why this proposal should win: it understands the business problem, makes a clear judgment, proves execution ability, explains budget boundaries, and controls risk.

## Required Output

When creating a proposal, produce both deliverables unless the user explicitly asks for only one:

1. The **deck** — `.pptx`, `.html`, or `.pdf` per the output-format routing in `references/workflow.md` (Stage 0). `.html` is a complete first-class deck and the default when no PPTX backend exists — not a fallback sketch.
2. `*.md` with presenter script. Include presentation logic, slide-by-slide talking points, transition notes, and exact speaker script. Do not put long oral explanation into slide bodies.

If the requested format cannot be produced, say so and agree an alternative with the user — do not silently swap formats. See `references/output-contract.md` and `references/runtime-compatibility.md`.

If information is missing, continue with a working draft and mark unknowns as `待补充`, `待确认`, `暂无公开数据`, or `需客户确认`. Do not invent data, results, awards, client cases, pricing, permissions, or platform rules.

## Reference Loading

Load only the references the current task needs. Grouped so you can pick in seconds:

**Routing & structure**
- Stages, gates, option handling — `references/workflow.md`
- Proposal type routing and chapter structure — `references/proposal-routes.md`
- Page types and proof-object standards — `references/page-types.md`
- Brief compliance matrix (required for brief/tender responses) — `references/brief-compliance.md`

**Visual**
- Compact pre-build visual decision card (required) — `references/visual-system-card.md`
- Visual direction, typography, charts, screenshots — `references/visual-system.md`
- The 4 core template families + Style DNA + three-page sample gate — `references/style-template-strategy.md`
- Palette presets when no client VI — `references/palette-library.md`
- Font pairing and fallbacks — `references/font-system.md`
- Density, whitespace, page-to-page rhythm — `references/layout-rhythm.md`
- HTML engine, family themes, style specs — `templates/README.md` and `templates/style-specs/`

**QA**
- Delivery QA and failure modes — `references/quality-check.md`
- Objective deck audit — `scripts/audit_proposal_pptx.py`; HTML overlap audit — `scripts/audit_html_demo.mjs`

**Output & runtime**
- File/script format and multi-format contract — `references/output-contract.md`
- Runtime compatibility, PPTX backends, fallbacks — `references/runtime-compatibility.md`
- Existing-deck final revision — `references/final-polish-workflow.md` (then load its protection, story, copy, visual-finish, adapter, and quality references as routed)

Use `assets/minimal-proposal-template.pptx` only as a fallback visual asset when no client VI, reference deck, or stronger design direction is provided.

## Operating Modes

Default to `guided` mode unless the user explicitly asks to generate everything directly.

- `guided`: Use staged checkpoints. First return brief audit, winning thesis, chapter structure, page plan, proof objects, and visual direction for confirmation. After confirmation, build the PPTX and script.
- `auto`: If the user says to proceed directly or is under time pressure, make reasonable assumptions, mark unknowns as `待确认`, and produce the full `.pptx` plus `.md` when a PPTX backend is available. Otherwise use the best fallback mode and state the limitation.
- `edit`: If the user provides an existing PPTX, audit and modify the deck instead of rebuilding from scratch unless the user asks for a rebuild.
- `edit-final-polish`: Client-final revision of an existing PPTX after manual edits and page-level feedback. Establish a protected baseline before editing; produce a story map, revision ledger, presenter script, and separate technical, visual, and commercial acceptance reports. This is not permission to rebuild the deck.
- `audit`: If the user asks for review only, do not generate a new deck. Return findings, page-level issues, and revision recommendations.

In guided mode, ask only high-impact routing questions. Do not block on details that can be marked `待确认`.

## Runtime Requirements

This skill is not itself a PowerPoint rendering engine. A finished editable `.pptx` requires a host runtime with a presentation backend, such as a native presentations skill/tool, `python-pptx`, `pptxgenjs`, an Office-compatible exporter, PowerPoint/Keynote/LibreOffice automation, or an equivalent runtime-specific tool.

At the start of a PPTX creation task, identify the available backend:

- PPTX creation/editing backend
- preview/render backend
- image-generation backend, if needed
- fallback mode if the backend is missing

If the runtime cannot create an editable `.pptx`, default the deck to `.html` (a complete proposal) and offer `.pdf` export — these are first-class deliverables, not downgrades. Reserve `blueprint-only`, `copy-and-script`, `template-spec` for when even an HTML deck cannot be produced. The one thing you must never do is relabel an HTML, PDF, or markdown file as a finished `.pptx`.

## Workflow

Follow `references/workflow.md` for the full stage-gate process. The high-level workflow is:

1. **Start and route the work**
   - Identify mode, proposal route, page-depth range, visual source, and required deliverables.
   - If the user has not specified these, infer defaults and show them in the first checkpoint.

2. **Collect and audit inputs**
   - Read the real brief, tender, deck, research, brand assets, budget, cases, and chat notes the user provides.
   - Separate confirmed facts from assumptions.
   - Extract client goal, audience, decision criteria, scope, timeline, budget, deliverables, KPI, exclusions, and approval risks.

3. **Define the winning thesis**
   - Write one sentence explaining why this proposal should be selected.
   - Define 3-5 client evaluation standards such as business fit, strategy judgment, execution certainty, proof, budget clarity, team response, and risk control.

4. **Select a proposal route**
   - Pick the closest route from `references/proposal-routes.md`.
   - Use the route to decide chapter order, proof emphasis, visual style, and required page types.
   - Do not force every deck into the same structure.

5. **Select a template family (visible checkpoint)**
   - When no client VI, reference deck, or approved strong-style direction exists, run the Template Selection Gate from `references/workflow.md` (Stage 2.5): show the four public families ranked by fit, recommend one tied to the winning thesis, and let the user confirm — or show the three-page sample of the recommended family before scaling.
   - This is an explicit, user-visible decision point. Do not skip silently into slide copy on an unconfirmed family in guided mode.

6. **Lock the visual system card before authoring slides**
   - Use `references/visual-system-card.md` plus the selected `templates/style-specs/*.md`.
   - Lock five decisions before drawing: visual source, semantic colors, type hierarchy, three page archetypes, and asset/proof behavior.
   - If client VI exists, translate it into roles; if no VI exists, choose a palette/template family and record the assumption.

7. **Create the page plan before authoring slides**
   - For every slide, specify: slide title, page purpose, key message, proof object, visual form, required source, and presenter-script intent.
   - Each slide must answer one commercial question.
   - Each slide title should be a conclusion sentence, not a vague noun.

8. **Write slide copy**
   - Slides contain judgment, structure, proof, and key examples only.
   - Speaker notes / script contain oral reasoning and transitions.
   - Keep bullets short and action-oriented.
   - Remove internal wording such as `赢标逻辑`, `客户透露`, `内部判断`, `释标会之后`, unless the user explicitly wants an internal working draft.

9. **Build or edit the deck**
   - If the user provides a template/reference deck, follow it as the visual source.
   - If the client has VI, use client brand colors and typography first.
   - If no visual source exists, use `references/visual-system.md` and the minimal template as fallback.
   - If a rich style is requested or no client VI exists, run the Style DNA Gate in `references/style-template-strategy.md` before building the deck.
   - Do not start drawing until the visual system card has concrete color, typography, asset, chart, module, and reject rules.
   - If a rich style has no approved reference deck, create or recommend the three-page style sample set before scaling: cover/big idea, proof/mechanism, and dense business page.
   - When creating a PowerPoint deck, use the active runtime's PPTX backend and follow `references/runtime-compatibility.md`, including render/overlap QA where available.

10. **Write the presenter script**
   - The `.md` must be usable by a presenter, not just a slide outline.
   - For each slide, include slide objective, why it appears here, exact talk track, transition sentence, and notes about numbers or claims that need confirmation.

11. **Run final QA**
   - Use `references/quality-check.md`.
   - Verify story continuity, slide-title quality, proof objects, source labels, visual alignment, text size, budget boundaries, KPI logic, and risk controls.
   - When a `.pptx` was produced, run `scripts/audit_proposal_pptx.py <deck.pptx> --script <script.md>` and resolve any errors before claiming delivery.
   - Do not claim the deck is ready until the PPTX and script are both present and checked.

For `edit-final-polish`, use the Gate A–F workflow in `references/final-polish-workflow.md` instead of the ordinary edit shortcut. A passing package audit alone means `技术通过，待视觉/商业复核`; it is never evidence of client-ready final delivery.

## Hard Rules

- Do not fabricate data, awards, clients, case outcomes, screenshots, platform permissions, or third-party endorsements.
- Do not promote a client-specific framework into the reusable skill. Brand names, proprietary method names, channel stacks, KPI names, target amounts, budget structures, phase labels, and project-specific systems belong in the client project only. Extract the reusable failure pattern or design rule, then rewrite it in project-neutral language before adding it to this skill, its examples, or its demos.
- Do not deliver a proposal that drifts from the brief. For any brief / tender / RFP response, build a Brief Compliance Matrix (`references/brief-compliance.md`) mapping every brief requirement to a slide + proof. Block delivery while any **weighted** requirement is uncovered or any slide maps to no requirement — a beautiful but off-brief deck is a failed deliverable.
- Do not use customer-sensitive examples in reusable templates or public skill assets.
- Do not default to a service-list deck. Start from the client problem and decision criteria.
- Do not let budget pages hide exclusions or uncertain costs in unreadable footnotes.
- Do not make a PPT that requires the presenter to explain missing logic verbally. The visual argument must stand on its own.
- Do not leave large empty placeholder frames or a visually dead lower third. If evidence is missing, mark the item compactly as `待确认` and rebalance the layout.
- Do not make every slide dense. Insert deliberate breathing slides, section dividers, big-idea pages, or visual proof pages every 3-5 slides.
- Do not treat a style as only a palette. If a rich style is chosen, adapt assets, typography, component language, proof objects, and page-type boundaries.
- Do not call a deck visually strong when only its cover is designed. Chapter dividers, normal reasoning pages, image-led pages, diagrams, tables, and proof-dense pages must share one art direction while keeping visibly different page silhouettes.
- Do not ship dark pages with weak label, panel, or body-text contrast. Normal text must target at least 4.5:1 contrast and large text at least 3:1; projector viewing may require stronger contrast.
- Do not approve a strong style that only works on the cover. It must also handle at least one proof/mechanism page and one dense business page, or be restricted to expressive pages.
- Do not use crude primitive shapes, oversized circles, generic cards, or decorative dots as substitutes for real style grammar.
- Do not publish or reuse a style-rich template/demo unless full-size slides have been visually reviewed, not only contact-sheet checked.
- Do not scale a new visual style to a full deck before the cover/big-idea, strategy/mechanism, and proof-dense sample pages pass full-size review.
- Do not present AI-generated visuals as real client proof. Mark them as conceptual when relevant.
- Do not insert the skill author's company information into user decks. The only sanctioned attribution is the opt-in, default-off, closing-slide-only credit line defined in `references/output-contract.md` — and only when the user explicitly enables it for public sharing.
- Do not silently substitute deck formats. Deliver the format the user asked for; if only HTML/PDF is possible when PPTX was requested, say so and let the user choose. Never relabel an HTML, PDF, or markdown file as a finished `.pptx`.
- Do not hide runtime limitations. If the current agent cannot generate, render, or open PPTX files, say so and deliver the best fallback package instead.
- Do not claim a deck passed QA when a `.pptx` exists without running `scripts/audit_proposal_pptx.py`. Resolve reported errors (invalid package, placeholder leakage, missing notes, slide/script mismatch) before declaring delivery.
- In `edit-final-polish`, do not start from an old build or regenerate protected slides. The user-designated/latest PPTX is the only baseline. Preserve protected copy, image positions/crops, and brand elements unless the revision ledger explicitly authorizes a change; record retained manual edits in the handoff.
- Do not collapse technical, visual, and commercial QA into one “passed” statement. Report their evidence, scope, findings, and status separately using `references/quality-levels.md`.
- Do not declare a visual page or style demo "done" by self-judgment alone. Agents cannot reliably verify rendered line-wrapping, optical overlap, or aesthetic balance. For any HTML style demo, run `scripts/audit_html_demo.mjs` to catch element overlap and boundary overflow; for any `.pptx`, run `scripts/audit_proposal_pptx.py` to catch text-box overflow and shape overlap. Then require a human visual review before treating the page as finished. An undetected ragged wrap or two overlapping text boxes read as a broken deck to a non-technical viewer and count as a delivery defect, not a cosmetic note.
