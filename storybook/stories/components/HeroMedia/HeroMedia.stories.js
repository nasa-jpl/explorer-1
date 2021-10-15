import { BaseVideoBgData } from '../BaseVideoBg/BaseVideoBg.stories'
import { HeroMediaTemplate } from './HeroMedia'

export default {
  title: 'Components/Heroes/HeroMedia',
  excludeStories: /.*Data$/,
  decorators: [
    (Story) =>
      `<div id="storyDecorator" class="absolute inset-0">${Story()}</div>`,
  ],
  argTypes: {
    image: {
      type: { name: 'array', required: false },
      description: 'An array of image data objects',
    },
    video: {
      type: { name: 'array', required: false },
      description: 'An array of video data objects',
    },
    caption: {
      type: { name: 'string', required: false },
      description: '',
    },
    credit: {
      type: { name: 'string', required: false },
      description: '',
    },
  },
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    viewMode: 'canvas',
  },
}

export const HeroMediaData = {
  image: {
    src: {
      url: 'https://picsum.photos/1440/620',
      width: 1440,
      height: 620,
    },
    srcSet:
      'https://picsum.photos/320/139 320w, https://picsum.photos/640/276 640w, https://picsum.photos/768/331 768w, https://picsum.photos/1024/442 1024w, https://picsum.photos/1280/552 1280w, https://picsum.photos/1440/620 1440w, https://picsum.photos/1800/775 1800w',
    alt: 'News detail page hero image',
  },
  caption:
    '<p>NASA InSight&#x27;s robotic arm will use its scoop to pin the spacecraft&#x27;s heat probe against the wall of its hole.</p>',
  credit: 'NASA/JPL',
  url: '/images/image-123/',
}

export const Hero = HeroMediaTemplate.bind({})
Hero.args = HeroMediaData

export const NoCaption = HeroMediaTemplate.bind({})
NoCaption.args = {
  image: HeroMediaData.image,
  caption: '', // a lot of prod data has this for caption
  credit: '',
  url: '',
}

export const NoLink = HeroMediaTemplate.bind({})
NoLink.args = {
  ...HeroMediaData,
  url: '',
}

export const Video = HeroMediaTemplate.bind({})
Video.args = {
  video: BaseVideoBgData,
  caption:
    '<p>Lorem ipsum dolor sit amet. <a href="#">A link in the caption</a> testing render.</p>',
  credit: 'NASA/JPL',
}
