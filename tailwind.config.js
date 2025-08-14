/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        brand: {
          DEFAULT: "#6EE7F9",
          500: "#22D3EE",
          600: "#06B6D4",
        },
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-dots":
          "radial-gradient(currentColor 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
