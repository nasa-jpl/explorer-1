import { BlockHeadingData } from './../../../components/BlockHeading/BlockHeading.stories'
import { BlockKeyPointsData } from './../../../components/BlockKeyPoints/BlockKeyPoints.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { NavSecondaryData } from './../../../components/NavSecondary/NavSecondary.stories.js'

import PageContentExploreApp from './PageContentExploreApp.vue'

export default {
  title: 'Templates/ExploreJPL/PageContentExploreApp',
  component: PageContentExploreApp,
  tags: ['!autodocs'],
  parameters: {
    html: {
      root: '#storyRoot'
    },
    layout: 'fullscreen'
  },
  excludeStories: /.*(Data)$/
}

// data
export const ExploreAppContentPageData = {
  url: '/slug',
  title: 'Sites',
  displayLabel: 'Classroom Activity',
  showShareLinks: true,
  heroPosition: 'full_bleed',
  heroImage: HeroMediaData.image,
  // heroImageInline: HeroMediaData.imageInline,
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
    }
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
        __typename: 'EDUExplainerArticlePage',
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
  ]
}

// stories
export const BaseStory = {
  name: 'PageContentExploreApp',
  args: {
    pageData: ExploreAppContentPageData
  }
}

export const CustomNav = {
  args: {
    pageData: {
      ...ExploreAppContentPageData,
      breadcrumb: NavSecondaryData.breadcrumb
    }
  }
}
