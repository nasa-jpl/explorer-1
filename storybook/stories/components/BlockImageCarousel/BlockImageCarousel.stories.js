import { BlockImageCarouselTemplate } from './BlockImageCarousel'

export default {
  title: 'Components/Blocks/BlockImageCarousel',
  decorators: [
    (Story) => `<div id="storyRoot" class="mx-auto container">${Story()}</div>`,
  ],
  argTypes: {
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
    docs: { inlineStories: false, iframeHeight: 850 },
    themes: {
      clearable: false,
      list: [
        {
          name: 'FullWidthDocs',
          class: ['sbdocs-preview-full-width'],
          default: true,
          visible: false,
        },
      ],
    },
  },
  excludeStories: /.*Data$/,
}

export const BlockImageCarouselData = {
  images: [
    {
      alt: 'First image',
      caption: 'Lorem ipsum dolor sit amet.',
      credit: 'NASA/JPL-Caltech',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/1024/576',
      src: {
        height: '576',
        url: 'https://picsum.photos/1024/576',
        width: '1024',
      },
      srcSet:
        'https://picsum.photos/320/180 320w, https://picsum.photos/1024/576 1024w',
    },
    {
      alt: 'Second image',
      caption: '',
      credit: '',
      detailUrl: '',
      original: 'https://picsum.photos/1024/448',
      src: {
        height: '448',
        url: 'https://picsum.photos/1024/448',
        width: '1024',
      },
      srcSet:
        'https://picsum.photos/320/140 320w, https://picsum.photos/1024/448 1024w',
    },
    {
      alt: 'Third image',
      caption: '',
      credit: 'NASA/JPL',
      detailUrl: '',
      original: 'https://picsum.photos/400/800',
      src: {
        height: '800',
        url: 'https://picsum.photos/400/800',
        width: '400',
      },
      srcSet:
        'https://picsum.photos/320/640 320w, https://picsum.photos/400/800 1024w',
    },
    {
      alt: 'Fourth image',
      caption:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
      credit: 'NASA/JPL',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/869/700',
      src: {
        height: '700',
        url: 'https://picsum.photos/869/700',
        width: '869',
      },
      srcSet:
        'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w',
    },
  ],
}

export const Carousel = BlockImageCarouselTemplate.bind({})
Carousel.args = BlockImageCarouselData
