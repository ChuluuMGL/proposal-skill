# Responsive web proposals

Use for a client-facing proposal read in a browser. This is distinct from a fixed slide deck and from building the client's production website.

## Source and scope

- Keep approved facts, scope, price and source provenance in a project content ledger. PPT, web, PDF and presenter notes consume the same approved content, with independent layout.
- Preserve existing scene IDs/deep links where possible. Record the exact source baseline, affected files, approved text and current release before editing.
- A media replacement includes subject and rights/source check, aspect ratio, thumbnail/poster, alt text, caption and independent-view link. Do not keep a previous brand or product name by accident.
- No client assets or credentials belong in this skill's component starter. Actual deployment/authentication config remains in the project and controlled server config.

## Page composition

Choose the appropriate form per scene: single-column explanation, paired copy and evidence, full-width table, mechanism diagram, media gallery, timeline, or optional interactive demonstration. An empty right column is a reason to reconsider the layout, not an obligation to find any image.

- Pair columns in one grid/flex row. Align by deliberate reading axes; test initial viewport entry, not only after sticky scrolling settles.
- Avoid making a long headline span the entire page above a two-column body if this pushes the right evidence far below the left title. Place headline and copy in the same left column when they form a unit.
- Media width/height derives from aspect ratio and content weight. A landscape video often needs a different alignment than a tall poster. Do not generalize one project's pixel offset into a universal rule.
- Prefer complete images for text-heavy evidence; use preview + full-size view for long documents. Keep every gallery item accessible on touch and keyboard; avoid hover-only affordances.
- Dense fee tables may use full width or split by service group. Do not reduce legibility to force every web section into exactly one viewport.
- Phone layout reflows into logical document order. Scoped sticky elements release before the following section; disable pinning when viewport height or content size makes it unsafe.
- Use official logo lockups as a whole. Choose scale by surrounding hierarchy; do not enlarge the lockup to compete with the proposal headline.

## Build and acceptance

For new visual systems, sample one introduction, mechanism and dense page. For behavior-only starter changes, inspect every affected component. Check:

1. Desktop, narrow phone (e.g. 390×844), and any breakpoint where layout switches. Record actual dimensions; browser emulation is not a real-device test.
2. Forward and reverse scroll; enter/exit boundaries; anchor arrival; resize while pinned. Important text and controls must not be hidden under fixed headers or previous sections.
3. Dialog open/close/Escape/focus return; all image links; video poster/playback/independent view; functional demos in every supported state.
4. Normal motion and reduced-motion or static mode. Content remains accessible with motion disabled. Print/PDF exposes information otherwise hidden by interactive states.
5. Slow or failed optional media: show readable first content promptly. Never gate the entire proposal on 3D assets, video, or an arbitrary animation timer. Test the transition states rather than merely asserting CSS durations.
6. Console errors, missing resources, horizontal overflow and screenshot review. Geometry checks cannot certify aesthetics; a single screenshot cannot certify motion.

The existing fixed-slide audit targets `.slide`; a result with zero slides is not a valid responsive audit; do not run it on a responsive page and claim a pass. Use the active environment's supported browser/devtools or project-specific tests. Record visual approval separately from automated checks.

## Access and deployment (only when authorized)

Authentication is an optional project capability, not part of the public component starter. A stylish client-side password form is not access control. Protect HTML/media/API resources server-side, configure separate proposal scope/session/credentials, and verify anonymous and authenticated behavior against the chosen architecture. Do not promise a single status code for all architectures: a page may redirect to login while protected assets return 401.

For a release-based server, follow the project's current runbook:
- Check the live current pointer and protected unrelated files against the agreed baseline. Stop on unexpected drift.
- Build an explicit changed/new/deleted manifest. Check hashes, total count and public read permissions.
- If releases share hard links, upload to new temporary files, set required permissions, then atomically replace; never overwrite shared files in place or chmod untouched shared inodes.
- Verify before activation, switch atomically, verify live authenticated resources and actual controls; roll back on a failed acceptance check.
- Record source revision, old/new release, hashes, screenshot evidence, auth checks, rollback target and unverified environments. Never ship passwords or server secrets in receipts.

These are invariants, not a universal shell script. Hosting-specific release tools, ownership, modes and paths must come from the actual project. A push does not prove deployment, and deployment does not prove the customer received or accepted the proposal.
