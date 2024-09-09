<script lang="ts">
// HomepageMissionsCarouselItem.vue
/* Slide for the homepage missions carousel.
   Links to the topic page if provided,
   otherwise links to mission target as fallback.
*/
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
import IconCaret from './../Icons/IconCaret.vue'

export default defineComponent({
  name: 'HomepageMissionsCarouselItem',
  components: {
    BaseLink,
    IconCaret
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    hasTopic(): boolean {
      if (this.data && this.data.topic && this.data.topic.url) {
        return true
      }
      return false
    }
  }
})
</script>

<template>
  <BaseLink
    v-if="data"
    variant="none"
    :aria-label="hasTopic ? 'More about ' + data.topic.title : 'View ' + data.name + ' missions'"
    :to="hasTopic ? data.topic.url : '/missions/?mission_target=' + data.name"
    class="HomepageMissionsCarouselItem group flex h-full pb-1 text-white"
    link-class="flex flex-col w-full"
  >
    <div class="slide-image h-80 mb-3">
      <picture
        v-if="data.image && data.image.src"
        class="flex w-full h-full"
      >
        <source
          :srcset="data.image.webp.url"
          type="image/webp"
        />
        <img
          class="object-contain w-auto mx-auto"
          :src="data.image.src.url"
          :srcset="data.image.srcSet"
          :width="data.image.src.width"
          :height="data.image.src.height"
          loading="lazy"
          alt=""
        />
      </picture>
    </div>
    <div class="text-wrapper -mt-18 pt-22 w-3/5 h-auto pl-6 mx-auto border-l">
      <div
        class="shifted-text can-hover:group-hover:-mt-3 lg:mt-0 -mt-3 transition-all duration-500 ease-in-out"
      >
        <p class="mb-1 text-3xl font-semibold">{{ data.name }}</p>
        <p class="text-gray-light-mid mb-1 text-lg whitespace-nowrap">
          Current missions: {{ data.currentMissions }}
        </p>
        <p class="text-gray-light-mid mb-2 text-lg whitespace-nowrap">
          Past missions: {{ data.pastMissions }}
        </p>
        <div
          class="explore-text can-hover:group-hover:opacity-100 can-hover:group-hover:ml-0 lg:-ml-3 lg:opacity-0 ml-0 transition-all duration-300 ease-in"
        >
          <span class="text-subtitle text-primary-light flex items-center">
            Explore
            <IconCaret class="ml-1 text-base" />
          </span>
        </div>
      </div>
    </div>
  </BaseLink>
</template>

<style lang="scss">
.HomepageMissionsCarouselItem {
  .text-wrapper {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(to top, #6f6f6f, rgba(0, 0, 0, 0)) 1 20%; // border-gray-mid-dark
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
  }
  // styling based on slide visibility
  &.swiper-slide,
  &.swiper-slide-duplicate {
    @apply opacity-50 transition-all duration-500 ease-in-out h-auto;

    .slide-image {
      @apply transition-transform duration-500 ease-in-out transform scale-90;
    }

    .text-wrapper {
      @apply opacity-0 transition-opacity duration-500 ease-in-out;
    }
    // on mobile, only the active slide should be fully visible
    &.swiper-slide-active,
    &:focus,
    &:focus-within {
      @apply opacity-100;

      .text-wrapper {
        @apply opacity-100;

        .shifted-text {
          @apply -mt-3 #{!important};
        }

        .explore-text {
          @apply opacity-100 ml-0 #{!important};
        }
      }

      .slide-image {
        @apply scale-105;
      }
    }
    @screen lg {
      // &.swiper-slide-visible, &.swiper-slide-duplicate-visible
      &.swiper-slide-prev,
      &.swiper-slide-active,
      &.swiper-slide-next {
        @apply opacity-100;

        .text-wrapper {
          @apply opacity-100;
        }
      }
    }
  }
}
</style>
