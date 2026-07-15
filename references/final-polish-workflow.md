# Final-Polish Workflow: Gate A–F

Use this workflow only for `edit-final-polish`: an existing PPTX has already been manually edited and now needs a client-final revision from screenshots, page-level feedback, or a revised script. Its purpose is to preserve confirmed human work while making the final deck inspectable and safe to hand off.

## Required package

Create a sibling `final-polish/` folder beside the output deck (or an equivalent user-approved location):

```text
final-polish/
  baseline-protection.md
  protected-elements.json
  story-map.md
  revision-ledger.md
  technical-qa.md
  visual-qa.md
  commercial-qa.md
```

The original baseline PPTX is read-only. Never overwrite it. The revised PPTX must receive a new versioned filename.

## Gate A — baseline and manual-edit protection

1. Identify the user-designated or most recently saved PPTX. Do not return to a prior build folder merely because it is easier to generate.
2. Read `manual-edit-protection.md`; create the protection register before editing.
3. Capture protected image geometry/crop and protected text using:

```bash
python3 scripts/compare_protected_elements.py capture baseline.pptx protected-elements.json
```

4. Record only what the user authorized for change. Treat every other manual copy change, image crop/position, brand asset, and confirmed page as protected.
5. After edits, compare the protected manifest. Explain every permitted difference in the revision ledger; unexplained differences are blockers.

## Gate B — story map and sequencing

Create `story-map.md` before changing page order. For each page write chapter, commercial question, conclusion, why it follows the preceding page, and what it makes possible next. Use `story-map-and-sequencing.md`.

Resolve duplicated or prematurely completed themes. A default causal order is: `opportunity and problem → overall strategy → trust building → audience asset → transaction validation → delivery mechanism → next-stage action`. Use another sequence only when the story map explains why.

## Gate C — client-facing copy

Scan every client-facing title, subtitle, label, and conclusion with `client-facing-copy.md`. Move internal discussion, caveats, and oral elaboration to the presenter script; do not leave them on the client page.

## Gate D — visual system and page rhythm

Lock the existing/approved visual system, then apply `visual-finish-spec.md`. Check repeated modules, dark-page tokens, image subject/crop, page rhythm, optical spacing, and full-size readability. Do not restyle a confirmed deck merely to make it look novel.

## Gate E — assets and evidence

Use images as evidence for the specific claim: products for product/benefit/conversion pages; people and situations for audience pages; report/data visuals for trend claims; information design for mechanisms. AI images are concepts, not research or client facts, and must be marked where necessary.

## Gate F — separate acceptance and delivery state

Run `audit_proposal_pptx.py` plus any available render/open check. Then complete `quality-levels.md` as three separate reports: technical package integrity, visual full-size render review, and commercial narrative review.

Only mark `客户可交付版` when all three pass or the user explicitly accepts named exceptions. If only automated checks pass, use: `技术通过，待视觉/商业复核`.
