<template>
  <div class="BlockAudio">
    <LayoutHelper
      v-if="data"
      indent="col-2"
    >
      <div
        class="bg-gray-dark flex flex-row justify-start w-full max-h-48 bg-gradient-to-b lg:bg-gradient-to-l from-transparent lg:from-transparent-w50 to-black lg:to-transparent-black-75"
      >
        <BaseImagePlaceholder
          v-if="data.thumbnailImage && data.thumbnailImage.src"
          class="w-16 sm:w-24 lg:w-48 flex-shrink-0 BlockAudio-thumbnail"
          aspect-ratio="1:1"
        >
          <BaseImage
            object-fit-class="cover"
            :src="data.thumbnailImage.src.url"
            :width="data.thumbnailImage.src.width"
            :height="data.thumbnailImage.src.height"
            :alt="data.thumbnailImage.alt"
          />
        </BaseImagePlaceholder>

        <div
          v-if="data.uploadedMedia"
          class="mr-auto w-full flex flex-col pt-2.5 px-3.5 sm:px-5 justify-center"
        >
          <BaseAudio :file="data.uploadedMedia.file" />
        </div>
        <!-- <audio controls>
          <template v-if="data.fileOgg">
            <source :src="data.fileOgg" type="audio/ogg" />
          </template>
          <template v-if="data.file">
            <source :src="data.file" type="audio/mpeg" />
          </template>
          <p>Your browser cannot play the provided audio file(s).</p>
        </audio> -->
      </div>
    </LayoutHelper>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { BlockData } from './../../interfaces.ts'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'
import BaseImage from './../BaseImage/BaseImage.vue'
import BaseAudio from './../BaseAudio/BaseAudio.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'

export default defineComponent({
  name: 'BlockAudio',
  components: {
    BaseAudio,
    LayoutHelper,
    BaseImage,
    BaseImagePlaceholder
  },
  props: {
    data: {
      type: Object as PropType<BlockData>,
      required: false
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BlockAudio';
</style>
