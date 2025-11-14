<template>
  <div
    v-if="data"
    class="BlockImageComparison"
  >
    <ClientOnly>
      <VueCompareImage
        v-if="theBeforeImageSrc && theAfterImageSrc"
        class="h-full animate-fadeIn"
        :left-image="theBeforeImageSrc.url"
        left-image-alt="Left image"
        :right-image="theAfterImageSrc.url"
        right-image-alt="Right image"
      />
    </ClientOnly>
    <div
      v-if="data.caption || customDetailUrl"
      class="caption-area lg:px-0 p-4 pb-0 print:pl-0"
    >
      <BaseImageCaption
        :data="{ caption: data.caption }"
        :custom-link="customDetailUrl"
        custom-link-text="Full Image Details"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { BlockData, ImageObject } from './../../interfaces.ts'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export type BlockImageComparisonData = BlockData & {
  beforeImage: ImageObject
  afterImage: ImageObject
  constrain: boolean
  caption: string
}

export default defineComponent({
  name: 'BlockImageComparison',
  components: { BaseImageCaption },
  props: {
    data: {
      type: Object as PropType<BlockImageComparisonData>,
      required: true
    },
    /** Link to more image details. Link text defaults to "Full image details" */
    customDetailUrl: {
      type: String,
      default: undefined
    }
  },
  computed: {
    theBeforeImageSrc() {
      if (this.data && this.data.beforeImage) {
        if (this.data.constrain && this.data.beforeImage.srcCropped) {
          return this.data.beforeImage.srcCropped
        }
        return this.data.beforeImage.src
      }
      return null
    },
    theAfterImageSrc() {
      if (this.data && this.data.afterImage) {
        if (this.data.constrain && this.data.afterImage.srcCropped) {
          return this.data.afterImage.srcCropped
        }
        return this.data.afterImage.src
      }
      return null
    }
  }
})
</script>
