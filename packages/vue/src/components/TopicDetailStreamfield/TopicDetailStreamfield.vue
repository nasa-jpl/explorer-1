<template>
  <div v-if="data">
    <template v-for="(block, index) in data">
      <LayoutHelper
        v-if="block.blockType == 'HeadingBlock'"
        :key="`HeadingBlock${index}`"
        indent="col-2"
      >
        <BaseHeading level="h2" class="lg:mt-18 mt-10 mb-5">
          {{ block.heading }}
        </BaseHeading>
      </LayoutHelper>
      <div
        v-else-if="block.blockType == 'ImageGalleryBlock'"
        :key="`ImageGalleryBlock${index}`"
        class="max-w-screen-3xl lg:mb-18 mx-auto mb-10"
      >
        <BlockImageGallery
          :label="topic"
          :title="block.galleryTitle"
          :description="block.galleryDescription"
          :cover="block.coverImage"
          :items="block.gallerySlides"
        />
      </div>

      <LayoutHelper
        v-else-if="block.blockType == 'QuoteBlock'"
        :key="`QuoteBlock${index}`"
        indent="col-2"
        class="lg:my-18 my-10"
      >
        <BlockQuote :data="(block as unknown) as BlockQuoteAttributes" />
      </LayoutHelper>
      <LayoutHelper
        v-else-if="block.blockType == 'RelatedLinksBlock'"
        :key="`RelatedLinksBlock${index}`"
        indent="col-2"
        class="lg:my-18 my-10"
      >
        <BlockRelatedLinks :data="block" />
      </LayoutHelper>

      <div v-else :key="index" class="p-3 overflow-hidden border">
        <pre>{{ block }}</pre>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { ImageObject } from '../../interfaces'
import type { BlockQuoteAttributes } from './../BlockQuote/BlockQuote.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BaseHeading from './../BaseHeading/BaseHeading.vue'
import BlockQuote from './../BlockQuote/BlockQuote.vue'
import BlockRelatedLinks from './../BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockImageGallery from './../BlockImageGallery/BlockImageGallery.vue'

interface BlockData {
  blockType: string
  heading: string
  galleryTitle: string
  galleryDescription: string
  coverImage: ImageObject
  gallerySlides: ImageObject[]
}
export default defineComponent({
  name: 'TopicDetailStreamfield',
  components: {
    LayoutHelper,
    BaseHeading,
    BlockQuote,
    BlockRelatedLinks,
    BlockImageGallery,
  },
  props: {
    data: {
      type: Array as PropType<BlockData[]>,
      required: false,
    },
    topic: {
      type: String,
      required: false,
    },
  },
})
</script>
