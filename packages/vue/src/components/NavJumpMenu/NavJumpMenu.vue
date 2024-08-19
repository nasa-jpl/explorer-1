<template>
  <NavSecondary
    v-if="enabled"
    id="NavJumpMenu"
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
const observer = ref()
const observerOffset = ref()
const observeMe = ref()

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
    title: 'Jump to…',
    path: '#',
    children: theJumpLinks.value as BreadcrumbPathObject[]
  }
  if (theJumpLinks.value) {
    breadcrumb = [rootItem, jumpMenu]
  }
  return breadcrumb as BreadcrumbPathObject[] | undefined
})

const initObserver = () => {
  observeMe.value = document.getElementById('NavJumpMenu')
  observer.value = new IntersectionObserver(
    ([e]) => {
      // console.log('bounding rect top', e.boundingClientRect.top)
      console.log('reg-intersecting?', e.isIntersecting)
      console.log('reg:', e.intersectionRatio)
      e.target.classList.toggle('-force-hide-jump-menu', e.intersectionRatio === 0)
    },
    {
      threshold: [0]
    }
  )
  console.log(observer.value)
  observerOffset.value = new IntersectionObserver(
    ([e]) => {
      // console.log('offset: bounding rect top', e.boundingClientRect.top)
      console.log('offset-intersecting?', e.isIntersecting)
      console.log('offset:', e.intersectionRatio)
      // if (e.isIntersecting) {
      //   e.target.classList.remove('-force-hide-jump-menu-offset')
      // } else {
      //   e.target.classList.add('-force-hide-jump-menu-offset')
      // }
      // if (e.boundingClientRect.top < 0) {
      //   //if (e.isIntersecting) {
      //   // scrolling up
      //   e.target.classList.add('-TESTTEST')
      //   //} else {
      //   // scrolling down
      //   //}
      // } else {
      //   e.target.classList.remove('-TESTTEST')
      // }
      e.target.classList.toggle('-force-show-jump-menu-offset', e.intersectionRatio === 0)
      // e.target.classList.toggle('-force-hide-jump-menu-offset', e.intersectionRatio === 0)
    },
    {
      threshold: [0],
      rootMargin: '-70px 0px 0px 0px'
    }
  )
  console.log(observerOffset.value)
}

defineExpose({
  NavJumpMenuRef
})
onMounted(() => {
  mixinUpdateSecondary(theBreadcrumbs.value, true)
  initObserver()
  // const observeMe = document.getElementById('NavSecondary')
  // if (observeMe) {
  // if (NavJumpMenuRef.value?.refs?.NavSecondary) {
  observer.value.observe(observeMe.value)
  observerOffset.value.observe(observeMe.value)
  // }
  // }
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
    // @apply opacity-0 h-0 transition-none overflow-visible pointer-events-none;
    @apply opacity-0 h-0 transition-all overflow-visible pointer-events-none;
    &.-is-sticky,
    &.-is-sticky-offset {
      // @apply opacity-100 transition-opacity pointer-events-auto;
      @apply opacity-100 transition-all pointer-events-auto;
    }
    &.-is-sticky,
    &.-is-sticky-offset {
      &.-force-hide-jump-menu {
        @apply opacity-0 #{!important};
        // @apply transition-none #{!important};
      }
    }
    &.-is-sticky-offset {
      &.-force-show-jump-menu-offset {
        @apply opacity-100  #{!important};
        // @apply transition-none #{!important};
      }
      &.-force-show-hide-menu-offset {
        @apply opacity-0 #{!important};
        // @apply transition-none #{!important};
      }
    }
  }
}
</style>
