/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        albra: ['Albra Grotesk TRIAL', 'sans-serif'],
        manrope: ['var(--font-manrope)'],
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
        // Add custom line heights here
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
