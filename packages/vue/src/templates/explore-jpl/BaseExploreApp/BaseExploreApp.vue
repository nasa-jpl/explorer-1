<script setup lang="ts">
/**
 * Wrapper template for all Explore JPL App pages.
 * Provides the sticky navigation.
 */
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'

const props = defineProps({
  /** If hero content appears above the navigation (provided by parent component) */
  hasIntro: {
    type: Boolean,
    default: false
  },
  navData: {
    type: [Array as () => BreadcrumbPathObject[], String as () => string],
    default: undefined
  }
})
</script>
<template>
  <!-- @slot: hero content -->
  <slot name="hero"></slot>
  <!-- navigation -->
  <NavSecondary
    :breadcrumb="navData"
    :has-intro="hasIntro"
    show-on-mobile
  />
  <!-- @slot: page body -->
  <slot>
    <p class="text-center"></p>
  </slot>
</template>
