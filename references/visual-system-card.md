# Compact Visual System Card

Use this gate before drawing a new deck or restyling an existing one. Its job is to lock a small number of visual decisions early, not create a design document for its own sake.

The card is required when:

- no strict client VI or reference deck exists,
- a public template family or strong visual route is selected,
- the deck includes images, charts, screenshots, or proof-dense pages,
- a previous draft had inconsistent style, crowding, weak contrast, bad crops, or repeated layouts.

If a strict client template exists, inherit it and record only the rules needed to edit safely.

## Required Card

Keep the completed card to roughly one screen or one page.

```markdown
## 视觉系统卡

### 1. 视觉来源与方向

- 来源优先级：客户 VI / 参考稿 / 模板家族 / 自定义方向
- 选定方向：
- 商业理由：
- 禁止偏离：

### 2. 色彩与字体

| 角色 | 选择 | 使用规则 |
|---|---|---|
| 主背景 / 深色背景 |  |  |
| 主文字 / 次级文字 |  |  |
| 主色 / 强调色 / 风险色 |  |  |
| 标题 / 正文 / 数字 / 脚注 |  |  |

### 3. 三类页面

| 页面 | 视觉语法 | 主要证明对象 | 密度 |
|---|---|---|---|
| 章节 / 转场 |  |  | breathing |
| 正文 / 论证 |  |  | standard |
| 证据 / 密集页 |  |  | proof-dense |

### 4. 图片、图表与模块

- 图片来源、比例、裁切焦点、字幕方式：
- 图表、表格、模型图的统一样式：
- 同构页面需要统一的高度、基线、间距：
- 深色页面的对比度与强调色限制：

### 5. Reject Rules

- 章节页像普通正文页：
- 三类页面使用同一个卡片模板：
- 文字溢出、异常换行、贴线或对比不足：
- 图片主体裁偏、抠图粗糙、图片与结论脱节：
- 同构页面的表格/图片高度或间距不一致：
- 下三分之一无意留白或靠色块填空：
```

## Gate Rules

- Use concrete colors, font stacks, crop behavior, and reject rules. Mood words such as `高级`, `简洁`, or `年轻` are not decisions.
- Explain how the direction helps the client understand or decide; do not justify it only by appearance.
- If client VI exists, translate it into semantic roles instead of inventing a replacement palette.
- If no VI exists, use one selected template family and one palette; do not blend several families.
- Keep budget, KPI, risk, legal, timeline, and acceptance pages business-clean even when expressive pages are image-led.
- In `guided`, show the compact card before full build. In `auto`, create it internally and summarize the chosen direction in the handoff.
- The card belongs in project notes or the presenter script unless the user requests a design-system appendix.

## Minimum Quality Bar

Reject the direction if:

- it only changes colors,
- chapter, body, and proof-dense pages are not visibly differentiated,
- repeated layouts cannot align exactly,
- image behavior or proof-object behavior is undefined,
- dark pages fail readable contrast,
- the style cannot carry both a persuasive opening and a dense editable business page.
