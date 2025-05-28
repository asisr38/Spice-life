import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heading, Text, BrandAccent } from "@/components/ui/typography"
import { MapPin, Phone, Clock, Car } from "lucide-react"
import Link from "next/link"

export default function LocationsPage() {
  const locations = [
    {
      name: "Downtown Spice Life",
      address: "123 Main Street, Downtown District",
      city: "Mumbai, Maharashtra 400001",
      phone: "+91 22 1234 5678",
      hours: {
        weekdays: "11:00 AM - 10:00 PM",
        weekends: "10:00 AM - 11:00 PM",
      },
      features: ["Dine-in", "Takeout", "Delivery", "Parking Available"],
      mapEmbed:
        "https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
    },
    {
      name: "Spice Life Express",
      address: "456 Food Court, Phoenix Mall",
      city: "Pune, Maharashtra 411001",
      phone: "+91 20 9876 5432",
      hours: {
        weekdays: "12:00 PM - 9:00 PM",
        weekends: "11:00 AM - 10:00 PM",
      },
      features: ["Quick Service", "Takeout", "Mall Location", "Family Friendly"],
      mapEmbed:
        "https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3783.0!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
    },
    {
      name: "Spice Life Garden",
      address: "789 Garden View Road, Bandra West",
      city: "Mumbai, Maharashtra 400050",
      phone: "+91 22 5555 7777",
      hours: {
        weekdays: "5:00 PM - 11:00 PM",
        weekends: "12:00 PM - 11:00 PM",
      },
      features: ["Fine Dining", "Outdoor Seating", "Private Events", "Valet Parking"],
      mapEmbed:
        "https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3770.0!2d72.8258!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/30">
      {/* Hero Section */}
      <MotionSection className="section-padding">
        <div className="max-w-7xl mx-auto container-padding text-center">
          <SectionHeader
            title="Our Locations"
            subtitle="Find the Spice Life restaurant nearest to you and experience authentic Indian cuisine"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <Heading as="h3" className="text-3xl text-primary">3</Heading>
              <Text>Locations</Text>
            </div>
            <div className="space-y-2">
              <Heading as="h3" className="text-3xl text-primary">50K+</Heading>
              <Text>Happy Customers</Text>
            </div>
            <div className="space-y-2">
              <Heading as="h3" className="text-3xl text-primary">30+</Heading>
              <Text>Years Serving</Text>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Locations Grid */}
      <MotionSection className="section-padding bg-accent/20" delay={0.2}>
        <div className="max-w-7xl mx-auto container-padding">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <MotionSection key={location.name} delay={0.1 * index}>
                <Card className="overflow-hidden card-elevated">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Location Info */}
                    <CardContent className="p-8 lg:p-12 space-y-8">
                      <div>
                        <CardTitle className="mb-4">
                          <Heading as="h2" className="text-2xl md:text-3xl">
                            {location.name}
                          </Heading>
                        </CardTitle>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <Text className="font-medium text-foreground">{location.address}</Text>
                              <Text>{location.city}</Text>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <Text className="font-medium text-foreground">{location.phone}</Text>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-primary mt-1" />
                            <div>
                              <Text>Mon-Fri: {location.hours.weekdays}</Text>
                              <Text>Sat-Sun: {location.hours.weekends}</Text>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Heading as="h4" className="text-lg mb-3">Features</Heading>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature) => (
                            <Badge
                              key={feature}
                              variant="secondary"
                              className="bg-accent text-primary"
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="btn-primary">
                          <Car className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button variant="outline">
                          Call Restaurant
                        </Button>
                      </div>
                    </CardContent>

                    {/* Map */}
                    <div className="bg-muted min-h-[400px] lg:min-h-full relative">
                      <iframe
                        src={location.mapEmbed}
                        width="100%"
                        height="100%"
                        style={{ border: 0, minHeight: "400px" }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0"
                        title={`Map of ${location.name}`}
                      />
                    </div>
                  </div>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Delivery Info */}
      <MotionSection className="section-padding gradient-secondary text-secondary-foreground" delay={0.3}>
        <div className="max-w-4xl mx-auto container-padding text-center space-y-8">
          <Heading as="h2" className="text-secondary-foreground">Can&apos;t Visit Us?</Heading>
          <Text className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            We deliver the authentic <BrandAccent className="text-primary">Spice Life</BrandAccent> experience right to your doorstep. Order online for quick delivery or pickup.
          </Text>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="text-2xl">🚚</div>
              <Heading as="h3" className="text-xl text-secondary-foreground">Fast Delivery</Heading>
              <Text className="text-secondary-foreground/80">30-45 minutes average delivery time</Text>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">📱</div>
              <Heading as="h3" className="text-xl text-secondary-foreground">Easy Ordering</Heading>
              <Text className="text-secondary-foreground/80">Order through our app or website</Text>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">🔥</div>
              <Heading as="h3" className="text-xl text-secondary-foreground">Fresh & Hot</Heading>
              <Text className="text-secondary-foreground/80">Specially packaged to maintain quality</Text>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://order.toasttab.com/online/spice-life-alexandria-3616-king-street"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Online
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-secondary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <Text className="text-secondary-foreground/70 leading-relaxed">
            We&apos;d love to hear from you! Whether you have questions about our menu, want to make a reservation, or need catering for your special event, our team is here to help.
          </Text>
        </div>
      </MotionSection>
    </div>
  )
}
