import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#11110f",
        charcoal: "#181816",
        "coal-soft": "#24231f",
        ivory: "#f2eee4",
        "ivory-deep": "#e6dfd1",
        paper: "#faf7ef",
        gold: "#b89a5d",
        "gold-muted": "#8c7448",
        stone: "#999283",
      },
      borderColor: {
        "line-dark": "rgba(255,255,255,0.14)",
        "line-light": "rgba(17,17,15,0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "var(--font-display-bn)", "Georgia", "serif"],
        body: ["var(--font-body)", "var(--font-body-bn)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        measure: "68ch",
        wide: "84rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
