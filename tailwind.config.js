/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "main": "#BDD966",
      "main-hover": "#D3E97A",
      white: "#FFFFFF",
      gray: "#f6f6f6",
      "light-gray": "#0000000a",
      "soft-blue": "#4058c5",
      "soft-blue-hover": "#5368df",
      black: "#000000",
      red: "#ec7160",
      "very-dark-gray": "#1A1A1A",
      "off-white": "#C7C7C7",
    },
    fontSize: {
      "heading-s": ["2rem", { fontWeight: "400" }],
      "heading-m": ["4rem", { fontWeight: "400" }],
      "heading-l": ["3.4rem", { fontWeight: "400" }],
      "body-m": ["1rem", { fontWeight: "400" }],
      "body-l": ["1.13rem", { fontWeight: "400" }],
    },
    keyframes: {
      slideInLeft: {
        '0%': { transform: 'translateX(-100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
      slideInRight: {
        '0%': { transform: 'translateX(100%)', opacity: 0 },
        '100%': { transform: 'translateX(0)', opacity: 1 },
      },
    },
    animation: {
      slideInLeft: 'slideInLeft 1s ease-out',
      slideInRight: 'slideInRight 1s ease-out',
    },
  },
  plugins: [],
}