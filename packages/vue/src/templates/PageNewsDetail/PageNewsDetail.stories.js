import { HeroMediaData } from './../../components/HeroMedia/HeroMedia/HeroMedia.stories'
import { DetailHeadlineData } from './../../components/DetailHeadline/DetailHeadline/DetailHeadline.stories'
import { BlockStreamfieldData } from './../../components/BlockStreamfield/BlockStreamfield/BlockStreamfield.stories'
import {
  BlockLinkCardCarouselData,
  BlockLinkTileCarouselData
} from './../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockRelatedLinksData } from './../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockImageCarouselData } from './../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageComparisonData } from './../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import PageNewsDetail from './PageNewsDetail.vue'

export default {
  title: 'Templates/PageNewsDetail',
  component: PageNewsDetail,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const NewsDetail = {
  args: {
    data: {
      slug: 'nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      url: '/news/nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      ...DetailHeadlineData,
      getTopicsForDisplay: [
        {
          title: 'Mars',
          url: 'http://localhost:3000/topics/mars'
        }
      ],
      topper: '',
      summary:
        'Headed to the Red Planet with the Perseverance rover, the pioneering helicopter is powered up for the first time in interplanetary space as part of a systems check.',
      thumbnailImage: {
        original: 'https://picsum.photos/400/200'
      },
      heroPosition: 'full_bleed',
      hero: [
        {
          ...HeroMediaData,
          blockType: 'HeroImageBlock'
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
}

export const InlineHero = {
  args: {
    data: {
      ...NewsDetail.args.data,
      heroPosition: 'inline'
    }
  }
}

export const HeroCarousel = {
  args: {
    data: {
      ...NewsDetail.args.data,
      hero: [{ blockType: 'CarouselBlock', blocks: BlockImageCarouselData }]
    }
  }
}

export const HeroImageComparison = {
  args: {
    data: {
      ...NewsDetail.args.data,
      heroPosition: 'inline',
      hero: [
        {
          ...BlockImageComparisonData
        }
      ]
    }
  }
}

export const HeroVideo = {
  args: {
    data: {
      ...NewsDetail.args.data,
      hero: [
        {
          blockType: 'VideoBlock',
          video: BaseVideoData,
          caption: 'Lorem ipsum dolor sit amet',
          credit: 'NASA/JPL'
        }
      ]
    }
  }
}

export const HeroVideoEmbed = {
  args: {
    data: {
      ...NewsDetail.args.data,
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
}

export const NoHero = {
  args: {
    data: {
      ...NewsDetail.args.data,
      hero: []
    }
  }
}

export const WithTopper = {
  args: {
    data: {
      ...NewsDetail.args.data,
      topper:
        '<p>Editor’s Note: Mars Helicopter flight delayed to no earlier than April 14.</p><p><a href="https://mars.nasa.gov/technology/helicopter/status/291/mars-helicopter-flight-delayed-to-no-earlier-than-april-14/"><i>Read here for more information</i></a><i>.</i></p><p></p><hr/><p></p>'
    }
  }
}
