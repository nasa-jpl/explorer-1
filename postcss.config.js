const path = require("path");
const env = process.env.NODE_ENV;

module.exports = {
  plugins: {
    tailwindcss: path.resolve(__dirname, "tailwind.config.js"),
    autoprefixer: {},
    // TODO: We may just want to let tailwind do the purging rather than do it here.
    "@fullhuman/postcss-purgecss":
      env === "production"
        ? {
            content: [path.resolve(__dirname, "src/**/*.html")],
            defaultExtractor: (content) =>
              content.match(/[A-Za-z0-9-_:/]+/g) || [],
          }
        : false,
  },
};
