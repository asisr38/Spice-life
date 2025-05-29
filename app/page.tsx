"use client"
import { Navbar } from "@/components/navbar"
import {
  HeroSection,
  AboutSection,
  MenuSection,
  LocationsSection,
  CateringSection,
  ContactSection,
  FinalCTASection
} from "@/components/sections"

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <LocationsSection />
      <CateringSection />
      <ContactSection />
      <FinalCTASection />
    </div>
  )
}