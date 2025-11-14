import { BlockKeyPointsData } from './../../../components/BlockKeyPoints/BlockKeyPoints.stories'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { EventsBlockLinkCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockVideoData } from './../../../components/BlockVideo/BlockVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import PageEduMultimediaDetail from './PageEduMultimediaDetail.vue'

export default {
  title: 'Templates/EDU/PageEduMultimediaDetail',
  component: PageEduMultimediaDetail,
  tags: ['!autodocs'],
  globals: { theme: 'ThemeEdu' },
  parameters: {
    html: {
      root: '#storyRoot'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*Data$/
}

const PageEduMultimediaDetailData = {
  title: 'Media Item',
  slug: 'media-item',
  url: '/resources/media/media-item',
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
  name: 'Image',
  args: {
    data: {
      __typename: 'EDUImageDetailPage',
      ...PageEduMultimediaDetailData,
      imageAsHero: BlockImageData.image,
      heroImageCaption: 'This is the hero image caption'
    }
  }
}

export const Infographic = {
  args: {
    data: {
      __typename: 'EDUInfographicDetailPage',
      ...PageEduMultimediaDetailData,
      imageAsHero: BlockImageData.image,
      heroImageCaption: 'This is the hero image caption for the infographic'
    }
  }
}

export const Video = {
  args: {
    data: {
      __typename: 'EDUVideoDetailPage',
      ...PageEduMultimediaDetailData,
      video: [BlockVideoData.block],
      transcript: `<p>Preparing to Land Perseverance</p>
      <p>The following tests, conducted from 2017-2020, helped prepare NASA's Perseverance rover for its landing on Mars.</p>
      <p>[music]</p>
      <p>Centrifuge Spin Test</p>`
    }
  }
}

export const VideoEmbed = {
  args: {
    data: {
      __typename: 'EDUVideoDetailPage',
      ...PageEduMultimediaDetailData,
      video: [BlockVideoEmbedData.data],
      transcript: `<p>Preparing to Land Perseverance</p>
      <p>The following tests, conducted from 2017-2020, helped prepare NASA's Perseverance rover for its landing on Mars.</p>
      <p>[music]</p>
      <p>Centrifuge Spin Test</p>
      <p>Santa Clarita, CA June 2019</p>
      <p>[music]</p>
      <p>Parachute Firing Test</p>
      <p>Moses Lake, WA May 2019</p>
      <p>[music]</p>
      <p>[mortar firing]</p>
      <p>[mortar firing]</p>
      <p>[clapping]</p>`
    }
  }
}

export const Document = {
  args: {
    data: {
      __typename: 'EDUDocumentDetailPage',
      ...PageEduMultimediaDetailData,
      heroImage: {
        ...BlockImageData.image
      },
      heroImageCaption: 'This is the hero image caption for the document',
      document: {
        url: 'https://jpl.nasa.gov'
      },
      credit: '<p>Document credit attribution</p>'
    }
  }
}

export const Gallery = {
  args: {
    data: {
      __typename: 'EDUGalleryDetailPage',
      ...PageEduMultimediaDetailData,
      galleryItems: [
        {
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockImageData.image]
        },
        {
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockImageComparisonData]
        },
        {
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockVideoData.block]
        },
        {
          heading: 'Gallery Item Heading',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [BlockVideoEmbedData.data]
        }
      ],
      showJumpMenu: true
    }
  }
}
