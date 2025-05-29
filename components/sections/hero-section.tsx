"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MotionSection } from "@/components/motion-section"
import { ResponsiveOrderButton } from "@/components/responsive-order-button"
import { Heading, Subheading } from "@/components/ui/typography"
import { Sparkles, ChefHat } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Spice Particles */}
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-4 h-4 bg-orange-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full opacity-50"
        />
        <motion.div
          animate={{ 
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-32 left-20 w-5 h-5 bg-yellow-400 rounded-full opacity-40"
        />
        
        {/* Geometric Shapes */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-10 w-20 h-20 border-2 border-orange-300 rounded-full opacity-30"
        />
        <motion.div
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-16 w-16 h-16 border-2 border-red-300 opacity-25"
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto container-padding z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <MotionSection delay={0.2}>
            <div className="space-y-8">
              {/* Badge with Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </motion.div>
                <Badge variant="outline" className="bg-gradient-to-r from-orange-100 to-red-100 border-orange-300 text-orange-800 text-sm font-medium px-4 py-2">
                  Authentic Since 2017 •
                </Badge>
              </motion.div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <Heading as="h1" className="text-6xl lg:text-7xl xl:text-8xl font-barriecito leading-none">
                    <span className="block text-gray-900">Spice</span>
                    <span className="block bg-gradient-to-r from-orange-600 via-red-500 to-orange-700 bg-clip-text text-transparent">
                      Life
                    </span>
                  </Heading>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                  <span className="text-lg font-red-hat text-gray-600 font-medium">
                    Where Tradition Meets Innovation
                  </span>
                </motion.div>
              </div>
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-4"
              >
                <Subheading className="text-gray-700 text-xl lg:text-2xl font-red-hat leading-relaxed">
                  Experience the vibrant flavors of India through our carefully crafted dishes, 
                  where every spice tells a story and every meal creates memories.
                </Subheading>
              </motion.div>
              
              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <ResponsiveOrderButton 
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white text-lg px-8 py-4 shadow-xl transform hover:scale-105 transition-all duration-300 font-red-hat font-semibold"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300 font-red-hat font-semibold"
                >
                  <Link href="#menu">View Menu</Link>
                </Button>
              </motion.div>
            </div>
          </MotionSection>

          {/* Right Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-96 h-96 mx-auto relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-200 via-red-200 to-yellow-200 opacity-60"></div>
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-orange-300 via-red-300 to-yellow-300 opacity-40"></div>
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-400 via-red-400 to-yellow-400 opacity-30"></div>
              </motion.div>
              
              {/* Floating Chef Hat */}
              <motion.div
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [-5, 5, -5]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center">
                  <ChefHat className="w-12 h-12 text-orange-500" />
                </div>
              </motion.div>
              
              {/* Orbiting Elements */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-500 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full shadow-lg"></div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 bg-orange-500 rounded-full shadow-lg"></div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full shadow-lg"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-2 text-gray-600"
        >
          <span className="text-sm font-medium font-red-hat">Discover More</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 