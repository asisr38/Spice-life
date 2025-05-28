"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin } from "lucide-react"
import { LOCATIONS } from "@/lib/constants"

interface AnimatedOrderButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
}

export function AnimatedOrderButton({ size = "default", className = "" }: AnimatedOrderButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          // Single Button State
          <motion.div
            key="single"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size={size}
              className={`bg-[#F28C28] hover:bg-[#E07B1F] text-white transition-all duration-300 ${className}`}
            >
              Order Online
            </Button>
          </motion.div>
        ) : (
          // Split Buttons State
          <motion.div
            key="split"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex gap-2"
          >
            {LOCATIONS.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{
                  x: index === 0 ? 20 : -20,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
              >
                <Button
                  asChild
                  size={size}
                  className={`bg-[#F28C28] hover:bg-[#E07B1F] text-white transition-all duration-200 hover:scale-105 shadow-lg ${
                    size === "lg" ? "px-4 py-3" : size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2"
                  }`}
                >
                  <a
                    href={location.orderUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className={`${size === "lg" ? "w-4 h-4" : "w-3 h-3"}`} />
                      <span className="font-medium">{location.id === "alexandria" ? "Alexandria" : "Gaithersburg"}</span>
                    </div>
                    <span className={`text-xs opacity-90 ${size === "lg" ? "text-xs" : "text-[10px]"}`}>
                      {location.address}
                    </span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
