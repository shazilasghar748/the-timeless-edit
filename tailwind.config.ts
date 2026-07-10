import type { Config } from "tailwindcss";

/**
 * The Timeless Edit — Design Tokens
 * Palette: "old library meets luxury magazine"
 * All colors are exposed as CSS variables (see globals.css) so light/dark
 * mode is a variable swap, not a duplicated color system.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "rgb(var(--color-cream) / <alpha-value>)",       // #F8F5F2 primary bg
        beige: "rgb(var(--color-beige) / <alpha-value>)",       // #EAE3D9 secondary sections
        antique: "rgb(var(--color-antique) / <alpha-value>)",   // #8B6F47 accent
        gold: "rgb(var(--color-gold) / <alpha-value>)",         // #C5A46D luxury accent
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)", // #222222 text
        ivory: "rgb(var(--color-ivory) / <alpha-value>)",       // #FFFDF9 cards
        espresso: "rgb(var(--color-espresso) / <alpha-value>)", // #4A3728 buttons

        // Semantic aliases — components should reach for these, not raw names,
        // so a future palette tweak is a token edit, not a component rewrite.
        background: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-muted": "rgb(var(--surface-muted) / <alpha-value>)",
        foreground: "rgb(var(--fg) / <alpha-value>)",
        "foreground-muted": "rgb(var(--fg-muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-gold": "rgb(var(--accent-gold) / <alpha-value>)",
        button: "rgb(var(--button) / <alpha-value>)",
        "button-foreground": "rgb(var(--button-fg) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Editorial type scale — generous leading, restrained weight jumps
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.25rem", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-sm": ["1.5rem", { lineHeight: "1.3" }],
        "eyebrow": ["0.75rem", { lineHeight: "1", letterSpacing: "0.14em" }],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        button: "9999px", // fully rounded, per brief
        card: "0.75rem",
      },
      boxShadow: {
        card: "0 1px 2px rgb(34 34 34 / 0.04), 0 8px 24px -8px rgb(34 34 34 / 0.10)",
        "card-hover": "0 2px 4px rgb(34 34 34 / 0.06), 0 16px 32px -12px rgb(34 34 34 / 0.16)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      maxWidth: {
        prose: "68ch",
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
