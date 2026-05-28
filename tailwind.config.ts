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
        ink: "#12201f",
        slate: "#4b5f5d",
        mist: "#f4f8f7",
        pearl: "#fbfdfc",
        line: "#dde8e5",
        emerald: "#0f766e",
        lagoon: "#0d9488",
        mint: "#dff7f1"
      },
      boxShadow: {
        soft: "0 18px 60px rgba(18, 32, 31, 0.08)",
        card: "0 14px 38px rgba(18, 32, 31, 0.09)"
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem"
      }
    }
  },
  plugins: []
};

export default config;
