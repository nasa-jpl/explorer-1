import VueCompareImage from 'vue3-compare-image'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCompareImage)
})
