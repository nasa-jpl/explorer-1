import { BaseVideoData } from './BaseVideo.stories'
import HeroMedia from '@explorer-1/vue/src/components/HeroMedia/HeroMedia.vue'

export default {
  title: 'Components/Heroes/HeroMedia',
  component: HeroMedia,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="absolute inset-0"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    },
    viewMode: 'canvas'
  },
  excludeStories: /.*Data$/
}

export const HeroMediaData = {
  blockType: 'ImageChooserBlock',
  imageInline: {
    alt: 'A inline hero image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://picsum.photos/869/700',
    src: {
      height: 700,
      url: 'https://picsum.photos/869/700',
      width: 869
    },
    srcSet: 'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w'
  },
  image: {
    src: {
      url: 'https://picsum.photos/1440/620',
      width: 1440,
      height: 620
    },
    screenXs: {
      url: 'https://picsum.photos/320/139',
      width: 320
    },
    screenSm: {
      url: 'https://picsum.photos/640/276',
      width: 640
    },
    screenMd: {
      url: 'https://picsum.photos/768/331',
      width: 768
    },
    screenLg: {
      url: 'https://picsum.photos/1024/442',
      width: 1024
    },
    screenXl: {
      url: 'https://picsum.photos/1280/552',
      width: 1280
    },
    screenTwoxl: {
      url: 'https://picsum.photos/1440/620',
      width: 1440
    },
    screenThreexl: {
      url: 'https://picsum.photos/1800/775',
      width: 1800
    },
    alt: 'News detail page hero image',
    caption:
      '<p>NASA InSight&#x27;s robotic arm will use its scoop to pin the spacecraft&#x27;s heat probe against the wall of its hole.</p>',
    credit: 'NASA/JPL',
    detailUrl: '/images/image-123/'
  },
  caption: '',
  displayCaption: true
}

// stories
export const Hero = {
  args: HeroMediaData
}
export const CustomImageCaption = {
  args: {
    ...HeroMediaData,
    caption: '<p>My custom caption.</p>'
  }
}

export const NoCaptionText = {
  args: {
    ...HeroMediaData,
    caption: '<p>My custom caption.</p>',
    displayCaption: false
  }
}

export const NoCaptionArea = {
  args: {
    image: {
      src: HeroMediaData.image.src,
      alt: 'The hero image',
      caption: '\n', // a lot of prod data has this for caption
      credit: '',
      detailUrl: ''
    },
    caption: '<p>My custom caption.</p>',
    displayCaption: false
  }
}
export const NoLink = {
  args: {
    image: {
      src: HeroMediaData.image.src,
      alt: HeroMediaData.image.src,
      caption: HeroMediaData.image.caption,
      credit: HeroMediaData.image.credit,
      detailUrl: ''
    },
    caption: '',
    displayCaption: true
  }
}

export const Video = {
  args: {
    blockType: 'VideoBlock',
    video: BaseVideoData,
    caption:
      '<p>Lorem ipsum dolor sit amet. <a href="#">A link in the caption</a> testing render.</p>',
    credit: 'NASA/JPL'
  }
}
