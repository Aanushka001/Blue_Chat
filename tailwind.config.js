/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Includes all relevant file extensions
    './public/index.html',             // Add this if you have static HTML files in public
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B4BF9",
          50: "#EAEAFF",
          100: "#D6D6FF",
          200: "#ADADFF",
          300: "#8585FF",
          400: "#5C5CFF",
          500: "#4B4BF9",
          600: "#3333DB",
          700: "#2626B8",
          800: "#1A1A94",
          900: "#0D0D71",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...require("tailwindcss/defaultTheme").fontFamily.sans],
      },
    },
  },
  plugins: [],
};
