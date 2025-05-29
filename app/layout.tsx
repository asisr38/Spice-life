import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Kalam } from "next/font/google"
import { Barriecito, Red_Hat_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"],
  display: "swap",
})

const barriecito = Barriecito({
  subsets: ["latin"],
  variable: "--font-barriecito",
  weight: "400",
  display: "swap",
})

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat-display",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Spice Life - Authentic Indian Restaurant",
    template: "%s | Spice Life"
  },
  description:
    "Experience the authentic flavors of India with a modern twist. Where tradition meets innovation in every bite. Located in Alexandria, VA and Gaithersburg, MD.",
  keywords: [
    "Indian cuisine",
    "authentic flavors", 
    "Spice Life",
    "Indian restaurant",
    "catering services",
    "Alexandria VA",
    "Gaithersburg MD",
    "tandoori",
    "biryani",
    "curry"
  ],
  authors: [{ name: "Spice Life Team" }],
  creator: "Spice Life Restaurant",
  publisher: "Spice Life",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://spicelife.com",
    title: "Spice Life - Authentic Indian Restaurant",
    description: "Experience the authentic flavors of India with a modern twist.",
    siteName: "Spice Life",
    images: [
      {
        url: "/images/logo/spicelifeLogoEnhanced_nobg.png",
        width: 1200,
        height: 630,
        alt: "Spice Life Restaurant Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spice Life - Authentic Indian Restaurant",
    description: "Experience the authentic flavors of India with a modern twist.",
    images: ["/images/logo/spicelifeLogoEnhanced_nobg.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo/fav.png" />
        <link rel="apple-touch-icon" href="/images/logo/fav.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#F28C28" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${kalam.variable} ${barriecito.variable} ${redHatDisplay.variable} font-red-hat antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-[#4A1C1A] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="space-y-4">
                  <h3 className="text-spice-500 text-xl font-bold font-barriecito">Spice Life</h3>
                  <p className="text-gray-300">
                    Authentic Indian cuisine with a modern twist. Experience the flavors of tradition.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className=" text-spice-500 text-lg font-semibold">Quick Links</h4>
                  <div className="space-y-2">
                    <a href="#about" className="block text-gray-300 hover:text-[#F28C28] transition-colors">About</a>
                    <a href="#menu" className="block text-gray-300 hover:text-[#F28C28] transition-colors">Menu</a>
                    <a href="#locations" className="block text-gray-300 hover:text-[#F28C28] transition-colors">Locations</a>
                    <a href="#catering" className="block text-gray-300 hover:text-[#F28C28] transition-colors">Catering</a>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-spice-500 text-lg font-semibold">Contact</h4>
                  <div className="space-y-2 text-gray-100">
                    <p className="text-gray-100">Alexandria: 1-703-667-0544</p>
                    <p className="text-gray-100">Gaithersburg: 1-240-428-1427</p>
                    <p className="text-gray-100">info@spicelifemd.com</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h4 className="text-spice-500 text-lg font-semibold">Hours</h4>
                  <div className="space-y-2 text-gray-100">
                    <p className="text-gray-100">Mon-Fri: 11:00 AM - 10:00 PM</p>
                    <p className="text-gray-100">Sat-Sun: 10:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
                <p className="text-gray-300">&copy; {new Date().getFullYear()} Spice Life Restaurant. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
