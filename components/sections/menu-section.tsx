"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import Image from "next/image"

export function MenuSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Actual menu images
  const menuImages = [
    {
      name: "Menu Page 1",
      image: "/images/menu/menu-first.png",
      alt: "Spice Life Restaurant Menu - First Page with appetizers, main courses and specialties"
    },
    {
      name: "Menu Page 2", 
      image: "/images/menu/menu-second.png",
      alt: "Spice Life Restaurant Menu - Second Page with desserts, beverages and pricing"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === menuImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? menuImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="menu" className="section-padding bg-gradient-to-b from-accent/30 to-background relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto container-padding relative">
        <MotionSection delay={0.2}>
          <SectionHeader
            title="Our Menu"
            subtitle="Discover authentic Indian flavors crafted with love and tradition"
            className="mb-16"
          />

          {/* Menu Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Image Display */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="relative"
                >
                  <Image
                    src={menuImages[currentIndex].image}
                    alt={menuImages[currentIndex].alt}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-contain"
                    priority={currentIndex === 0}
                  />
                  
                  {/* View Full Size Button */}
                  <div className="absolute top-4 right-4">
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary/90 hover:bg-primary text-white font-red-hat backdrop-blur-sm shadow-lg"
                    >
                      <Link href={menuImages[currentIndex].image} target="_blank" rel="noopener noreferrer">
                        View Full Size
                      </Link>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Arrows */}
              {menuImages.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Previous menu page"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label="Next menu page"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Dots Navigation */}
            {menuImages.length > 1 && (
              <div className="flex justify-center space-x-2 mt-6">
                {menuImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to menu page ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Menu Page Indicator */}
            <div className="text-center mt-4">
              <p className="text-muted-foreground font-red-hat">
                Page {currentIndex + 1} of {menuImages.length}
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 space-y-4">
            <p className="text-muted-foreground font-red-hat text-lg">
              Can&apos;t decide? Our friendly staff is here to help you choose the perfect meal!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="btn-primary font-red-hat">
                <Link href="#contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-red-hat">
                <Link href="#locations">Visit Our Locations</Link>
              </Button>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
} 