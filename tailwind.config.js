/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auto: 'repeat(auto-fill, minmax(100px, 1fr))'
      },
      keyframes: {
        scale: {
          '0%, 70%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(0)' }
        }
      },
      animation: {
        scale: 'scale 3s ease'
      }
    }
  },
  plugins: []
}
