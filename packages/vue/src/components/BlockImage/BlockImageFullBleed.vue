<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import MixinFancybox from './../MixinFancybox/MixinFancybox.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'
import type { ImageObject } from './../../interfaces'
import { mixinGetSrcSet } from './../../utils/mixins'

export default defineComponent({
  name: 'BlockImageFullBleed',
  components: {
    MixinFancybox,
    BaseImage,
    BaseImagePlaceholder,
    BaseImageCaption
  },
  props: {
    data: {
      type: Object as PropType<ImageObject>,
      required: false
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: true
    },
    // overrides caption provided with image model
    caption: {
      type: String,
      required: false
    },
    // if the image should be constrained to a fixed aspect ratio (21:9 on smaller screens, 2:1 on larger screens)
    constrain: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      openTab: 1
    }
  },
  computed: {
    theCaption(): string | undefined {
      if (this.caption && this.caption.length > 2 && this.displayCaption) {
        return this.caption
      } else if (
        this.displayCaption &&
        this.data &&
        this.data.caption &&
        this.data.caption.length > 2
      ) {
        return this.data.caption
      }
      return undefined
    },
    theSrcSet(): string | undefined {
      return this.theData ? mixinGetSrcSet(this.theData) : undefined
    },
    // reform the data object with the computed caption
    theData(): ImageObject | undefined {
      if (this.data) {
        return {
          ...this.data,
          caption: this.theCaption
        }
      }
      return undefined
    },
    hasCaptionArea(): boolean {
      if (this.data && (this.theCaption || this.data.credit || this.data.detailUrl)) {
        return true
      }
      return false
    }
  }
})
</script>
<template>
  <div v-if="theData">
    <div class="bg-gray-light">
      <div class="max-w-screen-3xl mx-auto">
        <MixinFancybox
          v-if="theData.src"
          :src="theData.original"
          :caption="theData.caption"
          :credit="theData.credit"
          :detail-url="theData.detailUrl"
        >
          <BaseImagePlaceholder
            :aspect-ratio="constrain ? '16:9' : 'none'"
            :responsive-aspect-ratio="constrain ? 'lg:aspect-ratio-two-one' : ''"
            dark-mode
          >
            <BaseImage
              v-if="theData.src && theData.srcCropped"
              :src="constrain ? theData.srcCropped.url : theData.src.url"
              :srcset="theData.srcSet && !constrain ? theData.srcSet : theSrcSet"
              :width="constrain ? theData.srcCropped.width : theData.src.width"
              :height="constrain ? theData.srcCropped.height : theData.src.height"
              :alt="theData.alt"
              :image-class="!constrain ? 'w-full h-auto' : undefined"
              :object-fit-class="constrain ? 'cover' : undefined"
              loading="lazy"
            />
          </BaseImagePlaceholder>
        </MixinFancybox>
      </div>
    </div>
    <div
      v-if="data && hasCaptionArea"
      class="max-w-screen-3xl p-4 pb-0 mx-auto"
    >
      <BaseImageCaption :data="theData" />
    </div>
  </div>
</template>
