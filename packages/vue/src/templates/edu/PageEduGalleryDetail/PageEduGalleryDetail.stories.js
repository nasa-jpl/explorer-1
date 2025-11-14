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
  globals: { theme: 'ThemeEdu' },
  parameters: {
    html: {
      root: '#storyRoot'
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
      blockType: 'HeadingBlock',
      heading: 'Gallery Body',
      level: 'h2',
      size: 'h2'
    },
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
      overviewString: '<p data-block-key="f2dwn">Overview about the gallery.</p>',
      galleryItems: [
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          externalLink: 'https://nasa.gov',
          description:
            '<p data-block-key="53wg6">Description that is <strong>rich text</strong>.</p>',
          media: [{ ...BlockImageData, blockType: 'ImageBlock' }]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          externalLink: 'https://nasa.gov',
          description:
            '<p data-block-key="5f55p">Description with richtext images.</p><img alt="Perseverance Looks Back at &amp;#x27;Bright Angel&amp;#x27;" class="richtext-image full-width" height="600" src="https://picsum.photos/800/600" width="800"><p data-block-key="89jcq">More text and an image that&#x27;s full width (above)</p><p data-block-key="6jsp"></p><img alt="Carbon Mapper Coalition&amp;#x27;s Tanager Satellite" class="richtext-image right" height="263" src="https://picsum.photos/500/263" width="500"><p data-block-key="4409g">More text and an image that&#x27;s right-aligned. Morbi mollis magna erat, a tristique libero laoreet ut. Curabitur sit amet arcu laoreet, aliquet nibh at, dictum sapien. Duis a tempus nibh. Phasellus porta felis id diam fringilla tincidunt. Curabitur eget gravida leo. Vestibulum sapien nibh, pharetra eget ornare eu, tristique at purus.</p><p data-block-key="bid36"></p><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" class="richtext-image left" height="273" src="https://picsum.photos/500/273" width="500"><p data-block-key="1f4rd">More text and an image that&#x27;s left-aligned. Morbi mollis magna erat, a tristique libero laoreet ut. Curabitur sit amet arcu laoreet, aliquet nibh at, dictum sapien. Duis a tempus nibh. Phasellus porta felis id diam fringilla tincidunt. Curabitur eget gravida leo. Vestibulum sapien nibh, pharetra eget ornare eu, tristique at purus. Duis id risus sit amet est maximus placerat a quis sem. Donec lacus sem, cursus at quam sit amet, consequat vestibulum nulla. </p>',
          media: [BlockImageComparisonData]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          externalLink: 'https://nasa.gov',
          description:
            '<p data-block-key="5f55p">Description with a richtext embedded video below it.</p><div>\n    <iframe width="200" height="113" src="https://www.youtube.com/embed/C5aC-U9jHDE?feature=oembed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen title="How Do We Know Where Faraway Spacecraft Are?"></iframe>\n</div>\n<p data-block-key="4t2tv">More text below the embedded video.</p>',
          media: [BlockVideoData.block]
        },
        {
          blockId: `${Math.random().toString(36).slice(2)}`,
          heading: 'Gallery Item Heading',
          externalLink: 'https://nasa.gov',
          description:
            '<p data-block-key="5f55p">Description with richtext images.</p><img alt="Perseverance Looks Back at &amp;#x27;Bright Angel&amp;#x27;" class="richtext-image full-width" height="600" src="https://picsum.photos/800/600" width="800"><p data-block-key="89jcq">More text and another image that&#x27;s full width (above)</p><p data-block-key="6jsp"></p><img alt="Carbon Mapper Coalition&amp;#x27;s Tanager Satellite" class="richtext-image right" height="263" src="https://picsum.photos/500/263" width="500"><p data-block-key="4409g">Short text in-between two floating images.</p><p data-block-key="bid36"></p><img alt="Lecture Brings Galileo&amp;#x27;s Travels into Final Focus" class="richtext-image left" height="273" src="https://picsum.photos/500/273" width="500"><p data-block-key="1f4rd">More text and something that&#x27;s left-aligned. Morbi mollis magna erat, a tristique libero laoreet ut. Curabitur sit amet arcu laoreet, aliquet nibh at, dictum sapien. Duis a tempus nibh. Phasellus porta felis id diam fringilla tincidunt. Curabitur eget gravida leo. Vestibulum sapien nibh, pharetra eget ornare eu, tristique at purus.</p>',
          media: [BlockVideoEmbedData.data]
        }
      ]
    }
  }
}
