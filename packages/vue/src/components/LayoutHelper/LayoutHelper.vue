<script lang="ts">
import { defineComponent } from 'vue'

interface Indents {
  [key: string]: string
}

export const indents: Indents = {
  'col-1': 'lg:col-start-1 lg:col-end-13',
  'col-2': 'lg:col-start-2 lg:col-end-12',
  'col-3': 'lg:col-start-3 lg:col-end-11',
  'col-4': 'md:col-start-3 md:col-end-11 lg:col-start-4 lg:col-end-10'
}

export default defineComponent({
  name: 'LayoutHelper',
  props: {
    indent: {
      type: String,
      required: false,
      default: 'col-1',
      validator: (prop: string): boolean => Object.keys(indents).includes(prop)
    },
    fullBleed: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    theWidth(): string {
      return indents[this.indent]
    }
  }
})
</script>
<template>
  <div class="LayoutHelper BaseGrid container mx-auto">
    <div
      :class="`${theWidth} col-start-1 col-end-13 lg:px-0 ${fullBleed ? 'px-0' : 'px-4'} relative`"
    >
      <slot></slot>
    </div>
  </div>
</template>
