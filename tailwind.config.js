/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecebff',
          100: '#c7c2ff',
          200: '#a299ff',
          300: '#8f85ff',
          400: '#7c70ff',
          500: '#695cff',
          600: '#5546ff',
          700: '#311fff',
          800: '#1100cc',
          900: '#0c008f',
        },
      },
    },
  },
  plugins: [],
}
