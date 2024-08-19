<script lang="ts">
import { defineComponent } from 'vue'

interface AspectRatios {
  [key: string]: string
}

export const aspectRatios: AspectRatios = {
  none: 'aspect-ratio-none',
  portrait: 'aspect-ratio-four-five',
  square: 'aspect-ratio-square',
  '1:1': 'aspect-ratio-one-one',
  '2:1': 'aspect-ratio-two-one',
  '2:3': 'aspect-ratio-two-three',
  '3:2': 'aspect-ratio-three-two',
  '4:3': 'aspect-ratio-four-three',
  '4:5': 'aspect-ratio-four-five',
  '7:8': 'aspect-ratio-seven-eight',
  '8:7': 'aspect-ratio-eight-seven',
  '9:16': 'aspect-ratio-nine-sixteen',
  '12:9': 'aspect-ratio-twelve-nine',
  '16:7': 'aspect-ratio-sixteen-seven',
  '16:9': 'aspect-ratio-sixteen-nine',
  '21:9': 'aspect-ratio-twentyone-nine'
}

export default defineComponent({
  name: 'BaseImagePlaceholder',
  props: {
    darkMode: {
      type: Boolean,
      required: false,
      default: true
    },
    transparentMode: {
      type: Boolean,
      required: false,
      default: false
    },
    noLogo: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: String,
      default: 'none',
      validator: (prop: string): boolean => Object.keys(aspectRatios).includes(prop)
    },
    responsiveAspectRatio: {
      type: String,
      required: false
    }
  },
  computed: {
    computedClass(): string {
      let classes = ''
      if (this.aspectRatio) {
        classes = classes + aspectRatios[this.aspectRatio]
      }
      if (this.responsiveAspectRatio) {
        classes = `${classes} ${this.responsiveAspectRatio}`
      }
      if (this.transparentMode) {
        classes = classes + ' transparent-theme'
      } else if (this.darkMode) {
        classes = classes + ' dark-theme'
      } else {
        classes = classes + ' light-theme'
      }
      if (this.noLogo) {
        classes = classes + ' no-logo'
      }

      return classes
    }
  }
})
</script>
<template>
  <div>
    <div :class="'BaseImagePlaceholder ' + computedClass">
      <slot></slot>
      <slot name="lightbox"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@explorer-1/common/src/scss/components/BaseImagePlaceholder';
</style>
