<template>
  <MixinCarousel
    v-if="slides"
    class="ThumbnailCarousel"
    :initial-slide="initialSlide"
    :slides-per-view="3"
  >
    <!-- Slides -->
    <SearchResultGridItem
      v-for="(item, index) in slides"
      :key="index"
      :url="item.url"
      :title="item.title"
      :image="item.thumbnailImage"
      class="swiper-slide"
    />
  </MixinCarousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import SearchResultGridItem from './../SearchResultGridItem/SearchResultGridItem.vue'

interface Slide {
  url: string
  title: string
  thumbnailImage: Partial<ImageObject>
}
export default defineComponent({
  name: 'ThumbnailCarousel',
  components: {
    MixinCarousel,
    SearchResultGridItem
  },
  props: {
    slides: {
      type: Array as PropType<Partial<Slide>[]>,
      required: false
    },
    initialSlide: {
      type: Number,
      required: false,
      default: 0
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/ThumbnailCarousel';
</style>
