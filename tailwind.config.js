/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: `'Syne', sans-serif;`,
        body: `'Inter', sans-serif;`,
      },
      colors: {
        primary: "#212121",
        secondary: "#3E3E59",
      },
    },
  },
  plugins: [],
};
