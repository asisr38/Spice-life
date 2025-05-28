import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EF] to-white">
      {/* Hero Section */}
      <MotionSection className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Our Locations"
            subtitle="Find the Spice Life restaurant nearest to you and experience authentic Indian cuisine"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F28C28]">3</div>
              <div className="text-gray-600">Locations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F28C28]">50K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-[#F28C28]">30+</div>
              <div className="text-gray-600">Years Serving</div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Locations Grid */}
      <MotionSection className="py-20" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <MotionSection key={location.name} delay={0.1 * index}>
                <Card className="overflow-hidden border-0 shadow-xl">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Location Info */}
                    <CardContent className="p-8 lg:p-12 space-y-8">
                      <div>
                        <CardTitle className="text-2xl md:text-3xl font-bold text-[#4A1C1A] font-serif mb-4">
                          {location.name}
                        </CardTitle>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-[#F28C28] mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium">{location.address}</div>
                              <div className="text-gray-600">{location.city}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-[#F28C28]" />
                            <span className="font-medium">{location.phone}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-[#F28C28] mt-1" />
                            <div>
                              <div>Mon-Fri: {location.hours.weekdays}</div>
                              <div>Sat-Sun: {location.hours.weekends}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-[#4A1C1A] mb-3">Features</h4>
                        <div className="flex flex-wrap gap-2">
                          {location.features.map((feature) => (
                            <span
                              key={feature}
                              className="px-3 py-1 bg-[#FEF3E8] text-[#F28C28] text-sm rounded-full border border-[#F28C28]/20"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-[#F28C28] hover:bg-[#E07B1F] text-white">
                          <Car className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#4A1C1A] text-[#4A1C1A] hover:bg-[#4A1C1A] hover:text-white"
                        >
                          Call Restaurant
                        </Button>
                      </div>
                    </CardContent>

                    {/* Map */}
                    <div className="bg-gray-100 min-h-[400px] lg:min-h-full relative">
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
      <MotionSection className="py-20 bg-[#4A1C1A] text-white" delay={0.3}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">Can't Visit Us?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We deliver the authentic Spice Life experience right to your doorstep. Order online for quick delivery or
            pickup.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-3">
              <div className="text-2xl">🚚</div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-gray-300">30-45 minutes average delivery time</p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">📱</div>
              <h3 className="text-xl font-semibold">Easy Ordering</h3>
              <p className="text-gray-300">Order through our app or website</p>
            </div>
            <div className="space-y-3">
              <div className="text-2xl">🔥</div>
              <h3 className="text-xl font-semibold">Fresh & Hot</h3>
              <p className="text-gray-300">Specially packaged to maintain quality</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-[#F28C28] hover:bg-[#E07B1F] text-white">
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
              className="border-white text-white hover:bg-white hover:text-[#4A1C1A]"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
