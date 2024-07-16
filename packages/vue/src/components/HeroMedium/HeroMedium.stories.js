import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import HeroMedium from './HeroMedium.vue'

export default {
  title: 'Components/Heroes/HeroMedium',
  component: HeroMedium,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'FullWidthDocs',
          class: 'sbdocs-preview-full-width',
          default: true,
          visible: false
        }
      ]
    },
    viewMode: 'docs'
  },
  excludeStories: /.*Data$/
}

// data
export const HeroMediumData = {
  label: 'Featured',
  cta: 'View',
  feature: {
    url: '/news/new-maps-open-roads-to-research/',
    title: 'Creating Robots to go Where Humans Can’t',
    image: {
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
      }
    }
  }
}

export const BaseStory = {
  args: {
    customTag: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined
  }
}
export const Video = {
  args: {
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData
  }
}
