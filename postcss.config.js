const path = require("path");

const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    // require("postcss-import"),
    tailwindcss(path.resolve(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss")({
      content: [path.resolve(__dirname, "src/**/*.html")],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    }),
  ],
};
