/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#006FFD',
        grey: '#71727A',
        darkGrey:'#44454A',
        red:'#FF3B30',
        black1:'#2F3037'
      },
    },
  },
  plugins: [],
}

