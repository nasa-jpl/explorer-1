<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

export type ImageLoader = 'lazy' | 'eager' | undefined

interface ObjectFitClasses {
  [key: string]: string
}

export const objectFitClasses: ObjectFitClasses = {
  none: 'object-none',
  contain: 'object-contain',
  cover: 'object-cover',
  fill: 'object-fill',
  scaleDown: 'object-scale-down'
}

export default defineComponent({
  name: 'BaseImage',
  props: {
    imageClass: {
      type: String,
      required: false
    },
    objectFitClass: {
      type: String,
      required: false,
      default: 'contain',
      validator: (prop: string): boolean => Object.keys(objectFitClasses).includes(prop)
    },
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      required: false,
      default: ''
    },
    alt: {
      type: String
    },
    width: {
      type: [Number, String]
    },
    height: {
      type: [Number, String]
    },
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
