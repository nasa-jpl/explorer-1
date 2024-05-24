/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// import explorer 1's tailwind config
import explorer1Config from '@explorer-1/common/tailwind.config'

export default {
  ...explorer1Config,
  content: [
    './../../packages/html/src/docs/**/*.{js,ts,mdx}',
    './../../packages/html/src/components/**/*.{js,ts,mdx}',
    './../../packages/html/src/assets/js/components/**/*.{js,ts,mdx}',
    './.www-frontend_temp/components/!(_docs)/**/*.vue',
    './.www-frontend_temp/layouts/**/*.vue',
    './.www-frontend_temp/pages/**/*.vue',
    './.www-frontend_temp/mixins/**/*.vue',
    './.www-frontend_temp/plugins/**/*.js',
    './.www-frontend_temp/nuxt.config.js'
  ]
}
