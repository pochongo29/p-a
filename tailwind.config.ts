import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — inspired by charcoal, embers, and aged wine
        brand: {
          black: "#0A0A0A",
          charcoal: "#1A1A1A",
          dark: "#141414",
          carbon: "#222222",
          smoke: "#2A2A2A",
        },
        gold: {
          50: "#FFF9E6",
          100: "#FFF0BF",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCC33",
          500: "#C8A24E",
          600: "#B8922E",
          700: "#9A7B2A",
          800: "#7D6422",
          900: "#5F4C1A",
        },
        wine: {
          50: "#FDF2F4",
          100: "#F9E0E5",
          200: "#F3BFC9",
          300: "#EA95A6",
          400: "#DE6680",
          500: "#8B2035",
          600: "#722A3A",
          700: "#5E1F2E",
          800: "#4E1A27",
          900: "#3D1520",
        },
        cream: {
          50: "#FFFDF8",
          100: "#FDF8EE",
          200: "#F5EDD8",
          300: "#E8DBBF",
          400: "#D4C5A0",
          500: "#BDA87C",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "widest-xl": "0.25em",
        "widest-2xl": "0.35em",
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-up": "fadeInUp 1s ease-out forwards",
        "fade-in-slow": "fadeIn 2s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "scale-in": "scaleIn 1.2s ease-out forwards",
        "line-grow": "lineGrow 1.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
