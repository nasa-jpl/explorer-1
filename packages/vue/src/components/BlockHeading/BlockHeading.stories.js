import BlockHeading from './BlockHeading.vue'
export default {
  title: 'Components/Blocks/BlockHeading',
  component: BlockHeading,
  tags: ['wagtail-blocks'],
  excludeStories: /.*Data$/
}

export const BlockHeadingData = {
  blockType: 'HeadingBlock',
  heading: 'Heading Text',
  level: 'h2',
  size: 'h2',
  blockId: `${Math.random().toString(36).slice(2)}`
}

// stories
export const BaseStory = {
  name: 'BlockHeading',
  args: {
    data: BlockHeadingData
  }
}
