module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-[#358547]", "border-none"],
  theme: {
    extend: {
      colors: {
        "dark-gray": "#2A2829",
        "off-white": "#DBD8D0",
        "off-dark": "#141414",
      },
      backgroundImage: {
        "hero-pattern": "url('/small-chalk-tile.png')",
        "services-bg": "url('/services-bg.png')",
        "reviews-bg": "url('/reviews-bg.png')",
      },
      fontFamily: {
        apercu: ["Apercu", "sans-serif"],
        apercubold: ["ApercuBold", "sans-serif"],
        apercuitalic: ["ApercuItalic", "sans-serif"],
        cevirno: ["CevirnoNeue", "sans-serif"],
        cevirnosemibold: ["CevirnoNeueSemiBold", "sans-serif"],
        cevirnobold: ["CevirnoNeueBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
