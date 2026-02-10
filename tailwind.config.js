/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'plumber-blue': '#1e40af',
        'plumber-dark': '#1e3a8a',
        'plumber-light': '#3b82f6',
        'plumber-accent': '#f59e0b',
      }
    },
  },
  plugins: [],
}
