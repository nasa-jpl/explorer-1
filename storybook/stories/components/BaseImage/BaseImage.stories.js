import { BaseImageTemplate } from './BaseImage.js'

export default {
  title: 'Components/Base/BaseImage',
  excludeStories: /.*Data$/,
  argTypes: {
    objectFitClass: {
      type: 'string',
      control: {
        type: 'select',
        options: [
          'object-none',
          'object-contain',
          'object-cover',
          'object-fill',
          'object-scale-down',
        ],
      },
      table: {
        defaultValue: { summary: 'object-contain' },
      },
    },
    loading: {
      type: 'string',
      control: {
        type: 'select',
        options: ['lazy', 'eager'],
      },
      table: {
        defaultValue: { summary: 'lazy' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The BaseImage component is a simple `<img />` tag used to embed an image with object-fit classes and lazy loading properties.',
      },
    },
  },
}

export const BaseImageData = {
  src: 'https://picsum.photos/800/400',
  srcset: 'https://picsum.photos/800/400 800w, ',
  alt: 'Alt text for image',
  width: '800',
  height: '400',
  loading: 'lazy',
  imageClass: '',
  objectFitClass: 'object-contain',
}
export const Default = BaseImageTemplate.bind({})
Default.args = BaseImageData
