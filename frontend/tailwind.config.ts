import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kendrix-navy': '#061B3A',
        'kendrix-navy-light': '#08224A',
        'kendrix-blue': '#2563EB',
        'kendrix-blue-light': '#38BDF8',
        'kendrix-cyan': '#06B6D4',
        'kendrix-orange': '#F59E0B',
        'kendrix-orange-deep': '#EA580C',
        'bg-secondary': '#F6F9FC',
        'text-secondary': '#64748B',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out'
      }
    },
  },
  plugins: [],
} satisfies Config
