// manually enable hot module replacement with parcel watch
if (module.hot) {
  module.hot.accept()
}

/*
 * Frontend assets to be bundled by Parcel
 * All linked or @imported assets will automatically be bundled
 * i.e. font files referenced to in styles, or any imports from node_modules
 */

// scss (edit styles.scss or imports therein to modify)
// import './scss/main.scss'

// scripts (edit scripts.js to add more javascript)
require('./js/main.js')
