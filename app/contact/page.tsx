import { MotionSection } from "@/components/motion-section"
import { SectionHeader } from "@/components/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Alexandria: 1-703-667-0544", "Gaithersburg: 1-240-428-1427"],
      description: "Call us for reservations or inquiries",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@spicelifemd.com", "info@spicelifemd.com"],
      description: "Send us a message anytime",
    },
    {
      icon: MapPin,
      title: "Locations",
      details: ["3616 King Street, Alexandria, VA 22302", "128 Ellington Blvd, Gaithersburg, MD 20878"],
      description: "Visit either of our restaurant locations",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Alexandria: Mon-Fri 11AM-10PM, Sat-Sun 10AM-11PM", "Gaithersburg: Mon-Fri 11:55AM-9:30PM, Sat-Sun 11:55AM-10PM"],
      description: "We're open 7 days a week",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EF] to-white">
      {/* Hero Section */}
      <MotionSection className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Get in Touch"
            subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
            className="mb-12"
          />
        </div>
      </MotionSection>

      {/* Contact Info Cards */}
      <MotionSection className="py-20" delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactInfo.map((info, index) => (
            <Card key={index} className="shadow-md">
              <CardContent>
                <div className="flex items-center space-x-4">
                  <info.icon className="w-6 h-6 text-[#F28C28]" />
                  <h3 className="text-lg font-semibold">{info.title}</h3>
                </div>
                <p className="text-gray-500 mt-2">{info.description}</p>
                <ul className="mt-4 space-y-2">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </MotionSection>

      {/* Interactive Map and Social Media Links */}
      <MotionSection className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.123456789!2d72.123456789!3d19.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c123456789!2sSpice%20Life!5e0!3m2!1sen!2sin!4v123456789"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-md shadow-md"
          ></iframe>
          <div className="mt-8 space-x-4">
            <a
              href="https://facebook.com/spicelife"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4267B2] hover:underline"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/spicelife"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/spicelife"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1DA1F2] hover:underline"
            >
              Twitter
            </a>
          </div>
        </div>
      </MotionSection>
    </div>
  )
}
