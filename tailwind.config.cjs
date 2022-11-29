/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      "purple-400": "#7945FF",
      "purple-600": "#5C2DD5",
      pink: "#FD6687",
      yellow: "#FFCE67",
    },
    fontSize: {
      L: "3.5rem",
      M: "1.5rem",
      S: "1.25rem",
      XS: "1rem",
    },
    fontWeight: {
      bold: "700",
      medium: "500",
    },
    lineHeight: {
      L: "4.4375rem",
      M: "1.9375rem",
      S: "1.625rem",
      XS: "1.3125rem",
    },
    extend: {
      width: {
        "9/10": "90%",
      },
      minHeight: {
        "70px": "70px",
      },
      borderRadius: {
        "20px": "20px",
      },
      borderWidth: {
        "3px": "3px",
      },
      boxShadow: {
        mainMenuShadow: "0px 10px 0px #000000", 
      },
    },
  },
  plugins: [],
};
