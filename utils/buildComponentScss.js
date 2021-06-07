/*
 ** Build Component SCSS Files
 **
 ** This is a node.js script that copies SCSS from
 ** the array of components specified in jpl-ds.config.js and:
 ** 1. Creates individual scss files for each component
 ** 2. Adds the import statement to /src/scss/_components.scss
 **
 */

const config = require("../jpl-ds.config.js");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

// paths
const componentSrc = path.join(config.repoSrc, "/components/");
const scssFolder = config.scssFolder;
const componentsPartial = config.componentPartialsFile;
const partials = fs.createWriteStream(componentsPartial); // use {flags: "a"} as second argument to append

// not using `g` flag, so will only return first capturing group, not entire thing
const regex = /\<style.*?\>([\S\s]*)<\/style>/;

function copyScss(dest, src, name) {
  fs.readFile(src, "utf8", function (err, data) {
    if (err) throw err;
    if (data.match(regex) && data.match(regex)[1]) {
      let styles = data.match(regex)[1]; // first capturing group is the styles
      // 1. create the scss file for the component
      fs.writeFile(dest, styles, function (err) {
        if (err) throw err;
        console.log(`Updated ${name}`);
        // 2. add import statement to the components partial
        // TODO: alphabetize this so it's always the same order
        partials.write(`@import "components/${name}";\n`);
      });
    } else {
      console.log(`Warning: no styles in ${name}`);
    }
  });
}

// Loop through all components in the config
config.components.forEach(function (component) {
  glob(componentSrc + component + "/**/*.vue", {}, function (er, files) {
    files.forEach(function (file) {
      const srcFile = file;
      const filename = srcFile.match(/^\/(.+\/)*(.+)\.(.+)$/)[2]; // second capturing group is the name of the file
      const destFile = scssFolder + "_" + filename + ".scss";
      copyScss(destFile, srcFile, filename);
    });
  });
});
