import { BlockImageCarouselItemTemplate } from './BlockImageCarouselItem'

export default {
  title: 'Components/Blocks/BlockImageCarousel/BlockImageCarouselItem',
  argTypes: {
    image: {
      type: { name: 'object', required: false },
      description: 'Image object',
    },
  },
  decorators: [
    (Story) =>
      `<div id="storyDecorator" class="container mx-auto">${Story()}</div>`,
  ],
  parameters: {
    html: {
      root: '#storyDecorator',
    },
  },
}

export const Default = BlockImageCarouselItemTemplate.bind({})
Default.storyName = 'BlockImageCarouselItem'
Default.args = {
  image: {
    src: {
      url: 'https://placekitten.com/869/700',
      width: 869,
      height: 700,
    },
    srcSet:
      'https://placekitten.com/320/258 320w, https://placekitten.com/869/700 1024w',
    alt: 'Fourth image',
    caption:
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
    credit: 'NASA/JPL',
    url: '/image/placeholder/',
  },
}
