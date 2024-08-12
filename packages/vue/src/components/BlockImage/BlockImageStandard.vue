<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { ImageObject } from './../../interfaces'
import MixinFancybox from './../MixinFancybox/MixinFancybox.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export default defineComponent({
  name: 'BlockImageStandard',
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
    // if the image should be constrained to a 16:9 aspect ratio
    constrain: {
      type: Boolean,
      default: true
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
    <MixinFancybox
      v-if="theData.src"
      :src="theData.original || theData.src?.url"
      :caption="theData.caption"
      :credit="theData.credit"
      :detail-url="theData.detailUrl"
    >
      <BaseImagePlaceholder
        :aspect-ratio="constrain ? '16:9' : 'none'"
        dark-mode
      >
        <BaseImage
          v-if="theData.src"
          :src="theData.src.url"
          :srcset="theData.srcSet"
          :width="theData.src.width"
          :height="theData.src.height"
          :alt="theData.alt"
          :image-class="!constrain ? 'w-full h-auto' : undefined"
          :object-fit-class="constrain ? 'contain' : undefined"
          loading="lazy"
        />
      </BaseImagePlaceholder>
    </MixinFancybox>
    <div
      v-if="theData && hasCaptionArea"
      class="lg:px-0 p-4 pb-0 print:pl-0"
    >
      <BaseImageCaption :data="theData" />
    </div>
  </div>
</template>
