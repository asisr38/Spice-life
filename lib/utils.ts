import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

// Format phone number
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Validate email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
  return phoneRegex.test(phone)
}

// Generate slug from string
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Truncate text
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

// Get spice level color
export function getSpiceLevelColor(level: number): string {
  const colors = {
    1: 'text-green-500',
    2: 'text-yellow-500',
    3: 'text-orange-500',
    4: 'text-red-500',
    5: 'text-red-600',
  }
  return colors[level as keyof typeof colors] || 'text-gray-500'
}

// Get spice level indicator
export function getSpiceLevelIndicator(level: number): string {
  return '🌶️'.repeat(Math.min(level, 5))
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Calculate distance between two coordinates
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 3959 // Radius of the Earth in miles
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Format business hours
export function formatBusinessHours(hours: { weekdays: string; weekends: string }): string {
  return `Mon-Fri: ${hours.weekdays}, Sat-Sun: ${hours.weekends}`
}

// Check if restaurant is open
export function isRestaurantOpen(hours: { weekdays: string; weekends: string }): boolean {
  const now = new Date()
  const currentDay = now.getDay() // 0 = Sunday, 6 = Saturday
  const currentTime = now.getHours() * 100 + now.getMinutes()
  
  const isWeekend = currentDay === 0 || currentDay === 6
  const hoursString = isWeekend ? hours.weekends : hours.weekdays
  
  // Parse hours (assuming format like "11:00 AM - 10:00 PM")
  const timeMatch = hoursString.match(/(\d{1,2}):(\d{2})\s*(AM|PM)\s*-\s*(\d{1,2}):(\d{2})\s*(AM|PM)/)
  if (!timeMatch) return false
  
  const [, openHour, openMin, openPeriod, closeHour, closeMin, closePeriod] = timeMatch
  
  let openTime = parseInt(openHour) * 100 + parseInt(openMin)
  let closeTime = parseInt(closeHour) * 100 + parseInt(closeMin)
  
  if (openPeriod === 'PM' && parseInt(openHour) !== 12) openTime += 1200
  if (closePeriod === 'PM' && parseInt(closeHour) !== 12) closeTime += 1200
  if (openPeriod === 'AM' && parseInt(openHour) === 12) openTime -= 1200
  if (closePeriod === 'AM' && parseInt(closeHour) === 12) closeTime -= 1200
  
  return currentTime >= openTime && currentTime <= closeTime
}

// Generate Google Maps URL
export function generateMapsUrl(address: string, city: string): string {
  const query = encodeURIComponent(`${address}, ${city}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

// Generate directions URL
export function generateDirectionsUrl(address: string, city: string): string {
  const destination = encodeURIComponent(`${address}, ${city}`)
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}
