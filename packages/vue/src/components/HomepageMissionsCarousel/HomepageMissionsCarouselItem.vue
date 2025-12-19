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
        <p class="mb-1 text-h4">{{ data.name }}</p>
        <p class="text-gray-light-mid text-body-md whitespace-nowrap">
          Current missions: {{ data.currentMissions }}
        </p>
        <p class="text-gray-light-mid mb-1 text-body-md whitespace-nowrap">
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
@import '@explorer-1/common/src/scss/components/HomepageMissionsCarouselItem';
</style>
