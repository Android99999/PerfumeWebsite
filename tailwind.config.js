/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        PlayFair: ['Playfair Display', 'serif'],
        Poppins: ['Poppins', 'sans-serif'],
        Comme: ['Comme', 'sans-serif']
      },
      screens: {
        xs: "550px",
        md: "850px",
        xl: "1180px",
        "2xl": "1280px",
      },
    },
  },
  plugins: [],
}

