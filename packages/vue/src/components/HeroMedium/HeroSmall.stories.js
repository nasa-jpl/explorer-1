import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import { HeroMediumData } from './HeroMedium.stories'
import HeroMedium from './HeroMedium.vue'

export default {
  title: 'Components/Heroes/Small',
  component: HeroMedium,
  tags: ['heroes'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
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
    docs: {
      description: {
        component: 'This is the same component as `HeroMedium, but with `compact` set to `true`.'
      }
    }
  },
  excludeStories: /.*Data$/
}

export const BaseStory = {
  name: 'HeroMedium (compact)',
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
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData,
    compact: true
  }
}
