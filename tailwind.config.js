/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#EAE3D2",
        stone: "#D8CBB2",
        // olive: "#5E6B4E",
        olive: "rgb(94 107 78 / <alpha-value>)",
        sea: "#4A8FA6",
        terra: "#B56A50",
        charcoal: "#2B2B2B",
        legacy:{ green:'#2F5F2E', orange:'#E79A2E' }
      },
      fontFamily: {
        serif: ['Cormorant Garamond','Georgia','serif'],
        sans: [
          'Avenir', 'Avenir Next', 'Avenir LT Std',
          'system-ui','-apple-system','Segoe UI','Helvetica Neue','Arial','sans-serif'],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.06)",
      },
      borderRadius: {
        xl2: "1rem",
      },
    },
  },
  plugins: [],
};
