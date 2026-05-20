"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "intro", label: "Mở đầu" },
  { id: "theory", label: "Cơ sở lý luận" },
  { id: "world", label: "Công đoàn thế giới" },
  { id: "vietnam", label: "Công đoàn Việt Nam" },
  { id: "status", label: "Thực trạng" },
  { id: "conclusion", label: "Kết luận" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }))
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i]
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="font-bold text-primary text-lg">MLN131-T1</span>
          </div>
          
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === section.id
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => scrollToSection(e.target.value)}
              className="bg-secondary text-foreground px-3 py-2 rounded-md text-sm border border-border"
            >
              {sections.map((section) => (
                <option key={section.id} value={section.id}>
                  {section.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </nav>
  )
}
