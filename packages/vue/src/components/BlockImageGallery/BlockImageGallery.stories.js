import { BlockImageCarouselData } from './../BlockImageCarousel/BlockImageCarousel.stories'
import BlockImageGallery from './BlockImageGallery.vue'

export default {
  title: 'Components/Blocks/BlockImageGallery',
  component: BlockImageGallery,
  tags: ['wagtail-blocks', 'carousels'],
  decorators: [
    () => ({
      template: `<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>`
    })
  ],

  parameters: {
    html: {
      root: '#storyRoot'
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
  blockId: 'x121p1yuly',
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
