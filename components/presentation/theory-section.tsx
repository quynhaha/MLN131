"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function TheorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="theory" className="py-24 relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/workers-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background/80" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Phần 1</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Cơ sở lý luận
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Liên hệ kiến thức Chương 2 - Chủ nghĩa Xã hội Khoa học về Giai cấp công nhân
          </p>
        </motion.div>

        {/* Scenario Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm">?</span>
            Dẫn nhập thực tế
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="italic border-l-4 border-primary pl-4">
              {`"Hãy cùng tưởng tượng một kịch bản như thế này: Bạn là một công nhân viên, mỗi ngày làm việc quần quật 10 đến 12 tiếng đồng hồ, vắt kiệt sức lực để chạy KPI, ép tăng ca liên tục. Nhưng đến cuối tháng, điều bạn nhận được lại là thông báo... nợ lương từ giám đốc."`}
            </p>
            <p className="italic border-l-4 border-accent pl-4">
              {`"Hoặc, sáng nay đến xưởng, bạn nhận được thông báo rằng vị trí của mình, công việc mà bạn đã gắn bó 10 năm nay, vừa chính thức bị thay thế bởi một hệ thống Trí tuệ nhân tạo (AI) và dây chuyền tự động hóa."`}
            </p>
            <p className="text-foreground font-medium text-center text-lg mt-6">
              {`"Ai sẽ là người đứng ra bảo vệ công nhân?"`}
            </p>
          </div>
        </motion.div>

        {/* GCCN Definition */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Khái niệm Giai cấp công nhân
            </h3>
            <p className="text-muted-foreground">
              Theo Chủ nghĩa Mác - Lênin: GCCN là một tập đoàn xã hội ổn định, hình thành và phát triển 
              cùng với quá trình phát triển của nền công nghiệp hiện đại. Họ là giai cấp đại diện cho 
              lực lượng sản xuất tiên tiến, là lực lượng chủ yếu của tiến trình lịch sử quá độ từ 
              chủ nghĩa tư bản lên chủ nghĩa xã hội.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Đặc điểm nổi bật
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Tính tổ chức, kỷ luật rất cao
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Tinh thần cách mạng triệt để
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Đại diện cho phương thức sản xuất tiên tiến nhất
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Historical Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Sứ mệnh lịch sử của GCCN
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Xóa bỏ",
                desc: "Chế độ người bóc lột người, xóa bỏ xã hội TBCN"
              },
              {
                title: "Giải phóng",
                desc: "GCCN và toàn thể nhân dân lao động"
              },
              {
                title: "Xây dựng",
                desc: "Xã hội CSCN văn minh với chế độ công hữu về TLSX"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card rounded-xl p-4 text-center">
                <div className="text-primary font-bold text-lg mb-2">{item.title}</div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Workers Need Union */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl font-semibold text-foreground mb-6 text-center"
          >
            Vì sao công nhân cần Công đoàn?
          </motion.h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Bên yếu thế",
                desc: "Công nhân là bên yếu thế trước giới chủ. Dù là lực lượng tạo ra của cải vật chất chủ yếu, nhưng người công nhân không nắm giữ tư liệu sản xuất."
              },
              {
                number: "02",
                title: "Tổ chức đại diện",
                desc: "Người lao động cần một tổ chức có tư cách pháp nhân để thay mặt họ đứng ra đối thoại, thương lượng và đàm phán bình đẳng với giới chủ."
              },
              {
                number: "03",
                title: "Sức mạnh đoàn kết",
                desc: `"Sức mạnh của giai cấp công nhân không nằm ở tài sản cá nhân, mà nằm ở số lượng và sự đoàn kết" - Các Mác`
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
              >
                <div className="text-5xl font-black text-primary mb-4 drop-shadow-[0_0_10px_rgba(234,88,12,0.5)]">{item.number}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
