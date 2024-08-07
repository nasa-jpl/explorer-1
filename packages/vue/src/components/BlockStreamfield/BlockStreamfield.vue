<template>
  <div
    v-if="data"
    class="BlockStreamfield"
    :class="layoutClass"
  >
    <template v-for="(block, index) in data">
      <LayoutHelper
        v-if="block.blockType == 'HeadingBlock'"
        :key="`headingBlock${index}`"
        indent="col-3"
        class="mb-5"
      >
        <BlockHeading
          :data="block"
          :index="index"
          generate-id
        />
      </LayoutHelper>

      <!-- custom margin bottom that matches BlockText styles if followed by InlineImageBlock -->
      <LayoutHelper
        v-else-if="block.blockType == 'RichTextBlock'"
        :key="`richText${index}`"
        indent="col-3"
        :class="seamlessText(index) ? 'lg:mb-8 mb-5' : 'lg:mb-18 mb-10'"
      >
        <BlockText :text="block.value" />
      </LayoutHelper>

      <!-- custom margin bottom that matches BlockText styles if followed by RichTextBlock -->
      <BlockInlineImage
        v-else-if="block.blockType == 'InlineImageBlock'"
        :key="`inlineImageBlock${index}`"
        :class="seamlessText(index) ? 'lg:mb-8 mb-5' : 'lg:mb-18 mb-10'"
        :data="block"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'ListBlock' && block.field === 'content_card_list'"
        :key="`listBlock${index}`"
        indent="col-3"
        class="lg:mb-18 mb-10"
      >
        <BlockListCards :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'KeyPointBlock'"
        :key="`keyPointBlock${index}`"
        indent="col-3"
        class="lg:mb-18 mb-10"
      >
        <BlockKeyPoints :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'QuoteBlock'"
        :key="`quoteBlock${index}`"
        indent="col-4"
        class="lg:mb-18 mb-10"
      >
        <BlockQuote :data="block as unknown as BlockQuoteAttributes" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'CTABlock'"
        :key="`ctaBlock${index}`"
        indent="col-4"
        class="lg:mb-18 mb-10"
      >
        <BlockCta :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'TeaserBlock'"
        :key="`teaserBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockTeaser
          :custom-label="block.customLabel"
          :heading="block.heading"
          :introduction="block.introduction"
          :button-text="block.buttonText"
          :image="block.image"
          :full-width="block.fullWidthImage"
          :teaser-page="block.teaserPage"
        />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'CarouselBlock'"
        :key="`carouselBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockImageCarousel
          :items="block.blocks"
          :block-id="block.id"
        />
      </LayoutHelper>

      <div
        v-else-if="block.blockType == 'ImageGalleryBlock'"
        :key="`imageGalleryBlock${index}`"
        class="max-w-screen-3xl lg:mb-18 mx-auto mb-10"
      >
        <BlockImageGallery
          :title="block.galleryTitle"
          :description="block.galleryDescription"
          :cover="block.coverImage"
          :items="block.gallerySlides"
          :block-id="block.id"
        />
      </div>

      <LayoutHelper
        v-else-if="block.blockType == 'VideoBlock'"
        :key="`videoBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockVideo :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'VideoEmbedBlock'"
        :key="`videoEmbedBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockVideoEmbed :data="block as unknown as VideoBlockEmbedData" />
      </LayoutHelper>

      <BlockImage
        v-else-if="block.blockType == 'FullBleedImageBlock'"
        :key="`fullBleedImageBlock${index}`"
        class="lg:mb-18 mb-10"
        :data="block"
        :full-bleed="block.fullBleed"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'ImageComparisonBlock'"
        :key="`imageComparisonBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockImageComparison :data="block" />
      </LayoutHelper>

      <BlockTwitterEmbed
        v-else-if="block.blockType == 'TwitterEmbedBlock'"
        :key="`twitterEmbedBlock${index}`"
        class="lg:mb-18 mb-10"
        :data="block"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'IframeEmbedBlock'"
        :key="`iframeEmbedBlock${index}`"
        indent="col-2"
        class="lg:mb-18 mb-10"
      >
        <BlockIframeEmbed :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'TableBlock'"
        :key="`tableBlock${index}`"
        indent="col-3"
        class="lg:mb-18 mb-10"
      >
        <BlockTable :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'RelatedLinksBlock'"
        :key="`relatedLinksBlock${index}`"
        indent="col-3"
        class="lg:mb-18 mb-10"
      >
        <BlockRelatedLinks :data="block as any as BlockRelatedLinksObject" />
      </LayoutHelper>

      <BlockAnchor
        v-else-if="block.blockType == 'AnchorBlock'"
        :key="`anchorBlock${index}`"
        :data="block"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'ListBlock' && block.field === 'card_grid'"
        :key="`gridBlock${index}`"
        indent="col-1"
        class="lg:mb-18 mb-10"
      >
        <BlockCardGrid :cards="block.items" />
      </LayoutHelper>

      <div
        v-else
        :key="index"
        class="lg:mb-18 p-3 mb-10 overflow-hidden border"
      >
        <pre>{{ block }}</pre>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { BlockData, ImageObject } from '../../interfaces'
import type { BlockData as VideoBlockEmbedData } from './../BlockVideoEmbed/BlockVideoEmbed.vue'
import type { BlockQuoteAttributes } from './../BlockQuote/BlockQuote.vue'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BlockCardGrid from './../BlockCardGrid/BlockCardGrid.vue'
import BlockCta from './../BlockCta/BlockCta.vue'
import BlockHeading from './../BlockHeading/BlockHeading.vue'
import BlockImage from './../BlockImage/BlockImage.vue'
import BlockImageCarousel from './../BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageComparison from './../BlockImageComparison/BlockImageComparison.vue'
import BlockImageGallery from './../BlockImageGallery/BlockImageGallery.vue'
import BlockInlineImage from './../BlockInlineImage/BlockInlineImage.vue'
import BlockKeyPoints from './../BlockKeyPoints/BlockKeyPoints.vue'
import BlockListCards from './../BlockListCards/BlockListCards.vue'
import BlockQuote from './../BlockQuote/BlockQuote.vue'
import BlockRelatedLinks, {
  type BlockRelatedLinksObject
} from './../BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockTable from './../BlockTable/BlockTable.vue'
import BlockTeaser from './../BlockTeaser/BlockTeaser.vue'
import BlockText from './../BlockText/BlockText.vue'
import BlockTwitterEmbed from './../BlockTwitterEmbed/BlockTwitterEmbed.vue'
import BlockIframeEmbed from './../BlockIframeEmbed/BlockIframeEmbed.vue'
import BlockVideo from './../BlockVideo/BlockVideo.vue'
import BlockVideoEmbed from './../BlockVideoEmbed/BlockVideoEmbed.vue'
import BlockAnchor from './../BlockAnchor/BlockAnchor.vue'
interface Variants {
  [name: string]: string
}

export const variants: Variants = {
  default: '',
  fluid: '-fluid'
}

export interface StreamfieldBlockData extends BlockData {
  id: string
  fullBleed: boolean
  heading: string
  galleryTitle: string
  galleryDescription: string
  coverImage: ImageObject
  gallerySlides: ImageObject[]
  blocks: object[]
  value: string
  customLabel: string
  introduction: string
  teaserPage: object | string[]
  image: ImageObject
  buttonText: string
  fullWidthImage: boolean
}

export default defineComponent({
  name: 'BlockStreamfield',
  components: {
    LayoutHelper,
    BlockCardGrid,
    BlockCta,
    BlockHeading,
    BlockImage,
    BlockImageCarousel,
    BlockImageComparison,
    BlockImageGallery,
    BlockInlineImage,
    BlockKeyPoints,
    BlockListCards,
    BlockQuote,
    BlockRelatedLinks,
    BlockTable,
    BlockTeaser,
    BlockText,
    BlockTwitterEmbed,
    BlockIframeEmbed,
    BlockVideo,
    BlockVideoEmbed,
    BlockAnchor
  },
  props: {
    variant: {
      type: String,
      required: false,
      default: 'default',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    data: {
      type: Array as PropType<StreamfieldBlockData[]>,
      required: false
    }
  },
  computed: {
    layoutClass(): string {
      return variants[this.variant]
    }
  },
  methods: {
    // use with BlockText or BlockInlineImage to determine their bottom margin
    // this is to make text appear continuous between the two.
    seamlessText(index: number): boolean {
      const nextIndex = index + 1
      if (this.data && this.data[nextIndex]) {
        const nextBlock = this.data[nextIndex] as StreamfieldBlockData
        const nextBlockType = nextBlock.blockType
        if (nextBlockType === 'InlineImageBlock' || nextBlockType === 'RichTextBlock') {
          return true
        }
      }
      return false
    }
  }
})
</script>
<style lang="scss">
.BlockStreamfield {
  // makes everything appear equal width
  &.-fluid {
    .LayoutHelper {
      @apply block;
      &.container {
        @apply px-0;
      }
    }

    .BlockInlineImage {
      .col-start-3 {
        @apply col-start-1 col-span-7;
      }

      .col-start-6.col-span-5 {
        @apply col-span-7;
      }
    }
  }
}
</style>
