/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1a1510",
        gold: "#b8965a",
        silver: "#9fa8a3",
        cream: "#f8f4ee",
        brown: "#4a443c"
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "system-ui", "sans-serif"]
      },
      boxShadow: {
        editorial: "0 32px 90px rgba(26, 21, 16, 0.22)"
      }
    }
  },
  plugins: []
};
