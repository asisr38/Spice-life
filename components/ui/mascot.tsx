"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface MascotProps {
  className?: string
  size?: "sm" | "md" | "lg"
  floating?: boolean
}

export function Mascot({ className = "", size = "md", floating = true }: MascotProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-32 h-32",
  }

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      animate={floating ? {
        y: [0, -10, 0],
        rotate: [0, 5, 0],
      } : {}}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src="/images/mascotCute.png"
        alt="Spice Life Mascot"
        width={128}
        height={128}
        className="w-full h-full object-contain"
        priority
      />
      <motion.div
        className="absolute inset-0 bg-spice-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
} 