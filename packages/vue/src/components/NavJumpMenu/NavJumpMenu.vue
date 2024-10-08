<template>
  <NavSecondary
    v-if="enabled"
    id="NavJumpMenu"
    ref="NavJumpMenuRef"
    class="NavJumpMenu"
    :class="{ '-ready': initialized }"
    :invert="invert"
    jump-menu
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
            class="max-h-[72vh] overflow-y-auto"
            :item="item"
            v-bind="$attrs"
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
import { computed, defineExpose, ref, onMounted, onUnmounted, watch } from 'vue'
import { mixinUpdateSecondary } from './../../utils/mixins'
import { useRoute } from 'vue-router'
import NavSecondary from './../NavSecondary/NavSecondary.vue'
import NavSecondaryDropdown from './../NavSecondary/NavSecondaryDropdown.vue'
import NavSecondaryLink from './../NavSecondary/NavSecondaryLink.vue'
import NavJumpMenuContent from './../NavJumpMenu/NavJumpMenuContent.vue'
import type { BlockHeadingObject } from './../BlockHeading/BlockHeading.vue'
import type { BlockData, BreadcrumbPathObject } from './../../interfaces'
import { getHeadingId } from '../../utils/getHeadingId'

interface NavJumpMenuProps {
  title?: string
  jumpLinks?: BreadcrumbPathObject[]
  blocks?: BlockData[] | BlockHeadingObject[]
  headingLevel?: string
  invert?: boolean
  enabled?: boolean
  dropdownText?: string
  // stepsNumbering?: boolean
  // stepClasses?: string
}

const props = withDefaults(defineProps<NavJumpMenuProps>(), {
  title: undefined,
  jumpLinks: undefined,
  blocks: undefined,
  headingLevel: 'h2',
  enabled: true,
  invert: true,
  hidden: false,
  dropdownText: 'Jump to…'
  // stepsNumbering: false,
  // stepClasses: 'text-primary'
})

const initialized = ref(false)

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
    const links: BreadcrumbPathObject[] = filteredBlocks.map((h) => {
      return {
        // @ts-expect-error using parameter that was added to BlockData
        path: '#' + getHeadingId(h.heading, h.blockId),
        title: h.heading
      } as BreadcrumbPathObject
    })
    return links
  }
  return []
})

const initializeJumpMenu = () => {
  initialized.value = true
}

const theBreadcrumbs = computed(() => {
  let breadcrumb = undefined
  const rootItem = props.title
    ? {
        title: props.title,
        path: '#siteTop'
      }
    : {
        title: 'Back to top',
        path: '#siteTop'
      }
  const jumpMenu: BreadcrumbPathObject = {
    title: props.dropdownText,
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
  // ensures jump menu isn't visible during route changes
  setTimeout(initializeJumpMenu, 500)
})
onUnmounted(() => {
  initialized.value = false
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
  @apply invisible transition-all overflow-visible -mb-[3.7rem] z-30 fixed #{!important};
  &.-ready {
    @apply visible #{!important};
  }
  .NavSecondaryLink.secondary-root {
    span {
      @apply border-primary #{!important};
    }
    &.-invert {
      span {
        @apply border-white #{!important};
      }
    }
  }
}
</style>
