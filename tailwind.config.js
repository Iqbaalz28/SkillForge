/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // Deep Royal Blue
        accent: "#F97316", // Vibrant Accent Orange
      },
      fontFamily: {
        sans: ['Open Sans', 'Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
