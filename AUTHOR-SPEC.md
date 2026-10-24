# Chuluu Skills — 作者与 README 统一规范

> 适用：Chuluu 名下所有 AI Agent skill（`proposal-ppt`、`business-website` 及未来新增）。
> 目标：署名、License、`skill.json`、README 框架、交叉导流在所有 skill 之间完全一致，全局只出现 **Chuluu**，不出现公司名。

> **本规范自身的放置**：每个 skill 根目录放一份 `AUTHOR-SPEC.md`（canonical 也可放 `ChuluuMGL/.github` profile 仓库）。本文档已按此规范放在 `proposal-skill/AUTHOR-SPEC.md`。

---

## 1. 作者身份（canonical，所有 skill 统一）

| 字段 | 值 |
|---|---|
| **Author / Copyright holder** | **Chuluu** |
| **URL** | https://github.com/ChuluuMGL |

- **所有 skill 的版权持有人和 author 字段一律写 `Chuluu`**，全局统一，不出现公司名、不出现 "Maintained by" 行。
- 理由：你明确说过 "copyright 写我，也就是 Chuluu"；开源 skill 以个人名义发布最干净。日后若要转公司持有，再全局替换，但**个人与公司不能混用**。

## 2. LICENSE（每个 skill 根目录，内容完全一致）

```
MIT License

Copyright (c) 2026 Chuluu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 3. `skill.json` author 字段（统一用对象，不用字符串）

```json
"version": "<x.y.z>",
"author": { "name": "Chuluu", "url": "https://github.com/ChuluuMGL" },
"license": "MIT",
"repository": "https://github.com/ChuluuMGL/<skill-name>"
```

- **不要**再用 `"author": "by Chuluu"` 这种字符串写法。
- 所有 skill 的 `author` 字段逐字一致（只有 `repository` 里的 `<skill-name>` 不同）。

## 4. README 框架（中英两份，结构逐节一致）

固定章节顺序（可按 skill 性质增删"核心能力"章节，但首尾骨架不变）：

1. **Hero**：一句定位 slogan + 一句价值描述。语言切换链接在最上面。
2. **Badges**：统一四枚——`Skill` / `Version`（读 skill.json）/ `License: MIT` / `Workflow`（或领域 badge 如 `QA`、`SEO`）。
3. **Demo / 证明**：图片直出（3up 拼图或截图），**不**用第三方 githack 跳转。
4. **Why this skill**：差异化定位（一句话能说清"为什么不是又一个同类工具"）。
5. **What you get / 能做什么**：输出物表。
6. **Use cases / 适用场景**：表。
7. **核心能力章节**：按 skill 而定（proposal-ppt 是风格库，business-website 是 sitemap/SEO）。
8. **Workflow**：精简阶段表（≤7 行）。
9. **Runtime compatibility**：精简成一段话 + 4 个 bullet，**不**要逐 agent 大表。
10. **Installation**：AI 安装 + 手动表（各 agent 路径）。
11. **Quick start**：1 条 copy-paste prompt（其余 prompt 挪进 `references/`）。
12. **Design principles**：≤7 条。
13. **FAQ**：≤5 条。
14. **Included files**：表。
15. **Related skills**：交叉导流（见 §5）。
16. **License + 署名行**（见 §6）。

- 目录树（`Directory Structure`）**不要**——和 Included files 表重复。
- README 目标 ≤ 250 行。

## 5. 交叉导流（Related skills，所有 skill 互相指向）

每个 skill 的 Related 都列另外的 Chuluu skill，描述统一：

- `proposal-skill` — 商业提案逻辑、PPT 与交互式网页、主讲稿。https://github.com/ChuluuMGL/proposal-skill
- `business-website-skill` — 长期营销官网。https://github.com/ChuluuMGL/business-website-skill

复用关系写明：proposal 和 business-website 共享"客户资料 → 提案 deck + 官网"的素材复用。新增 skill 上线时，把它加进所有已有 skill 的 Related 列表。

## 6. 署名行（README 末尾的 Technical Specs 表）

统一写法：

```
| Author     | Chuluu                    |
| Repository | ChuluuMGL/<skill-name>    |
| License    | MIT                       |
```

**禁止**再出现 `Author: by Chuluu`、`Author: YUEYU TECH`、或任何公司名作 Author 的旧写法。

## 7. 输出物署名（用户交付物里）

默认**不加**任何作者信息——客户的提案/官网必须像客户自己的作品。

仅当用户**明确 opt-in**（公开分享、作品集、演讲）时，在交付物末页/页脚加**一行可删**信用：

> *Made with the `<skill-name>` skill · github.com/ChuluuMGL/<skill-name>*

规则：默认关；仅末页；一行；可删；客户比稿/招标场景未经允许绝不加。

## 8. 版本与发布

- 版本号写在 `skill.json` 的 `version`，README badge 读同一个值，不写死。
- 每次发布：本地改完 → `git add -A && git commit && git push` → 打 tag → Release。**不提交就不算发布**（避免远端旧版把本地改动同步覆盖回来）。
- 重大破坏性改动升 minor（0.3→0.4），内容/文档改动升 patch（0.3.0→0.3.1）。

---

## 落地清单

- [x] 历史 v0.3.0 记录（现已更名为 `proposal-skill`）：`author: Chuluu`（对象）、LICENSE `© Chuluu`、README Author 行 `Chuluu`、无公司痕迹。本地 v0.3.0 已就绪，待 commit + push 覆盖线上 v0.1.7。
- [ ] `business-website-skill`：按本规范核对 author/license/README 框架/Related，清掉任何公司名。
- [ ] 每个新增 skill 发布前对照本规范逐条检查。
