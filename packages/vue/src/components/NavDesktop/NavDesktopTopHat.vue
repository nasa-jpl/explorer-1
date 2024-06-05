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
          :href="item.path ? item.path : undefined"
          :to="item.linkPage ? item.linkPage.url : undefined"
          class="group flex px-3 border-t-2 border-transparent"
          :class="{ '-ml-3': index === 0 }"
        >
          <span
            class="can-hover:group-hover:border-jpl-red-light inline-block py-2 border-b-2"
            :class="index === 0 ? 'border-jpl-red-light' : 'border-transparent'"
          >
            {{ getLinkText(item) }}
          </span>
        </BaseLink>
      </nav>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetRouterLink, mixinGetLinkText } from './../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'
import type { LinkObject } from './../../utils/mixins'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'NavDesktopTopHat',
  components: {
    BaseLink,
  },
  props: {
    data: {
      type: Array as PropType<LinkObject[]>,
      required: false,
    },
  },
  methods: {
    getRouterLink(link: LinkObject): string | undefined { 
      return mixinGetRouterLink(link)
    },
    getLinkText(link: LinkObject): string | undefined { 
      return mixinGetLinkText(link)
    }
  }
})
</script>
