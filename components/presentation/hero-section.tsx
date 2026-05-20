"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Chương 2 - Chủ nghĩa Xã hội Khoa học
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-tight"
        >
          Công đoàn Việt Nam
          <span className="block text-primary mt-2 whitespace-nowrap">Người bảo vệ quyền lợi công nhân</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty"
        >
          Tìm hiểu về vai trò của Công đoàn trong việc bảo vệ giai cấp công nhân, 
          phân tích sự khác biệt với nghiệp đoàn tư bản, và sứ mệnh lịch sử trong thời đại mới
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { label: "Vai trò", desc: "Công đoàn", href: "#vietnam" },
            { label: "So sánh", desc: "Các mô hình", href: "#world" },
            { label: "Thực trạng", desc: "Hiện nay", href: "#status" },
            { label: "Sứ mệnh", desc: "GCCN", href: "#theory" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-card border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-card/80 transition-colors cursor-pointer"
            >
              <div className="text-primary font-semibold">{item.label}</div>
              <div className="text-muted-foreground text-sm">{item.desc}</div>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <button
            onClick={() => document.getElementById("theory")?.scrollIntoView({ behavior: "smooth" })}
            className="animate-bounce"
          >
            <svg
              className="w-8 h-8 text-muted-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
