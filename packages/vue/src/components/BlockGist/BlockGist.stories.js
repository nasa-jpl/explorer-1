import BlockGist from './BlockGist.vue'

export default {
  title: 'Components/Blocks/BlockGist',
  component: BlockGist,
  excludeStories: /.*Data$/
}

export const BlockGistData = {
  blockType: 'GitHubGistBlock',
  caption:
    '<p data-block-key="a7ves">The count of contributions (summary of Pull Requests, opened issues and commits) to public repos at GitHub.com from Wed, 21 Sep 2022 till Thu, 21 Sep 2023.</p>',
  id: 'cefc8e20-2833-4d0b-a4d6-7f469d5dbd02',
  url: 'https://gist.github.com/paulmillr/2657075'
}

// stories
export const BaseStory = {
  name: 'BlockGist',
  args: {
    data: BlockGistData
  }
}
