import BlockHeading from './BlockHeading.vue'

export default {
  title: 'Components/Blocks/BlockHeading',
  component: BlockHeading,
  excludeStories: /.*Data$/
}

export const BlockHeadingData = {
  blockType: 'HeadingBlock',
  heading: 'Heading Text',
  level: 'h3',
  size: 'h3'
}

// stories
export const Heading = {
  name: 'BlockHeading',
  args: {
    data: BlockHeadingData
  }
}
