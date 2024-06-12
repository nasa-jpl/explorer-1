import { useThemeStore } from '@explorer-1/vue/src/store/theme'
import { type Explorer1Theme } from '@explorer-1/vue/src/interfaces'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    const useTheme = useThemeStore()
    useTheme.setTheme('themeDefault' as Explorer1Theme)
  })
})
