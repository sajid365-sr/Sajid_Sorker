/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // app directory (Next.js 13+)
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // components folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // (optional) if you have any pages folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#38bdf8", // fixed! "sky-400" must be a HEX or rgb value
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        mono: ["Chivo Mono", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
