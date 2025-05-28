import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heading, Text, BrandAccent } from "@/components/ui/typography"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30">
      {/* Hero Section */}
      <MotionSection className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SectionHeader
                title="Welcome to Spice Life"
                subtitle="Authentic Indian Cuisine"
                centered={false}
              />
              <div className="space-y-6">
                <Text size="large">
                  Welcome to <BrandAccent>Spice Life</BrandAccent>, where every dish tells a story of tradition, passion, and culinary excellence. Our journey began with a simple mission: to bring the authentic flavors of India to your table.
                </Text>
                <Text>
                  From our traditional tandoor oven to our carefully curated spice blends, every element of our restaurant reflects our commitment to authenticity and quality. We believe that food is more than sustenance—it&apos;s a bridge that connects cultures and creates lasting memories.
                </Text>
              </div>
              <Button asChild className="btn-primary">
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
      <MotionSection className="section-padding bg-accent/20">
        <div className="max-w-7xl mx-auto container-padding">
          <SectionHeader
            title="Our Values"
            subtitle="What we stand for"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="h-full card-elevated">
              <CardContent className="p-8 text-center space-y-4">
                <Heading as="h3" className="text-xl">Authenticity</Heading>
                <Text>Traditional recipes and cooking methods passed down through generations, ensuring every bite is genuine.</Text>
              </CardContent>
            </Card>
            <Card className="h-full card-elevated">
              <CardContent className="p-8 text-center space-y-4">
                <Heading as="h3" className="text-xl">Quality</Heading>
                <Text>We source the finest ingredients and spices to create dishes that exceed your expectations every time.</Text>
              </CardContent>
            </Card>
            <Card className="h-full card-elevated">
              <CardContent className="p-8 text-center space-y-4">
                <Heading as="h3" className="text-xl">Community</Heading>
                <Text>Building connections through food, bringing people together to share in the joy of exceptional cuisine.</Text>
              </CardContent>
            </Card>
            <Card className="h-full card-elevated">
              <CardContent className="p-8 text-center space-y-4">
                <Heading as="h3" className="text-xl">Innovation</Heading>
                <Text>Honoring tradition while embracing modern techniques to create memorable dining experiences.</Text>
              </CardContent>
            </Card>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
