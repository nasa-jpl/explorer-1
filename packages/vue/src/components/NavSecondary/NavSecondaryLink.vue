<template>
  <BaseLink
    :href="isExternal(item.path) ? item.path : undefined"
    :to="!isExternal(item.path) ? item.path : undefined"
    link-class="block px-3 py-2"
    variant="none"
    class="NavSecondaryLink border-t-2 border-transparent"
    :class="baseLinkClasses(index)"
  >
    <span
      class="inline-block pt-2 pb-1 mb-1 transition-colors duration-100 ease-in border-b-2 border-transparent"
      :class="spanClasses(index)"
    >
      {{ item.title }}
    </span>
  </BaseLink>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { BasicLinkObject } from './../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'
export default defineComponent({
  name: 'NavSecondaryLink',
  components: {
    BaseLink
  },
  props: {
    // the index from the v-for loop
    index: {
      type: Number,
      required: false,
      default: undefined
    },
    // the nav item object that includes path and title
    item: {
      type: Object as PropType<BasicLinkObject>,
      required: true
    },
    invert: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isExternal(path: string): boolean {
      if (path && path.startsWith('http')) {
        return true
      }
      return false
    },
    baseLinkClasses(index: number | undefined) {
      let rootClasses = 'mr-auto secondary-root'
      rootClasses = this.invert
        ? `${rootClasses} text-white font-bold -invert`
        : `${rootClasses} text-primary font-semibold`
      const regularClasses = this.invert
        ? 'text-white -invert font-semibold'
        : 'text-gray-dark font-medium'
      return index === 0 ? rootClasses : regularClasses
    },
    spanClasses(index: number | undefined) {
      const rootClasses = this.invert
        ? 'can-hover:group-hover:border-white'
        : 'can-hover:group-hover:border-primary'
      const regularClasses = this.invert
        ? 'can-hover:group-hover:border-white can-hover:group-hover:text-white'
        : 'can-hover:group-hover:border-gray-mid-dark can-hover:group-hover:text-gray-mid-dark'
      return index === 0 ? rootClasses : regularClasses
    }
  }
})
</script>
<style lang="scss">
.NavSecondaryLink {
  .nuxt-link-exact-active {
    span {
      @apply font-bold text-gray-dark;
      @apply border-primary #{!important};
    }
  }
  &.-invert {
    .nuxt-link-exact-active {
      span {
        @apply font-bold text-white;
        @apply border-white #{!important};
      }
    }
  }
}
</style>
