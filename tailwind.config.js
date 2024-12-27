/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // Add variants for light mode
      backgroundColor: ['light'],
      textColor: ['light'],
      borderColor: ['light'],
    },
  },
  plugins: [
    function ({ addVariant, e }) {
      addVariant('light', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.light .${e(`light${separator}${className}`)}`;
        });
      });
    },
  ],
}