"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, X } from "lucide-react"
import { LOCATIONS } from "@/lib/constants"

interface MobileOrderButtonProps {
  size?: "default" | "sm" | "lg"
  className?: string
}

export function MobileOrderButton({ size = "default", className = "" }: MobileOrderButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size={size}
        onClick={() => setIsOpen(true)}
        className={`bg-[#F28C28] hover:bg-[#E07B1F] text-white ${className}`}
      >
        Order Online
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50"
            >
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-[#4A1C1A] font-barriecito">Choose Location</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {LOCATIONS.map((location, index) => (
                      <motion.div
                        key={location.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Button
                          asChild
                          className="w-full bg-[#F28C28] hover:bg-[#E07B1F] text-white p-4 h-auto"
                          onClick={() => setIsOpen(false)}
                        >
                          <a
                            href={location.orderUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-3"
                          >
                            <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                            <div className="text-left">
                              <div className="font-semibold text-base">{location.id === "alexandria" ? "Alexandria" : "Gaithersburg"}</div>
                              <div className="text-sm opacity-90">{location.address}</div>
                              <div className="text-xs opacity-75">{location.city}</div>
                            </div>
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
