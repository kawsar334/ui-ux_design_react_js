/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: '#1c7dec', 
        text:'#1f80f0',
        main:"#0b305b",
        dark:"#002045",
        titlecolor:"#1CC800",
           
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
