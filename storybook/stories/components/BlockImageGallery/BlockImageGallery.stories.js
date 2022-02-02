import { BlockImageCarouselData } from '../BlockImageCarousel/BlockImageCarousel.stories'
import { BlockImageCarouselTemplate } from '../BlockImageCarousel/BlockImageCarousel'

export default {
  title: 'Components/Blocks/BlockImageGallery',
  decorators: [
    (Story) =>
      `<div id="storyRoot" class="max-w-screen-3xl mx-auto">${Story()}</div>`,
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
      root: '#storyRoot',
    },
    viewMode: 'docs',
    docs: {
      inlineStories: false,
      iframeHeight: 1050,
      description: {
        component:
          'A wide screen version of BlockImageCarousel that includes a cover image with a text overlay. Includes page layout assumptions and uses a max width of `max-w-screen-3xl`.',
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'ThemeLight',
          class: ['ThemeLight', 'sbdocs-preview-full-width'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'ThemeDark',
          class: ['ThemeDark', 'sbdocs-preview-full-width'],
          color: '#000000',
        },
      ],
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
