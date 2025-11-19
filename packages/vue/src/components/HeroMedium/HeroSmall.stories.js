import { BaseVideoData } from './../BaseVideo/BaseVideo.stories'
import { HeroMediumData } from './HeroMedium.stories'
import HeroMedium from './HeroMedium.vue'
import { eduMetadataDictionary } from './../../constants'

export default {
  title: 'Components/Heroes/Small',
  component: HeroMedium,
  tags: ['heroes'],
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
