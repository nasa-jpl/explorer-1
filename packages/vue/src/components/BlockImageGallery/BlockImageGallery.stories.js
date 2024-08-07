import { BlockImageCarouselData } from './../BlockImageCarousel/BlockImageCarousel.stories'
import BlockImageGallery from './BlockImageGallery.vue'

export default {
  title: 'Components/Blocks/BlockImageGallery',
  component: BlockImageGallery,
  decorators: [
    () => ({
      template: `<div id="storyDecorator" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],
  argTypes: {
    blockId: {
      text: { type: 'string' },
      required: false,
      description:
        'Fancybox: the block id is used to differentiate the fancybox of this gallery from others on the page. Generated by Wagtail.'
    }
  },

  parameters: {
    html: {
      root: '#storyDecorator'
    }
  },
  excludeStories: /.*Data$/
}

export const BlockImageGalleryData = {
  label: 'Mars',
  block: {
    id: 'x121p1yuly',
    blockType: 'ImageGalleryBlock',
    galleryTitle: 'Image Gallery',
    galleryDescription:
      'Gallery description, maximus quis nibh eu, luctus ultrices nulla. Curabitur tempus, massa vitae porttitor porttitor, tortor erat tincidunt magna, vulputate varius nulla leo et mauris.',
    coverImage: BlockImageCarouselData[0].image,
    gallerySlides: BlockImageCarouselData.slice(1)
  }
}

export const ImageGalleryData = {
  label: 'Mars',
  'block-id': 'x121p1yuly',
  title: 'Image Gallery',
  description:
    'Gallery description, maximus quis nibh eu, luctus ultrices nulla. Curabitur tempus, massa vitae porttitor porttitor, tortor erat tincidunt magna, vulputate varius nulla leo et mauris.',
  cover: BlockImageCarouselData[0].image,
  items: BlockImageCarouselData.slice(1)
}

export const BaseStory = {
  name: 'BlockImageGallery',
  args: ImageGalleryData
}
