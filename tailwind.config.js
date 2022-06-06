module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        light: {        
          "primary": "#176f6b",
          "secondary": "#ffcc00",
          "accent": "#ffedd5",
          "neutral": "#3D4451",
          "base-100": "#ffffff",
          "info": "#98a8dd",
          "success": "#1bbb70",
          "warning": "#df7e07",     
          "error": "#fa5c5c",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}