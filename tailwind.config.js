module.exports = {
  mode: "jit",
  purge: ["./{pages,common}/**/*.{tsx,jsx,html,js,ts}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
