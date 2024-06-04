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

import MixinCarousel from './../MixinCarousel/MixinCarousel.vue'
import SearchResultGridItem from './../SearchResultGridItem/SearchResultGridItem.vue'

export default defineComponent({
  name: 'ThumbnailCarousel',
  components: {
    MixinCarousel,
    SearchResultGridItem,
  },
  props: {
    slides: {
      type: Array,
      required: false,
    },
    initialSlide: {
      type: Number,
      required: false,
      default: 0,
    },
  },
})
</script>
<style lang="scss">
.ThumbnailCarousel {
  &.-cards {
    .swiper {
      .swiper-navigation {
        padding-top: 29.5%;

        .swiper-prev,
        .swiper-next {
          @apply transform -translate-y-1/2;
        }
      }
    }
  }

  .nuxt-link-exact-active {
    > p {
      @apply font-semibold;

      span {
        padding-bottom: 0.2rem;
        @apply border-b-2 border-jpl-red;
      }
    }
  }
}
</style>
