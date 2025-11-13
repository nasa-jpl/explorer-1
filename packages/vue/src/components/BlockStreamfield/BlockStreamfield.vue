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
          :data="block as BlockHeadingObject"
          :index="index"
          generate-id
        />
      </LayoutHelper>

      <!-- custom margin bottom that matches BlockText styles if followed by InlineImageBlock -->
      <LayoutHelper
        v-else-if="block.blockType == 'RichTextBlock'"
        :key="`richText${index}`"
        indent="col-3"
        :class="seamlessText(index) ? 'lg:mb-8 mb-5' : marginBottom"
      >
        <BlockText
          :text="block.value"
          :variant="size"
        />
      </LayoutHelper>

      <!-- custom margin bottom that matches BlockText styles if followed by RichTextBlock -->
      <BlockInlineImage
        v-else-if="block.blockType == 'InlineImageBlock'"
        :key="`inlineImageBlock${index}`"
        :class="seamlessText(index) ? 'lg:mb-8 mb-5' : marginBottom"
        :data="block"
        :variant="size"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'ListBlock' && block.field === 'content_card_list'"
        :key="`listBlock${index}`"
        indent="col-3"
        :class="marginBottom"
      >
        <BlockListCards :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'KeyPointBlock'"
        :key="`keyPointBlock${index}`"
        indent="col-3"
        :class="marginBottom"
      >
        <BlockKeyPoints :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'QuoteBlock'"
        :key="`quoteBlock${index}`"
        indent="col-4"
        :class="marginBottom"
      >
        <BlockQuote :data="block as unknown as BlockQuoteAttributes" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'CTABlock'"
        :key="`ctaBlock${index}`"
        indent="col-4"
        :class="marginBottom"
      >
        <BlockCta :data="block" />
      </LayoutHelper>
      <LayoutHelper
        v-else-if="block.blockType == 'NewsletterSignupBlock'"
        :key="`newsletterSignupBlock${index}`"
        indent="col-4"
        :class="marginBottom"
      >
        <BlockNewsletterSignup :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'TeaserBlock'"
        :key="`teaserBlock${index}`"
        indent="col-2"
        :class="marginBottom"
      >
        <BlockTeaser
          :label="block.customLabel"
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
        :class="marginBottom"
      >
        <BlockImageCarousel
          :items="block.blocks"
          :block-id="block.id"
        />
      </LayoutHelper>

      <div
        v-else-if="block.blockType == 'ImageGalleryBlock'"
        :key="`imageGalleryBlock${index}`"
        class="max-w-screen-3xl mx-auto"
        :class="marginBottom"
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
        :class="marginBottom"
      >
        <BlockVideo :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'VideoEmbedBlock'"
        :key="`videoEmbedBlock${index}`"
        indent="col-2"
        :class="marginBottom"
      >
        <BlockVideoEmbed :data="block as unknown as VideoBlockEmbedData" />
      </LayoutHelper>

      <BlockImage
        v-else-if="block.blockType == 'FullBleedImageBlock'"
        :key="`fullBleedImageBlock${index}`"
        :class="marginBottom"
        :data="block"
        :full-bleed="block.fullBleed"
      />

      <LayoutHelper
        v-else-if="block.blockType == 'ImageComparisonBlock'"
        :key="`imageComparisonBlock${index}`"
        indent="col-2"
        :class="marginBottom"
      >
        <BlockImageComparison :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'IframeEmbedBlock'"
        :key="`iframeEmbedBlock${index}`"
        indent="col-2"
        :class="marginBottom"
      >
        <BlockIframeEmbed :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'GitHubGistBlock'"
        :key="`GitHubGistBlock${index}`"
        indent="col-3"
        :class="marginBottom"
      >
        <BlockGist :data="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'RichTableBlock'"
        :key="`richTableBlock${index}`"
        :indent="themeStore.isEdu ? 'col-2' : 'col-3'"
        class="lg:mb-18 mb-10"
      >
        <BlockRichTable :table="block" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'RelatedLinksBlock'"
        :key="`relatedLinksBlock${index}`"
        indent="col-3"
        :class="marginBottom"
      >
        <BlockRelatedLinks :data="block as any as BlockRelatedLinksObject" />
      </LayoutHelper>

      <BlockAnchor
        v-else-if="block.blockType == 'AnchorBlock'"
        :key="`anchorBlock${index}`"
        :data="block"
      />

      <div
        v-else-if="block.blockType == 'ListBlock' && block.field === 'card_grid'"
        :key="`cardGridBlock${index}`"
        class="LayoutHelper md:BaseGrid md:container md:mx-auto"
        :class="marginBottom"
      >
        <div class="lg:col-start-2 lg:col-end-12 md:col-span-full md:px-4 px-0 relative">
          <BlockCardGrid :cards="block.items" />
        </div>
      </div>

      <div
        v-else-if="block.blockType === 'LinkCarouselBlock' && block.blocks?.length"
        :key="`linkCarouselBlock${index}`"
        :class="marginBottom"
      >
        <BlockLinkCarousel :items="block.blocks" />
      </div>

      <LayoutHelper
        v-else-if="block.blockType === 'LinkCardListBlock' && block.blocks?.length"
        :key="`linkCardListBlock${index}`"
        indent="col-2"
        :class="marginBottom"
      >
        <BlockLinkCardList :items="block.blocks" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'AccordionBlock'"
        :key="`accordionBlock${index}`"
        indent="col-3"
        :class="marginBottom"
      >
        <BlockAccordion :data="block as unknown as AccordionBlockObject" />
      </LayoutHelper>

      <LayoutHelper
        v-else-if="block.blockType == 'CsrTableBlock'"
        :key="`csrTableBlock${index}`"
        indent="col-1"
        :class="marginBottom"
      >
        <BlockCsrTable
          :row-data="block.rowData"
          :attachment-prefix="block.attachmentPrefix"
          :api-endpoint="block.apiEndpoint"
        />
      </LayoutHelper>

      <div
        v-else
        :key="index"
        class="p-3 overflow-hidden border"
        :class="marginBottom"
      >
        <pre>{{ block }}</pre>
      </div>
    </template>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { StreamfieldBlockData } from '../../interfaces'
import LayoutHelper from './../LayoutHelper/LayoutHelper.vue'
import BlockAnchor from './../BlockAnchor/BlockAnchor.vue'
import BlockAccordion, { type AccordionBlockObject } from './../BlockAccordion/BlockAccordion.vue'
import BlockCardGrid from './../BlockCardGrid/BlockCardGrid.vue'
import BlockCta from './../BlockCta/BlockCta.vue'
import BlockHeading, { BlockHeadingObject } from './../BlockHeading/BlockHeading.vue'
import BlockImage from './../BlockImage/BlockImage.vue'
import BlockImageCarousel from './../BlockImageCarousel/BlockImageCarousel.vue'
import BlockImageComparison from './../BlockImageComparison/BlockImageComparison.vue'
import BlockImageGallery from './../BlockImageGallery/BlockImageGallery.vue'
import BlockInlineImage from './../BlockInlineImage/BlockInlineImage.vue'
import BlockKeyPoints from './../BlockKeyPoints/BlockKeyPoints.vue'
import BlockLinkCardList from './../BlockLinkCardList/BlockLinkCardList.vue'
import BlockLinkCarousel from './../BlockLinkCarousel/BlockLinkCarousel.vue'
import BlockListCards from './../BlockListCards/BlockListCards.vue'
import BlockQuote, { type BlockQuoteAttributes } from './../BlockQuote/BlockQuote.vue'
import BlockRelatedLinks, {
  type BlockRelatedLinksObject
} from './../BlockRelatedLinks/BlockRelatedLinks.vue'
import BlockRichTable from './../BlockRichTable/BlockRichTable.vue'
import BlockTeaser from './../BlockTeaser/BlockTeaser.vue'
import BlockText from './../BlockText/BlockText.vue'
import BlockIframeEmbed from './../BlockIframeEmbed/BlockIframeEmbed.vue'
import BlockGist from './../BlockGist/BlockGist.vue'
import BlockVideo from './../BlockVideo/BlockVideo.vue'
import BlockVideoEmbed, {
  type BlockData as VideoBlockEmbedData
} from './../BlockVideoEmbed/BlockVideoEmbed.vue'
import BlockNewsletterSignup from '../BlockNewsletterSignup/BlockNewsletterSignup.vue'
import BlockCsrTable from '../BlockCsrTable/BlockCsrTable.vue'
import { mapStores } from 'pinia'
import { useThemeStore } from '../../store/theme'
import { type VariantKey as BlockTextVariantKey } from './../BlockText/BlockText.vue'

export const variants = {
  default: '',
  fluid: '-fluid'
}
type VariantsKey = keyof typeof variants

export default defineComponent({
  name: 'BlockStreamfield',
  components: {
    LayoutHelper,
    BlockAnchor,
    BlockAccordion,
    BlockCardGrid,
    BlockCta,
    BlockHeading,
    BlockImage,
    BlockImageCarousel,
    BlockImageComparison,
    BlockImageGallery,
    BlockInlineImage,
    BlockKeyPoints,
    BlockLinkCardList,
    BlockLinkCarousel,
    BlockListCards,
    BlockQuote,
    BlockRelatedLinks,
    BlockRichTable,
    BlockTeaser,
    BlockText,
    BlockIframeEmbed,
    BlockGist,
    BlockVideo,
    BlockVideoEmbed,
    BlockNewsletterSignup,
    BlockCsrTable
  },
  props: {
    /** Changes behavior of width. Fluid width: all block widths will match that of the container. Otherwise they will conform to preset widths. */
    variant: {
      type: String as PropType<VariantsKey>,
      required: false,
      default: 'default',
      validator: (prop: string): boolean => Object.keys(variants).includes(prop)
    },
    /** Text size. Corresponds to available variants of `BlockText` */
    size: {
      type: String as PropType<BlockTextVariantKey>,
      default: 'large'
    },
    data: {
      type: Array as PropType<StreamfieldBlockData[]>,
      required: false,
      default: undefined
    }
  },
  computed: {
    ...mapStores(useThemeStore),
    layoutClass(): string {
      return variants[this.variant]
    },
    marginBottom() {
      let margin = 'lg:mb-10 mb-6'
      if (this.size === 'large') {
        margin = 'lg:mb-18 mb-10'
      }
      return margin
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
@import '@explorer-1/common/src/scss/components/BlockStreamfield';
</style>
