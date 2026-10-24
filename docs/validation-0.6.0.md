# v0.6.0 validation

Validated on 2026-10-24. This release extends the existing PPT workflow with shared proposal logic and a responsive HTML component starter. It does not certify a client proposal or production deployment.

## Repository checks

- Skill creator `quick_validate.py`: passed; PyYAML installed in an isolated temporary validation environment.
- Release version consistency: passed at 0.6.0.
- Python scripts compile; new component JavaScript parses.
- Local Markdown targets in the entrypoint, READMEs, references and examples resolve.
- `git diff --check`: passed.
- New material reviewed for client names, credentials, machine paths, proprietary assets and commercial numbers. Demonstration prices and illustrations are synthetic.
- Bundled PPTX package audit: passed in template mode, 12 slides and 12 notes. Warning: no companion script supplied. Optional python-pptx geometry/density checks were unavailable in this local Python environment. No new PPTX generation or visual rendering is claimed.

## Browser checks

Local component starter tested in Chromium through the browser control interface at 1366 × 900 and 390 × 844.

- Cycle rotates while visible; pause stops it. Mobile labels remain visible with no page-width overflow.
- Image dialog opens the selected original illustration; Escape closes it and focus returns to the invoking link.
- Inquiry selectors produce the expected synthetic summary; reset restores the example. No submission backend or persistent storage is included.
- Desktop scrolling changes the price from exactly 120,000 to exactly 108,000; reverse scrolling restores 120,000. No interpolated amounts are displayed.
- Phone layout removes price pinning and shows both price states. Screenshot review found no horizontal overflow.
- Emulated reduced motion pauses the cycle and disables pinned price switching.
- With JavaScript disabled and the page reloaded, both prices remain visible and form submission is disabled.
- Simulated beforeprint/afterprint events expand the appendix and expose both prices. This checks event behavior only; a full exported PDF has not been visually reviewed.
- No console errors captured during these checks.

Screenshots retained locally under ignored `output/validation/`: desktop-cycle, desktop-price, mobile-cycle and mobile-price. They are validation evidence, not approved public visual themes.

## Limits and next-project acceptance

This is a neutral behavior starter. It contains no real authentication, media pipeline, CRM integration, client content, PPTX conversion or deployment configuration. Other browsers, physical devices, actual print pagination and project-specific content require acceptance in the project where components are used. Successful structure checks do not replace visual or commercial approval.
