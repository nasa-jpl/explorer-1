<template>
  <BlockImageCarousel
    v-if="items"
    class="BlockImageGallery"
    :items="items"
    :loop="false"
    :block-id="blockId"
  >
    <template #firstSlide>
      <MixinFancybox
        v-if="cover"
        :src="cover.original"
        :caption="description"
        :credit="cover.credit"
        :detail-url="cover.detailUrl"
        :title="title"
        :gallery-name="`carousel-${blockId}`"
        show-thumbnails
        class="swiper-slide h-auto"
      >
        <div>
          <div class="bg-gradient-to-b from-transparent-w50 to-black absolute inset-0 z-10">
            <div class="text-contrast lg:p-20 flex items-end w-full h-full p-10 text-white">
              <div class="w-full">
                <p
                  v-if="label"
                  class="text-subtitle mb-3"
                >
                  {{ label }}
                </p>
                <BaseHeading
                  v-if="title"
                  level="h2"
                >
                  {{ title }}
                </BaseHeading>
                <p
                  v-if="description"
                  class="sm:block text-body-lg lg:w-2/3 xl:w-1/2 hidden mt-5"
                >
                  {{ description }}
                </p>
              </div>
            </div>
          </div>
          <BaseImagePlaceholder
            v-if="cover && cover.src"
            aspect-ratio="16:9"
            dark-mode
          >
            <BaseImage
              v-if="cover.src"
              :src="cover.src.url"
              :srcset="theSrcSet"
              :width="cover.src.width"
              :height="cover.src.height"
              alt=""
              object-fit-class="cover"
              image-class="swiper-lazy"
              loading="lazy"
            />
          </BaseImagePlaceholder>
        </div>
      </MixinFancybox>
    </template>
  </BlockImageCarousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetSrcSet } from './../../utils/mixins'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import MixinFancybox from './../MixinFancybox/MixinFancybox.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockImageCarousel from './../BlockImageCarousel/BlockImageCarousel.vue'

export default defineComponent({
  name: 'BlockImageGallery',
  components: {
    MixinFancybox,
    BaseImage,
    BaseImagePlaceholder,
    BaseHeading,
    BlockImageCarousel
  },
  props: {
    label: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    cover: {
      type: Object as PropType<ImageObject>,
      required: false
    },
    items: {
      type: Array as PropType<ImageObject[]>,
      required: false
    },
    blockId: {
      type: String,
      required: false
    }
  },
  computed: {
    theSrcSet() {
      return this.cover
        ? mixinGetSrcSet(this.cover)
          ? mixinGetSrcSet(this.cover)
          : this.cover.srcSet
        : ''
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockImageGallery';
</style>
