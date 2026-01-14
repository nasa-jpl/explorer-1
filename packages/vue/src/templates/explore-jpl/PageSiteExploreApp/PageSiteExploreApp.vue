<script setup lang="ts">
/** Explore JPL App's equivalent to PageContent */
import { computed, defineProps, reactive } from 'vue'
import type { PageObject } from '../../../interfaces'
import { useThemeStore } from '../../../store/theme'
import BaseExploreApp from './../../explore-jpl/BaseExploreApp/BaseExploreApp.vue'

const themeStore = useThemeStore()

const props = defineProps({
  data: {
    type: Object as () => PageObject,
    default: undefined
  }
})
const { data } = reactive(props)

/** If the hero image is inline (treated as a regular block) */
const heroInline = computed(() => {
  if (data?.heroPosition === 'inline') {
    return true
  }
  return false
})
/** If the page title should overlay the hero image (does not apply to inline heroes) */
const heroTitle = computed(() => {
  return data?.heroImage && !heroInline.value && data?.displayTitleInHero
})
</script>
<template>
  <div
    v-if="data"
    class="ThemeVariantLight"
    :class="{ '-nav-offset': !heroInline && data.heroImage }"
  >
    <BaseExploreApp
      :has-intro="data.heroImage && !heroInline"
      :nav-data="data.breadcrumb"
    >
      <h2>TODO</h2>
    </BaseExploreApp>
  </div>
</template>
