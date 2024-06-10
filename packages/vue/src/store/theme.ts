import { defineStore } from 'pinia'

/** Sets the Explorer-1 theme
 */

export type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu'

export interface State {
  theme: Explorer1Theme | null
}

export const useThemeStore = defineStore('theme', {
  state: (): State => {
    return {
      theme: null
    }
  },
  actions: {
    setTheme(value: Explorer1Theme) {
      this.theme = value
    }
  }
})
