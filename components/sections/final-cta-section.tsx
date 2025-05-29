"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MotionSection } from "@/components/motion-section"
import { ResponsiveOrderButton } from "@/components/responsive-order-button"
import { Heading, Subheading } from "@/components/ui/typography"

export function FinalCTASection() {
  return (
    <section className="section-padding gradient-secondary text-secondary-foreground w-full">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <MotionSection>
          <div className="space-y-8">
            <Heading as="h2" className="text-secondary-foreground">Ready to Experience Spice Life?</Heading>
            <Subheading className="text-secondary-foreground/80 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through the flavors of India. Order online or visit us today!
            </Subheading>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ResponsiveOrderButton 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary font-medium"
              >
                <Link href="#locations">Find Locations</Link>
              </Button>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
} 