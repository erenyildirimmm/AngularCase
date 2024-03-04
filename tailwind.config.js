/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse 600px 600px, rgba(58, 26, 56, 1), rgba(80, 80, 80, 0.0) 100% )",
      },
    },
    container: {
      // customizes screen sizes
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1240px",
      },
      padding: "20px",
    },
  },
  plugins: [],
};

