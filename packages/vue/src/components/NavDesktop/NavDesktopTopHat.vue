<template>
  <div class="NavDesktopTopHat z-50 px-4 bg-black">
    <div class="container mx-auto">
      <nav
        aria-label="JPL Sites"
        class="flex items-center text-sm font-medium text-white bg-black"
      >
        <BaseLink
          v-for="(item, index) in data"
          :key="index"
          variant="none"
          external-target-blank
          :href="item.path ? item.path : null"
          :to="item.linkPage ? item.linkPage.url : null"
          class="group flex px-3 border-t-2 border-transparent"
          :class="{ '-ml-3': index === 0 }"
        >
          <span
            class="can-hover:group-hover:border-jpl-red-light inline-block py-2 border-b-2"
            :class="index === 0 ? 'border-jpl-red-light' : 'border-transparent'"
          >
            {{ mixinGetLinkText(item) }}
          </span>
        </BaseLink>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavDesktopTopHat',
  components: {
    BaseLink,
  },
  props: {
    data: {
      type: Array,
      required: false,
    },
  },
})
</script>
