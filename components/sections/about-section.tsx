"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChefHat, Sparkles, Users, Award } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { ResponsiveOrderButton } from "@/components/responsive-order-button"
import { Heading, Text, BrandAccent } from "@/components/ui/typography"

export function AboutSection() {
  // Enhanced values data
  const values = [
    {
      title: "Authentic Flavors",
      description: "Traditional recipes passed down through generations, using the finest spices imported directly from India.",
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      color: "from-orange-50 to-orange-100",
    },
    {
      title: "Fresh Ingredients",
      description: "We source the highest quality local produce and combine it with authentic spices for perfect balance.",
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      color: "from-green-50 to-green-100",
    },
    {
      title: "Community Focus",
      description: "Bringing people together through the universal language of exceptional food and warm hospitality.",
      icon: <Users className="w-8 h-8 text-primary" />,
      color: "from-blue-50 to-blue-100",
    },
    {
      title: "Excellence",
      description: "Committed to providing outstanding food quality and exceptional customer service every single time.",
      icon: <Award className="w-8 h-8 text-primary" />,
      color: "from-purple-50 to-purple-100",
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-accent/30 relative overflow-hidden w-full">
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto container-padding relative">
        <MotionSection delay={0.2}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
            <div className="space-y-8 order-2 lg:order-1">
              <SectionHeader
                title="Our Story"
                subtitle="Where tradition meets innovation in every bite"
                centered={false}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <Text size="large" className="font-red-hat text-base sm:text-lg text-foreground">
                  At <BrandAccent>Spice Life</BrandAccent>, we&apos;re passionate about bringing you the authentic flavors of India. Our kitchen is where traditional recipes meet modern culinary techniques, creating dishes that honor our heritage while delighting contemporary palates.
                </Text>
                <Text className="font-red-hat text-base sm:text-lg text-muted-foreground">
                  Every dish is carefully crafted using the finest spices and freshest ingredients. We believe that great food brings people together, and our mission is to share the warmth and richness of Indian cuisine with our community.
                </Text>
                <Text className="font-red-hat text-base sm:text-lg text-muted-foreground">
                  From aromatic biryanis to perfectly spiced curries, each meal is prepared with love and attention to detail, ensuring an unforgettable dining experience that transports you to the heart of India.
                </Text>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <ResponsiveOrderButton className="w-full sm:w-auto btn-primary transform hover:scale-105 transition-transform duration-300 font-red-hat" />
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300 font-red-hat"
                >
                  <Link href="#locations">Find Locations</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative">
                <Image
                  src="/images/mascotCute.png"
                  alt="Spice Life cute mascot representing our friendly service and authentic Indian cuisine"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </MotionSection>

        {/* Values */}
        <MotionSection delay={0.2}>
          <SectionHeader
            title="What We Stand For"
            subtitle="The values that guide everything we do"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`h-full card-elevated bg-gradient-to-br ${value.color} border-0`}>
                  <CardContent className="p-8 text-center space-y-6">
                    <motion.div 
                      className="flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {value.icon}
                    </motion.div>
                    <Heading as="h3" className="text-xl">{value.title}</Heading>
                    <Text className="leading-relaxed">{value.description}</Text>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  )
} 