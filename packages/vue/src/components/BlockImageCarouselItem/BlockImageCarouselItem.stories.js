import BlockImageCarouselItem from './BlockImageCarouselItem.vue'

export default {
  title: 'Components/Blocks/BlockImageCarousel/BlockImageCarouselItem',
  component: BlockImageCarouselItem,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="container mx-auto"><story/></div>`
    })
  ],
  argTypes: {
    blockId: {
      text: { type: 'string' },
      required: false,
      description:
        'Fancybox: the block id is used to differentiate the fancybox of the items in a carousel from other carousels on the page. Generated by Wagtail. Usually provided by parent component `BlockImageCarousel`.'
    },
    showTitle: {
      text: { type: 'string' },
      required: false,
      description:
        "Fancybox: if the image title should be displayed in the item's fancybox. Usually provided by parent component `BlockImageCarousel`."
    }
  },
  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

// shared data
export const BlockImageCarouselItemData = {
  item: {
    image: {
      alt: 'Fourth image',
      title: 'Image Title',
      caption:
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>',
      credit: 'NASA/JPL',
      detailUrl: '/image/placeholder/',
      original: 'https://picsum.photos/869/700',
      src: {
        height: 700,
        url: 'https://picsum.photos/869/700',
        width: 869
      },
      srcSet: 'https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w'
    }
  }
}

export const BaseStory = {
  name: 'BlockImageCarouselItem',
  args: {
    image: BlockImageCarouselItemData.item.image,
    caption: '<p>Custom caption.</p>',
    displayCaption: true,
    blockId: 'p9fipftka4',
    showTitle: true
  }
}
