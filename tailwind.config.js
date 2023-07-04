/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");



module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.purple,
        secondary: colors.sky,

        // main: "#FF304D",
        main: "#9333ea",
        light: "#F8F8F8",
        dark: "#171717",
        grey: "#323232",
        lightGrey: "#E0E0E0",
        // lightGrey: "#FFFFF",
        lightDarkGrey: "#909090",
        // middleGrey: "#919191",
        middleGrey: "#FFFFFF",
        lightRed: "#FF445E",
        darkGrey: "#474747",
        // activeRed: "#DC2D45",
        activeRed: "#8b36b5",

        link: "#4B73FF",
        linkActive: "#86A1FF",
        formBg: "#EEEEEE",
        formBgDark: "#202020",
        dynamicBg: "#FF304DB2",
        langBg: "#262626",
        scrollBar: "#F9D4D9",
        bgColorBtnForm: "#535353",
        mainTextBlue: "#6355ff",
      },
      fontFamily: {
        sans: ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  darkMode: "class",
};
