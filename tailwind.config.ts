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
        sage: {
          50: "#f4f7f4",
          100: "#e7ece6",
          200: "#d1dbcf",
          300: "#b2c3af",
          400: "#8fa88a",
          500: "#6f8c6a",
          600: "#577153",
          700: "#455a42",
          800: "#394a37",
          900: "#303e2e",
          950: "#182217",
        },
        floral: {
          50: "#faf5f3",
          100: "#f5ebe6",
          200: "#ebd8cd",
          300: "#ddbfae",
          400: "#cda18a",
          500: "#bd866b",
          600: "#aa7055",
          700: "#8d5a44",
          800: "#744b3a",
          900: "#604033",
        },
        linen: {
          50: "#faf9f6",
          100: "#f5f3ee",
          200: "#ece7de",
          300: "#ded6c8",
          400: "#c8bcab",
          800: "#4b443b",
          900: "#28241f",
        },
        forest: {
          800: "#243330",
          900: "#1a2624",
          950: "#111a19",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
