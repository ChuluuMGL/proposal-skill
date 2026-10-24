# Responsive proposal components

A neutral, dependency-free behavior starter for `proposal`. Open `index.html` directly or serve this directory with a local static server. No build step, network calls, credentials, analytics or persistent storage. SVG illustrations and amounts are synthetic examples. These components are not a finished client visual theme.

Copy only useful patterns and replace the CSS tokens/content with the approved project system. Keep controls, labels and fallbacks. Do not layer the fixed-stage `engine.css` over this responsive starter.

| Component | Input / state | Side effects | Static / small-screen behavior |
|---|---|---|---|
| Cycle | Text labels; visible, paused, reduced-motion states | Animation only | Labels stay visible; motion stops |
| Gallery | Image URL, alt and caption | Native dialog + focus return | Image links still work without JS |
| Timeline | Work rows and phases | None | Compact accessible table |
| Inquiry | Two non-sensitive selectors | Page-memory text only | Submit disabled without JS; no real lead collection |
| Price | Two exact price/scope states | Scroll or button toggles | Both states shown on phone, short viewport, reduced motion, print and no-JS |
| Appendix | Semantic details/summary | Open/close state | Print listener opens all; no-JS native details remain usable |
| Navigation | Section anchors | Scroll + current-location marker | Wraps on narrow widths |

Review forward/reverse scroll, boundaries, resizing, pause, reduced motion, dialog Escape/focus, form reset, print and all price states before adapting. Geometry checks supplement screenshot review. No auth, video transcode, backend, full proposal content or PPTX export is included. See references/web-proposals.md for those project-level concerns.
