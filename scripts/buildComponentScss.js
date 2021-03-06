const config = require("../main.config.js");
const path = require("path");
const fs = require("fs");
const glob = require("glob");

// paths
// TODO: componentSrc as a build argument
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
      fs.writeFile(dest, styles, function (err) {
        if (err) throw err;
        console.log(`Updated ${name}`);
        partials.write(`@import "components/${name}";\n`);
      });
    } else {
      console.log(`Warning: no styles in ${name}`);
    }
  });
}

config.components.forEach(function (component) {
  glob(componentSrc + component + "/**/*.vue", { nosort: true }, function (
    er,
    files
  ) {
    files.forEach(function (file) {
      const srcFile = file;
      const filename = srcFile.match(/^\/(.+\/)*(.+)\.(.+)$/)[2]; // second capturing group is the name of the file
      const destFile = scssFolder + "_" + filename + ".scss";
      copyScss(destFile, srcFile, filename);
    });
  });
});
