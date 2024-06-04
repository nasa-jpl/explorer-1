<template>
  <div v-if="data" class="BlockInlineImage lg:BaseGrid container mx-auto">
    <!-- the image -->
    <div
      v-if="theImageData"
      class="lg:mb-0 lg:w-full sm:w-xl lg:mt-0 lg:pr-4 2xl:pr-0 col-span-5 mx-auto mt-8 mb-8"
      :class="
        data.alignTo === 'right'
          ? 'col-start-8 lg:order-2'
          : 'col-start-1 lg:order-1'
      "
    >
      <!-- should accommodate any size/shape image without cropping -->
      <MixinFancybox
        v-if="theImageData"
        :src="theImageData.original"
        :caption="theImageData.caption"
        :credit="theImageData.credit"
        :detail-url="theImageData.detailUrl"
      >
        <BaseImagePlaceholder aspect-ratio="none">
          <BaseImage
            v-if="theImageData && theImageData.src"
            :src="theImageData.src.url"
            :srcset="
              mixinGetSrcSet(theImageData)
                ? mixinGetSrcSet(theImageData)
                : theImageData.srcset
            "
            :width="theImageData.src.width"
            :height="theImageData.src.height"
            image-class="w-full h-auto"
            :alt="theImageData.alt"
            loading="lazy"
          />
        </BaseImagePlaceholder>
      </MixinFancybox>
      <BaseImageCaption
        v-if="hasCaptionArea"
        class="lg:mt-3 mt-2"
        :data="theImageData"
      />
    </div>

    <!-- the text -->
    <div
      v-if="data.text"
      class="flex col-span-5"
      :class="
        data.alignTo === 'right'
          ? 'col-start-3 lg:order-1'
          : 'col-start-6 lg:order-2'
      "
    >
      <BlockText :text="data.text" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MixinFancybox from './../MixinFancybox/MixinFancybox.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'
import BlockText from './../BlockText/BlockText.vue'

export default defineComponent({
  name: 'BlockInlineImage',
  components: {
    MixinFancybox,
    BlockText,
    BaseImagePlaceholder,
    BaseImage,
    BaseImageCaption,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
  },
  computed: {
    theCaption(): String | null {
      if (
        this.data &&
        this.data.caption &&
        this.data.caption.length > 2 &&
        this.data.displayCaption
      ) {
        return this.data.caption
      } else if (
        this.data &&
        this.data.image.caption &&
        this.data.image.caption.length > 2 &&
        this.data.displayCaption
      ) {
        return this.data.image.caption
      }
      return null
    },
    // reform the image data object with the computed caption
    theImageData(): object | null {
      if (this.data.image) {
        return {
          ...this.data.image,
          caption: this.theCaption,
        }
      }
      return null
    },
    hasCaptionArea(): string | false {
      if (this.data && this.data.image) {
        return (
          this.theCaption || this.data.image.credit || this.data.image.detailUrl
        )
      }
      return false
    },
  },
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockInlineImage';
</style>
