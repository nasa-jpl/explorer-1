import { BaseImagePlaceholderTemplate } from './BaseImagePlaceholder.js'

export default {
  title: 'Components/Base/BaseImagePlaceholder',
  argTypes: {
    aspectRatio: {
      type: 'string',
      control: {
        type: 'select',
        options: [
          'aspect-ratio-none',
          'aspect-ratio-four-five',
          'aspect-ratio-square',
          'aspect-ratio-one-one',
          'aspect-ratio-two-one',
          'aspect-ratio-two-three',
          'aspect-ratio-three-two',
          'aspect-ratio-sixteen-seven',
          'aspect-ratio-sixteen-nine',
          'aspect-ratio-twelve-nine',
          'aspect-ratio-nine-sixteen',
          'aspect-ratio-seven-eight',
          'aspect-ratio-eight-seven',
          'aspect-ratio-four-three',
          'aspect-ratio-four-five',
          'aspect-ratio-twentyone-nine',
        ],
      },
      table: {
        defaultValue: { summary: 'aspect-ratio-none' },
      },
    },
    theme: {
      type: 'string',
      control: {
        type: 'select',
        options: ['light-theme', 'dark-theme', 'transparent-theme'],
      },
      table: {
        defaultValue: { summary: 'light-theme' },
      },
    },
    noLogo: {
      type: 'boolean',
    },
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
  },
  parameters: {
    docs: {
      description: {
        component: `The \`BaseImagePlaceholder\` component is designed to appear as a temporary stand-in to be replaced by an actual image.<br>
          <ul>
          <li>expects to contain an image as a child element in its primary slot</li>
          <li>provides a lazy-loading block for the image to load into</li>
          <li>can be used to maintain an aspect ratio</li>
          <li>compatible with TailwindCSS classes, e.g. \`.rounded-lg\` to have round edges around the image. Think of it like a frame to put an image within.</li>
          </ul>`,
      },
    },
  },
}

export const Default = BaseImagePlaceholderTemplate.bind({})
Default.args = {
  noLogo: false,
}
export const NoImage = BaseImagePlaceholderTemplate.bind({})
NoImage.args = {
  aspectRatio: 'aspect-ratio-two-one',
  noLogo: false,
  noImage: true,
}
