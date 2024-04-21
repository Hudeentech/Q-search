/** @type {import('tailwindcss').Config} */
export default {
  mode:'jit',
  content: [
    "./index.html",
    "./search-page.html",
    "./video.html",
    "./image.html",
    "./src/**",
    "./main/**",
    "./*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        custom: {
          bg: '#28282b',
          bg2: '#edbc0b',
          subText: 'Gray-300',
          heading: 'blue-500',
          subHeading: 'Gray-800',
          hover: 'Gray-500',
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ['hover', 'dark'],
    },
  },
  plugins: [],
}

