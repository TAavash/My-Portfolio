/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        spin: 'spin 1.5s linear infinite', // Default spin for general use
        'spin-slow': 'spin-slow 4s linear infinite', // Custom slow spin for the loader
      },
      keyframes: {
        spin: {
          to: { transform: 'rotate(360deg)' }, // Default spin keyframe
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' }, // Slow spin keyframe
        },
      },
    },
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
    tailwindScrollbar, // Use the imported module here
  ],
}
