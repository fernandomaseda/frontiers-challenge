import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#101828",
        secondary: "#119c3c",
        "how-to-start": "#f8f6f4",
      },
      zIndex: {
        "1": "1",
      },
      fontSize: {
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
      },
      padding: {
        "18": "4.5rem",
      },
      fontFamily: {
        archia: ["var(--font-archia)"],
        DEFAULT: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
export default config;
