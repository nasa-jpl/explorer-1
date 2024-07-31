<template>
  <div
    v-if="image"
    class="EventDetailHero mb-10 md:mb-10 lg:mb-14 -mx-4 lg:mx-0"
  >
    <div class="hero">
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
      <div
        v-if="startDateSplit"
        class="ThemeVariantLight absolute top-0 left-0 z-10 px-4 py-4 text-center text-white bg-primary"
      >
        <div class="font-extrabold text-6xl leading-tight tracking-wider">
          {{ startDateSplit.day }}
        </div>
        <div class="text-subtitle">
          {{ startDateSplit.monthAndYear }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseImage from '../BaseImage/BaseImage.vue'
import { mixinGetSrcSet, type EventDateObject } from './../../utils/mixins'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'EventDetailHero',
  components: {
    BaseImage
  },
  props: {
    data: {
      type: Object,
      required: false,
      default: undefined
    },
    startDateSplit: {
      type: Object as PropType<EventDateObject | undefined>,
      required: true
    },
    image: {
      type: Object,
      required: false,
      default: undefined
    }
  },
  computed: {
    getSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) : undefined
    }
  }
})
</script>
