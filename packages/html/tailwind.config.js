/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// import explorer 1's tailwind config
const explorer1Config = require('@explorer-1/common/tailwind.config')

module.exports = {
  ...explorer1Config,
  content: [
    './src/docs/**/*.{js,ts,mdx}',
    './src/components/**/*.{js,ts,mdx}',
    './src/assets/js/components/**/*.{js,ts,mdx}',
    './.www-frontend_temp/components/!(_docs)/**/*.vue',
    './.www-frontend_temp/layouts/**/*.vue',
    './.www-frontend_temp/pages/**/*.vue',
    './.www-frontend_temp/mixins/**/*.vue',
    './.www-frontend_temp/plugins/**/*.js',
    './.www-frontend_temp/nuxt.config.js'
  ]
}
