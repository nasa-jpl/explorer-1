<template>
  <a
    ref="ContextImageButton"
    class="ContextImageButton bg-gray-dark sm:absolute bottom-0 right-0 left-auto z-40 block px-5"
    @click="toggleContextImagePreview()"
  >
    <div class="flex flex-row items-center justify-between py-3 text-white uppercase">
      <span class="font-secondary pr-3 tracking-wider">Context Image</span>
      <span
        :class="{
          hidden: contextImagePreviewShow,
          block: !contextImagePreviewShow
        }"
        ><IconDropdown
      /></span>
      <span
        :class="{
          hidden: !contextImagePreviewShow,
          block: contextImagePreviewShow
        }"
        ><IconClose
      /></span>
    </div>
    <div
      class="ContextImage pb-5"
      :class="{
        hidden: !contextImagePreviewShow,
        block: contextImagePreviewShow
      }"
    >
      <BaseImagePlaceholder aspect-ratio="square">
        <BaseImage
          v-if="data?.contextImage?.src"
          :src="data.contextImage.src.url"
          :srcset="data.contextImage.srcSet"
          :alt="data.contextImage.alt || ''"
          :width="data.contextImage.src.width"
          :height="data.contextImage.src.height"
          loading="eager"
          object-fit-class="cover"
        />
      </BaseImagePlaceholder>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import IconDropdown from './../Icons/IconDropdown.vue'
import IconClose from './../Icons/IconClose.vue'

export default defineComponent({
  name: 'ImageDetailContextImage',
  components: {
    BaseImagePlaceholder,
    BaseImage,
    IconDropdown,
    IconClose
  },
  inheritAttrs: true,
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      contextImagePreviewShow: false
    }
  },
  methods: {
    toggleContextImagePreview() {
      if (this.contextImagePreviewShow) {
        this.contextImagePreviewShow = false
      } else {
        this.contextImagePreviewShow = true
      }
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/ImageDetailContextImage';
</style>
