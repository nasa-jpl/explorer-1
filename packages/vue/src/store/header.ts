import { defineStore } from 'pinia'
/** Controls various display states for the header and navigation
 ** headerTransparent: whether the header is a transparent overlay
 ** highlightPrimary: logic in various components will enable/disable this
 ** globalChildren: the breadcrumb items derived from the active primary item in the global navigation
 ** secondayNav: breadcrumb items that are overridden from content pages or similar
 */

export interface State {
  headerTransparent: boolean
  highlightPrimary: boolean
  globalChildren?: any | null
  secondaryNav?: any | null
  secondaryNavIsJumpMenu: boolean
}

export const useHeaderStore = defineStore('header', {
  state: (): State => {
    return {
      headerTransparent: false,
      highlightPrimary: true,
      globalChildren: null,
      secondaryNav: null,
      secondaryNavIsJumpMenu: false
    }
  },
  actions: {
    makeTransparent(value: boolean) {
      this.headerTransparent = value
    },
    updateHighlightPrimary(value: boolean) {
      // @ts-ignore
      this.highlightPrimary = value
    },
    updateGlobalChildren(value: any) {
      this.globalChildren = value
    },
    updateSecondary(value: any) {
      this.secondaryNav = value
    },
    updateSecondaryNavIsJumpMenu(value: boolean) {
      this.secondaryNavIsJumpMenu = value
    }
  }
})
