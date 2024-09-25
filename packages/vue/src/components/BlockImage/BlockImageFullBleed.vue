<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'

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
      default: undefined
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: true
    },
    // overrides caption provided with image model
    caption: {
      type: String,
      default: undefined
    },
    // overrides detail url provided with image model. Also forces hasCaption to be true
    customDetailUrl: {
      type: String,
      default: undefined
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
    ...mapStores(useThemeStore),
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
    theCredit() {
      if (this.themeStore.isEdu && !this.displayCaption) {
        return undefined
      }
      return this.data?.credit
    },
    // reform the data object with the computed caption
    theData(): ImageObject | undefined {
      if (this.data) {
        return {
          ...this.data,
          caption: this.theCaption,
          credit: this.theCredit,
          detailUrl: this.customDetailUrl
        }
      }
      return undefined
    },
    hasCaptionArea(): boolean {
      if (this.data) {
        if (this.themeStore.isEdu) {
          return this.theData?.caption || this.customDetailUrl ? true : false
        } else if (
          this.theData?.caption ||
          this.theData?.credit ||
          this.theData?.detailUrl ||
          this.customDetailUrl
        ) {
          return true
        }
      }
      return false
    }
  }
})
</script>
<template>
  <div
    v-if="theData"
    class="BlockImageFullBleed"
  >
    <div class="max-w-screen-3xl mx-auto">
      <MixinFancybox
        v-if="theData.src"
        :src="theData.original || theData.src?.url"
        :caption="theData.caption"
        :credit="theData.credit"
        :detail-url="customDetailUrl || theData.detailUrl"
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
    <div
      v-if="data && hasCaptionArea"
      class="caption-area max-w-screen-3xl p-4 pb-0 mx-auto"
    >
      <BaseImageCaption
        :data="theData"
        :custom-link="customDetailUrl"
        custom-link-text="Full Image Details"
      />
    </div>
  </div>
</template>
