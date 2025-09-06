/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' if you want system preference
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        accent: 'var(--accent-color)',
        success: 'var(--success-color)',
        warning: 'var(--warning-color)',
        error: 'var(--error-color)',
        textColor:'var(--light-bg)',
        textGray:'var(--text-gray)',
        textSlate:'var(--text-slate)',
        darkBg:'var(--dark-bg)',
        tab:'var(--tab)',

      }
    },

  },
  plugins: [],
}

