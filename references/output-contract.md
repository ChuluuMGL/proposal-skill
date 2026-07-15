# Output Contract

A proposal deliverable = a **deck** + a **presenter script (`.md`)**. The deck has three first-class formats — pick by use case and runtime capability, never by default:

| Format | Deliver when | Requires |
|---|---|---|
| `.pptx` | Client wants editable / corporate template / further manual editing | a PPTX backend (`python-pptx`, `pptxgenjs`, Office automation, or a host presentation skill) |
| `.html` | Web presentation, embedding, animation, or highest fidelity; also the default deck format when no PPTX backend is available | only file-write — works in any runtime |
| `.pdf` | Email, print, procurement submission | export from the HTML deck (headless print) or from PPTX |

Never silently swap formats. If the user asked for PPTX but only HTML/PDF is producible, state it explicitly and let them choose — do not relabel an HTML deck as a finished PPTX, and do not treat HTML/PDF as a mere "fallback" when the user requested it.

The presenter script `.md` and the missing-information list are always required, regardless of deck format.

For any brief / tender / RFP response, a **Brief Compliance Matrix** (`references/brief-compliance.md`) is also required — a table mapping every brief requirement to the slide + proof that addresses it. If even an HTML deck is not possible, fall back to blueprint / copy-and-script / template-spec per `runtime-compatibility.md` and label the package accordingly.

## Delivery State Contract

Every output must state its current delivery state. This prevents fast daily drafts from being mistaken for client-ready delivery.

| State | What may be delivered | Must not claim |
|---|---|---|
| `结构草稿` | brief audit, winning thesis, section flow, page plan, proof-object plan | that a deck exists |
| `可编辑初稿` | first deck/copy/script draft with assumptions marked | final accuracy, final visual QA, or client-ready status |
| `待确认版` | deck and script exist but key information, source proof, budget, case data, or visual/open QA is incomplete | client-ready status |
| `客户可交付版` | requested deck format, same-name script, accepted assumptions, QA evidence, and unresolved limits clearly stated | hidden unknowns or unchecked PPTX/render status |

Fast mode usually produces `结构草稿` or `可编辑初稿`. It can produce `待确认版` when files exist but data or QA is incomplete. It should not produce `客户可交付版` unless the user asked for final delivery and all relevant gates pass.

## Handoff Consistency Contract

The final user-facing summary, same-name presenter script, and actual QA logs must agree.

- If the final response says a check was completed, the presenter script's `Delivery QA` block must say the same check is completed, including any warning or limitation.
- If the presenter script still says `待运行`, `pending`, or equivalent for PPTX/render QA, the final response must not claim those checks passed.
- If QA is performed after the script is written, update the script QA section before delivery.
- If a preview method is unreliable for CJK text, record that limitation in both the script and final response, and keep the delivery state at `可编辑初稿` or `待确认版` unless a reliable PowerPoint/Keynote/local preview has passed.

## File Naming

Use clear names:

- `<client-or-project>-proposal.pptx` / `.html` / `.pdf`
- `<client-or-project>-proposal-script.md`
- for HTML: a self-contained `<...>-proposal.html` (single file preferred), plus an optional `<...>-3up.png` contact sheet for quick preview

If the user specifies a folder, use it. Otherwise create an `outputs/` folder under the active workspace or another project-appropriate output directory.

## Deck Content Contract

The deck must include, unless the user asks for a different format:

1. Winning thesis
2. Chapter structure
3. Brief translation or client problem restatement
4. Decision standards
5. Evidence/insight pages
6. Core strategy
7. Solution modules
8. Execution cadence
9. Team and collaboration
10. KPI/measurement
11. Budget/commercial boundaries when relevant
12. Risk control
13. Proof/case/evidence pages
14. Closing recommendation and next steps

For lightweight proposals, combine items, but do not omit the commercial logic.

## HTML Deck Contract

When the deck is HTML (chosen format, or the default when no PPTX backend exists):

- One self-contained `.html` file (inline CSS; web fonts via CDN or system stacks) so it opens by double-click with no server.
- Fixed 16:9 stage (1920×1080 design canvas) that scales to fit the viewport; one `<section class="slide-shell">` per slide, in document order — flow-first layout, no absolute-positioned content tables, no overlap, no reverse (see `layout-rhythm.md`).
- Business text stays as **real selectable text**, never flattened to images. Charts are inline SVG with real data points and labels, not decorative doodles.
- Carry the same proof objects, density rhythm, and page chrome (brand bar, page numbers, source footer) a PPTX would — an HTML deck is a full proposal, not a sketch.
- Ship a contact-sheet PNG (`<...>-3up.png`) next to the HTML for preview/README embedding.

HTML is a legitimate primary deliverable for web-presented, animated, or high-fidelity proposals — not a downgrade of PPTX.

## PDF Contract

- Export the PDF from the finished HTML (headless print, one page per slide, 16:9) or from the PPTX. Do not hand-layout a separate PDF that drifts from the source deck.
- Preserve text as vector (selectable), not raster, so figures and names stay copyable.
- The source deck (HTML or PPTX) remains the single source of truth; the PDF is a render of it.

## Presenter Script Markdown

Use this structure:

```markdown
# <Proposal Title> 逐字稿

## 1. 提案总逻辑

- 赢标主张：
- 客户核心问题：
- 我们的判断：
- 讲述顺序：
- 需要客户确认的信息：

## 2. 章节讲述节奏

| 章节 | 目标 | 客户应记住什么 |
|---|---|---|

## 3. 逐页逐字稿

### Slide 01｜<slide title>

**页面目的：**

**这一页为什么放在这里：**

**建议逐字稿：**
<speaker script in natural spoken Chinese>

**转场：**

**待确认/备注：**
```

Do not include hidden reasoning or private chain-of-thought. It is acceptable and required to include presentation rationale, business logic, source notes, and assumptions.

## Missing Information List

If inputs are incomplete, include a section in the script:

```markdown
## 4. 需要客户补充的信息

| 信息 | 用途 | 当前处理 |
|---|---|---|
```

Use this list instead of stopping unless the missing item prevents even a rough proposal from being drafted.

## Optional Skill Credit (opt-in, default off)

By default, deliverables carry **no** skill or author credit — a client proposal must read as the client's own work. Do not insert the skill author's company, name, or links into user deliverables unless the user explicitly asks.

When the user is sharing a deck publicly (portfolio, open demo, conference talk) and wants to help the skill spread, they may enable a single, removable footer line on the **closing slide only**:

> *Made with the proposal-ppt skill · github.com/ChuluuMGL/proposal-ppt-skill*

Rules: off by default; closing slide only; one line; fully removable; never on client-facing bid/tender decks unless the user opts in. This is the only sanctioned attribution — no watermarks, no logos, no hidden metadata.

## User-Facing Summary

After finishing, report:

- delivery state: `结构草稿` / `可编辑初稿` / `待确认版` / `客户可交付版`
- deck format delivered: `.pptx` / `.html` / `.pdf` — and why that format was chosen
- deck path
- script MD path
- skill credit: off (default) / opt-in footer on closing slide
- mode used: fast / proposal / bid / edit / audit / style-demo / auto / fallback
- runtime/agent used
- PPTX backend used, or fallback reason if unavailable
- preview/render/open validation method used
- whether the deck used client VI, a reference deck, or the minimal fallback template
- selected palette and visual style family when no client VI/reference was provided
- selected rich style system, font pairing, and asset pipeline when a style-rich route was used
- whether generated/HTML/SVG assets were used, and whether they are editable or background-only
- rhythm summary, including where breathing slides, section resets, or big-idea pages appear
- tests/QA performed
- unresolved assumptions

Do not let this summary drift from the files. A deck package is not considered handed off until the summary, script QA note, and actual validation evidence tell the same story.
