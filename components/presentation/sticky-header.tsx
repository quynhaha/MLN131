'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm'
          : 'pointer-events-none'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-3 flex items-center justify-center">
          <h1 className="text-lg font-bold text-primary whitespace-nowrap">
            Công đoàn Việt Nam - Người bảo vệ quyền lợi công nhân
          </h1>
        </div>
      </div>
    </motion.div>
  )
}
