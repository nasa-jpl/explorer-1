<template>
  <div
    v-if="data && data.image"
    class="relative h-auto"
  >
    <div class="bg-jpl-red absolute bottom-0 right-0 z-10 text-white">
      <Icon360 />
    </div>

    <BaseImagePlaceholder
      aspect-ratio="16:9"
      dark-mode
    >
      <BaseImage
        v-if="data.image.src"
        :src="data.image.src.url"
        :srcset="theSrcSet"
        alt=""
        :width="data.image.src.width"
        :height="data.image.src.height"
        object-fit-class="cover"
        loading="lazy"
      />
    </BaseImagePlaceholder>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mixinGetSrcSet } from '../../utils/mixins'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import Icon360 from './../Icons/Icon360.vue'

export default defineComponent({
  name: 'HomepageTeaserBlockCardImage',
  components: {
    BaseImagePlaceholder,
    BaseImage,
    Icon360
  },
  props: {
    data: {
      type: Object,
      required: false
    }
  },
  computed: {
    theSrcSet() {
      return this.data?.image
        ? mixinGetSrcSet(this.data.image)
          ? mixinGetSrcSet(this.data.image)
          : this.data.image.srcSet
        : undefined
    }
  }
})
</script>
