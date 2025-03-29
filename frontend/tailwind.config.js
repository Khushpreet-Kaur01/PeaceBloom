/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind scans all files here
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'neon-pink': '#FF6EC7',
        'neon-cyan': '#00FFFF',
        'neon-yellow': '#F4F90A',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-in': 'slideIn 0.8s ease-out both',
        'bounce-in': 'bounceIn 0.6s ease-out both'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '60%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
