<template>
  <div
    v-if="data"
    class="max-w-screen-3xl mx-auto"
    :class="{ '-nav-offset': data.featured }"
  >
    <HeroMedium
      v-if="data.featured"
      class="md:mb-12 lg:mb-18 mb-10"
      :custom-label="customLabel"
      :feature="data.featured"
      :custom-video="customVideo"
      :custom-image="customImage"
      :cta="cta"
    />  <h1 class="text-h1">{{ data?.title }}</h1>

  </div>
</template>
<script lang="ts">
// PageListingIndex
// Creating a wrapper for HeroMedium as PageListingIndex
// needs to parse several different data shapes
// Parsing occurs in the computed data and returns the appropriate data object for the media if it exists
import { defineComponent } from 'vue'
import HeroMedium from '../components/HeroMedium/HeroMedium.vue'

export default defineComponent({
  name: 'PageListingIndex',
  components: {
    HeroMedium
  },
  props: {
    // pass these directly to HeroMedium
    data: {
      type: Object,
      required: false
    },
    customLabel: {
      type: String,
      required: false
    },
    cta: {
      type: String,
      default: 'Read Article'
    }
  },
  computed: {
    // parses a hero streamfield block for a video (newsDetailPage model)
    customVideo(): object | undefined {
      if (this.data && this.data.featured?.heroBlocks?.length > 0) {
        if (this.data.featured.heroBlocks[0].blockType === 'VideoBlock') {
          return this.data.featured.heroBlocks[0].video
        }
      }
      return undefined
    },
    customImage(): object | undefined {
      // parse hero streamfield block for the first usable image (newsDetailPage model)
      if (this.data && this.data.featured?.heroBlocks?.length > 0) {
        const block = this.data.featured.heroBlocks[0]
        if (block.blockType === 'ImageChooserBlock' || block.blockType === 'HeroImageBlock') {
          return block.image
        } else if (block.blockType === 'CarouselBlock') {
          // use the first image in the carousel
          if (block.blocks && block.blocks.length > 0) {
            return block.blocks[0].image
          }
        }
      }
      // else use heroImage
      else if (this.data?.featured?.heroImage) {
        return this.data.featured.heroImage
      }
      return undefined
    }
  }
})
</script>
