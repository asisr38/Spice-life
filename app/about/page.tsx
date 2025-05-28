import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EF] to-[#F28C28]">
      {/* Hero Section */}
      <MotionSection className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SectionHeader
                title="Welcome to Spice Life"
                subtitle="Authentic Indian Cuisine"
                centered={false}
              />
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  Placeholder for a brief introduction about the restaurant. Add a short, engaging tagline here.
                </p>
              </div>
              <Button asChild className="bg-[#F28C28] hover:bg-[#E07B1F] text-white">
                <a
                  href="/locations"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find Us
                </a>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/mascot1.png"
                alt="Spice Life Mascot"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Values Section */}
      <MotionSection className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Values"
            subtitle="What we stand for"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center space-y-4">
                <h3 className="text-xl font-bold text-[#4A1C1A] font-serif">Authenticity</h3>
                <p className="text-gray-600 leading-relaxed">Placeholder for a short value description.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
