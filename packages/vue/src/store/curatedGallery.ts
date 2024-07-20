import { defineStore } from 'pinia'
/** Stores the state of user preferences on curated gallery detail pages
 */

export interface State {
  showGridView?: boolean
}

export const useCuratedGalleryStore = defineStore('curatedGallery', {
  state: (): State => {
    return {
      showGridView: undefined
    }
  },
  actions: {
    updateView(value: boolean) {
      this.showGridView = value
    }
  }
})
