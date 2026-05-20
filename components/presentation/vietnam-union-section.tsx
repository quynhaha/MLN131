"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function VietnamUnionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="vietnam" className="py-24 relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/vietnam-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/75 via-background/65 to-background/75" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium">Phần 3</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Công đoàn Việt Nam
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mô hình công đoàn mang đặc trưng riêng phù hợp với điều kiện lịch sử, chính trị và phát triển của đất nước
          </p>
        </motion.div>

        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8 mb-12"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">Khái niệm (Luật Công đoàn 2024)</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Công đoàn Việt Nam là <span className="text-foreground font-medium">tổ chức chính trị - xã hội rộng lớn</span> của 
            giai cấp công nhân và người lao động, được thành lập trên cơ sở <span className="text-foreground font-medium">tự nguyện</span>, 
            dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, trực thuộc Mặt trận Tổ quốc Việt Nam.
          </p>
        </motion.div>

        {/* History Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Lịch sử hình thành</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-8">
              {[
                {
                  year: "Cuối TK XIX",
                  title: "Giai cấp công nhân ra đời",
                  desc: "GCCN Việt Nam hình thành trong quá trình khai thác thuộc địa của thực dân Pháp",
                  image: null
                },
                {
                  year: "Đầu TK XX",
                  title: "Các tổ chức đầu tiên",
                  desc: "Công nhân dần liên kết đấu tranh, hình thành Hội Ái hữu, Hội Tương tế, Công hội",
                  image: null
                },
                {
                  year: "1920",
                  title: "Công hội Ba Son",
                  desc: "Tôn Đức Thắng thành lập Công hội Ba Son, mở đầu phong trào công hội Việt Nam",
                  image: "/images/cong-hoi-ba-son.jpg"
                },
                {
                  year: "28/7/1929",
                  title: "Tổng Công hội Đỏ Bắc Kỳ",
                  desc: "Dưới sự lãnh đạo của Nguyễn Đức Cảnh, đánh dấu sự ra đời của tổ chức Công đoàn Việt Nam",
                  image: "/images/tong-cong-hoi-do-bac-ky.jpg"
                }
              ].map((item, index) => (
                <div key={index} className={`flex items-center gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card border border-border rounded-xl p-4 inline-block max-w-md">
                      <div className="text-primary font-bold text-lg">{item.year}</div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                      {item.image && (
                        <div className="mt-3 rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-primary shrink-0 relative z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Vai trò của Công đoàn Việt Nam</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🛡️",
                title: "Bảo vệ quyền lợi người lao động",
                items: ["Tiền lương, bảo hiểm xã hội", "Hợp đồng lao động", "Điều kiện làm việc", "Hỗ trợ khi xảy ra tranh chấp"]
              },
              {
                icon: "📢",
                title: "Đại diện tiếng nói công nhân",
                items: ["Cầu nối giữa người lao động, doanh nghiệp, Nhà nước", "Kiến nghị, đối thoại", "Thương lượng tập thể"]
              },
              {
                icon: "📚",
                title: "Giáo dục chính trị - tư tưởng",
                items: ["Nâng cao ý thức giai cấp", "Tuyên truyền pháp luật", "Xây dựng tác phong công nghiệp", "Nâng cao trình độ nghề nghiệp"]
              },
              {
                icon: "🚀",
                title: "Đồng hành CNH - HĐH",
                items: ["Đào tạo kỹ năng nghề", "Phát triển công nhân tri thức", "Thích ứng công nghệ mới", "Sản xuất hiện đại"]
              }
            ].map((role, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{role.icon}</span>
                  <h4 className="font-semibold text-foreground">{role.title}</h4>
                </div>
                <ul className="space-y-2">
                  {role.items.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Workers Rights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Quyền của người lao động</h3>
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Thành lập, gia nhập và hoạt động công đoàn",
                "Được công đoàn bảo vệ quyền lợi",
                "Được hỗ trợ tư vấn pháp lý",
                "Lao động nước ngoài (từ 12 tháng) được tham gia công đoàn cơ sở"
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-sm text-muted-foreground">{right}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">So sánh các mô hình Công đoàn</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted/50">
                  <th className="border border-border p-4 text-left text-foreground font-semibold">Tiêu chí</th>
                  <th className="border border-border p-4 text-center text-foreground font-semibold">Nghiệp đoàn Tây Âu</th>
                  <th className="border border-border p-4 text-center text-foreground font-semibold">Công đoàn TQ</th>
                  <th className="border border-border p-4 text-center text-foreground font-semibold bg-primary/10">Công đoàn VN</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Ra đời trong bối cảnh</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">CNTB</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">XHCN</td>
                  <td className="border border-border p-4 text-center text-muted-foreground bg-primary/5">Cách mạng giải phóng dân tộc</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Mục tiêu chính</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Quyền lợi lao động</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Ổn định xã hội</td>
                  <td className="border border-border p-4 text-center text-muted-foreground bg-primary/5">Bảo vệ NLĐ, xây dựng đất nước</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Quan hệ với Nhà nước</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Khá độc lập</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Dưới Đảng</td>
                  <td className="border border-border p-4 text-center text-muted-foreground bg-primary/5">Dưới Đảng</td>
                </tr>
                <tr>
                  <td className="border border-border p-4 text-muted-foreground">Vai trò với công nhân</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Đấu tranh quyền lợi</td>
                  <td className="border border-border p-4 text-center text-muted-foreground">Quản lý và hỗ trợ</td>
                  <td className="border border-border p-4 text-center text-muted-foreground bg-primary/5">Đại diện và đồng hành</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
