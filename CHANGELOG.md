# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and versions track the
`version` field in `skill.json`. Entries before this file existed were
reconstructed from git history (`skill.json` version bumps and existing tags).

## [Unreleased]

### Added

- `.github/workflows/validate.yml`: CI checks for JSON metadata, version consistency, script syntax, and a template-mode audit of the bundled fallback deck.
- `.github/workflows/tag-on-bump.yml`: creates the `v<x.y.z>` tag and GitHub release automatically when `skill.json` is bumped on `main`.
- `scripts/check_release_consistency.py`: stdlib-only check that `skill.json`, README badges/structured data, and this changelog agree on the version.

### Fixed

- `scripts/audit_html_demo.mjs` no longer hardcodes a maintainer-local Playwright path; it resolves `playwright` normally and accepts a `PLAYWRIGHT_MODULE_PATH` override.

## [0.5.1] - 2026-07-19

### Changed

- Compacted the pre-build visual system card to five locked decisions: visual source, semantic colors, type hierarchy, three page archetypes, and asset/proof behavior.
- Added a visual strength standard and page archetypes (chapter, reasoning, proof-dense) to `references/visual-system.md`.
- Added hard rules against promoting client-specific frameworks into the reusable skill, cover-only design, and weak dark-page contrast.
- Strengthened the `premium-boardroom` theme and demo; clarified which style families have reusable themes versus specifications only.

## [0.5.0] - 2026-07-15

### Added

- `edit-final-polish` mode for existing client decks: protects manual edits, digests page-level feedback, and reports technical, visual, and commercial acceptance separately (`references/final-polish-workflow.md`).
- References for manual-edit protection, quality levels, client-facing copy, story map and sequencing, visual finish spec, and external capability adapters.
- `scripts/build_revision_ledger.py` and `scripts/compare_protected_elements.py`.
- Anonymized final-polish example in `examples/`.

### Changed

- Renamed the skill to `chuluu-proposal-ppt` with a Chinese display name and description.

## [0.4.1] - 2026-07-02

### Changed

- Trimmed README recommended prompts from four to two, showing the brief compliance matrix and visual system card gates in action.

## [0.4.0] - 2026-07-02

### Added

- Brief Compliance Matrix (`references/brief-compliance.md`): brief decomposition, coverage matrix, and a compliance gate that blocks off-brief proposals.
- Workflow Stage 1.5 (Brief Decomposition) and Stage 6 (Brief Compliance Gate); compliance matrix is a required deliverable for briefs and tenders.

## [0.3.3] - 2026-07-02

### Removed

- Reverted the consumer-lifestyle rendered demo; the family remains in routing and style strategy.

## [0.3.2] - 2026-07-02

### Added

- Consumer-lifestyle HTML demo and 3-up preview.

## [0.3.1] - 2026-07-02

### Changed

- Aligned license and ownership presentation with `business-website-skill` (MIT line, ownership table, `NOTICE`).
- Removed the duplicate "Style Template Families" README section.

## [0.3.0] - 2026-07-02

### Added

- PPTX, HTML, and PDF as first-class output formats, with format routing and a rule against relabelling HTML/PDF/Markdown as a finished `.pptx`.
- Required pre-build visual system card gate and per-family style specs.
- Template family gate, HTML demo engine (`templates/`), and clickable public HTML demos.
- `AUTHOR-SPEC.md` as the cross-skill authorship standard.

### Changed

- Focus cuts: removed `style-systems.md`, `asset-pipeline.md`, and `frontend-slides-audit.md`; regrouped reference loading.
- Unified authorship under Chuluu (`skill.json` author object, LICENSE).

## [0.2.1] - 2026-07-01

### Added

- Text-box overflow and element overlap detection in `scripts/audit_proposal_pptx.py`.
- `scripts/audit_html_demo.mjs` for rendered overlap and clipping checks on HTML demos.
- Text flow and overlap prevention rules in `references/layout-rhythm.md`.

## [0.2.0] - 2026-07-01

### Added

- `scripts/audit_proposal_pptx.py`: stdlib-only objective deck audit (OOXML validity, slide count, placeholder leakage, notes coverage, script alignment).
- Public demo assets and GitHub issue/PR templates and contributing guide.
- Frontend slide design QA and a raised public demo quality gate.

### Changed

- Repositioned the skill around the winning thesis and proof logic, with premium design as the gate.

## [0.1.7] - 2026-06-29

### Added

- Style template strategy gate, market-grade style template rules, and layout scoring/radius rules.
- Runtime compatibility documentation and matrix in `skill.json`.

## [0.1.6] - 2026-06-26

### Changed

- Improved rich style gates, palette library, and layout balance.

## [0.1.5] - 2026-06-26

### Fixed

- Repaired fallback PPTX compatibility.

## [0.1.4] - 2026-06-26

### Changed

- Tightened style quality gates.

## [0.1.3] - 2026-06-26

### Added

- Rich style systems, font system, and asset pipeline references.

## [0.1.2] - 2026-06-26

### Added

- Layout rhythm rules and palette library defaults.

## [0.1.1] - 2026-06-25

### Added

- Initial proposal PPT skill with English and Chinese READMEs.
