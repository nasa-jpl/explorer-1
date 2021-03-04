const path = require("path");

module.exports = {
  // componentSrc:
  // assumes you have the www-frontend repo as a sibling folder to this repo
  componentSrc: path.join(__dirname, "../www-frontend/components/"),

  // components:
  // the components that we want to bring over from the componentSrc
  // this array is used to build paths to the files and only works for
  // vue files that live in a parent folder of the same name
  components: [
    "AnimationCaret",
    "BaseButton",
    "BlockTeaser",
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
};
