import BlockGist from './BlockGist.vue'

export default {
  title: 'Components/Blocks/BlockGist',
  component: BlockGist,
  tags: ['wagtail-blocks'],
  excludeStories: /.*Data$/
}

export const BlockGistStoryData = {
  blockType: 'GitHubGistBlock',
  caption: '<p>Caption for gist block</p>',
  id: 'cefc8e20-2833-4d0b-a4d6-7f469d5dbd02',
  url: 'https://gist.github.com/nasajpledu/acb1a3f04895a9905570b267193d42ac'
}

// stories
export const BaseStory = {
  name: 'BlockGist',
  args: {
    data: BlockGistStoryData
  }
}
