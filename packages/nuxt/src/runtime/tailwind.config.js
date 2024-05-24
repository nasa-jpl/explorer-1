import explorer1Config from '@explorer-1/common/tailwind.config'
console.log('ℹ Tailwind Config provided by @explorer-1/nuxt')
export default {
  ...explorer1Config,
  content: ['./../node_modules/@explorer-1/vue/src/components/**/*.vue']
}
