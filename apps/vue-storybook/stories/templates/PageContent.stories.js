import { BlockHeadingData } from './../components/BlockHeading.stories'
import { BlockKeyPointsData } from './../components/BlockKeyPoints.stories'
import { BlockImageComparisonData } from './../components/BlockImageComparison.stories'
import { BlockIframeEmbedData } from './../components/BlockIframeEmbed.stories'
import { HeroMediaData } from './../components/HeroMedia.stories'
import { BlockRelatedLinksData } from './../components/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../components/BlockLinkCarousel.stories.js'
import { NavSecondaryData } from './../components/NavSecondary.stories.js'

import PageContent from '@explorer-1/vue/src/templates/PageContent.vue'

export default {
  title: 'Templates/PageContent',
  component: PageContent,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0 disable-nav-offset"><story/></div>`
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

// data
export const ContentPageData = {
  url: '/slug',
  breadcrumb: NavSecondaryData.breadcrumb,
  title: 'Make a Paper Mars Helicopter',
  displayLabel: 'Classroom Activity',
  heroPosition: 'inline',
  heroImage: HeroMediaData.image,
  heroImageInline: HeroMediaData.imageInline,
  body: [
    BlockKeyPointsData,
    BlockHeadingData,
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockImageComparisonData,
    BlockHeadingData,
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    BlockIframeEmbedData
  ],
  relatedLinks: [BlockRelatedLinksData.data],
  relatedContentHeading: 'Related Activities',
  relatedContent: [
    // external link card, no image
    {
      label: 'Explore NASA',
      thumbnailImage: null,
      title: 'NASA website',
      externalLink: 'https://www.nasa.gov'
    },

    // via page chooser
    {
      page: {
        label: 'Mission',
        thumbnailImage: {
          src: {
            url: 'https://picsum.photos/512/288',
            width: 512,
            height: 288
          }
        },
        title: 'GRACE-FO',
        url: '/mission/placeholder'
      }
    },
    ...BlockLinkCardCarouselData
  ],
  clearanceNumber: 'CL#12345'
}

// template
// const PageContentTemplate = (args) => ({
//   props: Object.keys(args),
//   components: { PageContent },
//   template: `<PageContent :data="contentPage"/>`
// })

// stories
export const Template = {
  name: 'PageContent',
  args: {
    data: ContentPageData
  }
}
