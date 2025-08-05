<template>
  <div
    v-if="data"
    class="BaseVideo"
  >
    <BaseImagePlaceholder
      aspect-ratio="16:9"
      dark-mode
    >
      <video
        :width="data.width"
        :height="data.height"
        :loop="autoplay"
        :muted="autoplay"
        :playsinline="autoplay"
        :autoplay="autoplay"
        controls
      >
        <template v-if="data.fileWebm">
          <source
            :src="data.fileWebm"
            type="video/webm"
          />
        </template>
        <template v-if="data.file">
          <source
            :src="data.file"
            type="video/mp4"
          />
        </template>
        <template v-if="data.fileOgg">
          <source
            :src="data.fileOgg"
            type="video/ogg"
          />
        </template>
        <p>Your browser cannot play the provided video file(s).</p>
      </video>
    </BaseImagePlaceholder>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'

export default defineComponent({
  name: 'BaseVideo',
  components: {
    BaseImagePlaceholder
  },
  props: {
    data: {
      type: Object,
      required: false
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<style lang="scss">
@import '@explorer-1/common/src/scss/components/BaseVideo';
</style>
