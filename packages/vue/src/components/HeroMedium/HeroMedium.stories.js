import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import HeroMedium from './HeroMedium.vue'
import { eduMetadataDictionary } from './../../constants'

export default {
  title: 'Components/Heroes/Medium',
  component: HeroMedium,
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  argTypes: {
    customPill: {
      type: { name: 'string', required: false },
      description: 'Text for pill (overrides label)'
    },
    customPillType: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: Object.keys(eduMetadataDictionary),
      description:
        'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'
    }
  },
  parameters: {
    html: {
      root: '#storyRoot'
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
  name: 'HeroMedium',
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined
  }
}
export const Compact = {
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
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
