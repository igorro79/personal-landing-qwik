/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        sm: "570px",
        //=> @media (min-width: 360px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "820px",
        // => @media (min-width: 820px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "1xl": "1366px",
        // => @media (min-width: 1366px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },

      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "#3b82f6",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },

      colors: {
        primary: "#443843",
        secondary: "#99627A",
        accent: "#C88EA7",
        accentDark: "#3a225c",
        accentDark2: "#402f4f",
        light: "#E7CCCB",
        middleGrey: "#909090",
        lightGrey: "#F8F8F8",

        // // main: "#FF304D",
        // main: "#9333ea",
        // // light: "#F8F8F8",
        // dark: "#171717",
        // grey: "#323232",
        // // lightGrey: "#E0E0E0",
        // // lightGrey: "#FFFFF",
        // lightDarkGrey: "#909090",
        // // middleGrey: "#919191",
        // middleGrey: "#FFFFFF",
        // lightRed: "#FF445E",
        // darkGrey: "#474747",
        // // activeRed: "#DC2D45",
        // activeRed: "#8b36b5",

        // link: "#4B73FF",
        // linkActive: "#86A1FF",
        // formBg: "#EEEEEE",
        // formBgDark: "#202020",
        // dynamicBg: "#FF304DB2",
        // langBg: "#262626",
        // scrollBar: "#F9D4D9",
        // bgColorBtnForm: "#535353",
        // mainTextBlue: "#6355ff",
      },
      fontFamily: {
        inter: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
