/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/*.{js,ts,jsx,tsx,mdx}",
    "./src/constant/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f2f5f9",
        primary: "#ff9c1a",
        accent: "#ec1b09",
        softOrange: "#ffebd1",
        paleBlue: "f2f7fc",
        paleBlueGray: "#E1E8EF",
        translucentDarkBrown: "#1A100380",
        warmSand: "#FFEED9",
        dividerColor: "#E3E3E3"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        100: "100px",
      },
    },
  },
  plugins: [],
};
