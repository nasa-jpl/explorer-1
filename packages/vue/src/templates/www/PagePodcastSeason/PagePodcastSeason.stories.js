import { HeroMediumData } from './../../../components/HeroMedium/HeroMedium.stories'
import { BlockLinkTileCarouselData } from './../../../components/BlockLinkCarousel/BlockLinkCarousel.stories.js'
import PagePodcastSeason from './PagePodcastSeason.vue'

export default {
  title: 'Templates/WWW/PagePodcastSeason',
  component: PagePodcastSeason,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="disable-nav-offset"><story/></div>`
    })
  ],
  parameters: {
    layout: 'fullscreen',
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*(Data)$/
}

// data
export const PagePodcastSeasonData = {
  title: 'Season 1',
  subtitle: 'Descriptive Season Title',
  topicLabel: 'Mars',
  label: 'On a Mission | Season 1',
  summary:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in nibh mauris. Praesent vel tempus enim, a ultricies justo. Cras nec lorem quis lorem ullamcorper accumsan. Aliquam lacus tortor, vulputate sit amet purus vitae, accumsan maximus diam. Vivamus ac dui non sapien hendrerit elementum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
  featuredEpisode: HeroMediumData.feature,
  listingPageHeroImage: {
    // same dimensions used for HeroMedium
    src: {
      url: 'https://picsum.photos/id/247/1800/1200',
      width: 1800,
      height: 1200
    },
    srcSet:
      'https://picsum.photos/id/247/768/548 768w, https://picsum.photos/id/247/1024/684 1024w, https://picsum.photos/id/82475/1440/770 1440w,  https://picsum.photos/id/247/1800/963 1800w',
    screenMd: {
      url: 'https://picsum.photos/id/247/800/640'
    },
    screenSm: {
      url: 'https://picsum.photos/id/247/640/900'
    }
  },

  episodes: [
    {
      id: 1,
      title: 'Episode 01: Getting to Mars is Hard',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
      series: {
        title: 'On a Mission'
      },
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/560/560',
          width: '560',
          height: '560'
        }
      },
      url: '/podcasts/season1/episode1/',
      publicationDate: '2020-11-01'
    },
    {
      id: 2,
      title: 'Episode 01: Getting to Mars is Hard',
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porttitor ac quam sed eleifend.',
      series: {
        title: 'On a Mission'
      },
      thumbnailImage: {
        src: {
          url: 'https://picsum.photos/560/560',
          width: '560',
          height: '560'
        }
      },
      url: '/podcasts/season1/episode2/',
      publicationDate: '2020-12-01'
    }
  ],
  relatedPodcasts: BlockLinkTileCarouselData
}

// stories
export const Template = {
  name: 'PagePodcastSeason',
  args: {
    data: PagePodcastSeasonData
  }
}
