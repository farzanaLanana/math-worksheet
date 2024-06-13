/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csyellow': '#FFB300',
        'cssecondary': '#4D5DD4',
        'cssuccess': '#02B63F',
        'cspurple': '#9747FF',
        'csgrey': '#F0F0F0'
      },
    },
  },
  plugins: [],
}
