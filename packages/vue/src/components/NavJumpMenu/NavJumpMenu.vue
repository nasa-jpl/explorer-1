<template>
  <NavSecondary
    v-if="enabled"
    id="JumpMenuTop"
    ref="NavJumpMenuRef"
    class="NavJumpMenu -hide-until-threshold"
    :invert="invert"
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
<script setup lang="ts">
import { computed, defineExpose, ref, onMounted, watch } from 'vue'
import { mixinUpdateSecondary } from './../../utils/mixins'
import { useRoute } from 'vue-router'
import NavSecondary from './../NavSecondary/NavSecondary.vue'
import NavSecondaryDropdown from './../NavSecondary/NavSecondaryDropdown.vue'
import NavSecondaryLink from './../NavSecondary/NavSecondaryLink.vue'
import NavJumpMenuContent from './../NavJumpMenu/NavJumpMenuContent.vue'
import type { BlockData, BreadcrumbPathObject } from './../../interfaces'
import { getHeadingId } from '../../utils/getHeadingId'

interface NavJumpMenuProps {
  title?: string
  jumpLinks?: BreadcrumbPathObject[]
  blocks?: BlockData[]
  headingLevel?: string
  invert?: boolean
  enabled?: boolean
}

const props = withDefaults(defineProps<NavJumpMenuProps>(), {
  title: undefined,
  jumpLinks: undefined,
  blocks: undefined,
  headingLevel: 'h2',
  enabled: true,
  invert: true,
  hidden: false
})

const NavJumpMenuRef = ref()

const theJumpLinks = computed(() => {
  if (props.jumpLinks) {
    return props.jumpLinks
  } else if (props.blocks) {
    const indexedBlocks = props.blocks.map((b, index) => {
      return {
        ...b,
        index: index
      }
    })
    const filteredBlocks = indexedBlocks.filter((b) => {
      return b.blockType === 'HeadingBlock' && b.level === props.headingLevel
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
})

const theBreadcrumbs = computed(() => {
  let breadcrumb = undefined
  const rootItem = props.title
    ? {
        title: props.title,
        path: '#JumpMenuTop'
      }
    : {
        title: 'Back to top',
        path: '#JumpMenuTop'
      }
  const jumpMenu: BreadcrumbPathObject = {
    title: 'Jump to…',
    path: '#',
    children: theJumpLinks.value as BreadcrumbPathObject[]
  }
  if (theJumpLinks.value) {
    breadcrumb = [rootItem, jumpMenu]
  }
  return breadcrumb as BreadcrumbPathObject[] | undefined
})
defineExpose({
  NavJumpMenuRef
})
onMounted(() => {
  mixinUpdateSecondary(theBreadcrumbs.value, true)
})
const route = useRoute()

// repopulate the store with the jump links since the store is cleared on route changes
watch(
  route,
  () => {
    mixinUpdateSecondary(theBreadcrumbs.value, true)
  }
  // { flush: 'pre', immediate: true, deep: true }
)
</script>
<style lang="scss">
.NavJumpMenu {
  &.-hide-until-threshold {
    @apply opacity-0 h-0 transition-none overflow-visible;
    &.-is-sticky,
    &.-is-sticky-offset {
      @apply opacity-100 transition-opacity;
    }
  }
}
</style>
