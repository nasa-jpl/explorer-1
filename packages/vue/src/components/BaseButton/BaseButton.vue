<script lang="ts">
import { defineComponent, resolveComponent } from 'vue'

interface Variants {
  [key: string]: string
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
      default: undefined
    },
    href: {
      type: String,
      required: false,
      default: undefined
    }
  },
  emits: ['click'],
  computed: {
    tag() {
      if (this.disabled) {
        return 'button'
      } else if (this.to) {
        return resolveComponent('NuxtLink')
      } else if (this.href) {
        return 'a'
      } else {
        return 'button'
      }
    },
    computedTo() {
      let toValue = this.to
      // filter out unnecessary `/home/` prefix from wagtail default site urlPaths
      if (toValue && typeof toValue === 'string' && toValue.startsWith('/home/')) {
        toValue = toValue.replace('/home/', '/')
      }
      return toValue
    },
    // necessary for valid html
    // must account for <a>, <nuxt-link>, and <button> use-cases
    theHref(): string | undefined {
      let href = undefined
      if (this.tag === 'a') {
        href = this.href
      }
      return href
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
    class="BaseButton text-contrast-none print:border print:!border-gray-dark print:text-center"
    :class="variantClass"
    :aria-label="ariaLabel"
    :disabled="disabled"
    :href="theHref"
    :to="computedTo ? computedTo : undefined"
    @click="$emit('click')"
  >
    <span class="label block">
      <slot name="default"></slot>
      <slot name="icon"></slot>
      <slot name="afterIcon"></slot>
    </span>
  </component>
</template>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseButton';
</style>
