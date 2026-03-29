import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand palette — deepened, warmer, richer darks
        brand: {
          black: "#080706",
          charcoal: "#161412",
          dark: "#111010",
          carbon: "#1E1C1A",
          smoke: "#252220",
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
      fontSize: {
        "10xl": ["10rem", { lineHeight: "0.85" }],
        "11xl": ["12rem", { lineHeight: "0.8" }],
        "12xl": ["14rem", { lineHeight: "0.78" }],
      },
      letterSpacing: {
        "widest-xl": "0.25em",
        "widest-2xl": "0.35em",
        "widest-3xl": "0.5em",
      },
      animation: {
        "fade-in": "fadeIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-up": "fadeInUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in-slow": "fadeIn 2.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "scale-in": "scaleIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "line-grow": "lineGrow 2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "text-reveal": "textReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "letter-spread": "letterSpread 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "shimmer-sweep": "shimmerSweep 4s linear infinite",
        "heading-glow": "headingGlow 5s ease-in-out infinite",
        "gold-breathe": "goldBreathe 4s ease-in-out infinite",
        "text-flicker": "textFlicker 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(80px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        textReveal: {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        letterSpread: {
          "0%": { letterSpacing: "0.1em", opacity: "0" },
          "100%": { letterSpacing: "0.35em", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        shimmerSweep: {
          "0%": { backgroundPosition: "0% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        headingGlow: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.18) drop-shadow(0 0 24px rgba(200,162,78,0.22))" },
        },
        goldBreathe: {
          "0%, 100%": { opacity: "0.75" },
          "50%": { opacity: "1" },
        },
        textFlicker: {
          "0%, 100%": { filter: "brightness(1)" },
          "30%": { filter: "brightness(1.12)" },
          "60%": { filter: "brightness(1.06)" },
          "80%": { filter: "brightness(1.15)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
