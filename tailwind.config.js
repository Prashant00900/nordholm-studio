/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F5F1',
        ink: '#1F2421',
        pine: {
          DEFAULT: '#3D5A4C',
          light: '#5A7C6A',
          dark: '#28392F',
        },
        rust: {
          DEFAULT: '#A6552E',
          light: '#C17548',
        },
        gold: '#C99A3E',
        surface: {
          DEFAULT: '#FFFFFF',
          dark: '#1C211D',
        },
        night: {
          DEFAULT: '#14181F',
          soft: '#1A211C',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease-out both',
        drawLine: 'drawLine 2.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
