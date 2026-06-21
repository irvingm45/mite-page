/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#934a34", // Muted Terracotta (formerly secondary)
        "on-primary-container": "#783521", // Dark terracotta text (formerly on-secondary-container)
        "surface-container-low": "#f4f3f1",
        "on-tertiary-fixed-variant": "#474743",
        "inverse-on-surface": "#f1f1ef",
        surface: "#faf9f7",
        "on-primary-fixed": "#3b0a00", // formerly on-secondary-fixed
        "surface-container-lowest": "#ffffff",
        "secondary-fixed-dim": "#b5c8df", // formerly primary-fixed-dim
        "on-error-container": "#93000a",
        background: "#faf9f7",
        "surface-container-highest": "#e3e2e0",
        "on-primary-fixed-variant": "#75331f", // formerly on-secondary-fixed-variant
        "tertiary-fixed": "#e4e2dd",
        "surface-tint": "#4e6073",
        outline: "#727780",
        "on-tertiary-container": "#b8b6b2",
        secondary: "#203344", // Slate Navy (formerly primary)
        "primary-fixed": "#ffdbd1", // formerly secondary-fixed
        "secondary-fixed": "#d1e4fb", // formerly primary-fixed
        "error-container": "#ffdad6",
        "surface-container-high": "#e9e8e6",
        error: "#ba1a1a",
        "on-surface-variant": "#42474f",
        "tertiary-container": "#484844",
        "on-tertiary-fixed": "#1b1c19",
        "on-secondary": "#ffffff",
        "on-error": "#ffffff",
        "inverse-primary": "#ffb5a0", // formerly secondary-fixed-dim (terracotta)
        "secondary-container": "#37495c", // formerly primary-container
        "surface-variant": "#e3e2e0",
        "surface-dim": "#dadad8",
        "on-surface": "#1a1c1b",
        "primary-container": "#fea186", // formerly secondary-container
        "on-background": "#1a1c1b",
        "inverse-surface": "#2f3130",
        "primary-fixed-dim": "#ffb5a0", // formerly secondary-fixed-dim
        "on-secondary-fixed-variant": "#36485b", // formerly on-primary-fixed-variant
        "on-secondary-fixed": "#091d2e", // formerly on-primary-fixed
        "outline-variant": "#c1c7d0",
        "tertiary-fixed-dim": "#c8c6c2",
        "on-tertiary": "#ffffff",
        "on-secondary-container": "#a5b8ce", // formerly on-primary-container
        "surface-container": "#efeeec",
        "surface-bright": "#faf9f7",
        tertiary: "#31312e",
        "on-primary": "#ffffff"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "margin-mobile": "16px",
        xl: "64px",
        base: "4px",
        xs: "8px",
        "margin-desktop": "48px",
        sm: "16px",
        md: "24px",
        lg: "40px"
      },
      fontFamily: {
        "body-lg": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "label-sm": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "headline-md": ["Plus Jakarta Sans"],
        "headline-sm": ["Plus Jakarta Sans"],
        "body-sm": ["Plus Jakarta Sans"],
        "body-md": ["Plus Jakarta Sans"],
        headline: ["Plus Jakarta Sans"],
        display: ["Plus Jakarta Sans"],
        body: ["Plus Jakarta Sans"],
        label: ["Plus Jakarta Sans"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.01em", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "16px", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
        "headline-sm": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      },
      animation: {
        blob: "blob 7s infinite",
        marquee: "marquee 25s linear infinite"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        }
      }
    },
  },
  plugins: [],
}
