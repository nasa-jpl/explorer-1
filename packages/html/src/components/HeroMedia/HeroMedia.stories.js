import { MixinVideoBgData } from '../MixinVideoBg/MixinVideoBg.stories'
import { HeroMediaTemplate } from './HeroMedia'

export default {
  title: 'Components/Blocks/Heroes/Media Only',
  excludeStories: /.*Data$/,
  decorators: [(Story) => `<div id="storyRoot" class="absolute inset-0">${Story()}</div>`],
  argTypes: {
    image: {
      type: { name: 'array', required: false },
      description: 'An array of image data objects'
    },
    video: {
      type: { name: 'array', required: false },
      description: 'An array of video data objects'
    },
    caption: {
      type: { name: 'string', required: false },
      description: ''
    },
    credit: {
      type: { name: 'string', required: false },
      description: ''
    }
  },
  parameters: {
    html: {
      root: '#storyRoot'
    },
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 700,
      description: {
        component: 'No text overlay, just an image or video with a caption below.'
      }
    }
  }
}

export const HeroMediaData = {
  image: {
    src: {
      url: 'https://picsum.photos/869/700',
      width: 869,
      height: 700
    },
    srcSet: 'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w',
    alt: 'News detail page hero image'
  },
  caption:
    '<p>NASA InSight&#x27;s robotic arm will use its scoop to pin the spacecraft&#x27;s heat probe against the wall of its hole.</p>',
  credit: 'NASA/JPL',
  url: '/images/image-123/'
}

export const BaseStory = HeroMediaTemplate.bind({})
BaseStory.args = HeroMediaData

export const NoCaption = HeroMediaTemplate.bind({})
NoCaption.args = {
  image: HeroMediaData.image,
  caption: '', // a lot of prod data has this for caption
  credit: '',
  url: ''
}

export const NoLink = HeroMediaTemplate.bind({})
NoLink.args = {
  ...HeroMediaData,
  url: ''
}

export const Video = HeroMediaTemplate.bind({})
Video.args = {
  video: MixinVideoBgData,
  caption:
    '<p>Lorem ipsum dolor sit amet. <a href="#">A link in the caption</a> testing render.</p>',
  credit: 'NASA/JPL'
}
