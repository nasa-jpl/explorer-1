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

export const BaseStory = {
  name: 'BlockTwitterEmbed',
  args: {
    data: BlockTwitterEmbedData
  }
}
