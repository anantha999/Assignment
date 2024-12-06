/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Space Mono', 'monospace'], 
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('./images/background-img.png')",
      },
    },
  },
  plugins: [],
}