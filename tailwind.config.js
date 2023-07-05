/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");



module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {


      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            // borderColor: "transparent"
            borderColor: "#3b82f6"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        // typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
        typing: "typing 4s steps(40) infinite alternate, blink .7s infinite"
      },

      innerWidth: {
        clampHeader: "clamp(280px, 5vw, 1140px)",
      },

       fontSize: {
        // clamp: "clamp(1rem, 5vw, 3rem)",
         clampMenu: "clamp(0.75rem, 2vw, 1rem)",
        clampTitle: "clamp(3rem, 5vw, 3rem)",
        clamp: "clamp(1rem, 5vw, 1.5rem)",
      },
       
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
