<script lang="ts">
/** Caption text used with both images and videos. */

import { defineComponent, type PropType } from 'vue'
import type { ImageObject, VideoObject } from '../../interfaces'
import BaseLink from './../BaseLink/BaseLink.vue'

export default defineComponent({
  name: 'BaseImageCaption',
  components: {
    BaseLink
  },
  props: {
    /** `{ImageObject}` data */
    data: {
      // type: Object as PropType<<PartialImageObject>>,
      type: Object as PropType<Partial<ImageObject> | Partial<VideoObject> | any>,
      required: true
    },
    /** Appends a link to the end of the caption. Overrides "Full Image Details" link, if it exists. */
    customLink: {
      type: String,
      default: undefined
    },
    /** Text for the custom link. Does not appear if `customLink` is blank */
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
    <div
      v-if="data.caption || data.credit"
      class="inline mr-2"
    >
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
      v-if="customLink"
      class="inline-block"
      variant="default"
      :to="customLink"
    >
      {{ customLinkText }}
    </BaseLink>
    <BaseLink
      v-else-if="data.detailUrl"
      class="inline-block"
      variant="default"
      :to="data.detailUrl"
    >
      Full Image Details
    </BaseLink>
  </div>
</template>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseImageCaption';
</style>
