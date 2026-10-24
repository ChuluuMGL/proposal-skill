# proposal-skill

> **一套商业提案方法，支持可编辑 PPT 与交互式 HTML。**
> 从客户证据出发，串起诊断、策略、案例、交付、排期与报价。保留原有 PPT 设计和终稿精修能力，增加响应式网页、目的明确的交互与分形式验收。
>
> 由 **Chuluu** 创建并维护。通过真实项目逐步改进，不承诺一次生成就无需修改。

中文 | [English](./README.md)

[![Skill](https://img.shields.io/badge/AI%20Skill-proposal-0E5E43)](./SKILL.md)
[![Version](https://img.shields.io/badge/version-0.6.0-green)](./skill.json)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)
[![QA](https://img.shields.io/badge/QA-audited%20deck-0E5E43)](./scripts/audit_proposal_pptx.py)
[![Workflow](https://img.shields.io/badge/workflow-stage--gated-purple)](./references/workflow.md)
[![by Chuluu](https://img.shields.io/badge/by-Chuluu-0E5E43)](https://github.com/ChuluuMGL)

### 0.6.0 新增能力

- 统一入口 `$proposal`：共用提案逻辑，PPT 和网页分别组织版式。
- [诊断与策略、交付、报价的对应检查](references/argument-traceability.md)，以及[匿名修改前后案例](examples/proposal-revisions.md)。
- [响应式网页流程](references/web-proposals.md)和[按表达目的选择交互](references/web-interactions.md)。
- [可运行网页组件](templates/web-components/README.md)：循环图、图片放大、排期、询盘演示、同屏价格切换、章节导航和附录展开。它是中性的技术起点，不是已获客户认可的视觉模板。
- [持续复盘方法](references/iteration-learning.md)：积累通用规则与验证过的组件，客户资料和专属方法留在客户项目。

**旧版迁移：** 原仓库名为 `proposal-ppt-skill`，部分旧元数据使用 `chuluu-proposal-ppt`。新入口统一为 `$proposal`。已有安装先保留本地修改，再更新到本版本并使用单一 `proposal` 技能目录，刷新工具的技能列表；不要同时安装重复的新旧版本。无需改动客户提案仓库或生产网站。

**网页调用示例：** “用 $proposal 根据 brief 制作响应式网页提案。先把诊断与策略、交付对应起来，再选择必要交互，检查桌面、手机和减少动态效果状态。本次不部署。”

### Demo

当前已公开实装的 3 个风格家族，各提供 3 页样张（封面 · 赢标主张 · 预算 / 验收），点开图片可看大图：

**premium-boardroom** — 严格网格、董事会文件感、高信任 proof 页面。
[![premium-boardroom · 封面 / 赢标主张 / 预算](./assets/demo/premium-boardroom-3up.png)](./assets/demo/premium-boardroom-3up.png)

**editorial-brand** — 杂志式字体、编辑节奏、高端消费品气质。
[![editorial-brand · 封面 / 赢标主张 / 预算](./assets/demo/editorial-brand-3up.png)](./assets/demo/editorial-brand-3up.png)

**tech-launch** — 产品 / 界面 hero、发布会清晰度、KPI 与验收证明。
[![tech-launch · 封面 / 赢标主张 / 验收](./assets/demo/tech-launch-3up.png)](./assets/demo/tech-launch-3up.png)

> 需要完整交互时，HTML 源文件在 [`docs/demo/`](./docs/demo)，可本地打开。真实客户摄影已替换为概念视觉；最终 `.pptx` 保真度取决于宿主 runtime 的 presentation 后端。

### 风格库一览

客户没有 VI 时，`proposal` 直接路由到下面 **4 个核心模板家族**。不做"100 种风格"——4 个覆盖完整提案，把精力留给论证而不是视觉兔子洞。

**核心家族 · 规则覆盖**

| 家族 | 适合项目 |
|---|---|
| `premium-boardroom` | B2B、咨询、金融、正式竞标、年度服务 |
| `editorial-brand` | 品牌营销、时尚、美妆、高端消费、文旅 |
| `tech-launch` | AI、SaaS、产品发布、金融科技、技术方案 |
| `consumer-lifestyle` | FMCG、食品饮料、零售、消费品、达人内容 |

> 4 个家族的完整规则见 [`references/style-template-strategy.md`](./references/style-template-strategy.md)。当前 `premium-boardroom` 与 `tech-launch` 已有可复用主题，`editorial-brand` 有独立 HTML 样稿，`consumer-lifestyle` 仍只有规范，不宣称已经完成公共主题。任何新风格上线前必须先通过三页样张门槛（章节 / 正文 / 密集页）。

### 为什么是这个 Skill，而不是又一个“把 PPT 做好看”的工具

比稿的胜负手在**论证**，不在装饰。漂亮的 deck 配上弱主张，会输给朴素 deck 配上锐利主张；但朴素 deck 根本没人看。所以这个 Skill 把精力压在真正决定输赢的部分（**赢标主张**、proof object、预算边界、风险消除），把高级设计定位成“被允许发言”的入场券，而不是产品本身。

它**天然反幻觉**：从不编造数据、案例、报价、奖项或权限，也从不假装已经交付 PPTX、其实只给了 markdown / HTML / PDF。交付物还**可被客观审计** —— 见[客观质检](#客观质检)。

### 这个 Skill 能做什么

`proposal` 可以把杂乱的提案输入，整理成一套商业提案交付包：

| 输出 | 内容 |
|---|---|
| 可编辑 `.pptx` | 一份有完整叙事、逐页 proof object、视觉系统和 QA 标准的商业提案 PPT。 |
| 逐字稿 `.md` | 提案总逻辑、章节讲述节奏、逐页话术、转场句和待确认信息。 |
| 缺失信息清单 | 明确列出不能编造、需要客户补充或进一步确认的信息。 |
| 风格与资产计划 | 可选的强风格系统、字体搭配、素材计划、AI 图像或 HTML/SVG 背景路线。 |

### 目录

[适用场景](#适用场景) · [工作流程](#工作流程) · [客观质检](#客观质检) · [工作模式](#工作模式) · [风格模板家族](#风格模板家族) · [强风格工作流](#强风格工作流) · [提案路线](#提案路线) · [运行环境兼容性](#运行环境兼容性) · [安装](#安装) · [推荐提示词](#推荐提示词) · [设计原则](#设计原则) · [常见问答](#常见问答) · [包含文件](#包含文件) · [相关 Skill](#相关-skill)

---

## 适用场景

| 场景 | 典型需求 |
|---|---|
| 商业提案 PPT | “根据这个客户 brief 做一份提案 PPT。” |
| 比稿 / 竞标 / RFP / 招标提案 | “把招标文件整理成 pitch deck 和逐字稿。” |
| 年度运营规划 | “做一份年度社媒/内容/账号运营方案。” |
| 品牌营销 / 社媒内容方案 | “做品牌 campaign、社媒运营或内容机制提案。” |
| 直播、电商、活动执行方案 | “做包含预算、SOP、风险、KPI 的项目执行提案。” |
| AI / SaaS / 数字化咨询 | “做包含路线图、架构图、价值模型的解决方案 PPT。” |
| 招商、合作、资源整合提案 | “做资源包、权益包、合作模式和激活场景提案。” |
| 已有 PPT 优化 | “优化现有 PPT 的逻辑、标题、proof object 和逐字稿。” |

---

## 工作流程

这个 Skill 采用专业提案生产中常见的阶段化工作流：

| 阶段 | 检查门 | 产物 |
|---|---|---|
| 0. 启动与路由 | 判断工作模式、提案类型、页数深度、视觉来源和交付物。 | 启动判断 |
| 1. Brief 审计 | 区分已确认事实和缺失信息。 | Brief 审计 |
| 2. 提案蓝图 | 建立赢标主张、章节结构、逐页规划和 proof object。 | 待确认蓝图 |
| 3. 逐页文案 | 撰写页面标题、正文、图表/矩阵/样稿说明。 | 逐页内容草稿 |
| 4. Deck 绘制 | 按选定格式生成或修改提案 deck。 | `.pptx` / `.html` / `.pdf` |
| 5. 逐字稿 | 撰写提案逻辑和逐页讲述话术。 | `.md` 逐字稿 |
| 6. 最终 QA | 检查逻辑、证据、视觉、预算、KPI 和风险。 | 可交付文件包 |

默认模式是 `guided`：Agent 会先输出提案蓝图，等待确认后再生成 deck。
如果你要求“直接生成”，它会进入 `auto` 模式，并把缺失信息标注为“待确认”。

---

## 客观质检

交付物由客观脚本检查，而不是只靠 Agent 自评。[`scripts/audit_proposal_pptx.py`](./scripts/audit_proposal_pptx.py) 在**不依赖 Agent** 的情况下校验成品 deck：

- `.pptx` 是合法的 Office Open XML 包（zip + `[Content_Types].xml`）；
- 实际页数（页数过少会告警）；
- 占位符泄漏（`待补充` / `TODO` / `TBC` / `lorem ipsum` / …）不应出现在交付的 deck 里；
- 逐字稿 notes 覆盖率、`.md` 脚本与 deck 页数对齐；
- 过大的空白“死框”区域（需 `python-pptx`）。

```bash
# 用逐字稿校验一份已交付的 deck
python3 scripts/audit_proposal_pptx.py outputs/proposal.pptx --script outputs/proposal.md

# 校验内置空白模板（允许填空标记）
python3 scripts/audit_proposal_pptx.py assets/minimal-proposal-template.pptx --template
```

纯标准库（`zipfile` + `xml`）；`python-pptx` 可选，装上后解锁更深的空白框检测。这让“禁止假装已交付 PPTX”这条 Hard Rule 从“靠自觉”变成“靠脚本可验证”。

---

## 工作模式

| 模式 | 适用情况 | 行为 |
|---|---|---|
| `guided` | 需要先确认策略和结构。 | 先输出审计和蓝图，确认后再做 deck。 |
| `auto` | 需要快速得到完整初稿。 | 直接生成完整 deck（`.pptx`、`.html` 或 `.pdf`）和逐字稿，假设项明确标注。 |
| `edit` | 已有 PPTX 需要优化。 | 保留原视觉系统，除非你要求重新设计。 |
| `audit` | 只需要审阅或诊断。 | 输出问题、风险和修改建议，不生成新 PPT。 |

---

## 强风格工作流

如果你要求“像素风、时尚杂志风、发布会极简、日式极简、日杂拼贴、油画、Web3 科技”等强视觉方向，Skill 不会只换一套颜色。

它会先建立 Style DNA，并优先做 3 页样张：

| 样张 | 用途 | 检查重点 |
|---|---|---|
| 封面 / big idea 页 | 验证风格峰值。 | 不看风格名也能认出视觉语言。 |
| 证据 / 机制页 | 验证风格能承载商业证明。 | proof object 的组件形态真的改变。 |
| 密集业务页 | 验证预算、KPI、风险、排期等页面可读。 | 风格不牺牲可读性和验收边界。 |

如果一个风格只适合封面或章节页，Skill 会把它限制为表达型页面；预算、KPI、风险和 Brief 覆盖页会回到更清晰的商务结构。

强风格是**例外**，不是主线：只在你明确要求、且能提供素材或艺术指导时才做；否则一律走上面 4 个核心家族。任何强风格上线前都要先过三页样张门槛。

---

## 运行环境兼容性

这个 Skill 不是独立 PPTX 渲染引擎——它提供提案策略、页面规划、视觉系统、逐字稿和 QA 闸门。

- **能跑在哪**：任何能读 `SKILL.md` + 能写文件的环境（Claude Code、Codex、Cursor、Windsurf、Trae、Qoder 等通用 Agent）。Claude Code 和 Codex 已实测；其余理论可用、未逐一验证。
- **PPTX**：需要后端（`python-pptx` / `pptxgenjs` / Office 自动化 / 宿主 presentation 工具）。
- **HTML**：需要文件生成与浏览器验证能力，可选响应式网页或固定画布演示。**PDF** 另需导出或打印后端；用户明确要求 PPTX 时不能擅自替换。
- **连 HTML 都做不了时**：降级为蓝图、逐页文案、视觉规格。

完整说明见 [`references/runtime-compatibility.md`](./references/runtime-compatibility.md)。

---

## 提案路线

这个 Skill 不会把所有提案塞进同一套模板，而是根据 brief 选择主路线：

| 路线 | 适合项目 |
|---|---|
| 品牌、社媒与内容营销 | 品牌 campaign、社媒运营、创意概念、内容机制。 |
| 年度运营与代运营服务 | 常态化运营、账号管理、B2B 内容资产、客户经营。 |
| 项目执行、直播电商与活动 | 直播、电商、活动执行、重制作项目、复杂交付。 |
| 咨询、数字化、AI、SaaS | 转型咨询、AI 工具、SaaS 平台、工作流自动化。 |
| 招商、赞助与资源整合 | 赞助、渠道合作、联合营销、权益包和资源包。 |

完整路由逻辑见 [`references/proposal-routes.md`](./references/proposal-routes.md)。

---

## 包含文件

| 文件 / 目录 | 用途 |
|---|---|
| [`SKILL.md`](./SKILL.md) | Skill 核心元数据和主指令。 |
| [`references/workflow.md`](./references/workflow.md) | 阶段化工作流、检查门和推荐提示词。 |
| [`references/proposal-routes.md`](./references/proposal-routes.md) | 提案类型路由和章节结构。 |
| [`references/page-types.md`](./references/page-types.md) | 页型库和 proof object 标准。 |
| [`references/layout-rhythm.md`](./references/layout-rhythm.md) | 页面密度、留白均衡和整套 PPT 节奏规则。 |
| [`references/visual-system.md`](./references/visual-system.md) | 视觉方向、字体、版式、图表和截图规范。 |
| [`references/visual-system-card.md`](./references/visual-system-card.md) | 正式绘制前必须输出的视觉系统卡：颜色、字体、图片、图表、模块、密度和重做规则。 |
| [`references/palette-library.md`](./references/palette-library.md) | 无客户 VI 时使用的高级默认配色预设。 |
| [`references/style-template-strategy.md`](./references/style-template-strategy.md) | 4 个公开风格模板家族、Style DNA 合约和三页样张门槛。 |
| [`references/font-system.md`](./references/font-system.md) | 免费可商用字体搭配和 fallback。 |
| [`references/output-contract.md`](./references/output-contract.md) | PPTX 和逐字稿的输出格式要求。 |
| [`references/runtime-compatibility.md`](./references/runtime-compatibility.md) | Agent 兼容性、PPTX 后端要求和降级路径。 |
| [`references/quality-check.md`](./references/quality-check.md) | 交付前 QA 清单和常见失败模式。 |
| [`scripts/audit_proposal_pptx.py`](./scripts/audit_proposal_pptx.py) | 客观交付质检 —— 校验 pptx、页数、占位符泄漏和逐字稿对齐。 |
| [`assets/minimal-proposal-template.pptx`](./assets/minimal-proposal-template.pptx) | 中性 fallback PowerPoint 模板。 |
| [`assets/demo/`](./assets/demo) | 三套风格家族的渲染概念图（见顶部 Demo）。 |
| [`templates/style-specs/`](./templates/style-specs/) | 核心模板家族的颜色、字体、图片、图表、表格、模块和重做规则。 |
| [`agents/openai.yaml`](./agents/openai.yaml) | Codex / OpenAI 风格 Skill 界面元数据。 |
| [`skill.json`](./skill.json) | 供 Skill 目录、市场和其他 Agent 读取的机器可读元数据。 |

fallback 模板只在没有客户 VI、没有参考 PPT、也没有明确视觉方向时使用，不会强制套用。

---

## 安装

### 让 AI Agent 帮你安装

你可以直接对支持代码操作的 AI Agent 说：

> 帮我安装 proposal skill，仓库地址：https://github.com/ChuluuMGL/proposal-skill

### 手动安装

| Agent / IDE | 建议 Skill 目录 |
|---|---|
| Codex | `~/.codex/skills/proposal/` |
| Claude Code | `.claude/skills/proposal/` |
| Cursor | `.cursor/skills/proposal/` |
| Qoder | `.qoder/skills/proposal/` |
| Trae | `.trae/skills/proposal/` |
| Windsurf | `.windsurf/skills/proposal/` |
| 通用 Agent | `.agents/skills/proposal/` |

示例：

```bash
git clone https://github.com/ChuluuMGL/proposal-skill.git \
  ~/.codex/skills/proposal
```

安装后重启你的 Agent，让 Skill 元数据重新加载。

---

## 推荐提示词

### 先生成蓝图，再确认

```text
用 $proposal 根据下面 brief 做一份商业提案。

先不要生成 deck。请先输出：
1. Brief 审计 + 合规矩阵（逐条拆出评分项，标权重和来源）
2. 赢标主张
3. 章节结构
4. 逐页标题、proof object，以及每页对应哪条 brief 要求
5. 视觉系统卡（颜色/字体/图表/模块/拒绝规则）
6. 需要我确认的问题

brief:
...
```

### 直接生成 deck 和逐字稿

```text
用 $proposal 直接根据下面 brief 产出：
1. 最适合当前 runtime 的提案 deck（有 PPTX 后端则 .pptx，否则 .html）
2. 同名 Markdown 逐字稿
3. Brief 合规矩阵（作为附录）

要求：自动判断类型和页数；缺失信息标待确认；不编造数据；先出视觉系统卡再绘制页面；交付前跑合规闸门。
brief:
...
```

> 强风格提案、修改已有 PPT 的完整 prompt 见 [`references/workflow.md`](./references/workflow.md)。

---

## 设计原则

- 从客户的业务问题出发，而不是从服务商的服务清单出发。
- 每页只表达一个判断，并且必须有一个 proof object。
- 页面标题直接说明内容，按需要选择具体主题或有依据的结论，不强行写口号。
- 把推理、讲述逻辑和口播放进逐字稿，不把长段解释塞进 PPT 页面。
- 不编造数据、案例、奖项、平台权限、报价或效果结果。
- 明确标注未知信息，而不是隐藏或脑补。
- 预算、KPI、负责人、验收标准和风险边界必须可见。

## 已有客户 PPT 的终稿精修（v0.5.0）

当当前 PPTX 已包含人工改动，且用户提供逐页反馈或截图时，使用 `edit-final-polish`。该模式先保护文字、图片位置/裁切和品牌元素，再建立 story map 与反馈台账，然后分别输出技术、视觉、商业验收结论。执行入口见 `references/final-polish-workflow.md`。

程序检查通过不等于视觉或商业验收通过。

---

## 常见问答

**Q：这是 PowerPoint 模板，还是 AI Skill？**  
A：这是 AI Skill。内置 PPTX 只是中性 fallback 模板，核心价值是提案工作流、页型规划、proof object 逻辑和逐字稿结构。

**Q：它会自动生成 PPTX 吗？**  
A：可以，但需要在支持创建或编辑 PowerPoint 的 Agent 环境中使用，例如宿主 presentation tool、`python-pptx`、`pptxgenjs`、Office-compatible exporter 或 PowerPoint / Keynote / LibreOffice 自动化。没有 PPTX 后端时，说明限制并提供 HTML 等替代路线；用户明确要求 PPTX 时须先确认替代格式。

**Q：需要 MCP 服务器吗？**  
A：不需要。这是本地 Skill 包，不是 MCP Server。

**Q：能使用客户已有 PPT 模板吗？**  
A：可以。用户提供的模板、已有 PPTX 或客户 VI 优先级高于 fallback 模板。

**Q：会不会编造市场数据或案例效果？**  
A：不会。Skill 明确要求未知数据标注为待补充或待确认。

**Q：其他 Agent 可以用吗？**  
A：可以，只要对应 Agent 支持 Skill 文件夹，或能读取 `SKILL.md` 风格的 Skill 包。不同客户端安装路径不同。

---

## 技术规格

| 项目 | 说明 |
|---|---|
| Skill 名称 | `proposal` |
| 仓库 | `ChuluuMGL/proposal-skill` |
| 形态 | 本地 Skill 文件夹，包含 `SKILL.md`、references、assets 和 metadata |
| 主要输出 | 可编辑 PPTX 或交互 HTML、PDF 导出及 Markdown 主讲稿 |
| 内置资产 | 中性 fallback PowerPoint 模板 |
| PPTX 生成 | 依赖宿主 Agent 的 presentation / PPTX 后端 |
| License | MIT |
| 作者 | Chuluu |

## 相关 Skill

- [business-website-skill](https://github.com/ChuluuMGL/business-website-skill) —— 姊妹 Skill，做长期存在的营销官网。它的 Phase 1 证据地图和视觉系统可以复用到这里，同一批客户资料既能做提案 deck、又能做官网，不用重复收集。

## License

MIT. Copyright (c) 2026 Chuluu.

## Ownership

| 项目 | 值 |
|---|---|
| Copyright holder | Chuluu |
| Maintainer / GitHub publisher | [ChuluuMGL](https://github.com/ChuluuMGL) |
| Website | [github.com/ChuluuMGL](https://github.com/ChuluuMGL) |
| Notice | [NOTICE](./NOTICE) |

---

<!-- Structured Data for SEO: JSON-LD -->
<!-- {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "proposal-skill",
  "alternateName": "商业提案 PPT Skill",
  "description": "开源 AI Agent Skill，用于根据 brief、调研、预算、案例和执行计划生成阶段化商业提案 deck、视觉系统卡与逐字稿。",
  "url": "https://github.com/ChuluuMGL/proposal-skill",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "CNY",
    "description": "Skill 开源免费，MIT 协议"
  },
  "author": {
    "@type": "Person",
    "name": "Chuluu",
    "url": "https://github.com/ChuluuMGL"
  },
  "softwareVersion": "0.6.0"
} -->
