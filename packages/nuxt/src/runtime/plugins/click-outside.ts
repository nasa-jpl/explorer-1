// click-outside-vue3
// see: https://www.npmjs.com/package/click-outside-vue3
// used in navigation dropdown to detect clicks outside the dropdown area
import vClickOutside from 'click-outside-vue3'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside)
})
