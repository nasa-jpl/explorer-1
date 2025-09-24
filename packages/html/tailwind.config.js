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
    './src/docs/**/*.{js,ts,mdx}',
    './src/components/**/*.{js,ts,mdx}',
    './src/assets/js/components/**/*.{js,ts,mdx}',
    './../vue/src/components/**/*.vue'
  ]
}
