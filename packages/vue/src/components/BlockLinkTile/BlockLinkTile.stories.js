// the base component should really be a single vue component with a "type" prop where the user can select between card and list, but this works well enough for a demo atm.

import BlockLinkTile from './BlockLinkTile.vue'

export default {
  title: 'Components/Cards/BlockLinkTile',
  component: BlockLinkTile,
  tags: ['cards'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyRoot'
    }
  },
  excludeStories: /.*Data$/
}

// shared data
export const BlockLinkTileData = {
  card: {
    url: '/topics/placeholder-slug-1',
    title: 'Lorem ipsum dolor',
    label: 'Solar System',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/490/430',
        width: 490,
        height: 430
      },
      alt: 'Alt text'
    }
  }
}

export const BaseStory = {
  name: 'Single Item',
  args: {
    data: BlockLinkTileData.card,
    headingLevel: 'h2',
    compact: false
  }
}
export const Compact = {
  args: {
    title: 'Lorem ipsum title in search results',
    url: '/missions/demo',
    externalLink: '',
    label: 'Mission',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    },
    headingLevel: 'h2',
    compact: true
  }
}
