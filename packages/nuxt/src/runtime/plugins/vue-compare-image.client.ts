import VueCompareImage from 'vue3-compare-image'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCompareImage)
})
