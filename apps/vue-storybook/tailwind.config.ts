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
    './node_modules/@explorer-1/vue/src/docs/**/*',
    './node_modules/@explorer-1/vue/src/components/**/*',
    './node_modules/@explorer-1/vue/src/templates/**/*'
  ]
}
