module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
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
        // New deep blue theme
        dark: {
          100: '#172040',
          200: '#121835',
          300: '#0E142A',
          400: '#0B1020',
          500: '#080B15', // darker background
          600: '#060810',
          700: '#04060A',
          800: '#020305',
          900: '#010102',
        },
        glow: {
          blue: '#00A3FF', // glowing blue accent
        }
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