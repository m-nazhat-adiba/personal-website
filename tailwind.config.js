/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ellipse":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
      },
      textStrokeColor: {
        black: "#ffffff",
      },
      animation: {
        "spin-slow": "spin 4s linear infinite",
      },
    },
    darkMode: "class",
    plugins: [nextui()],
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-1": {
          "-webkit-text-stroke-width": "1px",
        },
        ".text-stroke-bold": {
          "-webkit-text-stroke-width": "4px",
        },
        ".stroke-white": {
          "-webkit-text-stroke-color": "#ffffff",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
