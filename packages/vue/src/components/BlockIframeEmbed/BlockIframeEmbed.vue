<template>
  <div v-if="data?.url">
    <template v-if="data.height">
      <iframe
        v-if="data.url"
        ref="BlockIframeEmbed"
        loading="lazy"
        class="w-full border-none print:!border print:border-gray-dark"
        :title="data.title"
        :src="data.url"
        width="90%"
        :height="data.height"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </template>
    <template v-else>
      <BaseImagePlaceholder
        v-if="data.url"
        class="print:border print:border-gray-dark"
        aspect-ratio="16:9"
        no-logo
        :dark-mode="!themeStore.isEdu"
      >
        <div>
          <iframe
            ref="BlockIframeEmbed"
            loading="lazy"
            class="w-full border-none"
            :title="data.title"
            :src="data.url"
            data-chromatic="ignore"
            width="90%"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </BaseImagePlaceholder>
    </template>
    <div
      v-if="data.caption && data.caption.length > 2"
      class="caption-area lg:px-0 p-4 pb-0 print:pl-0"
    >
      <BaseImageCaption :data="data" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import BaseImageCaption from './../BaseImageCaption/BaseImageCaption.vue'
import BaseImagePlaceholder from './../BaseImagePlaceholder/BaseImagePlaceholder.vue'

export default defineComponent({
  name: 'BlockIframeEmbed',
  components: { BaseImageCaption, BaseImagePlaceholder },
  props: {
    data: {
      type: Object,
      default: undefined
    }
  },
  computed: {
    ...mapStores(useThemeStore)
  }
})
</script>
