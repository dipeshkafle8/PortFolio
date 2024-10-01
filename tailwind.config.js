/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            // width: "0ch",
            visibility: "hidden",
          },
          "90%": {
            // width: "10ch",
          },
        },
        blink: {
          "50%": {
            borderColor: "rgb(7,136,255)",
          },
          "100%": {
            borderColor: "rgb(7,136,255)",
          },
        },
      },
      animation: {
        typing: "typing 2s steps(17) infinite alternate, blink .7s infinite",
      },
    },
  },
  plugins: [],
};
