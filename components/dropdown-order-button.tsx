"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, MapPin, ExternalLink } from "lucide-react"
import { LOCATIONS } from "@/lib/constants"

interface DropdownOrderButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
}

export function DropdownOrderButton({ size = "default", className = "" }: DropdownOrderButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        size={size}
        className={`bg-[#F28C28] hover:bg-[#E07B1F] text-white transition-all duration-200 ${className}`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        Order Online
        <ChevronDown 
          className={`ml-2 h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`} 
        />
      </Button>

      {isOpen && (
        <div 
          className="absolute top-full mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[180px]"
          role="menu"
          aria-label="Order locations"
        >
          <div className="py-1">
            {LOCATIONS.map((location) => (
              <a
                key={location.id}
                href={location.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150 group"
                role="menuitem"
                onClick={() => setIsOpen(false)}
              >
                <div className="w-5 h-5 bg-[#F28C28] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                  {location.id === "alexandria" ? "A" : "G"}
                </div>
                <span className="font-medium text-gray-900 group-hover:text-[#F28C28] transition-colors">
                  {location.id === "alexandria" ? "Alexandria" : "Gaithersburg"}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 