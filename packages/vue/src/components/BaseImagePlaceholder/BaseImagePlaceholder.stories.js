import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder from './BaseImagePlaceholder.vue'
export default {
  title: 'Components/Base/BaseImagePlaceholder',
  component: BaseImagePlaceholder,
  excludeStories: /.*Data$/,
  decorators: () => ({
    template: '<div id="storyRoot" class="w-3/4"><story /></div>'
  }),
  tags: ['autodocs'],
  parameters: {
    slots: {
      default: {
        description: 'Slot for BaseImage',
        components: { BaseImage },
        template: `<BaseImage :object-fit-class="args.BaseImageProps.objectFitClass" :loading="args.BaseImageProps.loading" :src="args.BaseImageProps.src" :srcset="args.BaseImageProps.srcset" :alt="args.BaseImageProps.alt" :width="args.BaseImageProps.width" :height="args.BaseImageProps.height" />`
      }
    },
    html: {
      root: '#storyRoot'
    },
    docs: {
      description: {
        component: 'Placeholder image component with aspect ratio and background controls'
      }
    }
  }
}

// data
export const BaseImagePlaceholderData = {
  aspectRatio: '12:9',
  darkMode: true,
  transparentMode: false,
  noLogo: false
}

export const WithImage = {
  name: 'With Image',
  args: {
    ...BaseImagePlaceholderData,
    BaseImageProps: {
      src: 'https://picsum.photos/1200/900',
      srcset: 'https://picsum.photos/1200/900 1200w,',
      alt: 'alt text for image',
      width: '1200',
      height: '900',
      objectFitClass: 'contain',
      loading: 'lazy'
    }
  }
}
export const BaseStory = {
  name: 'No Image',
  args: {
    ...BaseImagePlaceholderData,

    BaseImageProps: {
      src: '',
      srcset: '',
      alt: '',
      width: '',
      height: '',
      objectFitClass: 'scaleDown',
      loading: ''
    },
    noLogo: false,
    aspectRatio: '16:9',
    responsiveAspectRatio: 'md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine'
  }
}
