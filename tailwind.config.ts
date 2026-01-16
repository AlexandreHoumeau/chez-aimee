// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-1200px)' },
        },
      },
      animation: {
        carousel: 'carousel 60s linear infinite',
      },
      colors: {
        background: '#FFEDCD',
        primary: '#FF6833',
        secondary: '#EBB625',
        pink: '#F99892',
      },
    },
  },
  plugins: [],
}
