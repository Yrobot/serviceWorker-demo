/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./{pages,common,components}/**/*.{jsx,html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "field-border": "var(--border,#fff)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
