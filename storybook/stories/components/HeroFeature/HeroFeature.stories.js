import { BaseVideoBgData } from '../BaseVideoBg/BaseVideoBg.stories'
import { HeroFeatureTemplate } from './HeroFeature'

export default {
  title: 'Components/Blocks/Heroes/HeroFeature',
  excludeStories: /.*Data$/,
  argTypes: {
    label: {
      type: { name: 'string', required: false },
      description: 'Hero header label',
    },
    cta: {
      type: { name: 'string', required: false },
      description: 'Call to action',
    },
    url: {
      type: { name: 'string', required: false },
      description: 'Link to the feature',
    },
    title: {
      type: { name: 'string', required: false },
      description: 'Feature title',
    },
    image: {
      type: { name: 'array', required: false },
      description: 'An array of image data objects',
    },
  },
  decorators: [
    (Story) =>
      `<div id="storyRoot" class="max-w-screen-3xl mx-auto">${Story()}</div>`,
  ],
  parameters: {
    html: {
      root: '#storyRoot',
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'FullWidthDocs',
          class: 'sbdocs-preview-full-width',
          default: true,
          visible: false,
        },
      ],
    },
    viewMode: 'docs',
  },
}

const HeroFeatureData = {
  label: 'Featured',
  cta: 'View',
  url: '/news/new-maps-open-roads-to-research/',
  title: 'Creating Robots to go Where Humans Can’t',
  image: {
    src: {
      url: 'https://picsum.photos/id/973/1800/1200',
      width: 1800,
      height: 1200,
    },
    srcSet:
      'https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w',
    screenMd: {
      url: 'https://picsum.photos/id/921/800/640',
    },
    screenSm: {
      url: 'https://picsum.photos/id/247/640/900',
    },
  },
}

export const Default = HeroFeatureTemplate.bind({})
Default.args = HeroFeatureData

export const Video = HeroFeatureTemplate.bind({})
Video.args = {
  ...HeroFeatureData,
  video: BaseVideoBgData,
}
