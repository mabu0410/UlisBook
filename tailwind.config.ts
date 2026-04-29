import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lightest: "#E3FDFE",
          lighter: "#DAF1FE",
          light: "#C4E5FB",
          medium: "#9BC7EC",
          dark: "#AFD6F8",
          muted: "#C1DDF3",
          darkest: "#0F172A",
        },
        background: "#E3FDFE",
        "soft-bg": "#DAF1FE",
        "card-bg": "#C4E5FB",
        primary: "#9BC7EC",
        accent: "#AFD6F8",
        "muted-blue": "#C1DDF3",
        "text-main": "#0F172A",
        "text-sub": "#475569",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
