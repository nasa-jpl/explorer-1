const fs = require("fs");
const path = require("path");

// paths
// TODO: should this path be a build argument?
const componentFolder = path.join(__dirname, "../../www-frontend/components/");
const scssFolder = path.join(__dirname, "../src/scss/components/");
const componentsPartial = path.join(__dirname, "../src/scss/_components.scss");
const partials = fs.createWriteStream(componentsPartial, {
  // flags: "a", // 'a' means appending (old data will be preserved)
});

// the components that are part of the design system
const components = [
  "AnimationCaret",
  "BaseButton",
  "BlockTeaser",
  "HeroFeature",
  "HeroFocalPoint",
  "HeroMedia",
];

// not using g flag, so will only return first capturing group, not entire thing
const regex = /\<style.*?\>([\S\s]*)<\/style>/;

function copyScss(dest, src) {
  fs.readFile(src, "utf8", function (err, data) {
    if (err) throw err;
    let styles = data.match(regex)[1];
    // styles = styles[1];
    fs.writeFile(dest, styles, function (err) {
      if (err) throw err;
      console.log(`Writing to ${dest}`);
    });
  });
}

components.forEach(function (component) {
  // TODO: eventually match any vue file inside the component folder
  // As this code won't work for co-located components
  const srcFile = componentFolder + component + "/" + component + ".vue";
  const destFile = scssFolder + "_" + component + ".scss";
  copyScss(destFile, srcFile);
  partials.write(`@import "components/${component}";\n`);
});
