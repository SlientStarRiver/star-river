# tech-stack.md

## Frontend
| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.2.4 | 框架（App Router） |
| React | 19 | UI 库 |
| TypeScript | 5 | 类型安全 |
| Tailwind CSS | 3.4 | 样式 |
| shadcn/ui | latest | 组件库（Radix UI + CVA） |
| Framer Motion | latest | 动画 |
| Lucide React | 0.454 | 图标 |

## Dev Tools
| 工具 | 用途 |
|------|------|
| pnpm | 包管理 |
| ESLint | 代码检查（next lint） |
| PostCSS | CSS 处理 |

## Deployment
- 静态导出（`next export`）或 Vercel 部署
- 无后端依赖

## Rationale
- 直接复用参考模板技术栈，零迁移成本
- shadcn/ui 组件可按需引入，不增加包体积
- Tailwind 原子化样式，与模板风格一致
