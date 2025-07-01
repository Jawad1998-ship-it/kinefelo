module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1920px",
    },
    extend: {
      fontFamily: {
        // 'jotia' font family
        jotia: ["var(--font-jotia)"],
        // fallback/default font as well
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "custom-pink": "rgb(255, 206, 233, 1)",
        "menu-link-color": "rgb(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
