<template>
  <NavSecondary
    v-if="enabled"
    :invert="invert"
    :jump-links="theBreadcrumbs"
    :include-overview="false"
  />
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import NavSecondary from './../NavSecondary/NavSecondary.vue'
import type { BreadcrumbPathObject } from './../../interfaces'

export default defineComponent({
  /** The complexity of this component is due to the need for it to be populated from multiple data sources
   ** SecondaryNav will first check to see if there is a navigation override from the data fetched for this specific page (data.breadcrumb and store.header.secondaryNav)
   ** If there is no breadcrumb override, then it will fallback to using the breadcrumbs derived form the active global nav item (store.header.globalChildren)
   ** store.header.secondaryNav reverts to null on route changes, so the breadcrumb override is re-evaluted on every page
   */
  name: 'NavJumpMenu',
  components: {
    NavSecondary
  },
  props: {
    // jump links create a jump link menu
    title: {
      type: Object as PropType<Partial<BreadcrumbPathObject>>,
      required: false,
      default: undefined
    },
    jumpLinks: {
      type: Object as PropType<BreadcrumbPathObject[]>,
      required: false,
      default: undefined
    },
    enabled: {
      type: Boolean,
      default: true
    },
    invert: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // formats content in a way that NavSecondary will recognize it
    theBreadcrumbs(): BreadcrumbPathObject[] | undefined {
      let breadcrumb = undefined
      const rootItem = this.title
        ? {
            ...this.title,
            children: []
          }
        : {
            title: 'nothing',
            path: '#',
            children: []
          }
      const jumpMenu: BreadcrumbPathObject = {
        title: 'Jump to',
        path: '#',
        children: this.jumpLinks as BreadcrumbPathObject[]
      }
      if (this.jumpLinks) {
        breadcrumb = [rootItem, jumpMenu]
      }
      return breadcrumb as BreadcrumbPathObject[] | undefined
    }
  }
})
</script>
