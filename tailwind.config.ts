import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			// Spice Life Brand Colors
  			spice: {
  				50: '#FEF7F0',
  				100: '#FEF3E8',
  				200: '#FDE4C6',
  				300: '#FBD5A4',
  				400: '#F8B760',
  				500: '#F28C28', // Primary brand color
  				600: '#E07B1F',
  				700: '#C56A1A',
  				800: '#A45815',
  				900: '#854611',
  			},
  			brown: {
  				50: '#F7F3F2',
  				100: '#EFE7E5',
  				200: '#DFCFCB',
  				300: '#CFB7B1',
  				400: '#AF877D',
  				500: '#8F5749',
  				600: '#814E42',
  				700: '#6B4137',
  				800: '#56342C',
  				900: '#4A1C1A', // Primary dark color
  			},
  			cream: {
  				50: '#FEFCFB',
  				100: '#FEF9F7',
  				200: '#FCF1EF',
  				300: '#FAE9E7',
  				400: '#F6D9D7',
  				500: '#F2C9C7',
  				600: '#DAB5B3',
  				700: '#B69795',
  				800: '#927977',
  				900: '#776362',
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
  			serif: ['var(--font-playfair)', 'Georgia', 'serif'],
  			handwritten: ['var(--font-kalam)', 'Kalam', 'Comic Sans MS', 'cursive'],
  			barriecito: ['var(--font-barriecito)', 'Barriecito', 'cursive'],
  			'red-hat': ['var(--font-red-hat-display)', 'Red Hat Display', 'sans-serif'],
  		},
  		fontSize: {
  			'xs': ['0.75rem', { lineHeight: '1rem' }],
  			'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  			'base': ['1rem', { lineHeight: '1.5rem' }],
  			'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  			'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  			'2xl': ['1.5rem', { lineHeight: '2rem' }],
  			'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  			'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  			'5xl': ['3rem', { lineHeight: '1' }],
  			'6xl': ['3.75rem', { lineHeight: '1' }],
  			'7xl': ['4.5rem', { lineHeight: '1' }],
  			'8xl': ['6rem', { lineHeight: '1' }],
  			'9xl': ['8rem', { lineHeight: '1' }],
  		},
  		spacing: {
  			'18': '4.5rem',
  			'88': '22rem',
  			'128': '32rem',
  			'144': '36rem',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		boxShadow: {
  			'spice': '0 4px 14px 0 rgba(242, 140, 40, 0.15)',
  			'spice-lg': '0 10px 25px -3px rgba(242, 140, 40, 0.1), 0 4px 6px -2px rgba(242, 140, 40, 0.05)',
  			'brown': '0 4px 14px 0 rgba(74, 28, 26, 0.15)',
  			'brown-lg': '0 10px 25px -3px rgba(74, 28, 26, 0.1), 0 4px 6px -2px rgba(74, 28, 26, 0.05)',
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-in': {
  				'0%': { opacity: '0', transform: 'translateY(10px)' },
  				'100%': { opacity: '1', transform: 'translateY(0)' },
  			},
  			'slide-in-left': {
  				'0%': { opacity: '0', transform: 'translateX(-20px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' },
  			},
  			'slide-in-right': {
  				'0%': { opacity: '0', transform: 'translateX(20px)' },
  				'100%': { opacity: '1', transform: 'translateX(0)' },
  			},
  			'bounce-gentle': {
  				'0%, 100%': { transform: 'translateY(0)' },
  				'50%': { transform: 'translateY(-5px)' },
  			},
  			'grid': {
  				'0%': { transform: 'translateY(-50%)' },
  				'100%': { transform: 'translateY(0)' },
  			},
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'slide-in-left': 'slide-in-left 0.5s ease-out',
  			'slide-in-right': 'slide-in-right 0.5s ease-out',
  			'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
  			'grid': 'grid 15s linear infinite',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
