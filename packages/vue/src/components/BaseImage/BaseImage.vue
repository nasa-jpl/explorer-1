<script lang="ts">
/**
 * The BaseImage component is a simple `<img />` tag wrapped in a `<div>`
 * and is used to render an image with object-fit classes and lazy loading properties.
 */

import { defineComponent, type PropType } from 'vue'

type ImageLoader = 'lazy' | 'eager' | undefined
const objectFitClasses = {
  none: 'object-none',
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  scaleDown: 'object-scale-down'
} as const
type ObjectFitClassesKey = keyof typeof objectFitClasses

export default defineComponent({
  name: 'BaseImage',
  props: {
    /** CSS classes to apply directory to the `<img>` element */
    imageClass: {
      type: String,
      required: false,
      default: ''
    },
    /** Tailwind CSS object fit classes to specify how the image will scale within `BaseImagePlaceholder` */
    objectFitClass: {
      type: String as PropType<ObjectFitClassesKey>,
      required: false,
      default: 'contain',
      validator: (prop: string): boolean => Object.keys(objectFitClasses).includes(prop)
    },
    /** `<img> src` attribute */
    src: {
      type: String,
      required: true
    },
    /** `<img> srcset` attribute  */
    srcset: {
      type: String,
      required: false,
      default: ''
    },
    /** `<img> alt` attribute */
    alt: {
      type: String,
      default: ''
    },
    /** `<img> width` attribute */
    width: {
      type: [Number, String],
      default: ''
    },
    /** `<img> height` attribute */
    height: {
      type: [Number, String],
      default: ''
    },
    /** `<img> loading` attribute */
    loading: {
      type: String as PropType<ImageLoader>,
      required: false,
      default: 'lazy'
    }
  },
  computed: {
    computedClass(): string {
      let classes = ''
      if (this.imageClass) {
        classes = classes + ' ' + this.imageClass
      }
      if (this.objectFitClass) {
        classes = classes + ' ' + objectFitClasses[this.objectFitClass]
      }
      return classes
    }
  },
  methods: {
    imageFailed() {
      console.log('Image failed to load.')
    }
  }
})
</script>
<template>
  <div>
    <img
      v-if="src"
      ref="BaseImage"
      class="BaseImage print:border print:border-gray-mid"
      :class="computedClass"
      :src="src"
      :srcset="srcset"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      data-chromatic="ignore"
      @error="imageFailed"
    />
  </div>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseImage';
</style>
