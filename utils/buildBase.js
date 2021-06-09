/*
 ** Build Base Assets
 **
 ** This is a node.js script that copies base assets from
 ** the wwwSrc set in www-sync.config.js (e.g. www-frontend) and:
 ** 1. copies tailwind.config.js
 ** 2. copies base scss files
 ** 3. copies font css as a scss partial
 ** 4. copies font files
 **
 */

const config = require('../www-sync.config.js')
const path = require('path')
var copyfiles = require('copyfiles')
const fs = require('fs')

// paths
const wwwSrc = config.wwwSrc
const destFolder = config.destFolder

const tailwindSrc = path.join(wwwSrc, 'tailwind.config.js')
const tailwindDest = path.join(destFolder)

const scssFiles = path.join(wwwSrc, 'assets/styles/_*.scss')
const scssDest = path.join(destFolder, 'src/scss/')

const fontsCSS = path.join(wwwSrc, 'static/styles/font-face.css')
const fontsFolderArchivo = path.join(wwwSrc, 'static/fonts/archivo-narrow/*')
const fontsFolderMetropolis = path.join(wwwSrc, 'static/fonts/metropolis/*')
const fontsDest = path.join(destFolder, 'src/fonts/')

// copy tailwind config to this repo
copyfiles([tailwindSrc, tailwindDest], { up: true }, function (err) {
  if (err) throw err
  console.log(`🎉 Updated tailwind.config.js in ${tailwindDest}`)
})

// copy base scss files to this repo
copyfiles([scssFiles, scssDest], { up: true }, function (err) {
  if (err) throw err
  console.log(`🎉 Updated base scss files in ${scssDest}`)
})

// copy font css and rename to scss partial
copyfiles([fontsCSS, scssDest], { up: true }, function (err) {
  if (err) throw err
  // rename the file
  fs.rename(
    path.join(scssDest, 'font-face.css'),
    path.join(scssDest, '_fonts.scss'),
    function (err) {
      if (err) throw err
      console.log(`🎉 Updated _fonts.scss from font-face.css`)
    }
  )
})

// copy font assets
// TODO: I don't like how these are hard coded to directory names. Would rather copy all contents in existing structure
// had issues with copyfiles retaining entire path so went with this route for now
copyfiles(
  [fontsFolderArchivo, path.join(fontsDest, 'archivo-narrow')],
  { up: true },
  function (err) {
    if (err) throw err
    console.log(`🎉 Updated archivo-narrow font files in ${fontsDest}`)
  }
)
copyfiles(
  [fontsFolderMetropolis, path.join(fontsDest, 'metropolis')],
  { up: true },
  function (err) {
    if (err) throw err
    console.log(`🎉 Updated metropolis font files in ${fontsDest}`)
  }
)
