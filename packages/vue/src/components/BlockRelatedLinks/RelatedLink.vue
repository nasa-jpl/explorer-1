<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    class="bg-gray-light group text-body-lg flex items-center justify-between px-4 py-4 cursor-pointer print:px-0 print:py-0 print:block"
    :target="target"
    rel="noopener"
  >
    <span class="can-hover:group-hover:underline min-w-12 block w-auto break-words print:inline">
      <slot />
    </span>
    <component
      :is="icon"
      class="text-action xl:mx-4 flex-none ml-4 text-2xl leading-normal print:inline print:text-sm print:mx-2"
      :class="variant === 'external' ? 'text-lg' : 'text-3xl'"
    />
  </component>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import IconArrow from './../Icons/IconArrow.vue'
import IconDownload from './../Icons/IconDownload.vue'
import IconExternal from './../Icons/IconExternal.vue'

interface Variants {
  [name: string]: string
}

export const variants: Variants = {
  page: 'page',
  external: 'external',
  document: 'document'
}

export default defineComponent({
  name: 'BlockRelatedLinks',
  components: {
    IconArrow,
    IconDownload,
    IconExternal
  },
  props: {
    variant: {
      type: String,
      required: true,
      default: 'page',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    to: {
      type: [String, Object],
      required: false
    },
    href: {
      type: String,
      required: false
    }
  },
  computed: {
    tag() {
      if (this.to) {
        return 'nuxt-link'
      } else {
        return 'a'
      }
    },
    target() {
      if (this.to) {
        return '_self'
      } else {
        return '_blank'
      }
    },
    icon() {
      if (this.variant === 'document') {
        return 'IconDownload'
      } else if (this.variant === 'page') {
        return 'IconArrow'
      } else {
        return 'IconExternal'
      }
    }
  }
})
</script>
