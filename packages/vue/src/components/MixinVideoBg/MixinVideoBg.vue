<template>
  <video
    v-if="video && video.file"
    loop
    muted
    playsinline
    autoplay
    controls
    preload="auto"
    class="object-cover w-full h-full"
    data-chromatic="ignore"
  >
    <source
      v-if="video.fileWebm"
      :src="video.fileWebm"
      type="video/webm"
    />
    <source
      :src="video.file"
      type="video/mp4"
    />
    <source
      v-if="video.fileOgg"
      :src="video.fileOgg"
      type="video/ogg"
    />
  </video>
</template>
<script lang="ts">
/** This mix-in loops a muted video. */
import { defineComponent, type PropType } from 'vue'
import type { VideoObject } from './../../interfaces.ts'
export default defineComponent({
  name: 'MixinVideoBg',
  props: {
    video: {
      type: Object as PropType<VideoObject>,
      default: undefined
    }
  }
})
</script>
