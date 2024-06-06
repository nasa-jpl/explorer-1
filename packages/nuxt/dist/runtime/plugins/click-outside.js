import vClickOutside from "click-outside-vue3";
export default defineNuxtPlugin((nuxtApp) => {
  console.log("installing vClickOutside");
  nuxtApp.vueApp.use(vClickOutside);
});
