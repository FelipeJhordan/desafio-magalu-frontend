/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFA3',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
      backgroundColor: {
        default: '#2B3C51', 
        header: '#223041',
        input: '#223041',
        default_strong: '#1D2938',
        switch_bg: '#3D5470',
        search_bg: '#F4F4F4',
        toast_bg: '#3D5470',
      },
    },
  },
  plugins: [],
}

