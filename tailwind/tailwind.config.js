/** @type {import('tailwindcss').Config} */
module.exports = {
  // script: "npx tailwindcss -i ./style/tailwind.css -o ./style/output.css --watch",
  darkMode: false,
  mode: 'jit',
  purge: ["../*.html"],
  content: ["../*.html","../**/**/*.js"],
  theme: {
    extend: {
      // class : {'thuoc tinh' : 'gia tri'}
    },
  },
  plugins: [],
}
