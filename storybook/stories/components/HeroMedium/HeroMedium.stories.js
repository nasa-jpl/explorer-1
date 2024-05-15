import { MixinVideoBgData } from '../MixinVideoBg/MixinVideoBg.stories'
import { HeroMediumTemplate } from './HeroMedium'

export default {
  title: 'Components/Blocks/Heroes/Medium',
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
    docs: {
      description: {
        components:
          'Includes a text overlay. Height of 400px (flexible) on small screens; fixed at 600px on larger screens.',
      },
    },
  },
}

const HeroMediumData = {
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

export const Default = HeroMediumTemplate.bind({})
Default.args = HeroMediumData

export const Video = HeroMediumTemplate.bind({})
Video.args = {
  ...HeroMediumData,
  video: MixinVideoBgData,
}
