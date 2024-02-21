/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-1": "#131515",
        "dark-2": "#1D1F20",
        "brand-1": "#006DA3",
        "brand-2": "#0086C5",
        "light-1": "#DFE8EC",
      },
    },
  },
  plugins: [],
};
