<script lang="ts">
import { defineComponent, type PropType } from 'vue'
/** Placeholder image component with aspect ratio and background controls */

export const aspectRatios = {
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
} as const
type AspectRatiosKey = keyof typeof aspectRatios

export default defineComponent({
  name: 'BaseImagePlaceholder',
  props: {
    /** If the placeholder background should be dark */
    darkMode: {
      type: Boolean,
      required: false,
      default: true
    },
    /** If the placeholder background should be transparent (ovverrides `darkMode`) */
    transparentMode: {
      type: Boolean,
      required: false,
      default: false
    },
    /** If the JPL logo should not appear in the background of the placeholder */
    noLogo: {
      type: Boolean,
      default: false
    },
    /** Desired aspect ratio of image. If the contained image doesn't match, it will be adjusted to fit within the selected aspect ratio */
    aspectRatio: {
      type: String as PropType<AspectRatiosKey>,
      default: 'none',
      validator: (prop: string): boolean => Object.keys(aspectRatios).includes(prop)
    },
    /** Custom tailwind classes to combine screen-size directives with aspect ratios.
     * Example: `md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine`. Overrides `aspectRatio` setting. */
    responsiveAspectRatio: {
      type: String,
      default: ''
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

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseImagePlaceholder';
</style>
