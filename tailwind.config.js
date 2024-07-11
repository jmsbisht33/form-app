/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bankGradient: "#0179FE"
      },
      backgroundImage: {
        "bank-gradient": "linear-gradient(90deg, #0179FE 0%, #4893FF 100%)"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["cupcake"],
  },
}


