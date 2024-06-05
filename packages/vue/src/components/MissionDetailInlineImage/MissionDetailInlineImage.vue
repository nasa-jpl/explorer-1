<template>
  <div
    v-if="text || image"
    class="MissionDetailInlineImage lg:BaseGrid container mx-auto"
  >
    <div
      class="flex flex-row items-start col-span-4"
      :class="
        alignment === 'right' ? 'col-start-2 order-1' : 'col-start-9 order-2'
      "
    >
      <div class="lg:mb-10 xl:mb-3 mb-2">
        <BlockText v-if="text" class="lg:mb-0 mb-5" :text="text" />
      </div>
    </div>
    <div
      class="col-span-6"
      :class="
        alignment === 'right' ? 'col-start-7 order-2' : 'col-start-2 order-1'
      "
    >
      <div class="justify-items-center relative block">
        <BaseImagePlaceholder aspect-ratio="1:1" dark-mode>
          <BaseImage
            v-if="image && image.src"
            :src="image.src.url"
            :srcset="theSrcSet"
            :width="image.src.width"
            :height="image.src.height"
            alt=""
            object-fit-class="cover"
            loading="lazy"
          />
        </BaseImagePlaceholder>
        <BaseImageCaption class="lg:mt-3 mt-2" :data="image" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetSrcSet } from '../../utils/mixins'
import BlockText from './../BlockText/BlockText.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export default defineComponent({
  name: 'MissionDetailInlineImage',
  components: {
    BlockText,
    BaseImagePlaceholder,
    BaseImage,
    BaseImageCaption,
  },
  props: {
    alignment: {
      type: String,
      required: false,
      default: 'right',
    },
    text: {
      type: String,
      required: false,
    },
    image: {
      type: Object,
      required: false,
    },
  },
  computed: {
    theSrcSet() {
      if (this.image) {
        return mixinGetSrcSet(this.image) 
      }
      return undefined
    }
  },
})
</script>

<style lang="scss">
.MissionDetailInlineImage {
  .ThemeVariantDark & {
    > div {
      @apply text-white;
    }
  }
}
</style>
