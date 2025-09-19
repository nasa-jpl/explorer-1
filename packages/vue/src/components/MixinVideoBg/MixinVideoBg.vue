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
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MixinVideoBg',
  props: {
    video: {
      type: Object,
      default: undefined
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  }
})
</script>
