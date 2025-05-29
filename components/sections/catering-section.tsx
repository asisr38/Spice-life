"use client"
import { Utensils, Crown, Heart } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { CreativePricing, type PricingTier } from "@/components/ui/creative-pricing"

export function CateringSection() {
  // Catering packages for CreativePricing component
  const cateringTiers: PricingTier[] = [
    {
      name: "Corporate Lunch",
      icon: <Utensils className="w-6 h-6" />,
      price: 15,
      description: "Perfect for office meetings and corporate events",
      color: "blue",
      features: [
        "Minimum 10 people",
        "Choice of 3 main dishes",
        "Rice, naan, and dessert",
        "Professional setup",
        "Disposable plates included",
      ],
    },
    {
      name: "Wedding Feast",
      icon: <Crown className="w-6 h-6" />,
      price: 35,
      description: "Complete Indian wedding menu for your special day",
      color: "amber",
      features: [
        "Minimum 50 people",
        "8+ main dishes variety",
        "Live cooking stations",
        "Traditional setup",
        "Dedicated service staff",
        "Custom menu planning",
      ],
      popular: true,
    },
    {
      name: "Family Gathering",
      icon: <Heart className="w-6 h-6" />,
      price: 25,
      description: "Intimate family celebrations made memorable",
      color: "purple",
      features: [
        "Minimum 15 people",
        "5 main dishes",
        "Appetizers and desserts",
        "Home-style service",
        "Flexible timing",
      ],
    },
  ]

  return (
    <section id="catering" className="section-padding bg-accent/20 w-full">
      <div className="max-w-7xl mx-auto container-padding">
        <MotionSection>
          <SectionHeader
            title="Catering Services"
            subtitle="Bring the authentic taste of Spice Life to your special events"
            className="mb-8 sm:mb-16"
          />

          <CreativePricing 
            tag="Catering Made Easy"
            title="Bring Spice Life to Your Event"
            description="Authentic Indian flavors for every celebration"
            tiers={cateringTiers}
            className="text-base sm:text-lg font-red-hat"
            cardClassName="p-4 sm:p-6"
            titleClassName="text-xl sm:text-2xl font-barriecito"
            priceClassName="text-2xl sm:text-3xl font-barriecito"
            descriptionClassName="text-sm sm:text-base font-red-hat"
            featureClassName="text-sm sm:text-base font-red-hat"
          />
        </MotionSection>
      </div>
    </section>
  )
} 