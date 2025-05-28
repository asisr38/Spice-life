"use client"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs" // Tabs are not used on this page
import { CheckCircle, MapPin, Phone, Clock, Car, Mail, MessageCircle, Star, Users, Award, Heart, Utensils, Crown, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ResponsiveOrderButton } from "@/components/responsive-order-button"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { LOCATIONS } from "@/lib/constants"
import { CreativePricing, type PricingTier } from "@/components/ui/creative-pricing"
import { RetroGrid } from "@/components/ui/retro-grid"
import { LeafletMapWrapper } from "@/components/leaflet-map-wrapper"
import { motion } from "framer-motion"
import { Mascot } from "@/components/ui/mascot"
import { StickyBanner } from "@/components/ui/sticky-banner"

// MenuImageSlider component for menu images
const menuImages = [
  {
    src: "/images/menu/menu-first.png",
    alt: "Spice Life Menu - Page 1"
  },
  {
    src: "/images/menu/menu-second.png",
    alt: "Spice Life Menu - Page 2"
  },
  // Add more menu images here if available
]

function MenuImageSlider() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i === 0 ? menuImages.length - 1 : i - 1))
  const next = () => setIndex((i) => (i === menuImages.length - 1 ? 0 : i + 1))
  
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-spice-lg">
      <Image
        src={menuImages[index].src}
        alt={menuImages[index].alt}
        width={800}
        height={600}
        className="object-cover w-full h-full"
        priority
      />
      {menuImages.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-spice-500 text-white p-3 rounded-full shadow-lg hover:bg-spice-600 transition-colors focus:outline-none focus:ring-2 focus:ring-spice-400"
            aria-label="Previous menu image"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-spice-500 text-white p-3 rounded-full shadow-lg hover:bg-spice-600 transition-colors focus:outline-none focus:ring-2 focus:ring-spice-400"
            aria-label="Next menu image"
          >
            ▶
          </button>
        </>
      )}
    </div>
  )
}

export default function HomePage() {
  // Menu data from the actual Spice Life menu - REMOVED (unused)
  /*
  const menuCategories = [
    // ... large array removed for brevity
  ]
  */

  // Values data with improved content
  const values = [
    {
      title: "Authentic Flavors",
      description: "Traditional recipes using the finest spices and ingredients to create genuine Indian cuisine.",
      icon: <Heart className="w-8 h-8 text-spice-500" />,
    },
    {
      title: "Fresh Ingredients",
      description: "We source quality local produce and combine it with authentic spices for the perfect balance.",
      icon: <Star className="w-8 h-8 text-spice-500" />,
    },
    {
      title: "Community Focus",
      description: "Bringing people together through the love of great food and warm hospitality.",
      icon: <Users className="w-8 h-8 text-spice-500" />,
    },
    {
      title: "Quality Service",
      description: "Committed to providing excellent food and outstanding customer service every time.",
      icon: <Award className="w-8 h-8 text-spice-500" />,
    },
  ]

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
      icon: <Sparkles className="w-6 h-6" />,
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
    <div className="min-h-screen">
      <Navbar />
      {/* <StickyBanner 
        message="🎉 Special Offer: 20% off on all orders above $50! Use code SPICE20"
        ctaText="Order Now"
        ctaLink="#menu"
      /> */}
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-4 pt-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>

        {/* RetroGrid Background Effect */}
        <RetroGrid className="opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <MotionSection delay={0.2}>
            <div className="space-y-8 md:space-y-12">
              <h1 className="flex flex-col items-center justify-center gap-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white font-serif leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="block text-shadow-lg"
                >
                  Taste the
                </motion.span>
                <span className="flex items-center justify-center gap-4">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="block text-spice-500 mt-2 drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-spice-400 to-spice-600"
                  >
                    Authentic India
                  </motion.span>
                  <Mascot size="lg" className="w-[300px] h-[300px] drop-shadow-2xl -mb-8" />
                </span>
              </h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md"
              >
                From traditional tandoor to modern flavors. Every bite tells a story of heritage, passion, and culinary excellence.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
              >
                <ResponsiveOrderButton 
                  size="lg"
                  className="bg-spice-500 hover:bg-spice-600 text-white text-lg px-8 py-4 w-full sm:w-auto shadow-spice transform hover:scale-105 transition-transform duration-300"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-brown-900 text-lg px-8 py-4 w-full sm:w-auto backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-transform duration-300"
                >
                  <Link href="#contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </div>
          </MotionSection>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-white text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-white rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-white to-spice-50/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  className="space-y-6 text-gray-700 leading-relaxed"
                >
                  <p className="text-lg">
                    At Spice Life, we're passionate about bringing you the authentic flavors of India. Our kitchen is where traditional recipes meet modern culinary techniques, creating dishes that honor our heritage while delighting contemporary palates.
                  </p>
                  <p>
                    Every dish is carefully crafted using the finest spices and freshest ingredients. We believe that great food brings people together, and our mission is to share the warmth and richness of Indian cuisine with our community.
                  </p>
                  <p>
                    From aromatic biryanis to perfectly spiced curries, each meal is prepared with love and attention to detail, ensuring an unforgettable dining experience.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <ResponsiveOrderButton className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300" />
                  <Button
                    asChild
                    variant="outline"
                    className="border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white w-full sm:w-auto transform hover:scale-105 transition-transform duration-300"
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
                    className="rounded-2xl shadow-brown-lg w-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spice-500/20 to-transparent rounded-2xl"></div>
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
                  <Card className="h-full border-0 shadow-spice hover:shadow-spice-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8 text-center space-y-6">
                      <motion.div 
                        className="flex justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {value.icon}
                      </motion.div>
                      <h3 className="text-xl font-bold text-brown-900 font-serif">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 md:py-32 bg-gradient-to-b from-spice-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <MotionSection delay={0.2}>
            <SectionHeader
              title="Our Menu"
              subtitle="Discover authentic Indian flavors crafted with love and tradition"
              className="mb-16"
            />

            {/* Image Slider for Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-4xl mx-auto mb-12"
            >
              <MenuImageSlider />
            </motion.div>

            {/* Menu Categories Preview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {['Appetizers', 'Main Course', 'Desserts'].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-0 shadow-spice hover:shadow-spice-lg transition-all duration-300 group bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="text-4xl mb-4">🍽️</div>
                      <h3 className="text-xl font-bold text-brown-900 font-serif">{category}</h3>
                      <p className="text-gray-600">Explore our selection of {category.toLowerCase()}</p>
                      <Button
                        asChild
                        variant="outline"
                        className="mt-4 border-spice-500 text-spice-500 hover:bg-spice-500 hover:text-white"
                      >
                        <Link href={`/menu#${category.toLowerCase()}`}>View Selection</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="py-20 md:py-32 bg-gradient-to-b from-white to-spice-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeader
              title="Our Locations"
              subtitle="Find the Spice Life restaurant nearest to you"
              className="mb-16"
            />

            {/* Single consolidated instruction */}
            <div className="text-center mb-8">
              <p className="text-gray-600 flex items-center justify-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Click on the red markers on the map for more details
              </p>
            </div>

            {/* Full-width Map Container */}
            <div className="mb-16">
              <Card className="border-0 shadow-spice-lg overflow-hidden">
                <div className="h-[500px] lg:h-[600px] bg-gray-100 relative">
                  {/* Leaflet Map */}
                  <LeafletMapWrapper className="absolute inset-0 w-full h-full z-0" />
                  
                  {/* Map Legend - Compact Version */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3 z-10">
                    <h3 className="font-semibold text-brown-900 text-sm mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-spice-500" />
                      Locations
                    </h3>
                    <div className="space-y-1 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">A</span>
                        <span className="text-gray-700">Alexandria</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">G</span>
                        <span className="text-gray-700">Gaithersburg</span>
                      </div>
                    </div>
                  </div>

                  {/* Centered Order Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ResponsiveOrderButton 
                      size="lg"
                      className="bg-spice-500 hover:bg-spice-600 text-white shadow-lg transition-all duration-200 hover:scale-105"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Catering Section */}
      <section id="catering" className="py-20 md:py-32 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeader
              title="Catering Services"
              subtitle="Bring the authentic taste of Spice Life to your special events"
              className="mb-16"
            />

            <CreativePricing 
              tag="Catering Made Easy"
              title="Bring Spice Life to Your Event"
              description="Authentic Indian flavors for every celebration"
              tiers={cateringTiers} 
            />
          </MotionSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection>
            <SectionHeader
              title="Get in Touch"
              subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
              className="mb-16"
            />

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="order-2 lg:order-1 h-full">
                <Card className="border-0 shadow-spice-lg h-full">
                  <CardContent className="p-8 h-full">
                    <form className="space-y-6 h-full">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-brown-900">First Name *</label>
                          <Input placeholder="John" className="border-gray-300 focus:border-spice-500 focus:ring-spice-500" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-brown-900">Last Name *</label>
                          <Input placeholder="Doe" className="border-gray-300 focus:border-spice-500 focus:ring-spice-500" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brown-900">Email Address *</label>
                        <Input type="email" placeholder="john@example.com" className="border-gray-300 focus:border-spice-500 focus:ring-spice-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brown-900">Phone Number</label>
                        <Input placeholder="+1 (555) 123-4567" className="border-gray-300 focus:border-spice-500 focus:ring-spice-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brown-900">Preferred Location</label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-spice-500 focus:ring-spice-500">
                          <option value="">Select a location</option>
                          {LOCATIONS.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brown-900">Subject *</label>
                        <Input placeholder="How can we help you?" className="border-gray-300 focus:border-spice-500 focus:ring-spice-500" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-brown-900">Message *</label>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="border-gray-300 focus:border-spice-500 focus:ring-spice-500 min-h-[120px]"
                        />
                      </div>
                      <Button size="lg" className="w-full bg-spice-500 hover:bg-spice-600 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info by Location */}
              <div className="space-y-8 order-1 lg:order-2 h-full">
                {LOCATIONS.map((location, index) => (
                  <MotionSection key={location.id} delay={0.1 * index}>
                    <Card className="border-0 shadow-spice h-full">
                      <CardContent className="p-6 h-full">
                        <h3 className="text-xl font-bold text-brown-900 font-serif mb-4">
                          {location.name}
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-spice-500 mt-1 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-800">{location.address}</div>
                              <div className="text-gray-600">{location.city}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-spice-500" />
                            <a 
                              href={`tel:${location.phone}`}
                              className="font-medium text-gray-800 hover:text-spice-500 transition-colors"
                            >
                              {location.phone}
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-spice-500 mt-1" />
                            <div>
                              <div className="text-gray-800">Mon-Fri: {location.hours.weekdays}</div>
                              <div className="text-gray-800">Sat-Sun: {location.hours.weekends}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-spice-500" />
                            <a 
                              href="mailto:info@spicelifemd.com"
                              className="text-gray-800 hover:text-spice-500 transition-colors"
                            >
                              info@spicelifemd.com
                            </a>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-6">
                          <Button 
                            asChild
                            size="sm"
                            className="bg-spice-500 hover:bg-spice-600 text-white"
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
                            className="border-brown-900 text-brown-900 hover:bg-brown-900 hover:text-white"
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

      {/* Final CTA Section */}
      <section className="py-20 bg-brown-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MotionSection>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold font-serif">Ready to Experience Spice Life?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join us for an unforgettable culinary journey through the flavors of India. Order online or visit us
                today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ResponsiveOrderButton 
                  size="lg" 
                  className="bg-spice-500 hover:bg-spice-600 text-white"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-brown-900 font-medium"
                >
                  <Link href="#locations">Find Locations</Link>
                </Button>
              </div>
            </div>
          </MotionSection>
        </div>
      </section>
    </div>
  )
}
