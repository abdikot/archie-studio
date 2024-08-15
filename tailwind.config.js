/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "play-fair": ['"Play Fair"'],
      },
      colors: {
        "custom-gray": '#1F1F1F',
        "custom-white": '#FFF9F4',
      } 
    },
  },
  plugins: [],
};
