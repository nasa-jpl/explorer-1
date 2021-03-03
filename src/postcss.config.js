// var tailwindcss = require("tailwindcss");

// module.exports = {
//   plugins: [
//     require("postcss-import"),
//     tailwindcss("./tailwind.config.js"), //This refers to your tailwind config
//     require("autoprefixer"),
//   ],
// };

const path = require("path");

//postcss.config.js
const tailwindcss = require("tailwindcss");
module.exports = {
  plugins: [
    tailwindcss(path.resolve(__dirname, "tailwind.config.js")),
    require("autoprefixer"),
    // require("@fullhuman/postcss-purgecss")({
    //   content: ["./src/**/*.html", "./../index.html"],
    //   // defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    // }),
  ],
};
