import { BlockCtaData } from './BlockCta.stories'
import { BlockHeadingData } from './BlockHeading.stories'
import { BlockImageCarouselData } from './BlockImageCarousel.stories'
import { BlockImageComparisonData } from './BlockImageComparison.stories'
import { BlockImageData } from './BlockImage.stories'
import { BlockImageGalleryData } from './BlockImageGallery.stories'
import { BlockInlineImageData } from './BlockInlineImage.stories'
import { BlockKeyPointsData } from './BlockKeyPoints.stories'
import { BlockListCardsData } from './BlockListCards.stories'
import { BlockQuoteData } from './BlockQuote.stories'
import { BlockRelatedLinksData } from './BlockRelatedLinks.stories'
import { BlockTableData } from './BlockTable.stories'
import { BlockTeaserData } from './BlockTeaser.stories'
import { BlockTwitterEmbedData } from './BlockTwitterEmbed.stories'
import { BlockIframeEmbedData } from './BlockIframeEmbed.stories'
import { BlockVideoData } from './BlockVideo.stories'
import { BlockVideoEmbedData } from './BlockVideoEmbed.stories'
import BlockStreamfield, {
  variants
} from '@explorer-1/vue/src/components/BlockStreamfield/BlockStreamfield.vue'

export default {
  title: 'Components/Blocks/BlockStreamfield',
  component: BlockStreamfield,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    }
  },
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*(Data)$/
}

export const BlockStreamfieldData = {
  body: [
    BlockKeyPointsData,
    { ...BlockHeadingData, level: 'h2', size: 'h2' },
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockInlineImageData.block,
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockCtaData,
    BlockQuoteData,
    BlockListCardsData,
    BlockRelatedLinksData.data,
    { blockType: 'TeaserBlock', ...BlockTeaserData },
    BlockVideoData.block,
    { blockType: 'CarouselBlock', showTitle: true, items: BlockImageCarouselData },
    { blockType: 'VideoEmbedBlock', ...BlockVideoEmbedData.data },
    BlockImageData,
    { ...BlockImageData, fullBleed: true },
    BlockImageComparisonData,
    // BlockTwitterEmbedData,
    BlockIframeEmbedData,
    BlockImageGalleryData.block,
    {
      ...BlockInlineImageData.block,
      alignTo: 'left'
    },
    BlockTableData
  ]
}

export const Default = {
  args: { data: BlockStreamfieldData.body, variant: 'default' }
}

export const MatchingWidths = {
  args: {
    data: BlockStreamfieldData.body,
    variant: 'fluid'
  }
}
