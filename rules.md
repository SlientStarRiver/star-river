# rules.md

## Project
star-river — 个人博客/作品集网站，基于 Creative Portfolio 模板改造，替换为用户个人信息。

## Tech Constraints
- Next.js 15 App Router（已有模板结构）
- TypeScript strict
- Tailwind CSS + shadcn/ui（已有组件库）
- pnpm 包管理
- 不引入额外后端/数据库，纯静态前端

## Coding Style
- 组件：PascalCase 文件名 + 命名导出
- 工具函数：camelCase
- Tailwind 优先，不写自定义 CSS（除非必要动画）
- 组件拆分粒度保持与参考源码一致

## Content Rules
- 所有个人信息从参考模板的硬编码替换为用户真实信息
- 社交链接替换为用户真实链接
- 项目展示替换为用户真实项目
- 技能列表替换为用户真实技能
- 工作经历替换为用户真实经历

## Non-Goals
- 不做 CMS / 后端 API
- 不做用户认证
- 不做博客文章系统（纯作品集展示）
- 不做 SSR/ISR 动态渲染（静态导出即可）
