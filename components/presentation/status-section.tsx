"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

function CountUp({ end, suffix = "", duration = 2000, isInView }: { end: number; suffix?: string; duration?: number; isInView: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isInView) return
    
    let startTime: number
    let animationFrame: number
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    
    animationFrame = requestAnimationFrame(animate)
    
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, isInView])
  
  return <span>{count}{suffix}</span>
}

export function StatusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="status" className="py-24 relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/modern-work-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-45"
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
          <span className="text-primary font-medium">Phần 4</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-2 mb-4">
            Thực trạng & Dẫn chứng thực tế
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Đánh giá hoạt động công đoàn hiện nay và liên hệ sứ mệnh lịch sử GCCN trong thời đại mới
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-green-500">✓</span> Thành tựu
          </h3>
          
          {/* Updated Stats */}
          <div className="bg-card border border-border rounded-xl p-6 mb-6">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Theo báo cáo của Tổng LĐLĐ Việt Nam, về đoàn viên công đoàn, thời điểm trước 31/5/2025 cả nước có 
              <span className="text-foreground font-semibold"> 12.297.344 </span>đoàn viên công đoàn; sau sắp xếp tổ chức bộ máy theo 
              Nghị quyết số 60-NQ/TW đến ngày 15/7/2025, cả nước còn 
              <span className="text-foreground font-semibold"> 8.642.169 </span>đoàn viên công đoàn, giảm 3.665.175 đoàn viên.
            </p>
          </div>
          
          {/* Achievement Images */}
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Li%C3%AAn%20%C4%91o%C3%A0n%20Lao%20%C4%91%E1%BB%99ng-RLIBkGuKtNeTMM6zUY3FYeOLjEtLwC.png"
                alt="Liên đoàn Lao động TP.HCM tổ chức Hội nghị tổng kết"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-muted-foreground text-sm">Liên đoàn Lao động TP.HCM tổ chức Hội nghị tổng kết phong trào công nhân viên chức-người lao động và hoạt động Công đoàn năm 2025.</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T%E1%BA%BFt%20cho%20con%20em-1NPv6gdBm6WlleRF26UJV1NAEL0cp9.png"
                alt="Chương trình Tết cho con em đoàn viên"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-muted-foreground text-sm">Liên đoàn Lao động TP.HCM tổ chức chương trình tặng quà Tết cho con em đoàn viên, người lao động.</p>
              </div>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={8} suffix=" Tr" isInView={isInView} />
              </div>
              <div className="text-muted-foreground text-sm">Đoàn viên công đoàn</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-card border border-border rounded-xl p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={2} suffix="+ Tr" isInView={isInView} />
              </div>
              <div className="text-muted-foreground text-sm">Lượt được hỗ trợ/năm (TP.HCM)</div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card border border-border rounded-xl p-6 text-center relative group cursor-pointer"
            >
              <div className="text-4xl mb-2">
                <svg className="w-10 h-10 mx-auto text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <div className="text-muted-foreground text-sm">Các hoạt động ý nghĩa hỗ trợ công nhân</div>
              
              {/* Hover tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-card border border-border rounded-xl p-4 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
                <div className="text-sm font-semibold text-foreground mb-2">Các hoạt động tiêu biểu:</div>
                <ul className="text-xs text-muted-foreground space-y-1.5 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    Tết Sum Vầy - Tặng quà Tết cho công nhân
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    Hỗ trợ COVID-19: lương thực, y tế
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    Mái ấm Công đoàn - Nhà ở cho công nhân
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    Chuyến xe nghĩa tình đưa công nhân về quê
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">-</span>
                    Hỗ trợ pháp lý miễn phí
                  </li>
                </ul>
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-border"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-amber-500">⚠️</span> Hạn chế
          </h3>
          
          {/* Limitation Image */}
          <div className="mb-6 rounded-xl overflow-hidden border border-border">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H%E1%BA%A1n%20ch%E1%BA%BF-6QOtYSmQ7wWGdLLCXxns1qxG1YfGpx.png"
              alt="Hình minh họa cho phần hạn chế"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Năng lực thương lượng hạn chế",
                desc: "Cán bộ công đoàn cơ sở thường là nhân viên của doanh nghiệp, dễ bị phụ thuộc, thiếu chuyên môn đàm phán"
              },
              {
                title: "Thủ tục đình công phức tạp",
                desc: "Quy trình tổ chức đình công theo luật rất khó thực hiện, dẫn đến tình trạng ngừng việc tập thể"
              },
              {
                title: "Công cụ hỗ tr�� chưa đủ mạnh",
                desc: "Thiếu quỹ dự phòng đủ lớn để hỗ trợ tài chính cho người lao động khi xảy ra tranh chấp kéo dài"
              }
            ].map((item, index) => (
              <div key={index} className="bg-card border border-amber-500/30 rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-blue-500">📋</span> Case Study: Vụ ngừng việc tại Pouchen Việt Nam (01/2022)
          </h3>
          
          {/* Case Study Images */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study-6RoC3jD38f7jSk5nVJ2vcGfi15wfiJ.png"
                alt="Công ty TNHH Pouyuen Việt Nam"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study%202-j5ZDanyY0WPvZ3hIwodPyHn53QSqTN.png"
                alt="Công nhân ngừng việc tập thể"
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case%20Study%203-wRXGcuHKpEUNXfGu3T8kXkxAuIGNba.png"
                alt="Công nhân biểu tình"
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="bg-muted/50 px-6 py-4 border-b border-border">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-medium text-foreground">Công ty TNHH Pouchen Việt Nam - Đồng Nai</span>
                <span className="text-sm text-muted-foreground">Tháng 1/2022</span>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Bối cảnh và nguyên nhân</h4>
                <p className="text-muted-foreground text-sm">
                  Ngày 06/01/2022, Ban giám đốc thông báo điều chỉnh giảm mức thưởng Tết Nguyên đán 
                  (mức cao nhất chỉ còn 1,54 tháng lương so với mức từ 1,9 đến 2,2 tháng lương của các năm trước) 
                  do hệ quả sụt giảm sản xuất từ đại dịch COVID-19.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Diễn biến (07/01 - 12/01/2022)</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Gần <span className="text-foreground font-medium">16.000 công nhân</span> đồng loạt phản đối, ngừng việc tập thể
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Tràn ra quốc lộ 1K gây ách tắc giao thông nghiêm trọng
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">▸</span>
                    Sự việc kết thúc ngày 12/01/2022 sau sự can thiệp của cơ quan quản lý nhà nước và Liên đoàn Lao động tỉnh
                  </li>
                </ul>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <h4 className="font-medium text-foreground mb-2">Phân tích dưới góc độ Công đoàn</h4>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">1.</span>
                    <span><span className="text-foreground font-medium">Tính chất tự phát:</span> Cuộc ngừng việc diễn ra ngoài trình tự pháp luật (wildcat strike). Người lao động tự liên kết qua mạng xã hội mà không thông qua CĐCS.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">2.</span>
                    <span><span className="text-foreground font-medium">Hạn chế năng lực phòng ngừa:</span> CĐCS rơi vào trạng thái &quot;bị động&quot;, chỉ tham gia xoa dịu sau khi khủng hoảng bùng phát, phản ánh khoảng cách lớn giữa CĐCS và người lao động.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Thách thức mang tính bước ngoặt</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                Hội nhập và đa dạng hóa tổ chức đại diện
              </h4>
              <p className="text-muted-foreground text-sm">
                Theo CPTPP, EVFTA, Việt Nam cho phép thành lập &quot;Tổ chức đại diện người lao động tại doanh nghiệp&quot; 
                độc lập, không thuộc hệ thống Tổng Liên đoàn. Nếu CĐCS không đổi mới năng lực thương lượng thực chất, 
                nguy cơ sụt giảm đoàn viên và mất vai trò đại diện là tất yếu.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                Kinh tế nền tảng (Gig Economy)
              </h4>
              <p className="text-muted-foreground text-sm">
                Cách mạng công nghiệp 4.0 thúc đẩy kinh tế chia sẻ, khai sinh lực lượng lao động công nghệ 
                (tài xế, shipper, lao động tự do qua ứng dụng). Đặc thù: không có quan hệ lao động truyền thống, 
                mô hình công đoàn hiện tại chưa thể bao phủ và bảo vệ quyền lợi cho họ.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Historical Mission in New Era */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-foreground mb-6">Liên hệ sứ mệnh lịch sử GCCN trong thời đại mới</h3>
          
          {/* Mission Image */}
          <div className="mb-6 rounded-xl overflow-hidden border border-border">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Li%C3%AAn%20h%E1%BB%87%20s%E1%BB%A9%20m%E1%BB%87nh%20l%E1%BB%8Bch%20s%E1%BB%AD%20GCCN%20trong%20th%E1%BB%9Di%20%C4%91%E1%BA%A1i%20m%E1%BB%9Bi-bxkjiMzLi6bCeUBll85rVtmDFoC92p.png"
              alt="Sứ mệnh lịch sử GCCN trong thời đại mới"
              className="w-full h-64 object-cover"
            />
          </div>
          
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 sm:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">1</span>
                  Nâng cao chất lượng để làm chủ công nghệ
                </h4>
                <p className="text-muted-foreground text-sm pl-10">
                  GCCN phải chuyển mình thành &quot;công nhân tri thức&quot; - những người có trình độ chuyên môn cao, 
                  làm chủ dây chuyền công nghệ hiện đại nhằm đưa kinh tế đất nước tham gia sâu vào chuỗi giá trị toàn cầu, 
                  thoát khỏi bẫy thu nhập trung bình.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm">2</span>
                  Yêu cầu tất yếu đối với Công đoàn
                </h4>
                <p className="text-muted-foreground text-sm pl-10">
                  Công đoàn bắt buộc phải dịch chuyển trọng tâm hoạt động: từ {'"'}mô hình phúc lợi mang tính phong trào{'"'} (thăm hỏi, tặng quà, tổ chức văn nghệ) sang {'"'}mô hình đại diện thương lượng thực chất{'"'}. 
                  Công đoàn phải trở thành một thực thể độc lập, có sức mạnh pháp lý, tinh thông về nghiệp vụ đàm phán để bảo vệ cấu trúc tiền lương đủ sống, đảm bảo môi trường an toàn lao động và nâng cao vị thế chính trị - xã hội cho giai cấp công nhân.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
