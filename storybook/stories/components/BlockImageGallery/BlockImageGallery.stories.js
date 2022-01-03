import { BlockImageCarouselData } from '../BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageCarouselTemplate } from '../BlockImageCarousel/BlockImageCarousel'

export default {
  title: 'Components/Blocks/BlockImageGallery',
  decorators: [
    (Story) =>
      `<div id="storyDecorator" class="max-w-screen-3xl mx-auto">${Story()}</div>`,
  ],
  argTypes: {
    galleryCoverImage: {
      type: { name: 'array', required: true },
      description: 'Cover information',
    },
    images: {
      type: { name: 'array', required: true },
      description: 'An array of image data objects',
    },
  },
  parameters: {
    html: {
      root: '#storyDecorator',
    },
    viewMode: 'canvas',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
}

export const Default = BlockImageCarouselTemplate.bind({})
Default.storyName = 'BlockImageGallery'
Default.args = {
  ...BlockImageCarouselData,
  galleryCoverImage: {
    label: 'Mars',
    title: 'Image Gallery',
    description:
      'Donec dui nisl, maximus quis nibh eu, luctus ultrices nulla. Curabitur tempus, massa vitae porttitor porttitor, tortor erat tincidunt magna, vulputate varius nulla leo et mauris. Morbi blandit ac justo nec dictum. Nam pretium ex sit amet blandit malesuada.',
    image: {
      ...BlockImageCarouselData['images'][0],
      caption: '',
      credit: '',
    },
  },
}
