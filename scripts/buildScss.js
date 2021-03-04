const config = require("../main.config.js");
const path = require("path");
const fs = require("fs");

// paths
// TODO: componentSrc as a build argument
const componentSrc = config.componentSrc;
const scssFolder = config.scssFolder;
const componentsPartial = config.componentPartialsFile;
const partials = fs.createWriteStream(componentsPartial); // use {flags: "a"} as second argument to append

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

config.components.forEach(function (component) {
  // TODO: eventually match any vue file inside the component folder
  // As this code won't work for co-located components
  const srcFile = componentSrc + component + "/" + component + ".vue";
  const destFile = scssFolder + "_" + component + ".scss";
  copyScss(destFile, srcFile);
  partials.write(`@import "components/${component}";\n`);
});
