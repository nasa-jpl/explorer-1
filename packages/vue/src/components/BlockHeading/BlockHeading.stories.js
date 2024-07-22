import BlockHeading from './BlockHeading.vue'

export default {
  title: 'Components/Blocks/BlockHeading',
  component: BlockHeading,
  excludeStories: /.*Data$/
}

export const BlockHeadingData = {
  blockType: 'HeadingBlock',
  heading: 'Heading Text',
  level: 'h2',
  size: 'h2'
}

// stories
export const BaseStory = {
  name: 'BlockHeading',
  args: {
    data: BlockHeadingData
  }
}
