import BlockImage from './BlockImage.vue'

export default {
  title: 'Components/Blocks/BlockImage',
  component: BlockImage,
  tags: ['autodocs', 'wagtail-blocks'],
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component:
          'The combination of BaseImage and BaseImageCaption, plus adding support for expanding the image in a lightbox and styling it to be a full-bleed image.'
      }
    }
  }
}

// shared data
export const BlockImageData = {
  blockType: 'FullBleedImageBlock',
  fullBleed: false,
  image: {
    alt: 'Fourth image',
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
  imageFullBleed: {
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://picsum.photos/1800/600',
    src: {
      width: 1800,
      height: 900,
      url: 'https://picsum.photos/1800/600'
    },
    srcCropped: {
      width: 1024,
      height: 341,
      url: 'https://picsum.photos/1024/341'
    },
    screenXs: {
      url: 'https://picsum.photos/320/107',
      width: 320
    },
    screenLg: {
      url: 'https://picsum.photos/1024/341',
      width: 1024
    },
    screenXl: {
      url: 'https://picsum.photos/1280/427',
      width: 1280
    },
    screenThreexl: {
      url: 'https://picsum.photos/1800/600',
      width: 1800
    }
  }
}

// templates
const BlockImageTemplate = (args) => ({
  components: { BlockImage },
  setup() {
    return { args }
  },
  template: `
    <BlockImage v-bind="args" />`
})

export const BaseStory = BlockImageTemplate.bind({})
BaseStory.storyName = 'Standard'
BaseStory.args = {
  data: BlockImageData,
  fullBleed: BlockImageData.fullBleed
}

export const Unconstrained = BlockImageTemplate.bind({})
Unconstrained.args = {
  data: {
    ...BlockImageData,
    constrain: false
  },
  fullBleed: BlockImageData.fullBleed
}

export const CustomCaption = BlockImageTemplate.bind({})
CustomCaption.args = {
  data: {
    ...BlockImageData,
    caption: '<p>My custom caption.</p>',
    displayCaption: true
  },
  fullBleed: BlockImageData.fullBleed
}

export const NoCaption = BlockImageTemplate.bind({})
NoCaption.args = {
  data: {
    ...BlockImageData,
    displayCaption: false
  },
  fullBleed: BlockImageData.fullBleed
}

export const FullBleed = BlockImageTemplate.bind({})
FullBleed.args = {
  data: {
    ...BlockImageData,
    constrain: true
  },
  fullBleed: true
}

export const FullBleedUnconstrained = BlockImageTemplate.bind({})
FullBleedUnconstrained.args = {
  data: {
    ...BlockImageData,
    constrain: false
  },
  fullBleed: true
}
