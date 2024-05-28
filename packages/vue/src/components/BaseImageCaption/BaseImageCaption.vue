<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import BaseLink from './../BaseLink/BaseLink.vue'

export type ImageCaptionObject = {
  caption?: string
  credit?: string
  detailUrl?: string
}

export default defineComponent({
  name: 'BaseImageCaption',
  components: {
    BaseLink,
  },
  props: {
    data: {
      type: (Object as PropType<ImageCaptionObject>),
      required: true,
      default: undefined,
    },
  },
})
</script>
<template>
  <div v-if="data" class="BaseImageCaption text-body-sm">
    <div class="inline mr-2">
      <div class="the-caption-text inline" v-html="data.caption"></div>
      <span v-if="data.credit" class="inline"> Credit: {{ data.credit }} </span>
    </div>
    <BaseLink
      v-if="data.detailUrl"
      class="inline-block"
      variant="default"
      :to="data.detailUrl"
    >
      Full Image Details
    </BaseLink>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/typography-theme-colors';
// required for @apply text-theme-color in _BaseImageCaption.scss
@import '@explorer-1/common/src/scss/components/BaseImageCaption';
</style>
