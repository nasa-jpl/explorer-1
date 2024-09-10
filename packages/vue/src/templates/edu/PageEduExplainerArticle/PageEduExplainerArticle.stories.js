import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockIframeEmbedData } from './../../../components/BlockIframeEmbed/BlockIframeEmbed.stories.js'
import { BlockImageCarouselData } from './../../../components/BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageComparisonData } from './../../../components/BlockImageComparison/BlockImageComparison.stories'
import { BaseVideoData } from './../../../components/BaseVideo/BaseVideo.stories'
import { BlockVideoEmbedData } from './../../../components/BlockVideoEmbed/BlockVideoEmbed.stories'
import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockStreamfieldTruncatedData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import { AboutTheAuthorData } from './../../../components/AboutTheAuthor/AboutTheAuthor.stories'
import PageEduExplainerArticle from './PageEduExplainerArticle.vue'

export default {
  title: 'Templates/EDU/PageEduExplainerArticle',
  component: PageEduExplainerArticle,
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
  name: 'PageEduExplainerArticle',
  args: {
    data: {
      __typename: 'EDUExplainerArticlePage',
      pageType: 'EDUExplainerArticlePage',
      contentType: 'edu_resources.EDUExplainerArticlePage',
      seoTitle: 'Test Resource',
      searchDescription: '',
      slug: 'test-resource',
      url: 'http://localhost:3000/edu/resources/test-resource',
      title: 'Test Resource',
      readTime: '6 min read',
      lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
      authors: AboutTheAuthorData,
      heroConstrain: true,
      heroPosition: 'full_bleed',
      hero: [
        {
          ...HeroMediaData,
          blockType: 'HeroImageBlock'
        }
      ],
      showJumpMenu: true,
      ...BlockStreamfieldTruncatedData,
      publicationDate: '2024-07-09',
      topper: 'Topper of resource article',
      getTopicsForDisplay: [
        {
          __typename: 'TopicPage',
          title: 'Asteroids',
          url: 'http://localhost:3000/topics/asteroids'
        }
      ],
      topicLabel: 'Asteroids',
      primarySubject: {
        __typename: 'EDUPrimarySubject',
        id: '2',
        subject: 'Engineering'
      },
      additionalSubjects: [
        {
          __typename: 'EDUPrimarySubject',
          id: '1',
          subject: 'Art'
        }
      ],
      gradeLevels: [
        {
          __typename: 'EDUGradeLevel',
          id: '2',
          gradeLevel: 'K'
        },
        {
          __typename: 'EDUGradeLevel',
          id: '3',
          gradeLevel: '1'
        },
        {
          __typename: 'EDUGradeLevel',
          id: '4',
          gradeLevel: '2'
        },
        {
          __typename: 'EDUGradeLevel',
          id: '13',
          gradeLevel: '11'
        }
      ],
      body: BlockStreamfieldTruncatedData.body,
      thumbnailImage: {
        __typename: 'CustomImage',
        original: 'http://127.0.0.1:9000/media/original_images/imagessirtfsirtf-090303-16.jpg',
        alt: ''
      },
      relatedLinks: BlockRelatedLinksData.data,
      relatedContentHeading: 'Related Content',
      relatedContent: BlockLinkCardCarouselData
    }
  }
}

export const HeroTitle = {
  args: {
    data: {
      ...BaseStory.args.data,
      hero: [
        {
          ...HeroMediaData,
          heroSummary: 'Text appears below the title',
          blockType: 'HeroTitleBlock'
        }
      ]
    }
  }
}

export const InlineHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroPosition: 'inline'
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
      ...BaseStory.args.data,
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
      ...BaseStory.args.data,
      hero: []
    }
  }
}
