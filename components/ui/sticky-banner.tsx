"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { useState } from "react"
import { Button } from "./button"

interface StickyBannerProps {
  message: string
  ctaText?: string
  ctaLink?: string
  className?: string
}

export function StickyBanner({ 
  message, 
  ctaText, 
  ctaLink, 
  className = "" 
}: StickyBannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          className={`block w-full z-40 bg-gradient-to-r from-spice-500 to-spice-600 text-white ${className}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">{message}</span>
                {ctaText && ctaLink && (
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-spice-600"
                  >
                    <a href={ctaLink}>{ctaText}</a>
                  </Button>
                )}
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-white/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 