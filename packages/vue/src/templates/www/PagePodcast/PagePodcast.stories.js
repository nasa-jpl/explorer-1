import { BlockRelatedLinksData } from './../../../components/BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { HeroMediaData } from './../../../components/HeroMedia/HeroMedia.stories'
import { BlockLinkTileCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import PagePodcast from './PagePodcast.vue'

export default {
  title: 'Templates/WWW/PagePodcast',
  component: PagePodcast,
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
  excludeStories: /.*(Data)$/
}

// data
export const PagePodcastData = {
  title: 'On a Mission',
  topicLabel: 'Mars',
  label: 'Podcast',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nibh mauris. Praesent vel tempus enim, a ultricies justo. Cras nec lorem quis lorem ullamcorper accumsan. Aliquam lacus tortor, vulputate sit amet purus vitae, accumsan maximus diam. Vivamus ac dui non sapien hendrerit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
  heroImage: HeroMediaData.image,
  seasons: [
    {
      id: 1,
      seasonNumber: 1,
      label: 'On a Mission | Season 1',
      subtitle: 'Descriptive Title of Season 1',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
      parent: {
        title: 'On a Mission'
      },
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/560/560',
          width: '560',
          height: '560'
        }
      },
      title: 'Season 1',
      url: '/podcasts/season1/',
      firstPublishedAt: '2020-10-01'
    },
    {
      id: 2,
      seasonNumber: 2,
      label: 'On a Mission | Season 2',
      subtitle: 'Descriptive Title of Season 2',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
      parent: {
        title: 'On a Mission'
      },
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/560/560',
          width: '560',
          height: '560'
        }
      },
      title: 'Season 2',
      url: '/podcasts/season2/',
      firstPublishedAt: '2020-12-01'
    }
  ],
  relatedLinks: [BlockRelatedLinksData.data],
  relatedPodcasts: BlockLinkTileCarouselData
}

// stories
export const BaseStory = {
  name: 'PagePodcast',
  args: {
    data: PagePodcastData
  }
}
