<template>
  <div v-if="data">
    <NavHeading
      :data="data"
      class="NavLinkList"
    />
    <div
      v-if="data.links"
      :class="{ 'auto-col': autoCol }"
    >
      <div
        v-for="(item, index) in data.links"
        :key="index"
        class="mb-0"
      >
        <BaseLink
          variant="none"
          class="block text-base xl:text-lg font-medium leading-tight text-white"
          :href="item.path && !getRouterLink(item) ? item.path : undefined"
          :to="getRouterLink(item) ? getRouterLink(item) : undefined"
          link-class="can-hover:hover:underline inline-block px-2 py-3 -ml-2"
        >
          {{ getLinkText(item) }}
        </BaseLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetRouterLink, mixinGetLinkText } from './../../utils/mixins'
import BaseLink from './../BaseLink/BaseLink.vue'
import NavHeading from './../NavHeading/NavHeading.vue'
import type { LinkObject } from './../../utils/mixins'
export default defineComponent({
  name: 'NavLinkList',
  components: {
    BaseLink,
    NavHeading
  },
  props: {
    data: {
      type: Object,
      required: false
    },
    autoCol: {
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
@import '@explorer-1/common/src/scss/components/NavLinkList';
</style>
