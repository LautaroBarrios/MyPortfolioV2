/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        s: "410px",
        "min-h": { raw: "(min-height: 650px)" },
      },
    },
  },
  plugins: [],
};
