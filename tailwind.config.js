/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./support.html" ,"./src/**/*.{js,ts,jsx,tsx}"],
  safelist: ["h-screen", "hidde-open-icon", "visible-close-icon"],
  darkMode : "class",
  theme: {
    extend: {
      colors: ({ colors }) => ({
        brand: {
          primary: "#36b9ff",
          secondary: "#F2F2F2",
        },
        gray : colors.gray  
      })
    }
  },
  plugins: [],
}

