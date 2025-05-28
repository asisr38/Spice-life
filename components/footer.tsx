"use client"

import { LOCATIONS } from "@/lib/constants"
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "./ui/button"
import { ResponsiveOrderButton } from "./responsive-order-button"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image
                src="/images/logo/spicelifeLogoEnhanced_nobg.png"
                alt="Spice Life Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold font-serif text-foreground">
                Spice Life
              </span>
            </Link>
            <p className="text-sm sm:text-base text-muted-foreground font-serif">
              Bringing authentic Indian flavors to your table since 1995. Experience the rich heritage of Indian cuisine with every bite.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-serif text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Menu", href: "/menu" },
                { name: "About Us", href: "#about" },
                { name: "Locations", href: "#locations" },
                { name: "Catering", href: "#catering" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors font-serif"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-serif text-foreground">Contact Us</h3>
            <div className="space-y-4">
              {LOCATIONS.map((location) => (
                <div key={location.id} className="space-y-2">
                  <h4 className="font-medium font-serif text-foreground">{location.name}</h4>
                  <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="font-serif">{location.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${location.phone}`} className="font-serif hover:text-primary transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-1" />
                      <div className="font-serif">
                        <p>Mon-Fri: {location.hours.weekdays}</p>
                        <p>Sat-Sun: {location.hours.weekends}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold font-serif text-foreground">Stay Updated</h3>
            <p className="text-sm sm:text-base text-muted-foreground font-serif">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <form className="space-y-4">
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full font-serif">
                  Subscribe
                </Button>
              </div>
            </form>
            <div className="pt-4">
              <ResponsiveOrderButton className="w-full font-serif" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground font-serif text-center sm:text-left">
              © {new Date().getFullYear()} Spice Life. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground font-serif">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 