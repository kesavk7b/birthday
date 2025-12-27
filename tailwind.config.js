/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",         // important for Vite
    "./src/**/*.{js,jsx,ts,tsx}", // all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      padding: {
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-top': 'env(safe-area-inset-top)',
      },
    },
  },
  plugins: [],
}
