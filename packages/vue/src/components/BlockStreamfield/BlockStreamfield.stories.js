import { BlockCtaData } from './../BlockCta/BlockCta.stories'
import { BlockHeadingData } from './../BlockHeading/BlockHeading.stories'
import { BlockImageCarouselData } from './../BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageComparisonData } from './../BlockImageComparison/BlockImageComparison.stories'
import { BlockImageData } from './../BlockImage/BlockImage.stories'
import { BlockImageGalleryData } from './../BlockImageGallery/BlockImageGallery.stories'
import { BlockInlineImageData } from './../BlockInlineImage/BlockInlineImage.stories'
import { BlockKeyPointsData } from './../BlockKeyPoints/BlockKeyPoints.stories'
import { BlockListCardsData } from './../BlockListCards/BlockListCards.stories'
import { BlockQuoteData } from './../BlockQuote/BlockQuote.stories'
import { BlockRelatedLinksData } from './../BlockRelatedLinks/BlockRelatedLinks.stories'
import { BlockTableData } from './../BlockTable/BlockTable.stories'
import { BlockTeaserData } from './../BlockTeaser/BlockTeaser.stories'
import { BlockIframeEmbedData } from './../BlockIframeEmbed/BlockIframeEmbed.stories'
import { BlockVideoData } from './../BlockVideo/BlockVideo.stories'
import { BlockVideoEmbedData } from './../BlockVideoEmbed/BlockVideoEmbed.stories'
import BlockStreamfield, { variants } from './BlockStreamfield.vue'

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

export const BaseStory = {
  args: { data: BlockStreamfieldData.body, variant: 'default' }
}

export const MatchingWidths = {
  args: {
    data: BlockStreamfieldData.body,
    variant: 'fluid'
  }
}
