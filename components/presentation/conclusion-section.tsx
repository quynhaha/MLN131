"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ConclusionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="conclusion" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background/70" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Kết luận</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Tổng kết
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <blockquote className="bg-card border-l-4 border-primary rounded-r-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed text-pretty">
              {`"Công đoàn Việt Nam không chỉ bảo vệ quyền lợi công nhân mà còn góp phần thực hiện sứ mệnh lịch sử của giai cấp công nhân trong thời kỳ mới."`}
            </p>
          </blockquote>

          <blockquote className="bg-primary/5 border-l-4 border-primary rounded-r-2xl p-6 sm:p-8">
            <p className="text-lg sm:text-xl text-foreground font-medium leading-relaxed text-pretty">
              {`"Thông qua hoạt động công đoàn, giai cấp công nhân Việt Nam tiếp tục khẳng định vai trò tiên phong và thực hiện sứ mệnh lịch sử của mình trong thời kỳ công nghiệp hóa, hiện đại hóa và hội nhập quốc tế."`}
            </p>
          </blockquote>
        </motion.div>

        {/* Key Takeaways */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Những điểm chính cần nhớ</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Công đoàn là tổ chức bảo vệ quyền lợi người lao động",
              "Công đoàn VN mang đặc trưng vừa bảo vệ NLĐ, vừa xây dựng đất nước",
              "Sứ mệnh GCCN: Xóa bỏ bóc lột, giải phóng và xây dựng CNXH",
              "Cần đổi mới mô hình công đoàn trong thời đại mới"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl"
              >
                <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shrink-0">
                  {index + 1}
                </span>
                <span className="text-muted-foreground text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
              Cảm ơn đã lắng nghe!
            </h3>
            <p className="text-muted-foreground">
              Bài thuyết trình Chương 2 - SỨ MỆNH LỊCH SỬ CỦA GIAI CẤP CÔNG NHÂN
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
