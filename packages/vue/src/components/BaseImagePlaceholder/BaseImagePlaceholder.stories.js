import BaseImage from './../BaseImage/BaseImage.vue'
import BaseImagePlaceholder, { aspectRatios } from './BaseImagePlaceholder.vue'
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
        component:
          'Aspect ratio CSS class. View dropdown to see all options. More classes can be added in `/src/scss/_aspect-ratios.scss`'
      }
    }
  },
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: Object.keys(aspectRatios)
    },
    responsiveAspectRatio: {
      description:
        'Custom tailwind classes to combine screen-size directives with aspect ratios. Example: `md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine`. Overrides `aspectRatio` setting.',
      control: { type: 'text' }
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

    noLogo: true,
    aspectRatio: '16:9',
    responsiveAspectRatio: 'md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine'
  }
}
