/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FAF8F3',
          100: '#F5F1E8',
          200: '#EDE6D6',
          300: '#E8DCC8',
          400: '#D4A574',
          500: '#C8961F',
          600: '#B8860B',
          700: '#9B7309',
          800: '#7A5A07',
          900: '#2D2416',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF0B3',
          200: '#FFE680',
          300: '#FFD94D',
          400: '#DAB88A',
          500: '#D4A574',
          600: '#CD7F32',
          700: '#B8860B',
          800: '#A07309',
          900: '#7A5A07',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
