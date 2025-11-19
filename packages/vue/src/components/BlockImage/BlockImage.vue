<script lang="ts">
/** The combination of BaseImage and BaseImageCaption, plus adding support for expanding the image in a lightbox and styling it to be a full-bleed image. */
import { defineComponent, type PropType } from 'vue'
import type { ImageBlock } from './../../interfaces'
import BlockImageStandard from './BlockImageStandard.vue'
import BlockImageFullBleed from './BlockImageFullBleed.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'

export default defineComponent({
  name: 'BlockImage',
  components: {
    BlockImageStandard,
    BlockImageFullBleed,
    LayoutHelper
  },
  props: {
    data: {
      type: Object as PropType<ImageBlock>,
      required: false
    },
    /** If image should be the full width of the container */
    fullBleed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>
<template>
  <div
    v-if="data"
    class="BlockImage"
  >
    <template v-if="fullBleed && data.imageFullBleed">
      <BlockImageFullBleed
        :data="data.imageFullBleed"
        :display-caption="data.displayCaption"
        :caption="data.caption"
        :constrain="data.constrain"
      />
    </template>
    <template v-else>
      <LayoutHelper indent="col-2">
        <BlockImageStandard
          :data="data.image"
          :display-caption="data.displayCaption"
          :caption="data.caption"
          :constrain="data.constrain"
        />
      </LayoutHelper>
    </template>
  </div>
</template>
