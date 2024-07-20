import { defineStore } from 'pinia'
/** Stores the state of various user preferences on listing and search pages
 */

export interface SearchState {
  showSidebar: boolean | undefined
  showGridView: boolean | undefined
  showSidebarForGalleries: boolean | undefined
  showGridViewForGalleries: boolean | undefined
  showGridViewForPodcasts: boolean | undefined
}

export const useSearchStore = defineStore('search', {
  state: (): SearchState => {
    return {
      showSidebar: undefined,
      showGridView: undefined,
      showSidebarForGalleries: undefined,
      showGridViewForGalleries: undefined,
      showGridViewForPodcasts: undefined
    }
  },
  actions: {
    updateSidebar(value: boolean) {
      this.showSidebar = value
    },
    updateGridView(value: boolean) {
      this.showGridView = value
    },
    updateSidebarForGalleries(value: boolean) {
      this.showSidebarForGalleries = value
    },
    updateGridViewForGalleries(value: boolean) {
      this.showGridViewForGalleries = value
    },
    updateGridViewForPodcasts(value: boolean) {
      this.showGridViewForPodcasts = value
    }
  },
  persist: true
})
