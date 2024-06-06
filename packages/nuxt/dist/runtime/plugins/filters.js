import filters from "@explorer-1/vue/src/utils/filters";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$filters = filters;
});
