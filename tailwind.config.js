/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060a',
          900: '#0a0b12',
          800: '#10121c',
          700: '#1a1d2b',
          600: '#262a3d',
        },
        mist: {
          100: '#f1f3fa',
          200: '#d6daeb',
          400: '#9aa1bd',
          500: '#6e7591',
        },
        glow: {
          cyan: '#67e8f9',
          teal: '#2dd4bf',
          indigo: '#818cf8',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
