import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      backgroundImage: {
        serviceBanner: 'url("./src/assets/images/services/4.jpg")',
      },
    },
  },
  plugins: [daisyui],
};
