<script lang="ts">
import { defineComponent } from 'vue'
import type { Attributes } from './../../interfaces'
import type { PropType } from 'vue'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const headings: Attributes = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  h6: 'text-h6'
}

export default defineComponent({
  name: 'BaseHeading',
  props: {
    level: {
      type: String as PropType<HeadingLevel | undefined>,
      required: false,
      default: 'h2'
    },
    size: {
      type: String as PropType<HeadingLevel | '' | undefined>,
      required: false,
      default: 'h2'
    }
  },
  computed: {
    computedTag(): string {
      if (this.level) {
        return this.level
      } else {
        return this.size || 'h2'
      }
    },
    computedClass(): string {
      if (this.size) {
        return headings[this.size]
      } else {
        return ''
      }
    }
  }
})
</script>
<template>
  <component
    :is="computedTag"
    :class="computedClass"
  >
    <slot />
  </component>
</template>
