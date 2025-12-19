<template>
  <BaseLink
    v-if="data"
    variant="none"
    class="NavMobileLink"
    :link-class="`flex items-center py-2 text-lg font-display leading-tight ${linkClass}`"
    :href="data.path && !getRouterLink(data) ? data.path : undefined"
    :to="getRouterLink(data) ? getRouterLink(data) : undefined"
    :exact="exact"
  >
    <span>{{ title || getLinkText(data) }}</span>
  </BaseLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetRouterLink, mixinGetLinkText } from './../../utils/mixins'
import type { PropType } from 'vue'
import type { NavLinkObject } from './../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavMobileLink',
  components: {
    BaseLink
  },
  props: {
    data: {
      type: Object as PropType<NavLinkObject>,
      required: false
    },
    // pass a custom title
    title: {
      type: String,
      required: false
    },
    linkClass: {
      type: String,
      required: false
    },
    exact: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    getRouterLink(link: NavLinkObject): string | undefined {
      return mixinGetRouterLink(link)
    },
    getLinkText(link: NavLinkObject): string | undefined {
      return mixinGetLinkText(link)
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/NavMobileLink';
</style>
