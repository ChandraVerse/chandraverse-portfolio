/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020818',
          900: '#050e1f',
          800: '#080f24',
          700: '#0c1a35',
          600: '#0f2246',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: '#00d4ff',
        },
      },
      fontFamily: {
        display: ['Rajdhani', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.7s ease forwards',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'scan-line': 'scanLine 3s linear infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px #22d3ee44, 0 0 30px #22d3ee22' },
          '50%': { boxShadow: '0 0 20px #22d3ee88, 0 0 60px #22d3ee44' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
