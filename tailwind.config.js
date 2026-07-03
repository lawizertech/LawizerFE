module.exports = {
  content: [
    './app/**/*.{js,ts,tsx,jsx}',
    './components/**/*.{js,ts,tsx,jsx}',
    './pages/**/*.{js,ts,tsx,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        "brand-dark": 'var(--brand-dark)',
        "brand-light": 'var(--brand-light)',
        secondary: 'var(--secondary)'
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif']
      }
    }
  },
  plugins: []
};
