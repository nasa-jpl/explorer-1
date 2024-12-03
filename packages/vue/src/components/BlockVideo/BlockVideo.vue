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
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
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
    },
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
