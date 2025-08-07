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
        :link-class="linkClass(child)"
      >
        <span>
          <span
            v-if="$attrs['steps-numbering']"
            :class="$attrs['steps-classes']"
            aria-hidden
            >{{ `Step ${index + 1}:` }}</span
          >
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
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    linkClass(item?: NavItemObject) {
      // default
      let computedClass = 'py-2 lg:py-4'
      if (!item) {
        // if first (aka Overview)
        computedClass = 'py-2 lg:pt-4 lg:pb-4'
      } else if (item.children && item.children.length > 0) {
        // if has children
        computedClass = 'pt-2 pb-1 lg:pt-4 lg:pb-2'
      }
      return computedClass
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavJumpMenuContent';
</style>
