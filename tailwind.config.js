/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      inset: "inset 0 0 10px 2px rgba(0, 0, 0, 0.15)",
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
