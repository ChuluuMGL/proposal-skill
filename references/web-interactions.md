# Select interactions by what they explain

Read with web-proposals.md. The runnable neutral starter is `templates/web-components/index.html`; it demonstrates the implemented rows below without third-party dependencies. Use its pieces selectively and adapt the visual system; it is not a mandatory theme.

| Reader task | Pattern | Essential behavior / acceptance | Static or PPT representation | Starter |
|---|---|---|---|---|
| Understand a repeated process | Cycle diagram | Animate direction subtly; labels stay still; pause, reduced-motion and offscreen/background suspension | Labeled arrows and steps | Included |
| Follow a complex argument | Scroll-linked stages | Current step and diagram agree; no trapped scroll; release sticky stage at section end | One overview plus successive slides if needed | Recipe only |
| Inspect case details | Gallery + full-size dialog | Every item clickable and keyboard reachable; preserve ratio; Escape/close restores focus | Representative complete crops and source links | Included with generated neutral SVGs |
| Understand a proposed feature | Interactive inquiry example | Explicit simulated data, no submission/backend claims; every state has a clear label | Annotated flow and selected states | Included, page-memory only |
| Compare package prices | Two-state pinned comparison | Same stage; reverse scroll restores previous state; large price shows only the two approved values, no invented intermediate offers | Side-by-side or sequential price states | Included with fictional values |
| Understand delivery order | Timeline / Gantt | Dependencies and customer inputs readable; accessible table or list on phone | Timeline/table | Included |
| Find detailed scope | Expandable appendix | Semantic disclosures; hidden detail discoverable; print opens all content | Appendix slides | Included |
| Move between chapters | Navigation | Current location clear; focus and target not covered by header | Agenda/section markers | Included; simple anchor navigation |

## Motion rules

- Specify the meaning before the animation: what changes and what remains stable? Removing motion must not remove meaning.
- Keep labels, logos, amount baselines and reading targets stable. For price transitions animate opacity/position, not fictional intermediate amounts.
- Scope pinning to its section and available height. On short/narrow screens show both price states rather than overlapping them.
- Pause repeating effects while offscreen or the document is hidden; honor live changes to reduced-motion settings. A manual pause choice must persist through viewport changes for the session.
- Do not block first readable content on animation completion or heavy assets. A login transition should wait for genuinely ready content, not for all optional effects.
- Mobile layout may replace interaction with a simpler form. Do not require hover, drag, precise wheel movement, or a long pinned sequence to read essential scope/pricing.

## Component contract

Document inputs, states, output/side effects, keyboard behavior, mobile/static behavior and verification evidence for each extracted component. Use semantic HTML that remains readable without JS where practical. JavaScript should progressively enhance, not hide core content until a module loads.

The starter does not implement authentication, media transcoding, persistent lead storage, full proposal authoring, PPTX export or production deployment. Use project-specific implementations and testing for those capabilities; do not describe the starter as a completed production system.
