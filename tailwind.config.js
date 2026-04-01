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
        cyber: {
          cyan:  '#22d3ee',
          blue:  '#4fc3f7',
          glow:  '#00d4ff',
          dim:   'rgba(34,211,238,0.15)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'Rajdhani', 'Inter', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in-up':  'fadeInUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':     'fadeIn 0.65s ease forwards',
        'float':       'float 4s ease-in-out infinite',
        'spin-slow':   'spin 20s linear infinite',
        'glow-pulse':  'glowPulse 2.5s ease-in-out infinite',
        'blink':       'blink 1s step-end infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px rgba(34,211,238,0.25), 0 0 30px rgba(34,211,238,0.1)' },
          '50%':      { boxShadow: '0 0 20px rgba(34,211,238,0.5),  0 0 60px rgba(34,211,238,0.2)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
      },
      boxShadow: {
        'cyan-sm':  '0 0 10px rgba(34,211,238,0.2)',
        'cyan-md':  '0 0 20px rgba(34,211,238,0.3)',
        'cyan-lg':  '0 0 40px rgba(34,211,238,0.4)',
        'cyan-glow':'0 0 24px rgba(34,211,238,0.45), 0 0 60px rgba(34,211,238,0.15)',
      },
    },
  },
  plugins: [],
}
