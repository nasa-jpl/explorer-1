import { BaseImageTemplate } from './BaseImage.js'

export default {
  title: 'Components/Base/BaseImage',
  excludeStories: /.*Data$/,
  argTypes: {
    src: {
      type: { name: 'string', required: true },
    },
    srcset: {
      type: 'string',
    },
    alt: {
      type: { name: 'string', required: true },
    },
    width: {
      type: { name: 'number', required: true },
    },
    height: {
      type: { name: 'number', required: true },
    },
    objectFitClass: {
      type: 'string',
      description:
        'Use Tailwind CSS object fit classes to specify how the image will scale within `BaseImagePlaceholder`',
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
    imageClass: {
      type: 'string',
      description: 'Apply any CSS class directly to the image element',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'The BaseImage component is a simple `<img />` tag wrapped in a `<div>` and is used to render an image with object-fit classes and lazy loading properties.',
      },
    },
  },
}

export const BaseImageData = {
  src: 'https://picsum.photos/800/400',
  srcset: 'https://picsum.photos/800/400 800w, ',
  alt: 'Alt text for image',
  width: 800,
  height: 400,
  imageClass: '',
  objectFitClass: 'object-contain',
}
export const Default = BaseImageTemplate.bind({})
Default.args = BaseImageData

export const LazyLoading = BaseImageTemplate.bind({})
LazyLoading.args = BaseImageData
LazyLoading.decorators = [
  (Story) => `
  <div class="max-w-full">
    <div style="height:2500px">
      Scroll down
    </div>
    <div id="storyDecorator">
      ${Story()}
    </div>
  </div>
  `,
]
LazyLoading.parameters = {
  html: {
    root: '#storyDecorator',
  },
}
