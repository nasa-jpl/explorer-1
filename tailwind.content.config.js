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
}
