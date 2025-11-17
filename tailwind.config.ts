import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6A00",
          soft: "#FF944D"
        },
        navy: {
          DEFAULT: "#1F2A44"
        },
        cream: {
          DEFAULT: "#FFF7F0"
        },
        accent: {
          purple: "#7C6FF6",
          pink: "#FF6FB1"
        }
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Noto Sans",
          "Ubuntu",
          "Cantarell",
          "Helvetica Neue",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji"
        ]
      }
    }
  },
  plugins: []
};

export default config;


