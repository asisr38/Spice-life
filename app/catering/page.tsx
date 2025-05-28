import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Users, Calendar, Utensils, Star, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function CateringPage() {
  const packages = [
    {
      name: "Corporate Lunch",
      price: "₹299",
      priceUnit: "per person",
      description: "Perfect for office meetings and corporate events",
      features: [
        "Minimum 10 people",
        "Choice of 3 main dishes",
        "Rice, naan, and dessert",
        "Professional setup",
        "Disposable plates included",
      ],
      popular: false,
    },
    {
      name: "Wedding Feast",
      price: "₹599",
      priceUnit: "per person",
      description: "Complete Indian wedding menu for your special day",
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
      price: "₹399",
      priceUnit: "per person",
      description: "Intimate family celebrations made memorable",
      features: [
        "Minimum 15 people",
        "5 main dishes",
        "Appetizers and desserts",
        "Home-style service",
        "Flexible timing",
      ],
      popular: false,
    },
  ]

  const eventTypes = [
    {
      icon: "🏢",
      title: "Corporate Events",
      description: "Professional catering for meetings, conferences, and office parties",
    },
    {
      icon: "💒",
      title: "Weddings",
      description: "Traditional Indian wedding feasts with authentic flavors",
    },
    {
      icon: "🎉",
      title: "Private Parties",
      description: "Birthday parties, anniversaries, and family celebrations",
    },
    {
      icon: "🎓",
      title: "Special Occasions",
      description: "Graduations, festivals, and milestone celebrations",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EF] to-white">
      {/* Hero Section */}
      <MotionSection className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <SectionHeader
                title="Catering Services"
                subtitle="Bring the authentic taste of Spice Life to your special events"
                centered={false}
              />
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  From intimate family gatherings to grand wedding celebrations, we bring the same passion and
                  authenticity that defines our restaurant to your special events.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6 text-[#F28C28]" />
                    <span className="font-medium">10-500+ Guests</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-[#F28C28]" />
                    <span className="font-medium">Flexible Scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Utensils className="w-6 h-6 text-[#F28C28]" />
                    <span className="font-medium">Custom Menus</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-[#F28C28]" />
                    <span className="font-medium">Premium Service</span>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-[#F28C28] hover:bg-[#E07B1F] text-white">
                <Link href="#contact">Get Quote</Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Catering setup with Indian food"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#4A1C1A] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Events Catered</div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Event Types */}
      <MotionSection className="py-20 bg-white" delay={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Events We Cater"
            subtitle="No matter the occasion, we make it delicious"
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((event, index) => (
              <MotionSection key={event.title} delay={0.1 * index}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <CardContent className="p-8 space-y-4">
                    <div className="text-4xl mb-4">{event.icon}</div>
                    <h3 className="text-xl font-bold text-[#4A1C1A] font-serif">{event.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Packages */}
      <MotionSection className="py-20 bg-[#FEF3E8]" delay={0.3}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Catering Packages"
            subtitle="Choose the perfect package for your event"
            className="mb-16"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <MotionSection key={pkg.name} delay={0.1 * index}>
                <Card
                  className={`h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                    pkg.popular ? "ring-2 ring-[#F28C28] scale-105" : ""
                  }`}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F28C28] text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-[#4A1C1A] font-serif">{pkg.name}</CardTitle>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-[#F28C28]">
                        {pkg.price}
                        <span className="text-lg text-gray-600 font-normal">{pkg.priceUnit}</span>
                      </div>
                      <p className="text-gray-600">{pkg.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#F28C28] flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-[#F28C28] hover:bg-[#E07B1F] text-white"
                          : "bg-[#4A1C1A] hover:bg-[#3A1515] text-white"
                      }`}
                    >
                      Select Package
                    </Button>
                  </CardContent>
                </Card>
              </MotionSection>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* Contact Form */}
      <MotionSection className="py-20 bg-white" delay={0.4} id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Get Your Quote"
            subtitle="Tell us about your event and we'll create a custom proposal"
            className="mb-12"
          />
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Full Name *</label>
                    <Input placeholder="Your full name" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Email Address *</label>
                    <Input type="email" placeholder="your@email.com" className="border-gray-300" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Phone Number *</label>
                    <Input placeholder="+91 98765 43210" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Event Date</label>
                    <Input type="date" className="border-gray-300" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Number of Guests *</label>
                    <Input placeholder="e.g., 50" className="border-gray-300" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A1C1A]">Event Type</label>
                    <Input placeholder="Wedding, Corporate, etc." className="border-gray-300" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#4A1C1A]">Additional Details</label>
                  <Textarea
                    placeholder="Tell us more about your event, dietary requirements, venue details, etc."
                    className="border-gray-300 min-h-[120px]"
                  />
                </div>
                <Button size="lg" className="w-full bg-[#F28C28] hover:bg-[#E07B1F] text-white">
                  Submit Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection className="py-20 bg-[#4A1C1A] text-white" delay={0.5}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold font-serif">Ready to Plan Your Event?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our catering team is standing by to help make your event unforgettable. Contact us today for a personalized
            consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#F28C28] hover:bg-[#E07B1F] text-white">
              <Link href="tel:+912212345678">Call Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#4A1C1A]"
            >
              <a
                href="https://order.toasttab.com/online/spice-life-alexandria-3616-king-street"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Menu & Order
              </a>
            </Button>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
