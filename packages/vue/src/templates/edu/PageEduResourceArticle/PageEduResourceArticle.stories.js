import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { DetailHeadlineData } from './../../../components/DetailHeadline/DetailHeadline.stories'
import { BlockIframeEmbedData } from './../../../components/BlockIframeEmbed/BlockIframeEmbed.stories.js'
import { BlockImageCarouselData } from './../../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'

import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockStreamfieldTruncatedData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import PageEduResourceArticle from './PageEduResourceArticle.vue'

export default {
  title: 'Templates/EDU/PageEduResourceArticle',
  component: PageEduResourceArticle,
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

export const ArticleDetail = {
  args: {
    data: {
      slug: 'nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      url: '/news/nasas-ingenuity-mars-helicopter-recharges-its-batteries-in-flight',
      ...DetailHeadlineData,
      displayLabel: 'Resource',
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
      ...BlockStreamfieldTruncatedData,
      relatedLinks: [BlockRelatedLinksData.data],
      relatedContentHeading: 'Related Activities',
      relatedContent: [
        // external link card, no image
        {
          label: 'Explore NASA',
          thumbnailImage: {
            src: {
              url: 'https://picsum.photos/550/288',
              width: 550,
              height: 288
            }
          },
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
      ]
    }
  }
}
export const InlineHero = {
  args: {
    data: {
      ...ArticleDetail.args.data,
      heroPosition: 'inline'
    }
  }
}

export const HeroCarousel = {
  args: {
    data: {
      ...ArticleDetail.args.data,
      hero: [{ blockType: 'CarouselBlock', blocks: BlockImageCarouselData }]
    }
  }
}

export const HeroImageComparison = {
  args: {
    data: {
      ...ArticleDetail.args.data,
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
      ...ArticleDetail.args.data,
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
      ...ArticleDetail.args.data,
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

export const HeroIframeEmbed = {
  args: {
    data: {
      ...ArticleDetail.args.data,
      heroPosition: 'inline',
      hero: [
        {
          ...BlockIframeEmbedData
        }
      ]
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...ArticleDetail.args.data,
      hero: []
    }
  }
}
