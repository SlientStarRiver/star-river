# architecture.md

## System Overview
纯前端单页应用，无后端。所有内容硬编码在组件中，构建时生成静态页面。

```
┌─────────────────────────────────┐
│         Next.js App Router       │
│  ┌───────────────────────────┐  │
│  │  app/layout.tsx (根布局)   │  │
│  │  app/page.tsx (单页入口)   │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  components/ (业务组件)    │  │
│  │  components/ui/ (通用UI)  │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │  public/ (静态资源)        │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

## Page Sections（单页滚动）
1. **Hero** — 唐永屹 + 标语 + CTA + 社交链接 + 3D 动画
2. **About** — 个人介绍 + 照片 + 基本信息卡片
3. **Skills** — 技能网格（Badge + 熟练度）
4. **Projects** — 项目卡片网格（图片 + 描述 + 标签 + 链接）
5. **Learning Path** — 学习路线时间线（替换原 Experience 区）
6. **Contact** — 联系信息 + 表单
7. **Footer** — 版权 + 社交链接

## Content Spec（从 Obsidian 简历提取）

### Hero
- 姓名：唐永屹
- 标语：AI Agent 开发者 · 大二 CS 在读
- 副标语：能独立搭建从模型调用到产品交付的完整 pipeline，熟悉 LLM 工程化、Agent 工作流和自动化工具链。
- 社交链接：
  - GitHub: https://github.com/SlientStarRiver
  - Email: mailto:2507739200@qq.com
  - LinkedIn: 无

### About
- 学校：天津科技大学 · 计算机科学与技术 · 2024级（2028届）
- 所在地：天津
- Email：2507739200@qq.com
- 状态：Open to opportunities
- 简介段落：
  > 大二在校，已有 AI 产品落地经验。能独立搭建从模型调用到产品交付的完整 pipeline，熟悉 LLM 工程化、Agent 工作流和自动化工具链。
  > 独立完成过从模型调用到产品交付的全流程，精通 LLM 工程化、Agent 工作流和自动化工具链。
- 照片：placeholder（后续替换）

### Skills（level 映射到 SkillBadge）
| 技能 | level |
|------|-------|
| Python | 60 |
| JavaScript/TypeScript | 60 |
| AI/LLM API 集成 | 70 |
| LangChain / Agent | 60 |
| Prompt Engineering | 70 |
| Node.js | 55 |
| GitHub Actions | 50 |
| Vue | 45 |
| Git | 65 |
| SQL | 50 |

### Projects（3 个项目卡片）
1. **GitHub AI 热点日报自动化**
   - 描述：每天自动抓取 GitHub Trending，用 LLM 生成中文解读推送到微信。全流程跑在 GitHub Actions 上，零服务器成本。
   - 标签：Python, GitHub Actions, LLM, PushPlus
   - 链接：https://github.com/SlientStarRiver

2. **微信点单小程序 (love-request)**
   - 描述：面向双端角色的轻量级点单工具，支持心愿发布、订单状态跟踪。独立完成后端 API 和前端 H5 页面。
   - 标签：Node.js, MySQL, 微信小程序, H5
   - 链接：无（进行中）

3. **AI Agent Skill 工具链建设**
   - 描述：封装了 5+ 个 AI Agent Skill，覆盖业务审查、极简输出、高保真原型设计等场景。在 Claude Code 和 WorkBuddy 双平台可用。
   - 标签：Claude Code, Agent, Prompt Engineering, 工具链
   - 链接：https://github.com/SlientStarRiver

### Learning Path（替换原 Experience 时间线）
使用 Timeline 组件展示四阶段学习路线：
1. **Phase 1 — 夯实基础** (2026.05)：TypeScript、Git 工作流、HTTP/RESTful API、Linux 基础
2. **Phase 2 — 深入 AI Agent** (2026.06)：LangChain/CrewAI、RAG 全流程、Function Calling、Prompt Engineering 进阶
3. **Phase 3 — 项目实战** (2026.06-07)：完善 love-request、新 Agent Demo、部署上线、技术博客
4. **Phase 4 — 冲刺实习** (2026.07)：刷算法题、项目讲解、八股文复习、投递目标公司

### Contact
- Email: 2507739200@qq.com
- GitHub: github.com/SlientStarRiver
- 状态：Open to opportunities

### Footer
- 品牌名：唐永屹
- 版权：© 2026 唐永屹. All rights reserved.

## Component Architecture
```
components/
├── creative-hero.tsx      # Hero 区 3D 动画
├── floating-nav.tsx       # 浮动导航栏
├── mouse-follower.tsx     # 鼠标跟随光效
├── scroll-progress.tsx    # 顶部滚动进度条
├── section-heading.tsx    # 统一的区块标题
├── glassmorphic-card.tsx  # 毛玻璃卡片
├── project-card.tsx       # 项目展示卡片
├── skill-badge.tsx        # 技能标签
├── timeline.tsx           # 学习路线时间线（原工作经历）
├── contact-form.tsx       # 联系表单
├── hero-animation.tsx     # Hero 动画辅助
├── theme-provider.tsx     # 主题 Provider
└── ui/                    # shadcn/ui 通用组件（60+）
```

## Data Flow
- 无 API 调用，所有数据在组件内硬编码
- 修改内容：直接编辑 `app/page.tsx` 中的文本/链接/数组
- 修改样式：Tailwind class 或 `tailwind.config.ts`
- 添加 shadcn 组件：`pnpm dlx shadcn@latest add <component>`

## Key Files
| 文件 | 职责 |
|------|------|
| `app/page.tsx` | 所有区块的内容和布局（核心修改文件） |
| `app/layout.tsx` | 根布局 + metadata（title/description） |
| `app/globals.css` | 全局样式 + CSS 变量 + 动画 keyframes |
| `tailwind.config.ts` | 主题扩展 + 动画配置 |
| `components.json` | shadcn/ui 配置 |

## UI Design Specs
> 来源：参考模板 Creative Portfolio（路径 A — 参考还原）

### 设计风格
- 深色科技感，毛玻璃（Glassmorphism）卡片
- 渐变背景（zinc-900 → black）
- 彩色光斑（blob 动画）点缀

### 色彩规范
| 用途 | 色值 | 说明 |
|------|------|------|
| Primary | #a855f7 → #ec4899 | 紫→粉渐变 |
| Background | #18181b → #000000 | zinc-900 → black |
| Text | #e4e4e7 | zinc-300 |
| Muted | #71717a | zinc-500 |
| Accent | #a855f7 | purple-500 |
| Danger | #ef4444 | red-500 |
| Success | #22c55e | green-500 |

### 字体规范
- Display: Inter (system)
- Body: Inter (system)
- 字号层级: text-5xl/md:text-7xl (H1) / text-2xl (H2) / text-lg (body) / text-sm (small)

### 组件模式
- 卡片: rounded-xl, border-zinc-800, backdrop-blur, bg-white/10
- 按钮: rounded-full, gradient bg (purple→pink), hover 反转
- 表单: bg-zinc-800/50, border-zinc-700, focus ring
- 导航: floating nav, blur backdrop

### 间距系统
- 基础单位: 4px (Tailwind 1)
- 区块间距: py-32
- 卡片内边距: p-6
- 网格间距: gap-6 ~ gap-12

### 交互模式
- 过渡动画: transition-all duration-300
- Hover: scale, opacity, color shift
- 滚动: scroll progress bar, section fade-in
- 鼠标: custom cursor follower

## External Dependencies
- 无第三方 API
- 图片使用 placeholder.svg（后续替换真实图片）
- 社交链接指向用户真实 profile
