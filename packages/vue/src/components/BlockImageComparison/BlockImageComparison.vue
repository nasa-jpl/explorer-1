<template>
  <div v-if="data">
    <client-only placeholder="Loading Image Comparison...">
      <VueCompareImage
        v-if="theBeforeImageSrc && theAfterImageSrc"
        class="h-full animate-fadeIn"
        :left-image="theBeforeImageSrc.url"
        left-image-alt="Left image"
        :right-image="theAfterImageSrc.url"
        right-image-alt="Right image"
      />
    </client-only>
    <div
      v-if="data.caption && data.caption.length > 2"
      class="text-gray-mid-dark mt-3"
      v-html="data.caption"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const VueCompareImage = process.browser ? require('vue3-compare-image') : null

export default defineComponent({
  name: 'BlockImageComparison',
  components: {
    VueCompareImage,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
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
    },
  },
})
</script>
