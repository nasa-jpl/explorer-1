import { BlockCardGridData } from './../BlockCardGrid/BlockCardGrid.stories'
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
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: Object.keys(variants)
    }
  },
  parameters: {
    layout: 'fullscreen'
  },
  excludeStories: /.*(Data)$/
}

export const BlockStreamfieldMinimalData = {
  body: [
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p>\n'
    },
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    }
  ]
}
export const BlockStreamfieldTruncatedData = {
  body: [
    BlockKeyPointsData,
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    { ...BlockHeadingData, blockId: Math.random().toString(36).slice(2) },
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockImageData,
    { ...BlockHeadingData, blockId: Math.random().toString(36).slice(2) },
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockInlineImageData.block
  ]
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
      blockType: 'HeadingBlock',
      heading: 'Heading 2',
      level: 'h2'
    },
    {
      blockType: 'HeadingBlock',
      heading: 'Heading 3',
      level: 'h3'
    },
    {
      blockType: 'GitHubGistBlock',
      caption: '<p>Caption for gist block</p>',
      id: 'cefc8e20-2833-4d0b-a4d6-7f469d5dbd02',
      url: 'https://gist.github.com/nasajpledu/acb1a3f04895a9905570b267193d42ac'
    },
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
    BlockTableData,
    {
      blockType: 'ListBlock',
      field: 'card_grid',
      items: BlockCardGridData
    }
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
