/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: 'repeat(auto-fill, minmax(100px, 1fr))'
      }
    }
  },
  plugins: []
}
