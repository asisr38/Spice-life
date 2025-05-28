"use client"

import { useEffect, useState } from "react"
import { DropdownOrderButton } from "./dropdown-order-button"
import { MobileOrderButton } from "./mobile-order-button"

interface ResponsiveOrderButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
}

export function ResponsiveOrderButton({ size = "default", className = "" }: ResponsiveOrderButtonProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  if (isMobile) {
    return <MobileOrderButton size={size} className={className} />
  }

  return <DropdownOrderButton size={size} className={className} />
}
