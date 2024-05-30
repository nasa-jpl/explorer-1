import { createResolver } from '@nuxt/kit'
import explorer1Config from '@explorer-1/common/tailwind.config'

console.log('ℹ Tailwind Config provided by @explorer-1/nuxt')

const resolver = createResolver(import.meta.url)

export default {
  ...explorer1Config,
  content: [resolver.resolve('./../../node_modules/@explorer-1/vue/src/**/*.vue')]
}
