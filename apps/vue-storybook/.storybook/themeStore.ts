import { defineStore } from 'pinia'
type Explorer1Theme = 'defaultTheme' | 'ThemeInternal' | 'ThemeEdu'

/** Sets the Explorer-1 theme
 */

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
  },
  getters: {
    isEdu(state) {
      return state.theme === 'ThemeEdu'
    }
  }
})
