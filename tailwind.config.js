/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6edf7',
          100: '#ccdcef',
          200: '#99b9df',
          300: '#6696cf',
          400: '#3373bf',
          500: '#0F3460',
          600: '#0c2a4d',
          700: '#091f3a',
          800: '#061527',
          900: '#030a13',
        },
        secondary: {
          50: '#fcf9e9',
          100: '#f9f2d3',
          200: '#f3e5a7',
          300: '#edd87b',
          400: '#e6cb4f',
          500: '#E6B325',
          600: '#b88f1e',
          700: '#8a6b16',
          800: '#5c470f',
          900: '#2e2407',
        },
        accent: {
          50: '#eef4fc',
          100: '#dde9f8',
          200: '#bbd3f1',
          300: '#99bee9',
          400: '#77a8e2',
          500: '#1E67B8',
          600: '#164f8c',
          700: '#0f3b69',
          800: '#082746',
          900: '#041423',
        },
      },
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
};