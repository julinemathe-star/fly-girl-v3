import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Approved Fly Girl palette
        warmwhite: "#FAF4EA",
        ivory: "#F6F0E6",
        champagne: "#EAD9BF",
        gold: {
          DEFAULT: "#C9A24B", // soft gold
          deep: "#A9812F",
          ink: "#7A5E24", // darkened brushed gold for small text on light bg (WCAG AA)
        },
        blush: {
          DEFAULT: "#EBD3CE",
          deep: "#D8B4AC",
        },
        stone: "#E7E1D6",
        taupe: "#D8CFC0",
        /**
         * V2 brand direction: rich navy is the luxury anchor (with warm gold).
         * The `plum` token names are retained so every existing class keeps
         * working — their values now resolve to the official Fly Girl navy.
         * `navy` aliases are provided for new code.
         */
        plum: {
          DEFAULT: "#1C2B4A", // rich navy — headings, anchors
          soft: "#33436B",    // deepened navy for premium body copy
          body: "#31416A",    // editorial body copy on ivory (WCAG AA)
          deep: "#0F1930",    // near-midnight navy — footer, dark surfaces
        },
        navy: {
          DEFAULT: "#1C2B4A",
          soft: "#33436B",
          body: "#31416A",
          deep: "#0F1930",
        },
        ink: "#26314A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica Neue", "sans-serif"],
      },
      letterSpacing: {
        luxe: "0.24em",
        wide2: "0.34em",
        eyebrow: "0.42em",
      },
      maxWidth: {
        shell: "1280px",
        prose2: "52ch",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        card: "0 24px 50px rgba(28,43,74,0.12)",
        media: "0 30px 70px rgba(28,43,74,0.18)",
        gold: "0 10px 30px rgba(169,129,47,0.32)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        logoIn: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scrollLine: {
          "0%,100%": { transform: "scaleY(0.4)", opacity: "0.4" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        // Hero load sequence: video (immediate) -> logo -> title -> sub -> buttons
        "hero-logo": "logoIn 1.6s cubic-bezier(0.22,1,0.36,1) 0.5s both",
        "hero-title": "fadeUp 1.5s cubic-bezier(0.22,1,0.36,1) 1.7s both",
        "hero-sub": "fadeUp 1.5s cubic-bezier(0.22,1,0.36,1) 2.5s both",
        "hero-actions": "fadeUp 1.5s cubic-bezier(0.22,1,0.36,1) 3.3s both",
        "hero-scroll": "fadeIn 1.5s ease 4.2s both",
        "scroll-line": "scrollLine 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
