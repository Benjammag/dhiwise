module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_cc: "#ffffffcc" },
        black: { 900: "#000000", "900_b5": "#000000b5" },
        amber: { 600: "#ffb701" },
        teal: { 700: "#038e45" },
        gray: { 100: "#f4f4f4", 200: "#efefef", 500: "#908f8f" },
      },
      boxShadow: {},
      fontFamily: { inter: "Inter", jejugothic: "JejuGothic", poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
