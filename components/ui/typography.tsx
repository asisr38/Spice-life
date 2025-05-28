import React from 'react'
import { cn } from '@/lib/utils'

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

// Main Heading Component
export function Heading({ 
  children, 
  className, 
  as = 'h1',
  ...props 
}: TypographyProps & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
} & React.HTMLAttributes<HTMLHeadingElement>) {
  const Component = as
  return (
    <Component 
      className={cn(
        "brand-heading",
        as === 'h1' && "text-4xl md:text-5xl lg:text-6xl",
        as === 'h2' && "text-3xl md:text-4xl lg:text-5xl", 
        as === 'h3' && "text-2xl md:text-3xl",
        as === 'h4' && "text-xl md:text-2xl",
        as === 'h5' && "text-lg md:text-xl",
        as === 'h6' && "text-base md:text-lg",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

// Subheading Component
export function Subheading({ 
  children, 
  className,
  ...props 
}: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "brand-subheading text-large",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Body Text Component
export function Text({ 
  children, 
  className,
  size = 'base',
  ...props 
}: TypographyProps & React.HTMLAttributes<HTMLParagraphElement> & {
  size?: 'small' | 'base' | 'large'
}) {
  return (
    <p 
      className={cn(
        "text-muted-foreground leading-relaxed",
        size === 'small' && "text-sm",
        size === 'base' && "text-base",
        size === 'large' && "text-lg md:text-xl",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// Brand Accent Text
export function BrandAccent({ 
  children, 
  className,
  ...props 
}: TypographyProps & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span 
      className={cn("brand-accent", className)}
      {...props}
    >
      {children}
    </span>
  )
}

// Section Title Component
export function SectionTitle({ 
  children, 
  className,
  ...props 
}: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={cn(
        "brand-heading text-3xl md:text-4xl lg:text-5xl text-center mb-4",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}

// Section Subtitle Component
export function SectionSubtitle({ 
  children, 
  className,
  ...props 
}: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={cn(
        "brand-subheading text-large text-center max-w-3xl mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
} 