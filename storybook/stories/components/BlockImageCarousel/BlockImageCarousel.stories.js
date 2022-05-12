import { Default } from '../BaseImageCaption/BaseImageCaption.stories'
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
  excludeStories: /.*Data$/,
}

export const BlockImageCarouselData = {
  images: [
    {
      alt: 'First image',
      caption: 'Lorem ipsum dolor sit amet.',
      credit: 'NASA/JPL-Caltech',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/id/1018/2048/1152',
      original_webp: 'https://picsum.photos/id/1018/2048/1152.webp',
      src: {
        height: '576',
        url: 'https://picsum.photos/id/1018/1024/576',
        width: '1024',
      },
      src_webp: 'https://picsum.photos/id/1018/1024/576.webp',
      srcSet:
        'https://picsum.photos/id/1018/320/180 320w, https://picsum.photos/id/1018/1024/576 1024w',
    },
    {
      alt: 'Second image',
      caption: '',
      credit: '',
      detailUrl: '',
      original: 'https://picsum.photos/id/222/2048/896',
      original_webp: 'https://picsum.photos/id/222/2048/896.webp',
      src: {
        height: '448',
        url: 'https://picsum.photos/id/222/1024/448',
        width: '1024',
      },
      src_webp: 'https://picsum.photos/id/222/1024/448.webp',
      srcSet:
        'https://picsum.photos/id/222/320/140 320w, https://picsum.photos/id/222/1024/448 1024w',
    },
    {
      alt: 'Third image',
      caption: '',
      credit: 'NASA/JPL',
      detailUrl: '',
      original: 'https://picsum.photos/id/1021/800/1600',
      original_webp: 'https://picsum.photos/id/1021/800/1600.webp',
      src: {
        height: '800',
        url: 'https://picsum.photos/id/1021/400/800',
        width: '400',
      },
      src_webp: 'https://picsum.photos/id/1021/400/800.webp',
      srcSet:
        'https://picsum.photos/id/1021/320/640 320w, https://picsum.photos/id/1021/400/800 1024w',
    },
    {
      alt: 'Fourth image',
      caption:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
      credit: 'NASA/JPL',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/id/1015/1738/1400',
      original_webp: 'https://picsum.photos/id/1015/1738/1400.webp',
      src: {
        height: '700',
        url: 'https://picsum.photos/id/1015/869/700',
        width: '869',
      },
      src_webp: 'https://picsum.photos/id/1015/869/700',
      srcSet:
        'https://picsum.photos/id/1015/320/258 320w, https://picsum.photos/id/1015/869/700 1024w',
    },
  ],
}

export const Carousel = BlockImageCarouselTemplate.bind({})
Carousel.storyName = 'BlockImageCarousel'
Carousel.args = BlockImageCarouselData
