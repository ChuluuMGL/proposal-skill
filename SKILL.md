---
name: proposal
description: Create, revise, or audit commercial proposals as editable PowerPoint, interactive HTML, or PDF, with proposal logic, case evidence, scope and pricing, presenter scripts, and format-specific validation. Use for client proposals, pitches, tenders, and proposal revisions, rather than general marketing websites.
---

# Commercial Proposal · 商业提案

Turn a brief, research, cases, brand assets, scope, and budget into a proposal the client can understand and evaluate. PPT and HTML share the commercial argument; their layouts and interactions differ. PDF is a validated export, not an independently rewritten proposal.

## Start with the actual assignment

- Read the latest source and user feedback. Preserve manual edits and approved content; do not regenerate an existing proposal for a narrow change.
- Identify audience, decision, evidence, scope, format, and unresolved inputs. Mark uncertainty; never invent results, cases, prices, permissions, or delivery commitments.
- `guided`: agree the argument and visual direction before building when those decisions are open. `auto`: proceed with reasonable stated assumptions when directly requested. Existing authorization or an approved design satisfies the relevant checkpoint; do not ask again.
- `edit`: make scoped edits to PPT or HTML. `edit-final-polish`: use [final-polish-workflow](references/final-polish-workflow.md) for an existing PPTX with protected manual edits. `audit`: inspect without editing.
- Default full creation output is the requested proposal plus a Markdown presenter script and unresolved-input list, unless declined. A small edit does not require rebuilding the entire script; synchronize affected sections and report any pre-existing drift.
- Proposal creation does not itself authorize GitHub publication, production deployment, sending the proposal to a client, or paid asset generation.

## Route by delivery format

| Need | Route |
|---|---|
| Editable slides, client template, live slide presentation | PPTX; identify authoring and rendering backends first |
| Browser sharing, scroll narrative, expandable evidence, working demonstrations | Responsive HTML proposal |
| Fixed slide canvas presented in a browser | Staged HTML, usually 16:9 |
| Email, print, formal submission | PDF exported from the approved source |
| Several formats | One approved content ledger; separate PPT/web layouts and validate each |

Read [output-contract](references/output-contract.md) and [runtime-compatibility](references/runtime-compatibility.md). Do not silently substitute formats. When no format is specified, infer from use and state the choice. An explicitly requested PPTX requires an editable PPTX backend; HTML is an alternative only with agreement.

For HTML, distinguish responsive proposals from fixed-stage slide decks before using templates or audits. Responsive pages must not be shrunk into an unreadable miniature 16:9 canvas on a phone. Web motion is not an editable PowerPoint export.

## Shared proposal method

1. **Audit inputs and define the argument.** Identify the client's problem, decision criteria, and why this approach fits. Use [proposal-routes](references/proposal-routes.md). For brief/tender work, map explicit requirements using [brief-compliance](references/brief-compliance.md); do not invent scoring weights.
2. **Connect diagnosis to delivery.** Use [argument-traceability](references/argument-traceability.md): evidence → diagnosis → recommendation → proof/example → deliverable → schedule/cost. Catch unsupported diagnoses, unexplained services, and scope/price contradictions before styling. The map is an internal working artifact unless requested in the proposal.
3. **Plan pages or scenes.** Each needs a client question, key message, explanatory/evidence object, source status, and role in the next decision. Use [page-types](references/page-types.md) and [story-map-and-sequencing](references/story-map-and-sequencing.md). A method diagram explains an approach; it does not prove past results.
4. **Choose a visual system.** Respect supplied VI and approved references. Otherwise use [style-template-strategy](references/style-template-strategy.md) and [visual-system-card](references/visual-system-card.md). Test a representative introduction, mechanism, and dense business page before scaling a new style. Preserve deliberate whitespace; never fill an empty column with an unrelated image.
5. **Write clear titles and copy.** Use [client-facing-copy](references/client-facing-copy.md). A title can be an evidenced conclusion or a precise subject such as “实施排期” or “服务报价”. Do not force slogans onto pricing, process, or appendix pages. Notes retain only necessary source, scope, uncertainty, and conditions.
6. **Build for the chosen format.** PPT: retain editable text and diagrams where practical, use the runtime backend. HTML: read [web-proposals](references/web-proposals.md), select interactions by explanatory purpose using [web-interactions](references/web-interactions.md), then adapt the bundled component starter when useful. Do not add every component by default.
7. **Synchronize and verify.** Update affected titles, captions, transcripts, resource links, totals, appendices, and script sections. Use [quality-check](references/quality-check.md) and report technical, visual, and commercial status separately per [quality-levels](references/quality-levels.md). For web deployment add the separate live-release evidence described in web-proposals.
8. **Learn from accepted revisions.** When requested to improve the reusable skill, use [iteration-learning](references/iteration-learning.md). Extract general decisions and neutral examples; do not copy the client's project or turn a local preference into a universal law.

## Load references selectively

- Visual execution: [visual-system](references/visual-system.md), [layout-rhythm](references/layout-rhythm.md), [font-system](references/font-system.md), [palette-library](references/palette-library.md).
- Existing PPT final polish: [final-polish-workflow](references/final-polish-workflow.md), which routes to protected-edit tools and acceptance reports.
- Responsive HTML / interaction / release: [web-proposals](references/web-proposals.md), [web-interactions](references/web-interactions.md).
- Worked revision examples: [proposal-revisions](examples/proposal-revisions.md).
- Fixed-stage HTML themes: [templates/README](templates/README.md). Responsive behavior starter: [templates/web-components/README](templates/web-components/README.md).

## Delivery boundaries

- Never present generated concepts, third-party references, simulated inquiries, or unverified analytics as real client results. Label the distinction briefly where needed.
- Keep client names, credentials, private cases, proprietary frameworks, and commercial numbers out of reusable/public assets. Brand-specific models and visual themes remain project configuration.
- Use supplied official logo artwork; do not reconstruct a combined lockup with typed brand text. Preserve its proportions and confirm it belongs to the presenter/client/reference being shown.
- For supplied media, check the actual subject, aspect ratio, poster frame, caption, and playback/link destination. Replacing a file without checking its accompanying text is incomplete.
- Do not change amounts, quantities, exclusions, or contractual promises to make a layout fit. Surface inconsistencies for resolution.
- Run `scripts/audit_proposal_pptx.py` for PPTX package checks. Use `scripts/audit_html_demo.mjs` only for fixed-stage `.slide` demos; it does not validate responsive web proposals or scroll states. Render full-size pages and exercise actual interactions; a clean structural audit is not visual or commercial approval.
- Public style showcases require human visual approval before being labeled approved templates. Bundled web components are a neutral behavior starter, not a finished client-ready theme. Respect the user's already-given approval; do not invent extra approval gates for routine revisions.
- Preserve client systems and authentication during authorized deployment. Report what was actually verified; local QA, git push, server activation, live browser verification, and client acceptance are distinct events.
