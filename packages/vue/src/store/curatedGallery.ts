import { defineStore } from 'pinia'
/** Stores the state of user preferences on curated gallery detail pages
 */

export interface CuratedGalleryState {
  showGridView?: boolean
}

// @ts-expect-error
export const useCuratedGalleryStore = defineStore('curatedGallery', {
  state: (): CuratedGalleryState => {
    return {
      showGridView: undefined
    }
  },
  actions: {
    updateView(value: boolean) {
      this.showGridView = value
    }
  },
  // @pinia-plugin-persistedstate/nuxt
  persist: true
})
