"use client"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Award, Utensils } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { LeafletMapWrapper } from "@/components/leaflet-map-wrapper"
import { LOCATIONS } from "@/lib/constants"
import { Heading, Text } from "@/components/ui/typography"

export function LocationsSection() {
  return (
    <section id="locations" className="section-padding bg-gradient-to-b from-background to-accent/30 w-full">
      <div className="max-w-7xl mx-auto container-padding">
        <MotionSection>
          <SectionHeader
            title="Our Locations"
            subtitle="Find the Spice Life restaurant nearest to you"
            className="mb-16"
          />

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { number: "500+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
              { number: "8+", label: "Years Serving", icon: <Award className="w-6 h-6" /> },
              { number: "2", label: "Locations", icon: <MapPin className="w-6 h-6" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="card-elevated p-6">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="text-primary">{stat.icon}</div>
                    <Heading as="h3" className="text-3xl text-primary">{stat.number}</Heading>
                    <Text className="font-medium">{stat.label}</Text>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <div className="mb-16">
            <Card className="card-elevated overflow-hidden">
              <div className="h-[500px] lg:h-[600px] bg-muted relative">
                <LeafletMapWrapper className="absolute inset-0 w-full h-full z-0" />
                
                {/* Map Legend */}
                <div className="absolute top-4 left-4 bg-card rounded-lg shadow-lg p-4 z-10">
                  <Heading as="h6" className="text-sm mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Our Locations
                  </Heading>
                  <div className="space-y-2 text-xs">
                    {LOCATIONS.map((location, index) => (
                      <div key={location.id} className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </span>
                        <Text className="text-xs">{location.name}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </MotionSection>
      </div>
    </section>
  )
} 