"use client"
import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Clock, Mail, Heart, Users, Award, Utensils, Crown, Star, ChefHat, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ResponsiveOrderButton } from "@/components/responsive-order-button"
import { Navbar } from "@/components/navbar"
import { LOCATIONS } from "@/lib/constants"
import { CreativePricing, type PricingTier } from "@/components/ui/creative-pricing"
import { RetroGrid } from "@/components/ui/retro-grid"
import { LeafletMapWrapper } from "@/components/leaflet-map-wrapper"
import { motion } from "framer-motion"
import { Mascot } from "@/components/ui/mascot"
import { Heading, Subheading, Text, BrandAccent } from "@/components/ui/typography"

export default function HomePage() {
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

  // Enhanced menu categories
  const menuCategories = [
    {
      name: "Appetizers",
      description: "Start your journey with our flavorful starters",
      image: "/images/appetizers.jpg",
      icon: "🥗",
      popular: ["Samosas", "Pakoras", "Chaat"]
    },
    {
      name: "Main Course",
      description: "Authentic curries and traditional dishes",
      image: "/images/main-course.jpg", 
      icon: "🍛",
      popular: ["Butter Chicken", "Biryani", "Dal Makhani"]
    },
    {
      name: "Tandoor Specials",
      description: "Fresh from our traditional clay oven",
      image: "/images/tandoor.jpg",
      icon: "🔥",
      popular: ["Tandoori Chicken", "Naan", "Kebabs"]
    },
    {
      name: "Desserts",
      description: "Sweet endings to perfect meals",
      image: "/images/desserts.jpg",
      icon: "🍮",
      popular: ["Gulab Jamun", "Kulfi", "Kheer"]
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
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center section-padding bg-cover bg-center bg-no-repeat w-full"
        style={{ backgroundImage: "url('/images/background.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* RetroGrid Background Effect */}
        <RetroGrid className="opacity-20" />

        <div className="relative max-w-7xl mx-auto container-padding text-center z-10">
          <MotionSection delay={0.2}>
            <div className="space-y-8 md:space-y-12">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Badge variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white text-base sm:text-lg mb-6">
                    ✨ Authentic Indian Cuisine Since 1995
                  </Badge>
                </motion.div>
                
                <Heading as="h1" className="text-white text-shadow-lg">
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="block text-4xl sm:text-5xl md:text-6xl font-bold font-serif"
                  >
                    Taste the
                  </motion.span>
                  <span className="flex items-center justify-center gap-4 flex-wrap">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-300 to-orange-500 text-4xl sm:text-5xl md:text-6xl font-bold font-serif"
                    >
                      Authentic India
                    </motion.span>
                    <Mascot size="lg" className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] drop-shadow-2xl" />
                  </span>
                </Heading>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-6"
              >
                <Subheading className="text-white text-shadow max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl font-serif">
                  From traditional tandoor to modern flavors. Every bite tells a story of heritage, passion, and culinary excellence crafted with love.
                </Subheading>
                
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 sm:px-0 max-w-full">
                  <ResponsiveOrderButton 
                    size="lg"
                    className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto shadow-lg transform hover:scale-105 transition-transform duration-300 font-serif"
                  />
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-secondary text-base sm:text-lg px-6 sm:px-8 py-4 w-full sm:w-auto backdrop-blur-sm bg-white/20 transform hover:scale-105 transition-transform duration-300 font-serif"
                  >
                    <Link href="#about">Learn Our Story</Link>
                  </Button>
                </div>
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
            <span className="text-white text-sm font-medium font-serif">Scroll to explore</span>
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
                  <Text size="large" className="font-serif text-base sm:text-lg text-foreground">
                    At <BrandAccent>Spice Life</BrandAccent>, we&apos;re passionate about bringing you the authentic flavors of India. Our kitchen is where traditional recipes meet modern culinary techniques, creating dishes that honor our heritage while delighting contemporary palates.
                  </Text>
                  <Text className="font-serif text-base sm:text-lg text-muted-foreground">
                    Every dish is carefully crafted using the finest spices and freshest ingredients. We believe that great food brings people together, and our mission is to share the warmth and richness of Indian cuisine with our community.
                  </Text>
                  <Text className="font-serif text-base sm:text-lg text-muted-foreground">
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
                  <ResponsiveOrderButton className="w-full sm:w-auto btn-primary transform hover:scale-105 transition-transform duration-300 font-serif" />
                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto transform hover:scale-105 transition-transform duration-300 font-serif"
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

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-gradient-to-b from-accent/30 to-background relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto container-padding relative">
          <MotionSection delay={0.2}>
            <SectionHeader
              title="Our Menu"
              subtitle="Discover authentic Indian flavors crafted with love and tradition"
              className="mb-16"
            />

            {/* Menu Categories Preview */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {menuCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full card-elevated group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <span className="text-6xl">{category.icon}</span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-white/90">
                            <Star className="w-3 h-3 mr-1 fill-current" />
                            Popular
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <Heading as="h3" className="text-xl group-hover:text-primary transition-colors">
                          {category.name}
                        </Heading>
                        <Text className="text-sm">{category.description}</Text>
                        <div className="space-y-2">
                          <Text className="text-xs font-medium text-secondary">Popular items:</Text>
                          <div className="flex flex-wrap gap-1">
                            {category.popular.map((item) => (
                              <Badge key={item} variant="outline" className="text-xs">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="w-full mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          <Link href={`/menu#${category.name.toLowerCase()}`}>Explore {category.name}</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="btn-primary">
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Locations Section */}
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
                { number: "2", label: "Locations", icon: <MapPin className="w-6 h-6" /> },
                { number: "50K+", label: "Happy Customers", icon: <Users className="w-6 h-6" /> },
                { number: "25+", label: "Years Serving", icon: <Award className="w-6 h-6" /> },
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

                  {/* Centered Order Button */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                    <ResponsiveOrderButton 
                      size="lg"
                      className="btn-primary shadow-lg transition-all duration-200 hover:scale-105"
                    />
                  </div>
                </div>
              </Card>
            </div>
          </MotionSection>
        </div>
      </section>

      {/* Catering Section */}
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
              className="text-base sm:text-lg"
              cardClassName="p-4 sm:p-6"
              titleClassName="text-xl sm:text-2xl font-serif"
              priceClassName="text-2xl sm:text-3xl font-serif"
              descriptionClassName="text-sm sm:text-base"
              featureClassName="text-sm sm:text-base"
            />
          </MotionSection>
        </div>
      </section>

      {/* Contact Section */}
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

      {/* Final CTA Section */}
      <section className="section-padding gradient-secondary text-secondary-foreground w-full">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <MotionSection>
            <div className="space-y-8">
              <Heading as="h2" className="text-secondary-foreground">Ready to Experience Spice Life?</Heading>
              <Subheading className="text-secondary-foreground/80 max-w-2xl mx-auto">
                Join us for an unforgettable culinary journey through the flavors of India. Order online or visit us today!
              </Subheading>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <ResponsiveOrderButton 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                />
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-secondary font-medium"
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
