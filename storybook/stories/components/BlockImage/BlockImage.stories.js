import { BlockImageTemplate } from './BlockImage'
import { BlockImageFullBleedTemplate } from './BlockImageFullBleed'
import { BlockImageStandardTemplate } from './BlockImageStandard'

export default {
  title: 'Components/Blocks/BlockImage',
  argTypes: {
    fullBleed: {
      control: { type: 'boolean' },
    },
  },
  excludeStories: /.*Data$/,
}

export const BlockImageData = {
  fullBleed: false,
  image: {
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    original: 'https://placekitten.com/869/700',
    src: {
      height: 700,
      url: 'https://placekitten.com/869/700',
      width: 869,
    },
    srcSet:
      'https://placekitten.com/320/258 320w, https://placekitten.com/869/700 1024w',
  },
  imageFullBleed: {
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    detailUrl: '/image/placeholder/',
    src: {
      width: 1800,
      height: 900,
      url: 'https://picsum.photos/1800/900',
    },
  },
}

export const StreamfieldBlock = BlockImageTemplate.bind({})
StreamfieldBlock.args = BlockImageData

export const StandaloneFullBleed = BlockImageFullBleedTemplate.bind({})
StandaloneFullBleed.args = { image: BlockImageData.image }

export const StandaloneStandard = BlockImageStandardTemplate.bind({})
StandaloneStandard.args = { image: BlockImageData.image }
