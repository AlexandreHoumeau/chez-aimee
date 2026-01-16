// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
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
