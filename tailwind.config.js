module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        primary: {
          100: '#E6F7FF',
          200: '#BAE7FF',
          300: '#91D5FF',
          400: '#69C0FF',
          500: '#40A9FF', // primary blue
          600: '#1890FF',
          700: '#096DD9',
          800: '#0050B3',
          900: '#003A8C',
        },
        secondary: {
          100: '#F0FFF4',
          200: '#CCFFCC',
          300: '#9EFFB3',
          400: '#85F2B3',
          500: '#52D989', // bright teal
          600: '#13C276',
          700: '#01A368',
          800: '#018561',
          900: '#016457',
        },
        dark: {
          100: '#676778',
          200: '#5A5A6A',
          300: '#4D4D5C',
          400: '#41414E',
          500: '#343440', // dark background
          600: '#272732',
          700: '#1A1A24',
          800: '#0D0D16',
          900: '#000008',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          yellow: '#F59E0B',
          cyan: '#06B6D4',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px 0px rgba(64, 169, 255, 0.5)' },
          '50%': { boxShadow: '0 0 20px 5px rgba(64, 169, 255, 0.7)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        pulse: 'pulse 2s ease-in-out infinite',
      },
      backgroundImage: {
        'neural-gradient': 'linear-gradient(135deg, #343440 0%, #1A1A24 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}