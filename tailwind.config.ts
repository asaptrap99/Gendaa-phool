import type { Config } from "tailwindcss";

// Marigold design tokens. Change a hex here and it updates everywhere.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        marigold: { 500: "#F59E0B" },
        saffron: { 600: "#E8710A" },
        genda: { 300: "#FFC857" },
        cream: { 50: "#FFF8EC" },
        sand: { 100: "#FDEBC8" },
        leaf: { 700: "#2F5D3A" },
        forest: { 900: "#14301F" },
        sage: { 200: "#CFE3C8" },
        rani: { 500: "#D6336C" },
        ink: { 900: "#2A1A0C" },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 1.6rem + 4.2vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "h2": ["clamp(2rem, 1.5rem + 2.2vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "h3": ["clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)", { lineHeight: "1.2" }],
      },
      borderRadius: { card: "24px", "card-lg": "28px", "card-sm": "20px" },
      boxShadow: {
        warm: "0 10px 30px -12px rgba(232, 113, 10, 0.35)",
        "warm-lg": "0 24px 50px -18px rgba(232, 113, 10, 0.45)",
        soft: "0 4px 16px -6px rgba(232, 113, 10, 0.22)",
      },
      backgroundImage: {
        marigold: "linear-gradient(135deg, #F59E0B 0%, #E8710A 100%)",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        fall: {
          "0%": { transform: "translate3d(0,-10vh,0) rotate(0deg)" },
          "100%": { transform: "translate3d(var(--drift),110vh,0) rotate(var(--spin))" },
        },
      },
      animation: {
        marquee: "marquee var(--marquee-duration, 30s) linear infinite",
        fall: "fall var(--fall-duration, 14s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
