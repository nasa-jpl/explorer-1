import { RoboticsDetailFactsTemplate } from './RoboticsDetailFacts.js'
export default {
  title: 'Components/RoboticsDetailFacts',
  decorators: [
    (Story) =>
      `<div id="storyDecorator" class="lg:container max-w-screen-3xl mx-auto">${Story()}</div>`,
  ],
  argTypes: {
    items: {
      type: {
        name: 'Array',
        required: true,
      },
      description:
        'Array of card objects. See `RoboticsDetailFactsItem` for data structure.',
    },
  },
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    docs: {
      description: {
        component:
          'Displays several cards in a row that will wrap to the next line. On mobile, the cards condense into a carousel. Note that the mobile view will only work when viewing the Storybook Canvas.',
      },
    },
  },
  excludeStories: /.*Data$/,
}

const RoboticsDetailFactsData = [
  {
    type: 'Factoid 1',
    title: 'Nimble Limbs',
    text: 'The robot has four limbs, each with seven degrees of freedom. The robot has four limbs, each with seven degrees of freedom. The robot has four limbs, each with seven degrees of freedom.',
    image: {
      alt: 'Fourth image',
      src: {
        height: 400,
        url: 'https://picsum.photos/800/400',
        width: 800,
      },
      srcSet:
        'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w',
    },
  },
  {
    type: 'Factoid 2',
    title: 'Nimble Limbs',
    text: 'The robot has four limbs, each with seven degrees of freedom.',
    image: {
      alt: 'Fourth image',
      src: {
        height: 400,
        url: 'https://picsum.photos/800/400',
        width: 800,
      },
      srcSet:
        'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w',
    },
  },
  {
    type: 'Factoid 3',
    title: 'Nimble Limbs',
    text: 'Proin sapien nulla, consequat et aliquam tristique, sollicitudin vitae lorem. Etiam nec vestibulum ante, semper blandit tortor. Nam id bibendum leo. Suspendisse a cursus felis, eget tristique nibh. Proin facilisis tortor eget pulvinar cursus.',
    image: null,
  },
  {
    type: 'Factoid 4',
    title: 'Nimble Limbs',
    text: 'The robot has four limbs, each with seven degrees of freedom.',
    image: {
      alt: 'Fourth image',
      src: {
        height: 400,
        url: 'https://picsum.photos/800/400',
        width: 800,
      },
      srcSet:
        'https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w',
    },
  },
  {
    type: 'Factoid 5',
    title: 'Nimble Limbs',
    text: 'The robot has four limbs, each with seven degrees of freedom.',
    image: null,
  },
]

export const Group = RoboticsDetailFactsTemplate.bind({})
Group.args = {
  items: RoboticsDetailFactsData,
}
