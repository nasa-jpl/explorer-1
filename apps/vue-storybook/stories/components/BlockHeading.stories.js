import BlockHeading from '@explorer-1/vue/src/components/BlockHeading/BlockHeading.vue'

export default {
  title: 'Components/Blocks/BlockHeading',
  component: BlockHeading,
  excludeStories: /.*Data$/
}

export const BlockHeadingData = {
  blockType: 'HeadingBlock',
  heading: 'Heading Text'
}

// template
const BlockHeadingTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockHeading },
  template: `
  <BlockHeading
    :data="data"
  />
  `
})

// stories
export const Heading = BlockHeadingTemplate.bind({})
Heading.storyName = 'BlockHeading'
Heading.args = {
  data: BlockHeadingData
}
