import { useThemeStore } from '@explorer-1/vue/src/store/theme'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    const useTheme = useThemeStore()
    useTheme.setTheme('ThemeEdu')
  })
})
