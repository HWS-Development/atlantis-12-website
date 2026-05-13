/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Live-site palette (atlantis12essaouira.com)
        background: "#FFFFFF",
        foreground: "rgb(47 63 44 / <alpha-value>)",       // body text + headings
        primary: "rgb(47 63 44 / <alpha-value>)",          // dark olive
        "primary-soft": "rgb(73 98 70 / <alpha-value>)",   // softer olive (button color)
        secondary: "rgb(44 62 37 / <alpha-value>)",        // footer / image gradient
        accent: "rgb(143 175 126 / <alpha-value>)",        // muted green (footer label)
        sage: "rgb(107 143 94 / <alpha-value>)",           // sage (#6B8F5E)
        cream: "rgb(245 240 232 / <alpha-value>)",         // cream/beige
        card: "rgb(245 240 232 / <alpha-value>)",          // card surface (cream)
        border: "rgba(47, 63, 44, .15)",
      },
      fontFamily: {
        // body = Raleway, display = Dancing Script (matches live site exactly)
        body: ['Raleway', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Dancing Script"', 'cursive'],
        // legacy aliases kept so existing pages don't break while we migrate
        sans: ['Raleway', 'system-ui', 'sans-serif'],
        serif: ['"Dancing Script"', 'Georgia', 'serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      letterSpacing: {
        tightest: "-0.02em",
        widerx: "0.15em",
        widestx: "0.4em",
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
