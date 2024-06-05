import { HeroMediaData } from '../HeroMedia/HeroMedia.stories.js'
import { DetailHeadlineData } from '../DetailHeadline/DetailHeadline.stories.js'
import { BlockStreamfieldData } from '../BlockStreamfield/BlockStreamfield.stories.js'
import {
  BlockLinkCardCarouselData,
  BlockLinkTileCarouselData
} from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockImageCarouselData } from '../BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageComparisonData } from '../BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from '../BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from '../BlockVideoEmbed/BlockVideoEmbed.stories'
import PageNewsDetail from './PageNewsDetail.vue'

export default {
  title: 'WWW/Layouts/PageNewsDetail',
  component: PageNewsDetail,
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
  excludeStories: /.*Data$/
}

// template
const PageNewsDetailTemplate = (args) => ({
  props: Object.keys(args),
  components: { PageNewsDetail },
  template: `<PageNewsDetail :data="article"/>`
})

// stories
export const NewsDetail = PageNewsDetailTemplate.bind({})
NewsDetail.args = {
  article: {
    slug: 'nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
    url: '/news/nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
    ...DetailHeadlineData,
    topper: '',
    summary:
      'Headed to the Red Planet with the Perseverance rover, the pioneering helicopter is powered up for the first time in interplanetary space as part of a systems check.',
    thumbnailImage: {
      original: 'https://picsum.photos/400/200'
    },
    heroPosition: 'full_bleed',
    hero: [
      {
        ...HeroMediaData
      }
    ],
    ...BlockStreamfieldData,
    releaseNumber: '2020-157',
    relatedLinks: [BlockRelatedLinksData.data],
    mediaContacts: [
      {
        contact: {
          name: 'Test person',
          address: 'Jet Propulsion Laboratory, Pasadena, Calif.',
          email: 'test.person@jpl.nasa.gov',
          phone: '818-354-1234'
        }
      }
    ],
    getRelatedOrLatestNews: BlockLinkCardCarouselData,
    relatedPagesForMoreSection: BlockLinkTileCarouselData
  }
}

export const InlineHero = PageNewsDetailTemplate.bind({})
InlineHero.args = {
  article: {
    ...NewsDetail.args.article,
    heroPosition: 'inline'
  }
}

export const HeroCarousel = PageNewsDetailTemplate.bind({})
HeroCarousel.args = {
  article: {
    ...NewsDetail.args.article,
    hero: [{ blockType: 'CarouselBlock', blocks: BlockImageCarouselData }]
  }
}

export const HeroImageComparison = PageNewsDetailTemplate.bind({})
HeroImageComparison.args = {
  article: {
    ...NewsDetail.args.article,
    heroPosition: 'inline',
    hero: [
      {
        ...BlockImageComparisonData
      }
    ]
  }
}

export const HeroVideo = PageNewsDetailTemplate.bind({})
HeroVideo.args = {
  article: {
    ...NewsDetail.args.article,
    hero: [
      {
        blockType: 'VideoBlock',
        video: BaseVideoData.data,
        caption: 'Lorem ipsum dolor sit amet',
        credit: 'NASA/JPL'
      }
    ]
  }
}

export const HeroVideoEmbed = PageNewsDetailTemplate.bind({})
HeroVideoEmbed.args = {
  article: {
    ...NewsDetail.args.article,
    heroPosition: 'inline',
    hero: [
      {
        ...BlockVideoEmbedData.data,
        embed: {
          embed: `<iframe title="Meet NASA's Diana Trujillo - Embedded Hero" width="480" height="270" src="https://www.youtube.com/embed/vUuUyYqI83Q?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        },
        blockType: 'VideoEmbedBlock'
      }
    ]
  }
}

export const NoHero = PageNewsDetailTemplate.bind({})
NoHero.args = {
  article: {
    ...NewsDetail.args.article,
    hero: []
  }
}

export const WithTopper = PageNewsDetailTemplate.bind({})
WithTopper.args = {
  article: {
    ...NewsDetail.args.article,
    topper:
      '<p>Editor’s Note: Mars Helicopter flight delayed to no earlier than April 14.</p><p><a href="https://mars.nasa.gov/technology/helicopter/status/291/mars-helicopter-flight-delayed-to-no-earlier-than-april-14/"><i>Read here for more information</i></a><i>.</i></p><p></p><hr/><p></p>'
  }
}
