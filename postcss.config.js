// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],

  // This is the function used to extract class names from your templates
  defaultExtractor: (content) => {
    // Capture as liberally as possible, including things like `h-(screen-1.5)`
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

    // Capture classes within other delimiters like .block(class="w-1/2") in Pug
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
    process.env.NODE_ENV === "production"
      ? require("cssnano")({
          preset: "default",
        })
      : null,
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
