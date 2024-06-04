<template>
  <BaseLink
    :href="isExternal(item.path) ? item.path : null"
    :to="!isExternal(item.path) ? item.path : null"
    link-class="block px-3 py-2"
    variant="none"
    class="NavSecondaryLink border-t-2 border-transparent"
    :class="
      index === 0
        ? 'mr-auto text-jpl-red font-semibold secondary-root'
        : 'text-gray-dark'
    "
  >
    <span
      class="inline-block pt-2 pb-1 mb-1 transition-colors duration-100 ease-in border-b-2 border-transparent"
      :class="
        index === 0
          ? 'can-hover:group-hover:border-jpl-red'
          : 'can-hover:group-hover:border-gray-mid-dark can-hover:group-hover:text-gray-mid-dark '
      "
    >
      {{ item.title }}
    </span>
  </BaseLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'
export default defineComponent({
  name: 'NavSecondaryLink',
  components: {
    BaseLink,
  },
  props: {
    // the index from the v-for loop
    index: {
      type: Number,
      required: false,
    },
    // the nav item object that includes path and title
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isExternal(path: string): boolean {
      if (path && path.startsWith('http')) {
        return true
      }
      return false
    },
  },
})
</script>
<style lang="scss">
.NavSecondaryLink {
  .nuxt-link-exact-active {
    span {
      @apply font-bold text-gray-dark;
      @apply border-jpl-red #{!important};
    }
  }
}
</style>
