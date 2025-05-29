/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'accent-primary': 'var(--color-accent-primary)',
        'accent-secondary': 'var(--color-accent-secondary)',
        'accent-tertiary': 'var(--color-accent-tertiary)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px var(--color-accent-primary), 0 0 10px var(--color-accent-primary)' 
          },
          '50%': { 
            boxShadow: '0 0 15px var(--color-accent-primary), 0 0 20px var(--color-accent-primary)' 
          },
        }
      },
    },
  },
  plugins: [],
}
