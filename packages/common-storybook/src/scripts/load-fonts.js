const fs = require('fs')
const path = require('path')

const FONT_DATA_PATH = path.join(__dirname, '..', 'fonts-data.js')

let injectLicensedFonts = () => {}

// Check if the file (created only during CI) exists
if (fs.existsSync(FONT_DATA_PATH)) {
  try {
    // Dynamically require the generated module if it exists
    const fontModule = require(FONT_DATA_PATH)
    injectLicensedFonts = fontModule.injectLicensedFonts || fontModule.default.injectLicensedFonts
  } catch (e) {
    console.error('Error loading generated fonts-data.js module:', e)
  }
}

// Export the function (either the real one or the placeholder)
module.exports = { injectLicensedFonts }
