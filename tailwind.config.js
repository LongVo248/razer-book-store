/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 5px theme('color.purple.200'), 0 0 20px theme('color.purple.700')",
        bottomNavigation: "0 -2px 3px rgba(0, 0, 0, 0.06)",
        card: "0px 0px 6px rgba(79, 95, 120, 0.1)",
        cardHover: "0px 0px 8px rgba(79, 95, 120, 0.18)",
      },
      colors: {
        primary: { ...colors.green, DEFAULT: colors.green[600] },
        brand: {
          DEFAULT: "#02b290",
          dark: "#000000",
          light: "#ffffff",
          muted: "#595959",
          tree: "#6fb48e",
          "tree-dark": "#0B4635",
          danger: "#dc2626",
          title: "#e7ecf0",
        },
        fill: {
          thumbnail: "#f3f6fa",
          base: "#f3f6f9",
        },
        border: {
          base: "#e7ecf0",
        },
      },
      fontSize: {
        "13px": "13px",
        "15px": "15px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "8rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
      fontFamily: {
        body: ["'Inter', sans-serif"],
        manrope: ["'Manrope', sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-bootstrap-grid")({
      containerMaxWidths: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    }),
  ],
  corePlugins: {
    container: false,
  },
};
