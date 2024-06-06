<template>
  <div
    v-if="data"
    class="BlockVideo"
  >
    <BaseVideo
      :data="data.video"
      :autoplay="autoplay"
    />

    <div
      v-if="(data.caption && data.caption.length > 2) || data.credit"
      class="lg:px-0 p-4 pb-0"
    >
      <BaseImageCaption :data="data" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BaseVideo from './../BaseVideo/BaseVideo.vue'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'

export default defineComponent({
  name: 'BlockVideo',
  components: {
    BaseVideo,
    BaseImageCaption
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
