/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
       backgoundmain: '#110c29',
       bgcard: '#1e1743',
       maincolor: '#9333ea',

      },
      boxShadow: {
        'allway': '0px 0px 8px 8px #8b67ce',
      }
    },
  },
  plugins: [],
};
