/*
 ** TailwindCSS Configuration File for Purge settings only
 **
 ** These settings are imported into the main tailwind.config.js
 ** Separated to facilitate different purge settings different sites
 **
 */

const path = require('path')
const wwwSrc = '.www-frontend_temp'

module.exports = {
  // At the very least, purge against the main design system that has all of our components
  // TODO: enhancement: limit components purge to the same array of components in www-sync.config.js
  // -------------------------
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'storybook/stories/**/*.mdx',
      'storybook/stories/**/*.js',
      'src/js/components/**/*.js',
      // Ignore the component docs, used for development only.
      path.join(wwwSrc, 'components/!(_docs)/**/*.vue'),
      path.join(wwwSrc, 'layouts/**/*.vue'),
      path.join(wwwSrc, 'pages/**/*.vue'),
      path.join(wwwSrc, 'mixins/**/*.vue'),
      path.join(wwwSrc, 'plugins/**/*.js'),
      path.join(wwwSrc, 'nuxt.config.js'),
    ],
  },
}
