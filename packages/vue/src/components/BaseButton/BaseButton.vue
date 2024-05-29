<script lang="ts">
import { defineComponent } from 'vue'

interface Variants {
  [name: string]: string
}

export const variants: Variants = {
  primary: '-primary',
  secondary: '-secondary',
  dark: '-dark',
  social: '-social'
}

export default defineComponent({
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'primary',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    compact: {
      type: Boolean,
      default: false,
      required: false
    },
    blockClasses: {
      type: String,
      required: false,
      default: 'inline-block'
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    ariaLabel: {
      type: String,
      default: '',
      required: false
    },
    to: {
      type: [String, Object],
      required: false,
      default: null
    },
    href: {
      type: String,
      required: false,
      default: null
    }
  },
  emits: ['click'],
  computed: {
    tag(): string {
      if (this.disabled) {
        return 'button'
      } else if (this.to) {
        return 'nuxt-link'
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
    // necessary for valid html
    // must account for <a>, <nuxt-link>, and <button> use-cases
    theHref(): string | false {
      if (this.tag === 'nuxt-link') {
        return this.to as string
      } else if (this.tag === 'a') {
        return this.href
      }
      return false
    },
    variantClass(): string {
      let classes = variants[this.variant]
      if (!this.$slots.default && this.$slots.icon) {
        classes = classes + ' -icon-only'
      } else if (this.compact) {
        classes = classes + ' -compact'
      }
      if (this.blockClasses) {
        classes = classes + ' ' + this.blockClasses
      }
      return classes
    }
  }
})
</script>

<template>
  <component
    :is="tag"
    class="BaseButton text-contrast-none my-crazy-thing"
    :class="variantClass"
    :aria-label="ariaLabel"
    :disabled="disabled"
    :href="theHref"
    :to="to ? to : false"
    @click="$emit('click')"
  >
    <span class="label block">
      <slot></slot>
      <slot name="icon"></slot>
    </span>
  </component>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseButton';
</style>
