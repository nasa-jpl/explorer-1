<template>
  <BaseLink
    v-if="data"
    variant="none"
    class="NavMobileLink"
    :link-class="`flex items-center py-2 text-lg leading-tight ${linkClass}`"
    :href="data.path && !mixinGetRouterLink(data) ? data.path : null"
    :to="mixinGetRouterLink(data) ? mixinGetRouterLink(data) : null"
    :exact="exact"
  >
    <span>{{ title || mixinGetLinkText(data) }}</span>
  </BaseLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'NavMobileLink',
  components: {
    BaseLink,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    // pass a custom title
    title: {
      type: String,
      required: false,
    },
    linkClass: {
      type: String,
      required: false,
    },
    exact: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
})
</script>
<style lang="scss">
.NavMobileLink {
  span {
    @apply border-b border-transparent;
  }

  .nuxt-link-active {
    span {
      @apply font-medium border-jpl-red #{!important};
    }
  }
}
</style>
