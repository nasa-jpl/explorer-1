import BlockImageCarousel from './BlockImageCarousel.vue'

export default {
  title: 'Components/Blocks/BlockImageCarousel',
  component: BlockImageCarousel,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="container"><story/></div>`
    })
  ],
  argTypes: {
    blockId: {
      text: { type: 'string' },
      required: false,
      description:
        'Fancybox: the block id is used to differentiate the fancybox of this carousel from others on the page. Generated by Wagtail.'
    },
    showTitle: {
      text: { type: 'string' },
      required: false,
      description: "Fancybox: if image titles should be displayed in the carousel's fancybox"
    }
  },
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockImageCarouselData = [
  {
    image: {
      alt: 'First image',
      title: 'Title of First image',
      caption: 'Lorem ipsum dolor sit amet.',
      credit: 'NASA/JPL-Caltech',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/1024/576',
      src: {
        height: '576',
        url: 'https://picsum.photos/1024/576',
        width: '1024'
      },
      srcSet: 'https://picsum.photos/320/180 320w, https://picsum.photos/1024/576 1024w'
    }
  },
  {
    image: {
      alt: 'Second image',
      title: 'Title of Second image',
      caption: '',
      credit: '',
      detailUrl: '',
      original: 'https://picsum.photos/1024/448',
      src: {
        height: '448',
        url: 'https://picsum.photos/1024/448',
        width: '1024'
      },
      srcSet: 'https://picsum.photos/320/140 320w, https://picsum.photos/1024/448 1024w'
    }
  },
  {
    image: {
      alt: 'Third image',
      title: 'Title of Third image',
      caption: '',
      credit: 'NASA/JPL',
      detailUrl: '',
      original: 'https://picsum.photos/400/800',
      src: {
        height: '800',
        url: 'https://picsum.photos/400/800',
        width: '400'
      },
      srcSet: 'https://picsum.photos/320/640 320w, https://picsum.photos/400/800 1024w'
    }
  },
  {
    image: {
      alt: 'Fourth image',
      title: 'Title of Fourth image',
      caption:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
      credit: 'NASA/JPL',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/869/700',
      src: {
        height: '700',
        url: 'https://picsum.photos/869/700',
        width: '869'
      },
      srcSet: 'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w'
    }
  }
]

// stories
export const Default = {
  name: 'BlockImageCarousel',
  args: {
    blockId: 'ev106po56n',
    showTitle: false,
    items: BlockImageCarouselData
  }
}
