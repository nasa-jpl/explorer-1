import BlockCardGroup from './BlockCardGroup.vue'

export default {
  title: 'Components/Blocks/BlockCardGroup',
  component: BlockCardGroup,
  excludeStories: /.*Data$/
}

export const BlockCardGroupData = [
  {
    type: 'Factoid 1',
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
    }
  },
  {
    type: 'Factoid 2',
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
    }
  },
  {
    type: 'Factoid 3',
    title: 'Nimble Limbs',
    description:
      'Proin sapien nulla, consequat et aliquam tristique, sollicitudin vitae lorem. Etiam nec vestibulum ante, semper blandit tortor. Nam id bibendum leo. Suspendisse a cursus felis, eget tristique nibh. Proin facilisis tortor eget pulvinar cursus.',
    image: null
  },
  {
    type: 'Factoid 4',
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
    }
  },
  {
    type: 'Factoid 5',
    title: 'Nimble Limbs',
    description: 'The robot has four limbs, each with seven degrees of freedom.',
    image: null
  }
]

export const Default = {
  name: 'BlockCardGroup',
  args: { facts: BlockCardGroupData }
}
