import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '唐永屹 — AI Agent 开发者',
  description: '大二在校，已有 AI 产品落地经验。熟悉 LLM 工程化、Agent 工作流和自动化工具链。',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
