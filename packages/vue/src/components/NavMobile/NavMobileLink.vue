<template>
  <BaseLink
    v-if="data"
    variant="none"
    class="NavMobileLink"
    :link-class="`flex items-center py-2 text-lg leading-tight ${linkClass}`"
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
import type { LinkObject } from './../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavMobileLink',
  components: {
    BaseLink
  },
  props: {
    data: {
      type: Object as PropType<LinkObject>,
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
    getRouterLink(link: LinkObject): string | undefined {
      return mixinGetRouterLink(link)
    },
    getLinkText(link: LinkObject): string | undefined {
      return mixinGetLinkText(link)
    }
  }
})
</script>
<style lang="scss">
.NavMobileLink {
  span {
    @apply border-b border-transparent;
  }

  .nuxt-link-active {
    span {
      @apply font-medium border-primary #{!important};
    }
  }
}
</style>
