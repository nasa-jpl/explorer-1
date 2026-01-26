/** Ensures that local storybook doesn't break when the github action artifact is inevitably not found */

const fs = require('fs')
const path = require('path')

// relative to package.json that's running the script
const BASE_DIR = './../../packages/common-storybook/src/'
const FONT_DATA_PATH = path.join(BASE_DIR, 'fonts-data.js')
const FONT_FLAG_PATH = path.join(BASE_DIR, 'font-flag.js')

// Placeholder content that is safe to run in the browser
const FONT_DATA_CONTENT = 'export function injectLicensedFonts() {}'
const FONT_FLAG_CONTENT = 'window.__IS_LICENSED_FONT_AVAILABLE__ = false;'

function createPlaceholders() {
  try {
    // Ensure the directory exists
    if (!fs.existsSync(BASE_DIR)) {
      fs.mkdirSync(BASE_DIR, { recursive: true })
    }

    // Check and create fonts-data.js
    if (!fs.existsSync(FONT_DATA_PATH)) {
      fs.writeFileSync(FONT_DATA_PATH, FONT_DATA_CONTENT)
      console.log(`[Local Init] Created placeholder: ${FONT_DATA_PATH}`)
    }

    // Check and create font-flag.js
    if (!fs.existsSync(FONT_FLAG_PATH)) {
      fs.writeFileSync(FONT_FLAG_PATH, FONT_FLAG_CONTENT)
      console.log(`[Local Init] Created placeholder: ${FONT_FLAG_PATH}`)
    }
  } catch (e) {
    console.error('[Local Init] Warning: Could not create font placeholders.', e.message)
    // Do not exit with error code 1, as local installation must succeed.
  }
}

// Only run the placeholder creation logic if not in the CI environment
// This prevents confusion during CI where the real files are generated later.
if (process.env.VITE_CHROMATIC_BUILD !== 'true') {
  createPlaceholders()
}
