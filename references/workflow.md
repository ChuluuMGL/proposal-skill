# Guided Workflow and Stage Gates

Use this file when the task needs a structured, engineering-like proposal creation process. The default mode is guided: confirm the blueprint before building the PPTX unless the user asks for direct generation.

## Stage 0: Start and Route

Determine these routing choices before writing slide content.

### Work Mode

- `guided`: first produce blueprint, then wait for user confirmation before building files.
- `auto`: produce the full PPTX and script in one pass with assumptions marked when a PPTX backend is available; otherwise use the best fallback mode.
- `edit`: modify an existing PPTX and keep the source deck's visual rules unless asked to restyle.
- `edit-final-polish`: protect manual edits, map page-level feedback, and issue separate technical/visual/commercial acceptance reports for an existing client deck.
- `audit`: review a proposal deck and return issues/recommendations only.

Default: `guided`.

### Proposal Route

Choose one primary route from `proposal-routes.md`:

- `brand-social-content`
- `annual-operation-retainer`
- `project-execution-live-ecommerce`
- `consulting-digital-ai-saas`
- `partnership-sponsorship`

If unsure, infer from the brief and state the assumption.

### Depth

- `light`: 10-15 slides, suitable for early discussion or small proposal.
- `standard`: 18-30 slides, suitable for normal client proposal or comparison.
- `deep`: 30-60 slides, suitable for annual plan, formal tender, or complex execution.

Default: `standard`.

### Visual Source

Priority order:

1. Existing PPTX being edited
2. User-provided client template or reference deck
3. Client VI / logo / brand colors
4. Explicit user visual direction
5. Public template family from `style-template-strategy.md` plus palette/font/asset plan
6. `assets/minimal-proposal-template.pptx` fallback

When a strong style is requested and no approved reference deck exists, the visual source is not considered approved until the three-page style sample gate in `style-template-strategy.md` passes.

### Required Deliverables

Default deliverables:

- deck in the chosen output format (`.pptx` / `.html` / `.pdf` — see Output Format below)
- presenter script `.md`
- missing-information section inside the `.md`

Optional deliverables:

- outline-only blueprint
- page-by-page copy deck plan
- budget table appendix
- speaker notes embedded in PPTX (or hidden notes in HTML)
- bilingual version
- contact-sheet PNG (recommended for HTML decks)

### Output Format

Route the deck format by use case and runtime capability — a first-class decision, not an afterthought:

| Asked for / situation | Deliver |
|---|---|
| Editable, corporate template, client will hand-edit | `.pptx` (needs a PPTX backend) |
| Web present, embed, animate, or highest fidelity | `.html` |
| Email / print / procurement submission | `.pdf` (rendered from HTML or PPTX) |
| No PPTX backend available | `.html` as the default deck (still a complete proposal), `.pdf` on demand — do not silently downgrade to blueprint-only |
| User wants several | build the HTML deck first, then export PDF and/or PPTX from the same source |

Default when unspecified + PPTX backend exists: `.pptx`. Default when unspecified + no PPTX backend: `.html`. Confirm the format in the Stage 0 summary whenever it could affect the client (e.g. a tender that mandates native PPTX).

### Runtime Capability Check

Before promising a `.pptx`, identify the runtime capabilities from `runtime-compatibility.md`:

```markdown
PPTX backend:
Preview/render backend:
Image-generation backend:
Fallback mode if PPTX backend is unavailable:
```

If no PPTX backend is available, default the **deck** to `.html` (a complete proposal, not a sketch) and offer `.pdf` export. Reserve `blueprint-only`, `copy-and-script`, `template-spec` fallbacks for when even an HTML deck cannot be produced, and state the limitation clearly.

## Stage 0 Output

If the user has not already specified routing, output a compact startup summary:

```markdown
## 启动判断

- 工作模式：
- 提案类型：
- 页数深度：
- 视觉来源：
- 输出格式：pptx / html / pdf
- PPTX 后端：
- 预览/渲染能力：
- 必须包含：
- 当前缺失但可先推进：
```

Ask at most three questions, only when the answer materially changes scope, budget, visual system, or proposal route. Otherwise proceed with assumptions.

Suggested questions:

1. 这次是正式比稿/竞标，还是内部预沟通？
2. 是否有客户 VI、logo 或参考 PPT？
3. 需要包含报价/团队/案例/逐字稿中的哪些？

## Stage 1: Brief Intake Check

Read the actual input files or pasted brief. Produce a brief audit before strategy.

Required output:

```markdown
## Brief 审计

| 类别 | 已确认信息 | 缺失/待确认 | 对提案的影响 |
|---|---|---|---|
| 客户目标 |  |  |  |
| 评审/决策标准 |  |  |  |
| 服务范围 |  |  |  |
| 周期/排期 |  |  |  |
| 预算/报价口径 |  |  |  |
| KPI/验收 |  |  |  |
| 案例/资质 |  |  |  |
| 风险边界 |  |  |  |
```

Gate: do not invent missing fields. In guided mode, continue to Stage 2 using clearly marked assumptions unless the missing field blocks structure.

## Stage 1.5: Brief Decomposition (brief / tender / RFP responses)

For any proposal responding to a brief, tender, or RFP, decompose the source into a numbered, scored requirement list *before* planning pages. Follow `references/brief-compliance.md`:

- Extract the brief's OWN requirements / scoring criteria (verbatim where listed), one per row, with type, weight (if stated), and source location.
- Ambiguous or unverifiable items → mark `待确认`, do not invent.
- This list is the backbone every page must map back to (Stage 2 page plan + Stage 6 compliance gate).

For open creative pitches with no stated criteria, infer 3–7 decision criteria from the client goal and mark them as assumptions — see the open-brief fallback in `brief-compliance.md`.


## Stage 2: Proposal Blueprint

Create the commercial logic before slide copy.

Required output:

```markdown
## 提案蓝图

### 1. 赢标主张

### 2. 客户最关心的判断标准

### 3. 章节结构

| 章节 | 章节目标 | 客户应记住什么 |
|---|---|---|

### 4. 逐页规划

| 页码 | 页面标题 | 页面目的 | Proof object | 视觉形式 | 信息状态 |
|---|---|---|---|---|---|

### 5. 视觉系统建议

必须按 `visual-system-card.md` 完成视觉系统卡。若使用强风格路线，还必须包含：

- 模板家族：
- 商业适配理由：
- Style DNA：
- 字体方案：
- 资产计划：
- 组件变形：
- 需要先测试的 3 页样张：
- 不适合该风格承载的页面：

### 6. 页面节奏图

| 页码 | 密度 | 页型 | 节奏作用 |
|---|---|---|---|

### 7. 视觉资产计划

| 页码 | 资产类型 | 用途 | 来源 | 状态 |
|---|---|---|---|---|

### 8. 需要确认的问题
```

Gate: in guided mode, stop here and ask the user to confirm the blueprint before building the deck. If a rich style is requested, no client VI exists, or a reusable public template is being created, use `style-template-strategy.md`, `visual-system-card.md`, and the selected `templates/style-specs/*.md`; create/specify the three-page sample gate before scaling to the full deck. In auto mode, proceed, but still apply the Visual System Card and Style DNA Contract and record visual assumptions in the script.

For strong visual routes, the preferred sample set is exactly:

1. cover / big-idea page,
2. proof / mechanism page,
3. dense business page.

Use these samples to decide whether the style can be used across the deck or only on expressive pages.

## Stage 2.5: Template Selection Gate

This is an explicit, user-visible checkpoint. Do not skip silently into slide copy. When the visual source resolves to a public template family (no client VI, no user reference deck, no approved strong-style direction), stop and let the user choose the family before any page is authored.

Required output:

```markdown
## 模板选择

### 候选家族（按与本案的契合度排序）

| 家族 | 一句话定位 | 适合本案的理由 | 不适合的点 |
|---|---|---|---|
| `premium-boardroom` | 严格网格、董事会文件感、高信任 proof | … | … |
| `editorial-brand` | 图片/字体主导的杂志版式 | … | … |
| `tech-launch` | 发布会式聚焦、产品/界面 hero | … | … |
| `consumer-lifestyle` | 产品场景、目录式证据墙 | … | … |

### 推荐

- 首选家族：
- 备选家族：
- 理由（绑定赢标主张，不是审美偏好）：

### 确认方式

- 用户已指定家族：→ 直接用，记录在案
- 用户未指定：→ 用首选家族，但先展示该家族的三页样张（封面 / 机制 / 密集页）供用户确认或改选
- 用户拒绝首选：→ 切换备选，重做三页样张
```

Gate rules:

- The recommendation must tie back to the winning thesis and proposal route, not to a personal visual preference. State *why this family helps the client decide*, e.g. "premium-boardroom because this is a formal tender judged on procurement rigor."
- If the user has already supplied a client VI, reference deck, or explicit visual direction, skip the family table — that decision is already made. Just record the resolved visual source and move on.
- For a public skill demo or a style-rich request, the three-page sample is mandatory before scaling; see `style-template-strategy.md`.
- Never proceed to full slide copy on an unconfirmed family in guided mode. In auto mode, proceed with the top recommendation but still emit the three-page sample and record the assumption.

## Stage 2.6: Visual System Card Gate

This is the practical design-system step that makes the deck more beautiful and consistent. It is required before Stage 3 slide copy and Stage 4 deck build whenever no strict client template is already controlling the deck.

Required output:

```markdown
## 视觉系统卡

### 模板与商业理由
- 模板家族：
- 适合本案的原因：
- 不适合承载的页面：

### 色彩系统
| 角色 | Hex / 来源 | 用法 | 限制 |
|---|---|---|---|

### 字体系统
| 层级 | 字体 | 字号范围 | 字重 | 行距 | 规则 |
|---|---|---|---|---|---|

### 图片与资产规则
| 资产类型 | 用途 | 来源 | 裁切/比例 | 禁止事项 |
|---|---|---|---|---|

### 图表与数据规则
| 图表类型 | 推荐样式 | 标注方式 | 禁止事项 |
|---|---|---|---|

### 模块系统
| 页面/模块 | 布局规则 | Proof object | 密度 |
|---|---|---|---|

### 页面节奏
| 页码范围 | 密度 | 作用 | 处理方式 |
|---|---|---|---|

### Reject Rules
- 必须重做的问题：
```

Gate rules:

- Use the selected `templates/style-specs/*.md` as the starting point when a public family is chosen.
- If client VI exists, translate the client colors and fonts into semantic roles instead of inventing a new palette.
- If the visual system card contains only mood words, reject it and rewrite it.
- Do not start drawing slides until chart/table rules and image behavior are explicit.
- In auto mode, include a concise version of the visual system card in the script or final package notes.

## Stage 3: Slide Copy Draft

Write slide-level copy from the approved blueprint.

For each slide, draft:

- final slide title
- subtitle or lead sentence
- body bullets / table text / diagram labels
- proof object content
- source or assumption note
- script intent

Quality gate:

- One slide = one judgment.
- Slide title is a conclusion sentence.
- Every slide has a visible proof object.
- No slide depends on long oral explanation to make sense.

## Stage 4: Deck Build

Build or edit the deck after the copy draft is stable. The format was chosen in Stage 0 (Output Format).

- For `.pptx`: use the identified PPTX backend and its QA rules from `runtime-compatibility.md`; produce editable objects, not screenshots.
- For `.html`: build a self-contained 16:9 staged deck (one `slide-shell` per slide, flow-first); this is the default when no PPTX backend exists and a proud primary when fidelity/animation matters.
- For `.pdf`: export from the finished HTML (headless print) or PPTX — never hand-layout a separate PDF.

Build order:

1. Create or inherit the visual system.
2. Select a named palette from `palette-library.md` when no client VI exists.
3. If no client VI exists or a rich style is requested, select a public template family from `style-template-strategy.md` or document the explicit custom route.
4. Complete the Visual System Card from `visual-system-card.md`, using the selected `templates/style-specs/*.md` where available.
5. Run the Style DNA Contract; define commercial fit, layout grammar, assets, typography, component transformations, density rhythm, business-clean pages, and anti-examples before drawing.
6. Select fonts and fallbacks from `font-system.md`.
7. Create or generate required assets; keep key business text editable.
8. For a new style/template route, build or specify three full-size samples first: cover/big-idea, strategy/mechanism, and proof-dense.
9. Create master chrome: margins, title zone, page numbers, footer/source style.
10. Build slides by page type and density class from `layout-rhythm.md`.
11. Insert proof objects: tables, matrices, timelines, screenshots, diagrams, sample pages.
12. Render full-size previews and a contact sheet.
13. Fix overlap, clipping, wrapping, alignment, density, over-clustered content, dead empty zones, weak style recognition, identical component grammar across styles, and low-taste primitive-shape placeholders.
14. Run PPTX compatibility QA from `quality-check.md`; if the file is structurally valid but PowerPoint cannot open it, rewrite it through an Office-compatible exporter and deliver the repaired copy.

Gate: do not deliver before rendering/inspection when the runtime can render. If rendering/open validation is unavailable, say exactly what was checked and what remains unverified.

## Stage 5: Presenter Script

Write the `.md` script after slide order is final.

Each slide needs:

- page objective
- why this slide appears here
- suggested exact talk track
- transition sentence
- confirmation notes for assumptions, figures, and claims

The script should make the presenter's reasoning explicit, while the slide remains concise.

## Stage 6: Final QA and Handoff

Run `quality-check.md` before final response.

Run the **Brief Compliance Gate** (for brief / tender / RFP responses): every brief requirement maps to a slide + proof (`✅`); no **weighted** requirement is left a `⚠️ 缺口`; no slide is an unmapped 自嗨页. Deliver the compliance matrix as a client-facing appendix. See `references/brief-compliance.md`.

For `edit-final-polish`, run `final-polish-workflow.md` Gate A–F. The final response and presenter script must state the same delivery state and validation status; if CJK render/open validation is incomplete or a preview loses glyphs, state the limitation and keep the package below `客户可交付版`.


Final response must include:

- deck format delivered: `.pptx` / `.html` / `.pdf`
- deck path
- script MD path
- mode used: guided / auto / edit / edit-final-polish / audit
- runtime and deck/PPTX backend used
- template or visual source used
- visual system card status
- QA performed
- unresolved assumptions

## Recommended User Prompts

### Guided Test

```text
用 $chuluu-proposal-ppt 根据下面 brief 做一份商业提案。

先不要生成 PPTX。请先输出：
1. Brief 审计
2. 赢标主张
3. 章节结构
4. 逐页标题、页面目的、proof object
5. 视觉系统建议
6. 需要我确认的问题

brief:
...
```

### Direct Generation

```text
用 $chuluu-proposal-ppt 直接根据下面 brief 产出一个可编辑 PPTX 和同名逐字稿 MD。

要求：
- 自动判断提案类型和页数
- 缺失信息标注为待确认
- 不编造数据、案例、报价和效果
- 没有客户 VI 时使用 fallback 商务模板
- 输出到当前项目 outputs 文件夹

brief:
...
```

### Existing Deck Revision

```text
用 $chuluu-proposal-ppt 修改这个已有提案 PPTX。

目标：
- 保留原视觉风格
- 优化赢标主张和章节逻辑
- 每页改成结论句标题
- 补 proof object 建议
- 同步输出逐字稿 MD

文件：
...
```
