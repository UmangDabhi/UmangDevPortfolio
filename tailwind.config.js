/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f172a',
          800: '#1e293b',
          600: '#475569',
          400: '#38bdf8',
          300: '#0ea5e9',
          200: '#22d3ee',
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};