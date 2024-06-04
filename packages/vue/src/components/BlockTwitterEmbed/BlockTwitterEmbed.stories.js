import BlockTwitterEmbed from './BlockTwitterEmbed.vue'

export default {
  title: 'Components/Blocks/BlockTwitterEmbed',
  component: BlockTwitterEmbed,
  excludeStories: /.*Data$/
}

export const BlockTwitterEmbedData = {
  blockType: 'TwitterEmbedBlock',
  username: 'NASAJPL'
}

const BlockTwitterEmbedTemplate = (args) => ({
  props: Object.keys(args),
  components: { BlockTwitterEmbed },
  template: `<BlockTwitterEmbed :data="data" />`
})

export const List = BlockTwitterEmbedTemplate.bind({})
List.storyName = 'BlockTwitterEmbed'
List.args = {
  data: BlockTwitterEmbedData
}
