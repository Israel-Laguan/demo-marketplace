import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F8F8F8',
          text: '#333333',
          secondaryText: '#666666',
          greyBlue: '#B0C4DE',
          paleGold: '#E6D2A9',
          teal: '#008080',
          burgundy: '#800020',
          border: '#D3D3D3',
          hoverTeal: 'rgba(0, 128, 128, 0.8)',
          hoverBurgundy: 'rgba(128, 0, 32, 0.8)',
        },
        dark: {
          background: '#1F1F1F',
          text: '#FFFFFF',
          secondaryText: '#B0B0B0',
          greyBlue: '#394240',
          paleGold: '#7D715C',
          teal: '#33AFAF',
          burgundy: '#9A4D4D',
          border: '#5E5E5E',
          hoverTeal: 'rgba(51, 175, 175, 0.8)',
          hoverBurgundy: 'rgba(154, 77, 77, 0.8)',
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
