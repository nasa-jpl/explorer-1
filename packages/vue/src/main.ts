import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
import { RouterLink } from 'vue-router'
import filters from './utils/filters'
// @ts-ignore
import vClickOutside from 'click-outside-vue3'
import VueCompareImage from 'vue3-compare-image'
import './assets/scss/styles.scss'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

// vue router
const router = createRouter({
  history: createWebHashHistory(),
  routes: []
})

// plugins
app.use(pinia)
app.use(router)
app.use(vClickOutside)
app.use(VueCompareImage)

// filters
app.config.globalProperties.$filters = filters
app.config.globalProperties.$theme = 'EDU'

// components
app.component('NuxtLink', RouterLink)

app.mount('#app')
