/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        light: "#e1edff",
        dark: "#0e2642",
        primary: "#3c338e",
        secondary: "#515cca",
        info: "#7b86eb",
        accent1: "#f24d8a",
        accent2: "#d05997",
        accent3: "#e8a3be",
        success: "#23ac69",
        warning: "#e3ce21",
        danger: "#f22610"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slot-machine': 'slotMachine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slotMachine: {
          '0%': { transform: 'translateY(4em)' },
          '35%': { transform: 'translateY(0)' },
          '65%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-4em)' },
        }
      },
      // animation: {
      // },
      // keyframes: {
      // }
    },
  },
  plugins: [],
};