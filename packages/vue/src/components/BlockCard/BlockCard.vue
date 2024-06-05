<template>
  <div
    class="shadow-jpl relative h-full"
    :class="{ 'flex items-center min-h-32': !image }"
  >
    <div v-if="image" class="h-auto">
      <BaseImagePlaceholder aspect-ratio="16:9" dark-mode>
        <BaseImage
          v-if="image.src"
          :src="image.src.url"
          :srcset="theSrcSet"
          :alt="image.alt"
          :width="image.src.width"
          :height="image.src.height"
          object-fit-class="cover"
          loading="lazy"
        />
      </BaseImagePlaceholder>
    </div>
    <div class="px-6 py-6">
      <div class="text-jpl-red text-subtitle">
        {{ type }}
      </div>
      <hr
        aria-hidden="true"
        class="bg-jpl-red text-jpl-red w-8 h-2px border-0 my-2"
      />
      <BaseHeading size="h5" level="h3" class="mt-4 mb-2">
        {{ title }}
      </BaseHeading>
      <p class="text-body-sm">{{ text }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetSrcSet } from './../../utils/mixins'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'

export default defineComponent({
  name: 'BlockCard',
  components: {
    BaseImagePlaceholder,
    BaseImage,
    BaseHeading,
  },
  props: {
    type: {
      type: String,
      required: false,
      default: 'Factoid',
    },
    title: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
  },
  computed: {
    theSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) ? mixinGetSrcSet(this.image) : this.image.srcSet : undefined
    }
  }
})
</script>
