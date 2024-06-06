import filters from '@explorer-1/vue/src/utils/filters'

export default defineNuxtPlugin((nuxtApp) => {
  console.log('installing global filters')
  nuxtApp.vueApp.config.globalProperties.$filters = filters
})
