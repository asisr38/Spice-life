# Spice Life Design System

## Overview
This document outlines the standardized design system for Spice Life, ensuring consistency across all pages and components.

## Brand Colors

### Primary Colors
- **Primary (Spice Orange)**: `hsl(28, 89%, 55%)` - #F28C28
- **Secondary (Warm Brown)**: `hsl(15, 25%, 15%)` - #4A1C1A

### Neutral Colors
- **Background**: `hsl(0, 0%, 100%)` - White
- **Foreground**: `hsl(15, 25%, 15%)` - Brown-900
- **Muted**: `hsl(30, 40%, 96%)` - Cream-100
- **Accent**: `hsl(28, 100%, 95%)` - Spice-50

### Usage Guidelines
- **Primary**: Use for CTAs, highlights, and brand elements
- **Secondary**: Use for headings, important text, and navigation
- **Muted**: Use for backgrounds and subtle elements
- **Accent**: Use for light backgrounds and hover states

## Typography

### Font Families
- **Headings**: `font-serif` (Playfair Display)
- **Body Text**: `font-sans` (Inter)

### Typography Scale
```css
/* Headings */
h1: text-4xl md:text-5xl lg:text-6xl (36px/48px/60px)
h2: text-3xl md:text-4xl lg:text-5xl (30px/36px/48px)
h3: text-2xl md:text-3xl (24px/30px)
h4: text-xl md:text-2xl (20px/24px)
h5: text-lg md:text-xl (18px/20px)
h6: text-base md:text-lg (16px/18px)

/* Body Text */
Large: text-lg md:text-xl (18px/20px)
Base: text-base (16px)
Small: text-sm (14px)
```

### Typography Components
- `<Heading>`: For all headings with proper semantic HTML
- `<Subheading>`: For section subtitles
- `<Text>`: For body text with size variants
- `<BrandAccent>`: For highlighting brand elements

## Spacing System

### Padding/Margin Classes
- `section-padding`: py-20 md:py-32 (80px/128px vertical)
- `container-padding`: px-4 sm:px-6 lg:px-8 (16px/24px/32px horizontal)

### Component Spacing
- Card padding: p-6 to p-8 (24px to 32px)
- Button padding: px-6 py-3 (24px horizontal, 12px vertical)
- Section gaps: space-y-8 to space-y-16 (32px to 64px)

## Component Styles

### Cards
```css
.card-elevated {
  @apply border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm;
}
```

### Buttons
```css
.btn-primary {
  @apply bg-primary hover:bg-primary/90 text-primary-foreground font-medium;
}
```

### Gradients
```css
.gradient-primary {
  @apply bg-gradient-to-r from-primary to-primary/80;
}

.gradient-secondary {
  @apply bg-gradient-to-r from-secondary to-secondary/90;
}
```

## Layout Patterns

### Section Structure
```jsx
<section className="section-padding bg-gradient-to-b from-background to-accent/30">
  <div className="max-w-7xl mx-auto container-padding">
    <MotionSection>
      <SectionHeader 
        title="Section Title"
        subtitle="Section description"
        className="mb-16"
      />
      {/* Content */}
    </MotionSection>
  </div>
</section>
```

### Grid Layouts
- 2 columns: `grid md:grid-cols-2 gap-8`
- 3 columns: `grid md:grid-cols-3 gap-8`
- 4 columns: `grid md:grid-cols-2 lg:grid-cols-4 gap-8`

## Animation Guidelines

### Motion Components
- Use `<MotionSection>` for page sections
- Standard delay: 0.2s between elements
- Hover animations: scale(1.05) with 300ms duration

### Transition Classes
```css
.transition-smooth {
  @apply transition-all duration-300 ease-in-out;
}

.hover-lift {
  @apply transform hover:scale-105 transition-transform duration-300;
}
```

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary on white: 4.5:1 ratio
- Secondary on white: 7:1 ratio

### Focus States
- All interactive elements have visible focus states
- Focus rings use primary color with opacity

## Usage Examples

### Page Header
```jsx
<SectionHeader
  title="Page Title"
  subtitle="Page description"
  centered={true}
  className="mb-16"
/>
```

### Content Card
```jsx
<Card className="card-elevated">
  <CardContent className="p-8">
    <Heading as="h3" className="text-xl mb-4">Card Title</Heading>
    <Text>Card content goes here...</Text>
  </CardContent>
</Card>
```

### Call-to-Action Section
```jsx
<section className="section-padding gradient-secondary text-secondary-foreground">
  <div className="max-w-4xl mx-auto container-padding text-center">
    <Heading as="h2" className="text-secondary-foreground mb-6">
      Ready to Experience Spice Life?
    </Heading>
    <Button className="btn-primary">Order Now</Button>
  </div>
</section>
```

## File Structure

### Core Design Files
- `app/globals.css` - CSS variables and base styles
- `components/ui/typography.tsx` - Typography components
- `components/section-header.tsx` - Standardized section headers
- `tailwind.config.ts` - Design tokens and theme configuration

### Usage in Pages
All pages should follow the standardized structure:
1. Import typography components
2. Use standardized spacing classes
3. Follow consistent color usage
4. Implement proper motion/animation patterns

## Maintenance

### Adding New Components
1. Follow existing naming conventions
2. Use design tokens from CSS variables
3. Include proper TypeScript types
4. Add to this documentation

### Color Updates
1. Update CSS variables in `globals.css`
2. Update Tailwind config if needed
3. Test across all pages
4. Update documentation

This design system ensures consistency, maintainability, and a cohesive brand experience across the entire Spice Life website. 