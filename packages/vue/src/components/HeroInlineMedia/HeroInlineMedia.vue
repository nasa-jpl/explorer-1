<script setup lang="ts">
import { reactive } from 'vue'
import BlockVideoEmbed, { type BlockVideoEmbedData } from './../BlockVideoEmbed/BlockVideoEmbed.vue'
import BlockIframeEmbed, {
  type BlockIframeEmbedData
} from './../BlockIframeEmbed/BlockIframeEmbed.vue'
import BlockImageComparison, {
  type BlockImageComparisonData
} from './../BlockImageComparison/BlockImageComparison.vue'
import BlockImageCarousel from './../BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageStandard from './../BlockImage/BlockImageStandard.vue'
import BlockVideo, { type BlockVideoData } from './../BlockVideo/BlockVideo.vue'
import type { StreamfieldBlockData } from './../../interfaces'

export interface HeroInlineMediaProps {
  heroBlocks: StreamfieldBlockData[]
  constrain?: boolean
}

const props = withDefaults(defineProps<HeroInlineMediaProps>(), {
  heroBlocks: undefined,
  constrain: false
})

const { heroBlocks, constrain } = reactive(props)
</script>
<template>
  <div v-if="heroBlocks?.length">
    <BlockImageStandard
      v-if="heroBlocks[0].blockType === 'HeroImageBlock'"
      :data="heroBlocks[0].imageInline"
      :display-caption="heroBlocks[0].displayCaption"
      :caption="heroBlocks[0].caption"
      :constrain="constrain"
    />
    <BlockImageCarousel
      v-else-if="heroBlocks[0].blockType === 'CarouselBlock'"
      :items="heroBlocks[0].blocks"
      :block-id="heroBlocks[0].id"
    />
    <BlockIframeEmbed
      v-else-if="heroBlocks[0].blockType === 'IframeEmbedBlock'"
      :data="heroBlocks[0] as BlockIframeEmbedData"
    />
    <BlockVideo
      v-else-if="heroBlocks[0].blockType === 'VideoBlock'"
      :data="heroBlocks[0] as BlockVideoData"
    />
    <BlockVideoEmbed
      v-else-if="heroBlocks[0].blockType === 'VideoEmbedBlock'"
      :data="heroBlocks[0] as BlockVideoEmbedData"
    />
    <BlockImageComparison
      v-else-if="heroBlocks[0].blockType === 'ImageComparisonBlock'"
      :data="heroBlocks[0] as BlockImageComparisonData"
    />
  </div>
</template>
