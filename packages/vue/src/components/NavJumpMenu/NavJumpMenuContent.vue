<template>
  <ul class="NavJumpMenuContent bg-white">
    <li
      v-for="(child, index) in item.children"
      :key="index"
      class="text-base border-b border-gray-light"
    >
      <BaseLink
        :href="child.path"
        variant="none"
        :link-class="linkClass(child, index === item.children.length - 1)"
      >
        <span>
          {{ child.title }}
        </span>
      </BaseLink>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

interface NavItemObject {
  path: String
  title: String
  children: [Object]
}
export default defineComponent({
  name: 'NavJumpMenuContent',
  components: {
    BaseLink
  },
  props: {
    // the tertiary nav item object that includes path, title, and children
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    linkClass(item?: NavItemObject, isLast?: Boolean) {
      // default
      let computedClass = 'py-2 lg:py-4'
      if (!item) {
        // if first (aka Overview)
        computedClass = 'py-2 lg:pt-4 lg:pb-4'
      } else if (item.children && item.children.length > 0) {
        // if has children
        computedClass = 'pt-2 pb-1 lg:pt-4 lg:pb-2'
      } else if (isLast) {
        // if the very last
        computedClass = 'py-2 lg:pt-4 lg:pb-6'
      }
      return computedClass
    }
  }
})
</script>
<style lang="scss">
.NavJumpMenuContent {
  a {
    @apply block pl-18 pr-6 lg:pl-6 text-gray-dark;

    > span {
      @apply border-b border-transparent pb-2px;
    }

    &:hover {
      > span {
        @apply border-gray-dark text-gray-dark;
      }
    }
  }
}
</style>
