/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html", "./src/**/*.{js,ts,jsx,tsx}", "./**/*.html"],
  safelist: ["h-screen", "hidde-open-icon", "visible-close-icon"],
  darkMode : "class",
  theme: {
    extend: {
      colors: ({ colors }) => ({
        brand: {
          primary: "#36b9ff",
          secondary: "#F2F2F2",
        },
        gray : colors.slate  
      })
    }
  },
  plugins: [],
}

