import { BlockKeyPointsData } from './../../../components/BlockKeyPoints/BlockKeyPoints.stories'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { EventsBlockLinkCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockVideoData } from './../../../components/BlockVideo/BlockVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import PageEduGalleryDetail from './PageEduGalleryDetail.vue'

export default {
  title: 'Templates/EDU/PageEduGalleryDetail',
  component: PageEduGalleryDetail,
  tags: ['!autodocs'],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*Data$/
}

const PageEduGalleryDetailData = {
  title: 'Gallery Detail',
  slug: 'gallery-item',
  url: '/resources/gallery/gallery-item',
  lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
  thumbnailImage: {
    alt: '',
    original: 'https://picsum.photos/512/288'
  },
  authors: AboutTheAuthorData,

  body: [
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    }
  ],
  relatedLinks: [
    {
      blockType: 'RelatedLinksBlock',
      heading: 'Related Links',
      links: [
        {
          document: null,
          externalLink: 'http://www.google.com',
          page: null,
          text: 'Lorem ipsum dolor'
        },
        {
          document: null,
          externalLink: 'http://www.google.com',
          page: null,
          text: 'Sit amet consectatur'
        }
      ]
    }
  ],
  relatedContent: EventsBlockLinkCarouselData,
  exploreMore: [...BlockLinkCardCarouselData, ...EventsBlockLinkCarouselData]
}
// stories
export const BaseStory = {
  name: 'PageEduGalleryDetail',
  args: {
    data: {
      __typename: 'EDUGalleryDetailPage',
      ...PageEduGalleryDetailData,
      showJumpMenu: true,
      overview: '<p data-block-key="f2dwn">Overview about the gallery.</p>',
      galleryItems: [
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [{ ...BlockImageData, blockType: 'ImageBlock' }]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockImageComparisonData]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockVideoData.block]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockVideoEmbedData.data]
        }
      ]
    }
  }
}
