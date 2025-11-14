import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { EventsBlockLinkCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockVideoData } from './../../../components/BlockVideo/BlockVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import PageEduHome from './PageEduHome.vue'

export default {
  title: 'Templates/EDU/PageEduHome',
  component: PageEduHome,
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

// stories
export const BaseStory = {
  name: 'PageEduHome',
  args: {
    data: {
      __typename: 'EDUHomePage',
      title: 'EDU Homepage',
      slug: 'edu-home',
      url: '/',
      lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
      thumbnailImage: {
        alt: '',
        original: 'https://picsum.photos/512/288'
      },
      heroImage: {
        // beach
        src: {
          url: 'https://picsum.photos/id/973/1800/1200',
          width: 1800,
          height: 1200
        },
        // lake
        srcSet:
          'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
        // jungle
        screenMd: {
          url: 'https://picsum.photos/id/921/800/640'
        },
        // desert
        screenSm: {
          url: 'https://picsum.photos/id/247/640/900'
        },
        alt: 'Robotics detail page hero image'
      },
      heroText: 'Discover a universe of activities & resources',
      hotTopics: [
        {
          page: {
            title: 'Psyche Asteroid',
            url: '/topic/'
          }
        },
        {
          page: {
            title: 'Mars Rovers',
            url: '/topic/'
          }
        },
        {
          page: {
            title: 'Webb Space Telescope',
            url: '/topic/'
          }
        },
        {
          page: {
            title: 'NASA Pi Day',
            url: '/topic/'
          }
        }
      ],
      body: [
        {
          blockType: 'HeadingBlock',
          heading: 'EDU Home',
          level: 'h2',
          size: 'h2'
        },
        {
          blockType: 'RichTextBlock',
          value:
            '<p>Lorem ipsum <a href="/missions/test-mission/">dolor</a> sit amet, consectetur adipiscing elit. Quisque vitae justo quis justo malesuada molestie. Cras sed tincidunt dui.</p><p>Integer imperdiet blandit neque vitae euismod. Nulla aliquet lacus nibh,  vel tincidunt urna efficitur non. In et eros vitae ex posuere maximus  quis eget urna. Suspendisse fringilla posuere velit sit amet posuere.  Morbi malesuada bibendum vehicula. Donec faucibus ut erat ut mattis.  Suspendisse ornare, quam at placerat cursus, dolor mi lacinia nunc, eget  maximus augue nulla in dolor.</p>\n'
        }
      ]
    }
  }
}
