/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#f7f3f0',
          100: '#ede4d8',
          200: '#dcc8b1',
          300: '#c8a882',
          400: '#b58b5a',
          500: '#a67c52',
          600: '#8b6f47',
          700: '#6f5a3c',
          800: '#5c4a35',
          900: '#4e3f30',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
