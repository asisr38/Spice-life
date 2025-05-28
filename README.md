# 🌶️ Spice Life Restaurant Website

A modern, responsive website for Spice Life, an authentic Indian restaurant with locations in Alexandria, VA and Gaithersburg, MD. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎨 Design & User Experience
- **Modern, responsive design** optimized for all devices
- **Smooth animations** with Framer Motion
- **Accessible navigation** with keyboard support
- **Custom brand colors** and typography
- **Optimized images** with Next.js Image component

### 🍽️ Restaurant Features
- **Interactive menu display** with image carousel
- **Location finder** with contact information and hours
- **Catering packages** with detailed pricing
- **Contact forms** with validation
- **QR code menu** for mobile access

### 🚀 Performance & SEO
- **Server-side rendering** with Next.js
- **Optimized Core Web Vitals**
- **SEO-friendly** with proper meta tags
- **Performance monitoring** hooks
- **Image optimization** and lazy loading

### 🛠️ Technical Features
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Component-based architecture**
- **Custom hooks** for reusable logic
- **Centralized constants** for easy maintenance

## 🏗️ Architecture

```
spice-life/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with navbar and footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   └── [pages]/           # Individual pages
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── navbar.tsx        # Navigation component
│   ├── motion-section.tsx # Animation wrapper
│   └── [others]/         # Feature-specific components
├── lib/                  # Utility functions and constants
│   ├── constants.ts      # App-wide constants
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── public/               # Static assets
│   └── images/          # Restaurant images and logos
└── styles/              # Additional stylesheets
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/spice-life.git
   cd spice-life
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type checking
- **Tailwind CSS** for styling

### Component Guidelines

1. **Use TypeScript** for all components
2. **Follow naming conventions** (PascalCase for components)
3. **Add proper accessibility** attributes
4. **Use semantic HTML** elements
5. **Implement responsive design** with Tailwind classes

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile devices** (320px+)
- **Tablets** (768px+)
- **Desktop** (1024px+)
- **Large screens** (1440px+)

## 🎨 Brand Colors

```css
/* Primary Brand Colors */
--spice-500: #F28C28;    /* Primary orange */
--brown-900: #4A1C1A;    /* Primary dark brown */
--cream-50: #FEFCFB;     /* Light cream background */

/* Extended Palette */
--spice-50 to --spice-900   /* Orange variations */
--brown-50 to --brown-900   /* Brown variations */
--cream-50 to --cream-900   /* Cream variations */
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://spicelife.com
NEXT_PUBLIC_CONTACT_EMAIL=info@spicelife.com
NEXT_PUBLIC_OG_IMAGE=/images/logo/spiceLifeLogo1.png # Example, ensure this path is correct in constants.ts

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_analytics_id

# Feature Flags
NEXT_PUBLIC_ENABLE_ONLINE_ORDERING=true
```

### Customization

#### Adding Menu Items
Edit `lib/constants.ts` and update the `MENU_CATEGORIES` array:

```typescript
export const MENU_CATEGORIES = [
  {
    id: "new-category",
    name: "New Category",
    description: "Description of the category",
    items: [
      {
        id: "new-item",
        name: "New Item",
        description: "Item description",
        price: 12.99,
        spicy: 2,
        vegetarian: true,
      }
    ]
  }
]
```

#### Updating Contact Information
Modify the `CONTACT_INFO` and `LOCATIONS` objects in `lib/constants.ts`.

#### Adding New Pages
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation in `lib/constants.ts`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** automatically on push to main branch

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- **Netlify**
- **AWS Amplify**
- **Railway**
- **DigitalOcean App Platform**

### Build Commands

```bash
# Build the application
npm run build

# Start production server
npm run start
```

## 📊 Performance

The website is optimized for:
- **Core Web Vitals** compliance
- **Lighthouse** score of 90+
- **Fast loading times** with image optimization
- **Minimal JavaScript** bundle size

### Performance Monitoring

Use the `usePerformance` hook to monitor:
- Page load times
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Add TypeScript types for new features
- Include responsive design considerations
- Test on multiple devices and browsers
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- **Email**: support@spicelife.com
- **Phone**: (703) 555-0123
- **Issues**: [GitHub Issues](https://github.com/your-username/spice-life/issues)

## 🙏 Acknowledgments

- **Next.js** team for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **shadcn/ui** for the beautiful component library
- **Framer Motion** for smooth animations
- **Lucide React** for the icon library

---

**Made with ❤️ for Spice Life Restaurant** 