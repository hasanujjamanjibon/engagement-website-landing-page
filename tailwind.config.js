/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*"],
  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('./images/image.png')",
        "hero-pattern": "url('/images/image.png')",
      },
    },
  },
  plugins: [],
};
