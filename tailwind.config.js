/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#DF6965",
        primaryDark: "#46131F",
      },
    },
  },
  plugins: [],
};
