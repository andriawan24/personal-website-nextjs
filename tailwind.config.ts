import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "color-background-dark": "#222222",
        "color-text-primary": "#DEDEDE",
        "color-text-secondary": "#BBBBBB",
        "color-background-button-dark": "#575780",
        "color-background-card-dark": "#444444",
        "color-background-pill-dark": "#EEEEEE",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
