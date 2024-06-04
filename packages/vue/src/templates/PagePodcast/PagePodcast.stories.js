import { BlockRelatedLinksData } from '../BlockRelatedLinks/BlockRelatedLinks.stories.js'
import { HeroMediaData } from '../HeroMedia/HeroMedia.stories'
import { BlockLinkTileCarouselData } from '../BlockLinkCarousel/BlockLinkCarousel.stories.js'
import PagePodcast from './PagePodcast.vue'

export default {
  title: 'WWW/Layouts/PagePodcast',
  component: PagePodcast,
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
          url: 'https://source.unsplash.com/Q1p7bh3SHj8/560x560',
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
          url: 'https://source.unsplash.com/Q1p7bh3SHj8/560x560',
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

// template
const PagePodcastTemplate = (args) => ({
  props: Object.keys(args),
  components: { PagePodcast },
  template: `<PagePodcast :data="podcast"/>`
})

// stories
export const Template = PagePodcastTemplate.bind({})
Template.storyName = 'PagePodcast'
Template.args = {
  podcast: PagePodcastData
}
