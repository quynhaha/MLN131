import { Navigation } from "@/components/presentation/navigation"
import { HeroSection } from "@/components/presentation/hero-section"
import { TheorySection } from "@/components/presentation/theory-section"
import { WorldUnionsSection } from "@/components/presentation/world-unions-section"
import { VietnamUnionSection } from "@/components/presentation/vietnam-union-section"
import { StatusSection } from "@/components/presentation/status-section"
import { ConclusionSection } from "@/components/presentation/conclusion-section"

export default function PresentationPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <TheorySection />
      <WorldUnionsSection />
      <VietnamUnionSection />
      <StatusSection />
      <ConclusionSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground text-sm">
            Bài thuyết trình Chương 2 - SỨ MỆNH LỊCH SỬ CỦA GIAI CẤP CÔNG NHÂN
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2024 - Công đoàn Việt Nam - Người bảo vệ quyền lợi công nhân
          </p>
        </div>
      </footer>
    </main>
  )
}
