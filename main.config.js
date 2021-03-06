const path = require("path");

module.exports = {
  // repoSrc:
  // the path to the frontend repo www-frontend
  // default config assumes you have the www-frontend repo as a sibling folder to this repo
  repoSrc: path.join(__dirname, "../www-frontend/"),

  // components:
  // component folder names that we want to bring over from repoSrc
  components: [
    "AnimationCaret",
    "BaseButton",
    "BaseImage",
    "BaseImagePlaceholder",
    "BlockImage",
    "BlockTeaser",
    "BlockText",
    "HeroFeature",
    "HeroFocalPoint",
    "HeroMedia",
  ],

  // scssFolder:
  // where the scss files for each component should be created
  // probably shouldn't ever need to modify this
  scssFolder: path.join(__dirname, "src/scss/components/"),

  // componentPartialsFile:
  // the scss file that will import all of the component partials
  // this file itself is imported via main.scss
  componentPartialsFile: path.join(__dirname, "src/scss/_components.scss"),

  // purge settings imported into tailwind.config.js
  purge: false,
  // TODO: we may want to keep the below purge settings and place vue files in this repo for purge purposes
  // This would keep all design system styles but purge tailwind styles that are not used in the design system
  // Vue components contain several conditional classes, so even html markup wouldn't be complete
  // -------------------------
  // purge: {
  //   // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
  //   enabled: process.env.NODE_ENV === "production",
  //   content: [
  //     // Ignore the component docs, used for development only.
  //     "components/!(_docs)/**/*.vue",
  //     "layouts/**/*.vue",
  //     "pages/**/*.vue",
  //     "mixins/**/*.vue",
  //     "plugins/**/*.js",
  //     "nuxt.config.js",
  //   ],
  // },
};
