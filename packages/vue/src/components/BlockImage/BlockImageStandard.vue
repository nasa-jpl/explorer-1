<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
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
    // if the image should be constrained to a 16:9 aspect ratio
    constrain: {
      type: Boolean,
      default: true
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
      if (this.theData) {
        if (this.themeStore.isEdu) {
          return this.theData.caption || this.customDetailUrl ? true : false
        } else if (
          this.theData.caption ||
          this.theData.credit ||
          this.theData.detailUrl ||
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
  <div v-if="theData">
    <MixinFancybox
      v-if="theData.src"
      :src="theData.original || theData.src?.url"
      :caption="theData.caption"
      :credit="theData.credit"
      :detail-url="customDetailUrl || theData.detailUrl"
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
      <BaseImageCaption
        :data="theData"
        :custom-link="customDetailUrl"
        custom-link-text="Full Image Details"
      />
    </div>
  </div>
</template>
