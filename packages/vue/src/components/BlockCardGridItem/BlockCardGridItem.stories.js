import BlockCardGridItem from './BlockCardGridItem.vue'

export default {
  title: 'Components/Cards/BlockCardGridItem',
  component: BlockCardGridItem,
  tags: ['!autodocs'],
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="lg:w-1/3"><story/></div>`
    })
  ],
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockCardData = {
  label: 'Factoid',
  title: 'Nimble Limbs',
  description: 'The robot has four limbs, each with seven degrees of freedom.',
  image: {
    alt: 'Fourth image',
    src: {
      height: 400,
      url: 'https://picsum.photos/800/400',
      width: 800
    },
    srcSet: 'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w'
  },
  link: {
    page: {
      url: '#'
    },
    externalLink: null
  }
}

export const BaseStory = { name: 'BlockCardGridItem', args: BlockCardData }
export const NoLink = { args: { ...BlockCardData, link: undefined } }
