<script lang="ts">
/** Base component for headings. Allows for retaining semantic markup while varying the text size. */

import { defineComponent, type PropType } from 'vue'

type HeadingAttributes = {
  h1: string
  h2: string
  h3: string
  h4: string
  h5: string
  h6: string
}
export type HeadingLevel = keyof HeadingAttributes

const headings: HeadingAttributes = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
  h4: 'text-h4',
  h5: 'text-h5',
  h6: 'text-h6'
} as const

export default defineComponent({
  name: 'BaseHeading',
  props: {
    /** The semantic heading tag if different from the display size (ex: a heading needs to look like an `h4`, but semantically is an `h1`. */
    level: {
      type: String as PropType<HeadingLevel>,
      required: false,
      default: 'h2'
    },
    /** The display size of the heading */
    size: {
      type: String as PropType<HeadingLevel>,
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
