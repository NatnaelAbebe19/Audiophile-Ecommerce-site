/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      inset: "inset 0 2px 4px rgba(0, 0, 0, 0.2)",
    },
  },
  variants: {
    extend: {
      boxShadow: ["inset"],
    },
  },
  plugins: [],
  darkMode: "selector",
};
