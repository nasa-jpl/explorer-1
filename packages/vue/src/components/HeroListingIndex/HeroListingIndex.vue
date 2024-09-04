<template>
  <div
    v-if="pageData"
    class="HeroListingIndex max-w-screen-3xl mx-auto"
    :class="{ '-nav-offset': pageData }"
  >
    <HeroMedium
      v-if="pageData"
      class="md:mb-12 lg:mb-18 mb-10"
      :custom-pill="themeStore.theme === 'ThemeEdu' && customLabel ? customLabel : undefined"
      :custom-pill-type="
        themeStore.theme === 'ThemeEdu' && pageData.__typename ? pageData.__typename : undefined
      "
      :custom-label="themeStore.theme === 'ThemeEdu' ? pageData.topicLabel : customLabel"
      :feature="pageData"
      :custom-video="customVideo"
      :custom-image="customImage"
      :cta="cta"
    />
  </div>
</template>
<script lang="ts">
// HeroListingIndex
// Creating a wrapper for HeroMedium as HeroListingIndex needs to parse several different data shapes.
// Parsing occurs in the computed data and returns the appropriate data object for the media if it exists.
import { defineComponent } from 'vue'
import { useThemeStore } from '../../store/theme'
import { mapStores } from 'pinia'
import HeroMedium from '../HeroMedium/HeroMedium.vue'

export default defineComponent({
  name: 'HeroListingIndex',
  components: {
    HeroMedium
  },
  props: {
    // pass these directly to HeroMedium
    pageData: {
      type: Object,
      default: undefined
    },
    customLabel: {
      type: String,
      default: undefined
    },
    cta: {
      type: String,
      default: 'Read Article'
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    // parses a hero streamfield block for a video (newsDetailPage model)
    customVideo(): object | undefined {
      if (this.pageData && this.pageData?.heroBlocks?.length > 0) {
        if (this.pageData.heroBlocks[0].blockType === 'VideoBlock') {
          return this.pageData.heroBlocks[0].video
        }
      }
      return undefined
    },
    customImage(): object | undefined {
      // parse hero streamfield block for the first usable image (newsDetailPage model)
      if (this.pageData?.heroBlocks?.length > 0) {
        const block = this.pageData?.heroBlocks[0]
        if (block.blockType === 'ImageChooserBlock' || block.blockType === 'HeroImageBlock') {
          return block.listingPageHeroImage
        } else if (block.blockType === 'CarouselBlock') {
          // use the first image in the carousel
          if (block.blocks && block.blocks.length > 0) {
            return block.blocks[0].listingPageHeroImage
          }
        }
      }
      // else use heroImage
      else if (this.pageData?.listingPageHeroImage) {
        return this.pageData.listingPageHeroImage
      }
      return undefined
    }
  }
})
</script>
