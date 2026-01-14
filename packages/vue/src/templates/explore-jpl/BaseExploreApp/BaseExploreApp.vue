<script setup lang="ts">
/**
 * Wrapper template for all Explore JPL App pages.
 * Provides the sticky navigation.
 */
import { computed } from 'vue'
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'
import type { BreadcrumbPathObject } from './../../../interfaces'

/** Fallback nav data until we finalize how this will be provided by the backend */
const staticNavData = [
  { path: '/explore-app/', title: 'Explore JPL', children: [] },
  { path: '/explore-app/maps/', title: 'Map', children: [] },
  { path: '/explore-app/sites/', title: 'Sites', children: [] },
  { path: '/explore-app/info/', title: 'Info', children: [] }
] as BreadcrumbPathObject[]

const props = defineProps({
  /** If hero content appears above the navigation (provided by parent component) */
  hasIntro: {
    type: Boolean,
    default: false
  },
  /** Override static navigation (provided by parent component) */
  navData: {
    type: [Array as () => BreadcrumbPathObject[], String as () => string],
    default: undefined
  }
})

const computedNavData = computed(() => {
  // read prop data. use static data as a fallback
  let data: string | BreadcrumbPathObject[] = props.navData || staticNavData
  // convert to a string
  if (typeof data != 'string') {
    data = JSON.stringify(data)
  }
  return data
})
</script>
<template>
  <!-- @slot: hero content -->
  <slot name="hero"></slot>
  <!-- navigation -->
  <NavSecondary
    :breadcrumb="computedNavData"
    :has-intro="hasIntro"
    show-on-mobile
  />
  <!-- @slot: page body -->
  <slot>
    <p class="text-center"></p>
  </slot>
</template>
