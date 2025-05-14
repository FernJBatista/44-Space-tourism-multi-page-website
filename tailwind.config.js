/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0B0D17',
        'secondary': '#D0D6F9',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'Barlow': ['Barlow', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      },
    },
  },
  plugins: [],
} 