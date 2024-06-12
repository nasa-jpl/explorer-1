import vClickOutside from "click-outside-vue3";
import { defineNuxtPlugin } from "nuxt/app";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(vClickOutside);
});
