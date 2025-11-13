<script lang="ts">
import { defineComponent, resolveComponent, type PropType } from 'vue'

const variants = {
  primary: '-primary',
  secondary: '-secondary',
  dark: '-dark',
  social: '-social'
} as const
type VariantsMapKey = keyof typeof variants

/**
 * Simple button with style variations. Can be either a true `<button>` element or a link.
 */
export default defineComponent({
  name: 'BaseButton',
  props: {
    /**
     * Button style variants
     */
    variant: {
      type: String as PropType<VariantsMapKey>,
      required: false,
      default: 'primary',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    /** Removes extra left and right padding */
    compact: {
      type: Boolean,
      default: false,
      required: false
    },
    /** Additional arbitrary classes to add to the button */
    blockClasses: {
      type: String,
      required: false,
      default: 'inline-block'
    },
    /** If the button should render as disabled */
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    /**
     * ARIA label. Recommended if your button text isn't descriptive, or if it only contains an icon.
     */
    ariaLabel: {
      type: String,
      default: '',
      required: false
    },
    /**
     * If populated, a router-link will be generated. Overrides `href`.
     * If both `to` and `href` are blank, a `<button>` element will be rendered.
     * */
    to: {
      type: [String, Object],
      required: false,
      default: undefined
    },
    /**
     * Optional link for the button.
     * If both `to` and `href` are blank, a `<button>` element will be rendered.
     * */
    href: {
      type: String,
      required: false,
      default: undefined
    }
  },
  emits: ['click'],
  computed: {
    /**
     * Whether the html element should be `<button>`, `<a>` or `<nuxt-link>`
     */
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
    /**
     * Necessary for valid html. Guards for `<a>` or `<nuxt-link>` use-cases
     */
    computedTo() {
      let toValue = this.to
      // filter out unnecessary `/home/` prefix from wagtail default site urlPaths
      if (toValue && typeof toValue === 'string' && toValue.startsWith('/home/')) {
        toValue = toValue.replace('/home/', '/')
      }
      return toValue
    },
    /**
     * Necessary for valid html. Guards for `<a>` or `<nuxt-link>` use-cases
     */
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
