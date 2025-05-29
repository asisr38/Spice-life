"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { LOCATIONS } from "@/lib/constants"
import { Heading, Text } from "@/components/ui/typography"

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-background w-full">
      <div className="max-w-7xl mx-auto container-padding">
        <MotionSection>
          <SectionHeader
            title="Get in Touch"
            subtitle="We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible."
            className="mb-16"
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <Card className="card-elevated h-full">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary">First Name *</label>
                        <input 
                          placeholder="John" 
                          className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-secondary">Last Name *</label>
                        <input 
                          placeholder="Doe" 
                          className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Email Address *</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Phone Number</label>
                      <input 
                        placeholder="+1 (555) 123-4567" 
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Preferred Location</label>
                      <select className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary">
                        <option value="">Select a location</option>
                        {LOCATIONS.map((location) => (
                          <option key={location.id} value={location.id}>
                            {location.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Subject *</label>
                      <input 
                        placeholder="How can we help you?" 
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-secondary">Message *</label>
                      <textarea
                        placeholder="Tell us more about your inquiry..."
                        className="w-full px-3 py-2 border border-border rounded-md focus:border-primary focus:ring-primary min-h-[120px]"
                      />
                    </div>
                    <Button size="lg" className="w-full btn-primary">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info by Location */}
            <div className="space-y-8 order-1 lg:order-2">
              {LOCATIONS.map((location, index) => (
                <MotionSection key={location.id} delay={0.1 * index}>
                  <Card className="card-elevated">
                    <CardContent className="p-6">
                      <Heading as="h3" className="text-xl mb-4">
                        {location.name}
                      </Heading>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                          <div>
                            <Text className="font-medium text-foreground">{location.address}</Text>
                            <Text className="text-sm">{location.city}</Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-primary" />
                          <a 
                            href={`tel:${location.phone}`}
                            className="font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {location.phone}
                          </a>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <Text className="text-sm">Mon-Fri: {location.hours.weekdays}</Text>
                            <Text className="text-sm">Sat-Sun: {location.hours.weekends}</Text>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-primary" />
                          <a 
                            href="mailto:info@spicelifemd.com"
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            info@spicelifemd.com
                          </a>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <Button 
                          asChild
                          size="sm"
                          className="btn-primary"
                        >
                          <a href={`tel:${location.phone}`}>
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </a>
                        </Button>
                        <Button 
                          asChild
                          size="sm"
                          variant="outline"
                        >
                          <a
                            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location.address + ', ' + location.city)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            Directions
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionSection>
              ))}
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  )
} 