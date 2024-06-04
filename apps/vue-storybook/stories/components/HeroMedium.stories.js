import { BaseVideoData } from './BaseVideo.stories'
import HeroMedium from '@explorer-1/vue/src/components/HeroMedium/HeroMedium.vue'

export default {
  title: 'Components/Heroes/HeroMedium',
  components: {
    HeroMedium
  },
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

// templates
const HeroMediumTemplate = (args) => ({
  props: Object.keys(args),
  components: { HeroMedium },
  template: `<HeroMedium :custom-label="label" :feature="feature" :cta="cta" />`
})

const HeroMediumVideoTemplate = (args) => ({
  props: Object.keys(args),
  components: { HeroMedium },
  template: `<HeroMedium :custom-label="label" :feature="feature" :cta="cta" :custom-video="customVideo" />`
})

export const Default = HeroMediumTemplate.bind({})
Default.args = { ...HeroMediumData }

export const Video = HeroMediumVideoTemplate.bind({})
Video.args = {
  ...HeroMediumData,
  customVideo: BaseVideoData.data
}
