<template>
  <ul class="NavSecondaryDropdownContent text-base">
    <li v-if="includeOverview">
      <BaseLink
        :to="item.path"
        variant="none"
        :link-class="linkClass()"
        :aria-label="`Overview of ${item.title}`"
        exact
      >
        <span> Overview </span>
      </BaseLink>
    </li>
    <li
      v-for="(child, child_index) in item.children"
      :key="child_index"
    >
      <BaseLink
        :to="child.path.startsWith('/') ? child.path : undefined"
        :href="!child.path.startsWith('/') ? child.path : undefined"
        variant="none"
        :link-class="linkClass(child, child_index === item.children.length - 1)"
        exact
      >
        <span>
          {{ child.title }}
        </span>
      </BaseLink>
      <ul
        v-if="child.children && child.children.length > 0"
        class="pl-6"
      >
        <li
          v-for="(grandchild, grandchild_index) in child.children"
          :key="grandchild_index"
          class=""
        >
          <BaseLink
            :to="grandchild.path.startsWith('/') ? grandchild.path : undefined"
            :href="!grandchild.path.startsWith('/') ? grandchild.path : undefined"
            variant="none"
            :link-class="
              nestedLinkClass(
                grandchild_index === child.children.length - 1,
                child_index === item.children.length - 1
              )
            "
            exact
          >
            <span>
              {{ grandchild.title }}
            </span>
          </BaseLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts">
/*  NavSecondaryDropdownContent
 *  Used to display children of tertiary nav elements in:
 *  - NavSecondaryDropdown
 *  - NavMobileSecondaryDropdown
 */

import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

export interface NavItemObject {
  path: String
  title: String
  children: [Object]
}
export default defineComponent({
  name: 'NavSecondaryDropdownContent',
  components: {
    BaseLink
  },
  props: {
    // the tertiary nav item object that includes path, title, and children
    item: {
      type: Object,
      required: true
    },
    includeOverview: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    linkClass(item?: NavItemObject, isLast?: Boolean) {
      // default
      let computedClass = 'pt-2 lg:pt-4'
      if (!item) {
        // if first (aka Overview)
        computedClass = 'pt-2 lg:pt-4'
      } else if (item.children && item.children.length > 0) {
        // if has children
        computedClass = 'pt-2 lg:pt-4'
      } else if (isLast) {
        // if the very last
        computedClass = 'py-2 lg:pt-4 lg:pb-6'
      }
      return computedClass
    },
    nestedLinkClass(isLast: Boolean, parentIsLast: Boolean) {
      // default
      let computedClass = 'pt-2 lg:pt-2'
      if (isLast) {
        // if the last
        if (!parentIsLast) {
          computedClass = 'pt-2 lg:pt-2'
        } else {
          // the last of the last parent
          computedClass = 'pt-2 pb-3 lg:pt-2 lg:pb-6'
        }
      }
      return computedClass
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavSecondaryDropdownContent';
</style>
