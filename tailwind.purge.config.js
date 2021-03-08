/*
 ** TailwindCSS Configuration File for Purge settings only
 **
 ** These settings are imported into the main tailwind.config.js
 ** Separated to facilitate different purge settings different sites
 **
 */

const config = require("./jpl-ds.config.js");
const path = require("path");

module.exports = {
  // At the very least, purge against the main design system that has all of our components
  // TODO: enhancement: limit components folder to the same array of components in main.config.js
  // -------------------------
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      // Ignore the component docs, used for development only.
      path.join(config.repoSrc, "components/!(_docs)/**/*.vue"),
      path.join(config.repoSrc, "layouts/**/*.vue"),
      path.join(config.repoSrc, "pages/**/*.vue"),
      path.join(config.repoSrc, "mixins/**/*.vue"),
      path.join(config.repoSrc, "plugins/**/*.js"),
      path.join(config.repoSrc, "nuxt.config.js"),
    ],
  },
};
