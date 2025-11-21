<script setup lang="ts">
import { useRoute } from 'vue-router'
import NavSecondary from './../../../components/NavSecondary/NavSecondary.vue'
import type { PageObject } from './../../../interfaces'

const route = useRoute()

const props = defineProps({
  /**
   * Wrapper template for all Explore JPL App pages.
   * Provides the sticky navigation.
   */
  data: {
    type: Object as () => PageObject,
    default: undefined
  }
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': $slots.hero }"
  >
    <slot name="hero"></slot>
    <!-- secondary nav -->
    <NavSecondary
      :breadcrumb="data.breadcrumb"
      :has-intro="$slots.hero as unknown as boolean"
      show-on-mobile
    />

    <slot>
      <p class="text-center">Default slot</p>
    </slot>
  </div>
</template>
