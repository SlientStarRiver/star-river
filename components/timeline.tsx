"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const phases = [
  {
    title: "Phase 1 — 夯实基础",
    period: "2026.05",
    description: "TypeScript 类型安全、Git 分支策略与 PR 工作流、HTTP/RESTful API 理解、Linux 基础命令与权限管理。",
  },
  {
    title: "Phase 2 — 深入 AI Agent",
    period: "2026.06",
    description: "LangChain/CrewAI 框架核心概念（Chain、Tool、Memory）、RAG 全流程、Function Calling 机制、Prompt Engineering 进阶（CoT、ReAct、Few-shot）。",
  },
  {
    title: "Phase 3 — 项目实战",
    period: "2026.06 - 07",
    description: "完善 love-request 上线可用、新做一个 AI Agent Demo 开源到 GitHub、部署上线（Vercel/Railway）、写 1-2 篇技术博客。",
  },
  {
    title: "Phase 4 — 冲刺实习",
    period: "2026.07",
    description: "LeetCode Hot 100 刷题、STAR 法则准备项目讲解、八股文复习（HTTP/数据库/Python GIL/JS 异步）、投递有 AI 产品线的目标公司。",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {phases.map((phase, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{phase.title}</h3>
                <div className="text-zinc-400 mb-4">{phase.period}</div>
                <p className="text-zinc-300">{phase.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
