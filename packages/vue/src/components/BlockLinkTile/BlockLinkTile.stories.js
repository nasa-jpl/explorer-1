// the base component should really be a single vue component with a "type" prop where the user can select between card and list, but this works well enough for a demo atm.

import BlockLinkTile from './BlockLinkTile.vue'

export default {
  title: 'Components/Blocks/BlockLinkTile',
  component: BlockLinkTile,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>`
    })
  ],
  argTypes: {
    headingLevel: {
      description:
        'Change the heading level for semantic markup. This does not affect the style of the heading.',
      control: {
        type: 'select'
      },
      options: [null, 'h1', 'h2', 'h3', 'h4', 'h5']
    }
  },
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

// shared data
export const BlockLinkTileData = {
  card: {
    url: '/topics/placeholder-slug-1',
    title: 'How engineers at NASA-JPL persevered to develop a ventilator',
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

export const SingleItem = {
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
