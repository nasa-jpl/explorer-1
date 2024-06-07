<template>
  <div
    v-if="image || video"
    class="HeroMedia"
  >
    <div class="bg-gray-light">
      <div class="vh-crop max-w-screen-3xl relative flex items-center mx-auto overflow-hidden">
        <div class="hero">
          <template v-if="theImageData">
            <img
              v-if="theImageData.src"
              class="object-cover object-center w-full h-full"
              :srcset="theSrcSet"
              :src="theImageData.src.url"
              :width="theImageData.src.width"
              :height="theImageData.src.height"
              :alt="theImageData.alt"
              itemprop="image"
            />
          </template>
          <template v-else-if="video">
            <MixinVideoBg :video="video" />
          </template>
        </div>
        <div
          v-if="hasCaptionArea"
          class="lg:hidden absolute bottom-0 left-0 w-full h-auto mx-auto"
        >
          <button
            class="bg-opacity-90 text-gray-dark flex items-center justify-center w-12 h-12 ml-auto bg-white cursor-pointer"
            aria-label="Toggle caption"
            @click="toggleCaption"
          >
            <IconInfo
              v-show="!captionVisible"
              class="text-xl"
            />
            <IconClose v-show="captionVisible" />
          </button>
        </div>
      </div>

      <div
        v-if="hasCaptionArea"
        :class="captionVisibilityClass"
        class="max-w-screen-3xl bg-gray-light bg-opacity-90 lg:bg-opacity-100 lg:block lg:pb-4 lg:px-3 xl:px-8 lg:pt-4 items-start p-4 mx-auto"
      >
        <BaseImageCaption :data="theImageData || customCaption" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MixinVideoBg from './../MixinVideoBg/MixinVideoBg.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'
import IconInfo from './../Icons/IconInfo.vue'
import IconClose from './../Icons/IconClose.vue'
import type { ImageObject } from '../../interfaces'
import { mixinGetSrcSet, mixinTransparentHeader } from './../../utils/mixins'

export default defineComponent({
  /*
  This component displays a full-width hero item at the top of the page
  - accommodates images or videos
  - uses vh to dynamically crop the media based on viewport height
  - manages display state for navigation
  */
  name: 'HeroMedia',
  components: {
    MixinVideoBg,
    BaseImageCaption,
    IconInfo,
    IconClose
  },
  props: {
    // image object includes the image caption and credit
    image: {
      type: Object,
      required: false
    },
    video: {
      type: Object,
      required: false
    },
    // if a caption should even be visible
    displayCaption: {
      type: Boolean,
      default: true
    },
    // for video heroes that pass separate caption and credit data
    caption: {
      type: String,
      required: false
    },
    credit: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      captionVisible: false
    }
  },
  computed: {
    theImageCaption(): string | undefined {
      if (this.image && this.caption && this.caption.length > 2 && this.displayCaption) {
        return this.caption
      } else if (
        this.image &&
        this.image.caption &&
        this.image.caption.length > 2 &&
        this.displayCaption
      ) {
        return this.image.caption
      }
      return undefined
    },
    theImageData(): Partial<ImageObject> | undefined {
      if (this.image) {
        return {
          ...this.image,
          caption: this.theImageCaption
        }
      }
      return undefined
    },
    theSrcSet(): string | undefined {
      return this.theImageData ? mixinGetSrcSet(this.theImageData) : undefined
    },
    // to handle captions for videos
    customCaption(): Partial<ImageObject> | undefined {
      if ((this.caption && this.caption.length > 2) || this.credit) {
        return {
          caption: this.caption,
          credit: this.credit
        }
      }
      return undefined
    },
    captionVisibilityClass() {
      if (!this.captionVisible) {
        return 'hidden'
      } else {
        return 'flex'
      }
    },
    hasCaptionArea(): string | boolean {
      if (this.theImageData) {
        return this.theImageCaption || this.image?.credit || this.image?.detailUrl
      } else if (this.customCaption) {
        return true
      }
      return false
    }
  },
  mounted() {
    mixinTransparentHeader()
  },
  methods: {
    toggleCaption() {
      if (this.captionVisible) {
        this.captionVisible = false
      } else {
        this.captionVisible = true
      }
    }
  }
})
</script>
<style lang="scss">
@import '@explorer-1/common/src/scss/components/HeroMedia';
</style>
