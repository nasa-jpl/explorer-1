<template>
  <NavSecondary
    v-if="enabled"
    :invert="invert"
    :include-overview="false"
  >
    <template v-for="(item, index) in theBreadcrumbs">
      <template v-if="item.children && item.children.length > 0">
        <NavSecondaryDropdown
          :key="index"
          :item="item"
          :index="index"
          :is-last="theBreadcrumbs && index === theBreadcrumbs.length - 1"
          :invert="invert"
        >
          <NavJumpMenuContent
            :key="index"
            :item="item"
            @jump-menu-link-clicked="closeDropdown()"
          />
        </NavSecondaryDropdown>
      </template>
      <template v-else>
        <NavSecondaryLink
          :key="index"
          :item="item"
          :index="index"
          :invert="invert"
        />
      </template>
    </template>
  </NavSecondary>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import NavSecondary from './../NavSecondary/NavSecondary.vue'
import NavSecondaryDropdown from './../NavSecondary/NavSecondaryDropdown.vue'
import NavSecondaryLink from './../NavSecondary/NavSecondaryLink.vue'
import NavJumpMenuContent from './../NavJumpMenu/NavJumpMenuContent.vue'
import type { BlockData, BreadcrumbPathObject } from './../../interfaces'
import { getHeadingId } from '../../utils/getHeadingId'

export default defineComponent({
  /** The complexity of this component is due to the need for it to be populated from multiple data sources
   ** SecondaryNav will first check to see if there is a navigation override from the data fetched for this specific page (data.breadcrumb and store.header.secondaryNav)
   ** If there is no breadcrumb override, then it will fallback to using the breadcrumbs derived form the active global nav item (store.header.globalChildren)
   ** store.header.secondaryNav reverts to null on route changes, so the breadcrumb override is re-evaluted on every page
   */
  name: 'NavJumpMenu',
  components: {
    NavSecondary,
    NavSecondaryDropdown,
    NavSecondaryLink,
    NavJumpMenuContent
  },
  props: {
    // jump links create a jump link menu
    title: {
      type: String,
      required: false,
      default: undefined
    },
    // manually define jumpLinks
    jumpLinks: {
      type: Object as PropType<BreadcrumbPathObject[]>,
      required: false,
      default: undefined
    },
    // or provide a streamfield
    blocks: {
      type: Object as PropType<BlockData[]>,
      required: false,
      default: undefined
    },
    headingLevel: {
      type: String,
      required: false,
      default: 'h2'
    },
    enabled: {
      type: Boolean,
      default: true
    },
    invert: {
      type: Boolean,
      default: true
    },
    // if the JumpMenu should initially be visible or hidden.
    // if hidden, it will appear once the user has scrolled past the first Jump menu item
    hidden: {
      type: Boolean,
      default: false
    }
  },
  emits: ['closeDropdown'],
  computed: {
    // formats content in a way that NavSecondary will recognize it
    theBreadcrumbs(): BreadcrumbPathObject[] | undefined {
      let breadcrumb = undefined
      const rootItem = this.title
        ? {
            title: this.title,
            path: '#top'
          }
        : {
            title: 'Back to top',
            path: '#top'
          }
      const jumpMenu: BreadcrumbPathObject = {
        title: 'Jump to…',
        path: '#',
        children: this.theJumpLinks as BreadcrumbPathObject[]
      }
      if (this.theJumpLinks) {
        breadcrumb = [rootItem, jumpMenu]
      }
      return breadcrumb as BreadcrumbPathObject[] | undefined
    },
    theJumpLinks(): BreadcrumbPathObject[] {
      if (this.jumpLinks) {
        return this.jumpLinks
      } else if (this.blocks) {
        const filteredBlocks = this.blocks.filter((b, index) => {
          // @ts-expect-error adding a parameter to BlockData
          b.index = index
          return b.blockType === 'HeadingBlock' && b.level === this.headingLevel
        })
        // map to the correct data shape
        const links: BreadcrumbPathObject[] = filteredBlocks.map((l) => {
          return {
            // @ts-expect-error using parameter that was added to BlockData
            path: '#' + getHeadingId(l.heading, l.index),
            title: l.heading
          } as BreadcrumbPathObject
        })
        return links
      }
      return []
    }
  },
  methods: {
    closeDropdown() {
      this.$emit('closeDropdown')
    }
  }
})
// path: string
// title: string
</script>
