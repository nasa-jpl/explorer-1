import { BlockHeadingData } from '../BlockHeading/BlockHeading.stories'
import { BlockKeyPointsData } from '../BlockKeyPoints/BlockKeyPoints.stories'
import { BlockImageComparisonData } from '../BlockImageComparison/BlockImageComparison.stories'
import { BlockTwitterEmbedData } from '../BlockTwitterEmbed/BlockTwitterEmbed.stories'
import { BlockIframeEmbedData } from '../BlockIframeEmbed/BlockIframeEmbed.stories'
import { HeroMediaData } from '../HeroMedia/HeroMedia.stories'
import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { NavSecondaryData } from '../NavSecondary/NavSecondary.stories.js'

import PageContent from './PageContent.vue'

export default {
  title: 'Layouts/PageContent',
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
export const PageContentData = {
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
    BlockTwitterEmbedData,
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
            url: 'https://source.unsplash.com/NuE8Nu3otjo/512x288',
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
const PageContentTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageContent },
  template: `<PageContent :data="contentPage"/>`
})

// stories
export const Template = PageContentTemplate.bind({})
Template.storyName = 'PageContent' // single story hoisting
Template.args = {
  contentPage: PageContentData
}
