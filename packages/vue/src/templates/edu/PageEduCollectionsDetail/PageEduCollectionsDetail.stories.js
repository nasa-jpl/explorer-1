import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { BlockLinkCardCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import { BlockStreamfieldMinimalData } from './../../../components/BlockStreamfield/BlockStreamfield.stories'
import { NavSecondaryData } from './../../../components/NavSecondary/NavSecondary.stories.js'
import PageEduCollectionsDetail from './PageEduCollectionsDetail.vue'

export default {
  title: 'Templates/EDU/PageEduCollectionsDetail',
  component: PageEduCollectionsDetail,
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
  name: 'PageEduCollectionsDetail',
  args: {
    data: {
      __typename: 'EDUCollectionsDetailPage',
      title: 'A collections page',
      lastPublishedAt: '2024-08-22T02:33:13.507206+00:00',
      url: 'http://localhost:3000/edu/resources/collections-detail',
      pageType: 'EDUCollectionsDetailPage',
      contentType: 'edu_resources.EDUCollectionsDetailPage',
      showJumpMenu: true,
      showMetaPanel: true,
      thumbnailImage: {
        __typename: 'CustomImage',
        original: 'http://127.0.0.1:9000/media/original_images/imagessirtfsirtf-090303-16.jpg',
        alt: ''
      },
      heroImage: {
        src: {
          url: 'https://picsum.photos/id/973/1800/1200',
          width: 1800,
          height: 1200
        },
        srcSet:
          'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
        screenMd: {
          url: 'https://picsum.photos/id/921/800/640'
        },
        screenSm: {
          url: 'https://picsum.photos/id/247/640/900'
        },
        alt: 'The alt text'
      },
      heroSummary: 'Lorem ipsum dolor sit amet consectatur adipscing.',
      heroImageCaption: '<p>Lorem ipsum dolor sit amet</p>',
      heroConstrain: true,
      heroPosition: 'full_bleed',
      primarySubject: {
        subject: 'Arts'
      },
      additionalSubjects: [
        {
          subject: 'Science'
        }
      ],
      gradeLevels: [
        {
          gradeLevel: 'K'
        },
        {
          gradeLevel: '1'
        }
      ],

      body: BlockStreamfieldMinimalData.body,

      relatedLinks: BlockRelatedLinksData.data,
      relatedContentHeading: 'Related Content',
      relatedContent: BlockLinkCardCarouselData
    }
  }
}

export const Inline = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroPosition: 'inline',
      heroConstrain: false
    }
  }
}

export const NoMetaPanel = {
  args: {
    data: {
      ...BaseStory.args.data,
      showMetaPanel: false
    }
  }
}

export const NoHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      heroImage: undefined
    }
  }
}

export const SecondaryNav = {
  args: {
    data: {
      ...BaseStory.args.data,
      breadcrumb: NavSecondaryData.breadcrumb
    }
  }
}
export const SecondaryNavHeroInline = {
  args: {
    data: {
      ...BaseStory.args.data,
      breadcrumb: NavSecondaryData.breadcrumb,
      heroPosition: 'inline'
    }
  }
}
export const SecondaryNavNoHero = {
  args: {
    data: {
      ...BaseStory.args.data,
      breadcrumb: NavSecondaryData.breadcrumb,
      heroImage: undefined
    }
  }
}
