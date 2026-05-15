import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import containerQueries from '@tailwindcss/container-queries'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1A2421',
        'accent-gold': '#C5A059',
        'secondary-cream': '#F4F1EA',
        copper: '#8D6E63',
        'map-gray': '#94A3B8',
        'outline-variant': '#bfc9c3',
        error: '#ba1a1a',
        'on-surface': '#1A2421',
        surface: '#F4F1EA',
        background: '#F4F1EA',
        primary: '#1A2421',
        'on-primary': '#F4F1EA',
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        soft: '1.25rem',
        full: '9999px',
      },
      spacing: {
        'section-padding': '64px',
        'stack-lg': '48px',
        'stack-sm': '16px',
        unit: '8px',
        'stack-md': '32px',
        gutter: '20px',
        'container-max': '1440px',
      },
      fontFamily: {
        subheading: ['Inter', 'sans-serif'],
        'headline-md': ['Cormorant Garamond', 'serif'],
        'body-lg': ['Inter', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'label-sm': ['Inter', 'sans-serif'],
        'display-lg': ['Cormorant Garamond', 'serif'],
        'headline-xl': ['Cormorant Garamond', 'serif'],
        logo: ['Cormorant Garamond', 'serif'],
      },
      fontSize: {
        subheading: ['14px', { lineHeight: '1.5', letterSpacing: '0.15em', fontWeight: '600' }],
        'headline-md': ['32px', { lineHeight: '1.3', letterSpacing: '0em', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '1.6', letterSpacing: '-0.01em', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'label-sm': ['12px', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '500' }],
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.01em', fontWeight: '600' }],
        'headline-xl': ['36px', { lineHeight: '1.2', letterSpacing: '0em', fontWeight: '500' }],
      },
    },
  },
  plugins: [forms, containerQueries],
}

export default config
