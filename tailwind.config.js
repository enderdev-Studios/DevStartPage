/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darken: {
          0: "#1e1e2e", // base
          1: "#181825", // mantle
          2: "#11111b", // crust
          3: "#cdd6f4", // text
          4: "#bac2de" // subtext
        },
        light: {
          base: "#eff1f5",
          mantle: "#e6e9ef",
          crust: "#dce0e8",
          text: "#4c4f69",
          subtext: "#5c5f77"
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
