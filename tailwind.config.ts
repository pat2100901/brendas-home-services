import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          50: "#fbf7ff",
          100: "#f3e9ff",
          200: "#e4cdf9",
          300: "#c89ce8",
          400: "#a765cf",
          500: "#8541ad",
          600: "#6e318f",
          700: "#53256d",
          800: "#3b1c4e",
          900: "#261234"
        },
        gold: {
          100: "#fff7d7",
          200: "#f9df8c",
          300: "#e8c15f",
          400: "#c9972c",
          500: "#a86f18"
        },
        teal: {
          50: "#ecfffc",
          100: "#c8fff6",
          300: "#5de8d6",
          500: "#0d9488",
          700: "#0f5f59"
        },
        ink: "#18121f",
        silver: "#f4f1ef"
      },
      boxShadow: {
        luxe: "0 24px 80px rgba(38, 18, 52, 0.16)",
        soft: "0 18px 55px rgba(83, 37, 109, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
