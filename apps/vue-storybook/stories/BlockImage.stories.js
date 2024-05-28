import BlockImage from '@explorer-1/vue/src/components/BlockImage/BlockImage.vue'
import BlockImageStandard from '@explorer-1/vue/src/components/BlockImage/BlockImageStandard.vue'
import BlockImageFullBleed from '@explorer-1/vue/src/components/BlockImage/BlockImageFullBleed.vue'

export default {
  title: 'Components/Blocks/BlockImage',
  component: BlockImage,
  argTypes: {
    fullBleed: {
      control: { type: 'boolean' }
    }
  },
  excludeStories: /.*Data$/
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

const BlockImageFullBleedTemplate = (args) => ({
  components: { BlockImageFullBleed },
  setup() {
    return { args }
  },
  template: `
    <BlockImageFullBleed v-bind="args" />`
})
const BlockImageStandardTemplate = (args) => ({
  components: { BlockImageStandard },
  setup() {
    return { args }
  },
  template: `
    <BlockImageStandard v-bind="args" />`
})

export const StreamfieldBlock = BlockImageTemplate.bind({})
StreamfieldBlock.args = {
  data: BlockImageData,
  fullBleed: BlockImageData.fullBleed
}

export const StreamfieldBlockUnconstrainedStandard = BlockImageTemplate.bind({})
StreamfieldBlockUnconstrainedStandard.args = {
  data: {
    ...BlockImageData,
    constrain: false
  },
  fullBleed: BlockImageData.fullBleed
}

export const StreamfieldBlockUnconstrainedFullBleed = BlockImageTemplate.bind({})
StreamfieldBlockUnconstrainedFullBleed.args = {
  data: {
    ...BlockImageData,
    constrain: false
  },
  fullBleed: true
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

export const StandaloneFullBleed = BlockImageFullBleedTemplate.bind({})
StandaloneFullBleed.args = { data: BlockImageData.imageFullBleed }

export const StandaloneStandard = BlockImageStandardTemplate.bind({})
StandaloneStandard.args = { data: BlockImageData.image }
