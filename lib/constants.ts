// Site Configuration
export const SITE_CONFIG = {
  name: "Spice Life",
  description: "Experience the authentic flavors of India with a modern twist. Where tradition meets innovation in every bite.",
  url: "https://spicelife.com",
  ogImage: "/images/logo/spiceLifeLogo1.png",
  links: {
    twitter: "https://twitter.com/spicelife",
    facebook: "https://facebook.com/spicelife",
    instagram: "https://instagram.com/spicelife",
  },
}

// Contact Information
export const CONTACT_INFO = {
  email: {
    general: "info@spicelifemd.com",
    catering: "info@spicelifemd.com",
    support: "info@spicelifemd.com",
  },
  phone: {
    alexandria: "1-703-667-0544",
    gaithersburg: "1-240-428-1427",
  },
  hours: {
    weekdays: "11:00 AM - 10:00 PM",
    weekends: "10:00 AM - 11:00 PM",
  },
}

// Restaurant Locations
export const LOCATIONS = [
  {
    id: "alexandria",
    name: "Spice Life Alexandria",
    address: "3616 King Street",
    city: "Alexandria, VA 22302",
    phone: CONTACT_INFO.phone.alexandria,
    hours: {
      sunday: "12:15 PM - 7:30 PM",
      monday: "11:45 AM - 9:00 PM",
      tuesday: "11:45 AM - 9:00 PM",
      wednesday: "11:45 AM - 9:00 PM",
      thursday: "11:45 AM - 9:00 PM",
      friday: "11:45 AM - 9:00 PM",
      saturday: "12:15 PM - 9:00 PM",
    },
    features: ["Dine-in", "Takeout", "Delivery", "Parking Available"],
    coordinates: {
      lat: 38.820450,
      lng: -77.050552,
    },
    orderUrl: "https://order.toasttab.com/online/spice-life-alexandria-3616-king-street",
  },
  {
    id: "gaithersburg",
    name: "Spice Life Gaithersburg",
    address: "128 Ellington Blvd",
    city: "Gaithersburg, MD 20878",
    phone: CONTACT_INFO.phone.gaithersburg,
    hours: {
      weekdays: "11:55 AM - 9:30 PM",
      weekends: "11:55 AM - 10:00 PM",
    },
    features: ["Curbside Pickup", "Takeout", "Quick Service", "25 min Prep Time"],
    coordinates: {
      lat: 39.173161,
      lng: -77.271652,
    },
    orderUrl: "https://shop.spicelifemd.com/#2",
  },
]

// Menu Categories and Items
export const MENU_CATEGORIES = [
  {
    id: "appetizers",
    name: "Appetizers",
    description: "Start your meal with our delicious appetizers",
    items: [
      {
        id: "veg-samosa",
        name: "Veg Samosa",
        description: "Potato filled pastry",
        price: 4.99,
        spicy: 1,
        vegetarian: true,
        vegan: false,
        glutenFree: false,
      },
      {
        id: "aloo-tikki",
        name: "Aloo Tikki",
        description: "Fried potato patties",
        price: 4.99,
        spicy: 1,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      {
        id: "onion-palak-pakora",
        name: "Onion & Palak Pakora",
        description: "Spinach and onion fritters",
        price: 5.99,
        spicy: 1,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
      {
        id: "fish-fry",
        name: "Fish Fry",
        description: "Southern style Tilapia",
        price: 8.99,
        spicy: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: false,
      },
    ],
  },
  {
    id: "tandoori",
    name: "Tandoori",
    description: "Grilled to perfection in our traditional tandoor oven",
    items: [
      {
        id: "tandoori-chicken",
        name: "Tandoori Chicken (1/2 Chicken)",
        description: "Overnight marinated chicken, grilled to order",
        price: 14.99,
        spicy: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      {
        id: "chicken-tikka",
        name: "Chicken Tikka",
        description: "Marinated chicken cubes, grilled",
        price: 14.99,
        spicy: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      {
        id: "lamb-chops",
        name: "Lamb Chops",
        description: "Spice rub lamb racks, grilled",
        price: 24.99,
        spicy: 3,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    description: "Basmati Rice Cooked With Protein Or Vegetables",
    items: [
      {
        id: "chicken-biryani",
        name: "Chicken Biryani",
        description: "Fragrant basmati rice with tender chicken",
        price: 14.99,
        spicy: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      {
        id: "lamb-biryani",
        name: "Lamb Biryani",
        description: "Aromatic rice with succulent lamb",
        price: 16.99,
        spicy: 2,
        vegetarian: false,
        vegan: false,
        glutenFree: true,
      },
      {
        id: "vegetable-biryani",
        name: "Vegetable Biryani",
        description: "Mixed vegetables with fragrant basmati rice",
        price: 13.99,
        spicy: 2,
        vegetarian: true,
        vegan: true,
        glutenFree: true,
      },
    ],
  },
]

// Catering Packages
export const CATERING_PACKAGES = [
  {
    id: "corporate-lunch",
    name: "Corporate Lunch",
    price: 15,
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
    minPeople: 10,
    maxPeople: 100,
  },
  {
    id: "wedding-feast",
    name: "Wedding Feast",
    price: 35,
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
    minPeople: 50,
    maxPeople: 500,
  },
  {
    id: "family-gathering",
    name: "Family Gathering",
    price: 25,
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
    minPeople: 15,
    maxPeople: 75,
  },
]

// Company Values
export const COMPANY_VALUES = [
  {
    id: "authentic-flavors",
    title: "Authentic Flavors",
    description: "Traditional recipes passed down through generations, using the finest spices imported directly from India.",
    icon: "heart",
  },
  {
    id: "fresh-ingredients",
    title: "Fresh Ingredients",
    description: "We source the freshest local produce and combine it with authentic Indian spices for the perfect balance.",
    icon: "star",
  },
  {
    id: "family-tradition",
    title: "Family Tradition",
    description: "Our family has been sharing the love of Indian cuisine for over 30 years, bringing warmth to every dish.",
    icon: "users",
  },
  {
    id: "award-winning",
    title: "Award Winning",
    description: "Recognized for excellence in authentic Indian cuisine and outstanding customer service.",
    icon: "award",
  },
]

// Navigation Items
export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Locations", href: "#locations" },
  { name: "Catering", href: "#catering" },
  { name: "Contact", href: "#contact" },
]

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: "Facebook",
    url: "https://facebook.com/spicelife",
    icon: "facebook",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/spicelife",
    icon: "instagram",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/spicelife",
    icon: "twitter",
  },
  {
    name: "Yelp",
    url: "https://yelp.com/biz/spicelife",
    icon: "yelp",
  },
]

// Spice Level Indicators
export const SPICE_LEVELS = {
  1: { name: "Mild", color: "green", description: "Gentle heat" },
  2: { name: "Medium", color: "yellow", description: "Moderate spice" },
  3: { name: "Hot", color: "orange", description: "Spicy kick" },
  4: { name: "Very Hot", color: "red", description: "Intense heat" },
  5: { name: "Extreme", color: "red", description: "For spice lovers only" },
}

// Dietary Restrictions
export const DIETARY_OPTIONS = {
  vegetarian: { name: "Vegetarian", icon: "🥬", color: "green" },
  vegan: { name: "Vegan", icon: "🌱", color: "green" },
  glutenFree: { name: "Gluten Free", icon: "🌾", color: "blue" },
  dairyFree: { name: "Dairy Free", icon: "🥛", color: "purple" },
  nutFree: { name: "Nut Free", icon: "🥜", color: "orange" },
}

// Business Statistics
export const BUSINESS_STATS = [
  { label: "Years Experience", value: "30+", icon: "calendar" },
  { label: "Happy Customers", value: "50K+", icon: "users" },
  { label: "Authentic Dishes", value: "100+", icon: "utensils" },
  { label: "Events Catered", value: "500+", icon: "party" },
] 