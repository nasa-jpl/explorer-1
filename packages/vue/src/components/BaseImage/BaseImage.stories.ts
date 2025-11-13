import BaseImage from './BaseImage.vue'
export default {
  title: 'Components/Base/BaseImage',
  component: BaseImage,
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component:
          'The BaseImage component is a simple `<img />` tag wrapped in a `<div>` and is used to render an image with object-fit classes and lazy loading properties.'
      }
    },
    html: {
      root: '#storyRoot'
    }
  }
}

export const BaseImageData = {
  src: 'https://picsum.photos/800/400',
  srcset: 'https://picsum.photos/800/400 800w, ',
  alt: 'Alt text for image',
  width: 800,
  height: 400,
  imageClass: '',
  objectFitClass: 'contain'
}
// stories
export const BaseStory = {
  args: BaseImageData,
  decorators: [() => ({ template: '<div id="storyRoot" class="max-w-full"><story /></div>' })]
}

export const LazyLoading = {
  args: BaseImageData,
  decorators: [
    () => ({
      template:
        '<div class="max-w-full"><div style="height:3500px">Scroll down and watch the network tab ⬇️</div><div id="storyRoot"><story /></div></div>'
    })
  ]
}
