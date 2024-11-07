<template>
  <BaseLink
    v-if="link?.page || link?.externalLink"
    variant="none"
    :to="link?.page?.url ? link.page.url : undefined"
    :href="link?.externalLink ? link?.externalLink : undefined"
    class="BlockCardGridItem group"
    :class="wrapperClass"
    external-target-blank
  >
    <BlockCardGridItemElement
      v-bind="$attrs"
      :link="link"
    />
  </BaseLink>
  <BlockCardGridItemElement
    v-else
    :class="wrapperClass"
    v-bind="$attrs"
  />
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import type { LinkObject } from './../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'
import BlockCardGridItemElement from './BlockCardGridItemElement.vue'

export default defineComponent({
  name: 'BlockCardGridItem',
  components: {
    BaseLink,
    BlockCardGridItemElement
  },
  props: {
    link: {
      type: Object as PropType<LinkObject>,
      required: false,
      default: undefined
    },
    wrapperClass: {
      type: String,
      required: false,
      default: undefined
    }
  }
})
</script>
