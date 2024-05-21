import explorer1Config from '@explorer-1/common/tailwind.config'

// TODO: this config isn't shipping with the module
// TODO: This is how to fix it https://stackoverflow.com/questions/73506849/how-to-use-tailwindcss-in-a-custom-nuxt3-module
console.log('config from the nuxt module')
export default {
  ...explorer1Config,
  content: ['./../node_modules/@explorer-1/vue/src/components/**/*.vue']
}
