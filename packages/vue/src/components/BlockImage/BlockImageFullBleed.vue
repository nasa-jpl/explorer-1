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
            :responsive-aspect-ratio="
              constrain ? 'lg:aspect-ratio-two-one' : ''
            "
            dark-mode
          >
            <BaseImage
              v-if="theData.src && theData.srcCropped"
              :src="constrain ? theData.srcCropped.url : theData.src.url"
              :srcset="
                theData.srcSet && !constrain
                  ? theData.srcSet
                  : mixinGetSrcSet(theData)
              "
              :width="constrain ? theData.srcCropped.width : theData.src.width"
              :height="
                constrain ? theData.srcCropped.height : theData.src.height
              "
              :alt="theData.alt"
              :image-class="!constrain ? 'w-full h-auto' : null"
              :object-fit-class="constrain ? 'cover' : null"
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
<script lang="ts">
import { defineComponent } from 'vue'
import MixinFancybox from './../MixinFancybox/MixinFancybox.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export default defineComponent({
  name: 'BlockImageFullBleed',
  components: {
    MixinFancybox,
    BaseImage,
    BaseImagePlaceholder,
    BaseImageCaption,
  },
  props: {
    data: {
      type: Object,
      required: false,
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: true,
    },
    // overrides caption provided with image model
    caption: {
      type: String,
      required: false,
    },
    // if the image should be constrained to a fixed aspect ratio (21:9 on smaller screens, 2:1 on larger screens)
    constrain: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      openTab: 1,
    }
  },
  computed: {
    theCaption(): String | null {
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
      return null
    },
    // reform the data object with the computed caption
    theData(): object | null {
      if (this.data) {
        return {
          ...this.data,
          caption: this.theCaption,
        }
      }
      return null
    },
    hasCaptionArea(): string | false {
      if (this.data) {
        return this.theCaption || this.data.credit || this.data.detailUrl
      }
      return false
    },
  },
})
</script>
