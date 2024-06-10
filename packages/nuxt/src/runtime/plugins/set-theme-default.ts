// @ts-nocheck
import { useThemeStore } from '@explorer-1/vue/src/store/theme'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vue:setup', () => {
    const useTheme = useThemeStore()
    useTheme.setTheme('themeDefault')
  })
})
