import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockIframeEmbedData } from './../../../components/BlockIframeEmbed/BlockIframeEmbed.stories.js'
import { BlockImageCarouselData } from './../../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageData } from './../../../components/BlockImage/BlockImage.stories'
import { BlockHeadingData } from './../../../components/BlockHeading/BlockHeading.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import {
  BlockStreamfieldTruncatedData,
  BlockStreamfieldMinimalData
} from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import PageEduTeachableMoment from './PageEduTeachableMoment.vue'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'

export default {
  title: 'Templates/EDU/PageEduTeachableMoment',
  component: PageEduTeachableMoment,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  args: {
    data: {
      __typename: 'EDUTeachableMomentPage',
      title: 'A Teachable Moment',
      lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
      url: 'http://localhost:3000/edu/resources/teachable-moment',
      pageType: 'EDUTeachableMomentPage',
      contentType: 'edu_resources.EDUTeachableMomentPage',
      showJumpMenu: true,
      thumbnailImage: {
        __typename: 'CustomImage',
        original: 'http://127.0.0.1:9000/media/original_images/imagessirtfsirtf-090303-16.jpg',
        alt: ''
      },
      authors: AboutTheAuthorData,
      hero: [
        {
          ...HeroMediaData,
          blockType: 'HeroImageBlock'
        }
      ],
      heroConstrain: true,

      body: BlockStreamfieldTruncatedData.body,

      relatedLinks: BlockRelatedLinksData.data,
      relatedContentHeading: 'Related Content',
      relatedContent: BlockLinkCardCarouselData
    }
  }
}

export const HeroCarousel = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [{ blockType: 'CarouselBlock', blocks: BlockImageCarouselData }]
    }
  }
}

export const HeroImageComparison = {
  args: {
    data: {
      ...BaseStory.args.data,
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
      ...BaseStory.args.data,
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
      ...BaseStory.args.data,
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
      ...BaseStory.args.data,
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
      ...BaseStory.args.data,
      hero: []
    }
  }
}
