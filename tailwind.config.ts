import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          lg: "2.5rem",
          xl: "3.5rem",
        },
      },
      fontFamily: {
        sans: [
          "'FrutigerLT Pro'",
          "'Neue Frutiger'",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          ...defaultTheme.fontFamily.sans,
        ],
        display: [
          "'FrutigerLT Pro'",
          "'Neue Frutiger'",
          "'Helvetica Neue'",
          "Helvetica",
          "Arial",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        brand: {
          50: "#f4f7ff",
          100: "#e4edff",
          200: "#c9d8ff",
          300: "#a3bbff",
          400: "#7b95ff",
          500: "#5f73f2",
          600: "#4c58d9",
          700: "#3942b0",
          800: "#2c348c",
          900: "#252c72",
        },
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(15, 23, 42, 0.35)",
        subtle: "0 12px 30px -20px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(95,115,242,0.25), transparent 55%)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
