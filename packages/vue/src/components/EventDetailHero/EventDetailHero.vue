<template>
  <div
    v-if="image"
    class="EventDetailHero mb-10 md:mb-10 lg:mb-14 -mx-4 lg:mx-0"
  >
    <div class="hero">
      <BaseImagePlaceholder
        :aspect-ratio="constrain ? '16:9' : 'none'"
        dark-mode
      >
        <BaseImage
          v-if="image.src"
          :src="image.src.url"
          :srcset="getSrcSet"
          :width="image.src.width"
          :height="image.src.height"
          :alt="image.alt"
          image-class="w-full h-auto"
          object-fit-class="cover"
          loading="lazy"
        />
        <CalendarChip
          v-if="startDate || ongoing"
          :start-date="startDate"
          :end-date="endDate"
          :ongoing="ongoing"
        />
      </BaseImagePlaceholder>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { ImageObject } from './../../interfaces.ts'
import BaseImage from '../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from '../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import CalendarChip from '../CalendarChip/CalendarChip.vue'
import { mixinGetSrcSet } from './../../utils/mixins'

export default defineComponent({
  name: 'EventDetailHero',
  components: {
    BaseImage,
    BaseImagePlaceholder,
    CalendarChip
  },
  props: {
    startDate: {
      type: String,
      required: false,
      default: undefined
    },
    endDate: {
      type: String,
      default: undefined
    },
    ongoing: {
      type: Boolean,
      default: false
    },
    image: {
      type: Object as PropType<ImageObject>,
      required: false,
      default: undefined
    },
    /** Constrain image to 16:9 */
    constrain: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    getSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) : undefined
    }
  }
})
</script>
