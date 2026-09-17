import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import ExploreJplIconImage from '@explorer-1/common-storybook/src/story-data/images/2026-Explore-JPL-Site-Number-1-Missions-in-Flight.png'
import PageSiteExploreApp from './PageSiteExploreApp.vue'

export default {
  title: 'Templates/ExploreJPL/PageSiteExploreApp',
  component: PageSiteExploreApp,
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
export const ExploreAppSitePageData = {
  id: '156',
  url: '/slug',
  title: 'Sites',
  displayLabel: 'Explore JPL',
  showShareLinks: false,
  themeTypeLabel: 'Missions That Changed the World',
  thumbnailImage: {
    original: 'https://picsum.photos/512/288',
    src: {
      url: 'https://picsum.photos/512/288',
      width: 512,
      height: 288
    },
    srcCropped: {
      url: 'https://picsum.photos/512/288',
      width: 512,
      height: 288
    },
    id: 12345
  },
  location: 'Cafe 186',
  waitTime: '60',
  waitTimeLabel: '60 minute wait',
  mapIcon: {
    url: ExploreJplIconImage
  },
  body: [
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    },
    {
      blockType: 'RichTextBlock',
      value:
        '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
    }
  ],
  relatedPagesForMoreSection: [
    {
      title: 'Cafeteria 303',
      url: 'https://www.nasa.gov',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/512/288?random=1',
          width: 512,
          height: 288
        }
      }
    },
    {
      title: 'Highbay 1',
      url: 'https://www.nasa.gov',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/512/288?random=2',
          width: 512,
          height: 288
        }
      }
    },
    {
      title: 'Building 111',
      url: 'https://www.nasa.gov',
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/512/288?random=3',
          width: 512,
          height: 288
        }
      }
    },
    ...BlockLinkCardCarouselData
  ]
}

// stories
export const BaseStory = {
  args: {
    data: ExploreAppSitePageData
  }
}
