import BlockCardGrid from './BlockCardGrid.vue'

export default {
  title: 'Components/Blocks/BlockCardGrid',
  component: BlockCardGrid,
  tags: ['!autodocs'],
  excludeStories: /.*Data$/
}

export const BlockCardGridData = [
  {
    label: 'Factoid 1',
    title: 'Nimble Limbs',
    description:
      'The robot has four limbs, each with seven degrees of freedom. The robot has four limbs, each with seven degrees of freedom. The robot has four limbs, each with seven degrees of freedom.',
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
      page: null,
      externalLink: ''
    }
  },
  {
    label: 'Factoid 2',
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
      externalLink: ''
    }
  },
  {
    label: 'Factoid 3',
    title: 'Nimble Limbs',
    description:
      'Proin sapien nulla, consequat et aliquam tristique, sollicitudin vitae lorem. Etiam nec vestibulum ante, semper blandit tortor. Nam id bibendum leo. Suspendisse a cursus felis, eget tristique nibh. Proin facilisis tortor eget pulvinar cursus.',
    image: null,
    link: {
      page: null,
      externalLink: ''
    }
  },
  {
    label: 'Factoid 4',
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
      page: null,
      externalLink: ''
    }
  },
  {
    label: 'Factoid 5',
    title: 'Nimble Limbs',
    description: 'The robot has four limbs, each with seven degrees of freedom.',
    image: null,
    link: {
      externalLink: '#',
      page: null
    }
  }
]

export const BaseStory = {
  name: 'BlockCardGrid',
  args: { cards: BlockCardGridData }
}
export const ThreeCards = {
  args: { cards: BlockCardGridData.slice(0, 3) }
}
