<template>
  <div
    v-if="image"
    class="HeroMedia mb-10 md:mb-10 lg:mb-14 -mx-4 lg:mx-0"
  >
    <div class="bg-gray-light">
      <div class="relative flex items-center mx-auto overflow-hidden vh-crop max-w-screen-3xl">
        <div class="hero">
          <BaseImage
            v-if="image.src"
            :src="image.src.url"
            :srcset="getSrcSet"
            :alt="image.alt"
            :width="image.src.width"
            :height="image.src.height"
            image-class="object-center w-full h-full"
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
      required: false
    },
    startDateSplit: {
      type: Object as PropType<EventDateObject | undefined>,
      required: true
    },
    image: {
      type: Object,
      required: false
    }
  },
  computed: {
    getSrcSet() {
      return this.image ? mixinGetSrcSet(this.image) : undefined
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HeroMedia';
</style>
