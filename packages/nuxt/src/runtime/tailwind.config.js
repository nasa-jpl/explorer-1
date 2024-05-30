import path from 'path'
import { fileURLToPath } from 'node:url'
import explorer1Config from '@explorer-1/common/tailwind.config'

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('ℹ Tailwind Config provided by @explorer-1/nuxt')

export default {
  ...explorer1Config,
  content: [path.resolve(__dirname, './../../node_modules/@explorer-1/vue/src/**/*.vue')]
}
