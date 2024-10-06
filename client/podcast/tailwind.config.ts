import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--background)",
        white40: "rgba(253, 253, 253, 0.4)",
        black: "var(--foreground)",
        gray: "#979797",
        light: "#f5f5f7",
        purple: "#7247ca",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
