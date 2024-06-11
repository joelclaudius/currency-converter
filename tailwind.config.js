// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-blue": "#004A7D",
        "custom-white": "#FFFFFF",
        "footer-color": "#EAE6E3",
        "ondemand-color": "#F3F3F3",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
