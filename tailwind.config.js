module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  theme: {
    extend: {
      height: {
        80: "20rem",
        100: "25rem",
      },
      fontFamily: {
        nototc: [
          "Noto Sans TC",
          "Microsoft JhengHei",
          "PingFang HK",
          "Helvetica Neue",
          "Heiti TC",
          "Microsoft JhengHei",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        black: "#111111",
        gray1: "#333333",
        gray2: "#666666",
        gray3: "#999999",
        gray4: "#e0e0e0",
        white: "#ffffff",
        gpgreen: "#66cc00",
        gporange: "#ff9500",
        gpdarkblue: "#292f47",
        gplightblue: "#e6f5f5",
        gpred: "#ff3333",
        arctic: "#62cbd7",
        health: "#f96d8c",
        plastics: "#afaa91",
        climate: "#ffbe00",
        forests: "#00b474",
        oceans: "#008fe2",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "2rem",
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    require("@tailwindcss/typography"),
  ],
};
