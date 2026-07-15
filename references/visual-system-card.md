# Visual System Card Gate

Use this file before drawing a new proposal deck or restyling an existing one. The visual system card is a short, user-visible contract that makes the deck more beautiful by forcing visual decisions before slide production starts.

Do not skip this gate when:

- the user has no client VI or reference deck,
- a public template family is selected,
- a rich style is requested,
- the deck will include charts, budget pages, screenshots, product images, or proof galleries,
- a previous draft had crowding, dead whitespace, text overflow, or inconsistent color.

If the user provides a strict client template, keep the template as the source of truth and still produce a short "inherited visual rules" card before editing.

## Required Visual System Card

Output this card before Stage 3 slide copy or Stage 4 deck build:

```markdown
## 视觉系统卡

### 1. 模板与商业理由

- 模板家族：
- 适合本案的原因：
- 不适合承载的页面：
- 需要先测试的样张：

### 2. 色彩系统

| 角色 | Hex / 来源 | 用法 | 限制 |
|---|---|---|---|
| 主背景 |  |  |  |
| 主文字 |  |  |  |
| 品牌/主色 |  |  |  |
| 强调色 |  |  |  |
| 风险/警示 |  |  |  |
| 线条/分割 |  |  |  |

### 3. 字体系统

| 层级 | 字体 | 字号范围 | 字重 | 行距 | 规则 |
|---|---|---|---|---|---|
| 封面/章节标题 |  |  |  |  |  |
| 普通页标题 |  |  |  |  |  |
| 正文 |  |  |  |  |  |
| 数据/数字 |  |  |  |  |  |
| 脚注/来源 |  |  |  |  |  |

### 4. 图片与资产规则

| 资产类型 | 用途 | 来源 | 裁切/比例 | 禁止事项 |
|---|---|---|---|---|
| 产品/场景图 |  |  |  |  |
| 平台截图 |  |  |  |  |
| AI 概念图 |  |  |  |  |
| 图标/插画 |  |  |  |  |

### 5. 图表与数据规则

| 图表类型 | 推荐样式 | 标注方式 | 禁止事项 |
|---|---|---|---|
| KPI 数字 |  |  |  |
| 表格/预算 |  |  |  |
| 折线/趋势 |  |  |  |
| 矩阵/对比 |  |  |  |
| 时间轴/路线图 |  |  |  |

### 6. 模块系统

| 页面/模块 | 布局规则 | Proof object | 密度 |
|---|---|---|---|
| 封面 / Big idea |  |  |  |
| Brief 翻译 |  |  |  |
| 策略地图 |  |  |  |
| 机制 / 系统图 |  |  |  |
| 案例 / 样稿 |  |  |  |
| KPI / 验收 |  |  |  |
| 预算 / 边界 |  |  |  |
| 风险控制 |  |  |  |

### 7. 页面节奏

| 页码范围 | 密度 | 作用 | 处理方式 |
|---|---|---|---|
|  | breathing | 让客户记住主张 |  |
|  | standard | 推进论证 |  |
|  | proof-dense | 证明可交付 |  |

### 8. Reject Rules

- 若出现以下问题，必须重做而不是小修：
- 文本溢出或压线：
- 一侧拥挤、一侧空：
- 下三分之一误留白：
- 同一风格只剩配色差异：
- 图表像装饰而非证据：
- 图片无法说明商业判断：
```

## Gate Rules

- The visual system card must name concrete colors, font stacks, component treatments, and reject rules. Do not write only mood words such as "premium", "clean", or "young".
- The card must explain why the visual direction helps the client decide, not merely why it looks good.
- If client VI exists, translate it into usage roles instead of inventing a new palette.
- If no VI exists, use `palette-library.md` plus the selected template family style spec.
- If a style is expressive, state which pages must revert to business-clean layouts: budget, KPI, risk, legal, timeline, and acceptance pages usually need clarity over atmosphere.
- The card belongs in the presenter script or project notes. It does not need to appear as a slide unless the user asks for a design-system appendix.
- In `fast`, a compact visual-source note is enough for structure/copy drafts; create the full card before deck build or restyling.
- In `proposal`, `bid`, `style-demo`, and strong visual routes, show the card before deck build.
- In `auto`, create the card internally and summarize it in the final deliverables.

## Minimum Quality Bar

Reject the visual direction if:

- the system only changes colors while reusing the same generic card layout,
- the proof-dense page cannot remain readable at 16:9,
- the chart/table rules are missing,
- image behavior is undefined,
- the lower third has no planned role,
- the style cannot handle at least cover, mechanism, and proof-dense pages.
