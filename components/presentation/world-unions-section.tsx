"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function WorldUnionsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="world" className="py-24 relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/world-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Phần 2</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Các mô hình Công đoàn trên thế giới
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sự hình thành và phát triển của nghiệp đoàn tại các quốc gia
          </p>
        </motion.div>

        {/* Western Trade Unions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  🇬🇧
                </span>
                Nghiệp đoàn Tây Âu
              </h3>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Bối cảnh ra đời</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Cuối thế kỷ XVIII - đầu thế kỷ XIX, Cách mạng công nghiệp bùng nổ tại Anh, Pháp và Đức
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Công nhân làm việc trong điều kiện khắc nghiệt: thời gian kéo dài, lương thấp, không có bảo hiểm
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Mâu thuẫn giữa công nhân và giới chủ ngày càng gay gắt
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Sự hình thành</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Công nhân liên kết thành các tổ chức nghiệp đoàn (trade union)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Mục tiêu: bảo vệ quyền lợi, tăng lương, giảm giờ làm, cải thiện điều kiện lao động
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Đây là bước phát triển đầu tiên của phong trào công nhân trong xã hội tư bản
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chinese Trade Union */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  🇨🇳
                </span>
                Công đoàn Trung Quốc (ACFTU)
              </h3>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Bối cảnh và sự ra đời</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Đầu thế kỷ XX, Trung Quốc đẩy mạnh công nghiệp hóa
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Năm 1925: Tổng Công hội Toàn quốc Trung Quốc (ACFTU) được thành lập
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Sau năm 1949, công đoàn được củng cố và phát triển mạnh
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Đặc điểm</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Hoạt động dưới sự lãnh đạo của Đảng Cộng sản
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Không chỉ bảo vệ người lao động mà còn góp phần ổn định xã hội
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Mang vai trò kinh tế và vai trò chính trị - xã hội quan trọng
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
