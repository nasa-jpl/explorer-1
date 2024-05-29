/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// import explorer 1's tailwind config
import explorer1Config from '@explorer-1/common/tailwind.config'
import plugin from 'tailwindcss/plugin'
console.log(explorer1Config)
export default {
  ...explorer1Config,
  content: ['stories/**/*', './node_modules/@explorer-1/vue/src/components/**/*.vue']
}
