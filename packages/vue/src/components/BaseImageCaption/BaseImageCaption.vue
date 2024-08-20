<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'BaseImageCaption',
  components: {
    BaseLink
  },
  props: {
    data: {
      type: Object as PropType<Partial<ImageObject>>,
      required: true,
      default: undefined
    },
    customLink: {
      type: String,
      default: undefined
    },
    customLinkText: {
      type: String,
      default: 'Custom Link'
    }
  }
})
</script>
<template>
  <div
    v-if="data"
    class="BaseImageCaption text-body-sm"
  >
    <div class="inline mr-2">
      <div
        class="the-caption-text inline"
        v-html="data.caption"
      ></div>
      <span
        v-if="data.credit"
        class="inline"
      >
        Credit: {{ data.credit }}
      </span>
    </div>
    <BaseLink
      v-if="data.detailUrl"
      class="inline-block"
      variant="default"
      :to="data.detailUrl"
    >
      Full Image Details
    </BaseLink>
    <BaseLink
      v-else-if="customLink"
      class="inline-block"
      variant="default"
      :to="customLink"
    >
      {{ customLinkText }}
    </BaseLink>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseImageCaption';
</style>
