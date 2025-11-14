<template>
  <div
    v-if="data"
    class="BlockVideo"
  >
    <BaseVideo
      :data="data.video"
      :autoplay="data.autoplay"
    />

    <div
      v-if="hasCaption"
      class="caption-area lg:px-0 p-4 pb-0 print:pl-0"
    >
      <BaseImageCaption
        :data="data"
        :custom-link="customDetailUrl"
        custom-link-text="Full Video Details"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { mapStores } from 'pinia'
import type { BlockData, VideoObject } from './../../interfaces.ts'
import { useThemeStore } from '../../store/theme'
import BaseVideo from './../BaseVideo/BaseVideo.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export type BlockVideoData = BlockData & {
  video: VideoObject
  autoplay: boolean
  caption: string
  credit: string
}
export default defineComponent({
  name: 'BlockVideo',
  components: {
    BaseVideo,
    BaseImageCaption
  },
  props: {
    /** BlockData is used to render an HTML5 video element */
    data: {
      type: Object as PropType<BlockVideoData>,
      required: false,
      default: undefined
    },
    /** If the video should autoplay */
    autoplay: {
      type: Boolean,
      default: false
    },
    /** Adds a link. Link text defaults to "Full Video Details" */
    customDetailUrl: {
      type: String,
      default: undefined
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    hasCaption() {
      if (this.themeStore.isEdu) {
        return this.data?.caption || this.customDetailUrl
      } else {
        return this.data?.caption || this.data?.credit || this.customDetailUrl
      }
    }
  }
})
</script>
