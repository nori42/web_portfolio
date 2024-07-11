/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.tsx",
    "./src/App.tsx",
    "./src/components/**/*.tsx",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A182E",
        secondary: "#4D5662",
        accent: "#46B49F",
        txt_white: "#E9E9E9",
        txt_accent: "#A6ADB6",
      },
    },
  },
  plugins: [],
};
