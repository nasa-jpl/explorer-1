const config = require("../main.config.js");
const path = require("path");
var copyfiles = require("copyfiles");
const fs = require("fs");

// paths
const repoSrc = config.repoSrc;

const scssFiles = path.join(repoSrc, "assets/styles/_*.scss");
const scssDest = path.join(__dirname, "../src/scss/");

const fontsCSS = path.join(repoSrc, "static/styles/font-face.css");
const fontsFolderArchivo = path.join(repoSrc, "static/fonts/archivo-narrow/*");
const fontsFolderMetropolis = path.join(repoSrc, "static/fonts/metropolis/*");
const fontsDest = path.join(__dirname, "../src/fonts/");

const jsSrc = path.join(repoSrc, "plugins/");
const jsDest = path.join(__dirname, "../src/js/");

// copy base scss files to this repo
copyfiles([scssFiles, scssDest], { up: true }, function (err) {
  if (err) throw err;
  console.log(`🎉 Updated base scss files`);
});

// copy font css and rename to scss partial
copyfiles([fontsCSS, scssDest], { up: true }, function (err) {
  if (err) throw err;
  // rename the file
  fs.rename(
    path.join(scssDest, "font-face.css"),
    path.join(scssDest, "_fonts.scss"),
    function (err) {
      if (err) throw err;
      console.log(`🎉 Updated _fonts.scss from font-face.css`);
    }
  );
});

// copy font assets
// TODO: I don't like how these are hard coded to directory names. Would rather copy all contents in existing structure
// had issues with copyfiles retaining entire path so went with this route for now
copyfiles(
  [fontsFolderArchivo, path.join(fontsDest, "archivo-narrow")],
  { up: true },
  function (err) {
    if (err) throw err;
    console.log(`🎉 Updated archivo-narrow font files`);
  }
);
copyfiles(
  [fontsFolderMetropolis, path.join(fontsDest, "metropolis")],
  { up: true },
  function (err) {
    if (err) throw err;
    console.log(`🎉 Updated metropolis font files`);
  }
);

// copy specific js plugins
copyfiles(
  [
    path.join(jsSrc, "lazysizes.client.js"),
    path.join(jsSrc, "detect-ie.js"),
    jsDest, // last item in array is the destination folder
  ],
  { up: true },
  function (err) {
    if (err) throw err;
    console.log(`🎉 Updated javascript files`);
  }
);
