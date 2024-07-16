import { BaseImagePlaceholderTemplate } from './BaseImagePlaceholder.js'
import { BaseImageData } from '../BaseImage/BaseImage.stories.js'

export default {
  title: 'Components/Base/BaseImagePlaceholder',
  argTypes: {
    aspectRatio: {
      type: 'string',
      description:
        'Aspect ratio CSS class. View dropdown to see all options. More classes can be added in `/src/scss/_aspect-ratios.scss`',
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
          'aspect-ratio-twentyone-nine'
        ]
      },
      table: {
        defaultValue: { summary: 'aspect-ratio-none' }
      }
    },
    theme: {
      type: 'string',
      description: 'Theme color for the placeholder background.',
      control: {
        type: 'select',
        options: ['light-theme', 'dark-theme', 'transparent-theme']
      },
      table: {
        defaultValue: { summary: 'light-theme' }
      }
    },
    noLogo: {
      type: 'boolean',
      description: 'If a JPL logo should appear when there is no image'
    },
    src: {
      type: { name: 'string', required: true },
      description: 'Passed to `BaseImage`.'
    },
    srcset: {
      type: 'string',
      description: 'Passed to `BaseImage`.'
    },
    alt: {
      type: { name: 'string', required: true },
      description: 'Passed to `BaseImage`.'
    },
    width: {
      type: { name: 'number', required: true },
      description: 'Passed to `BaseImage`.'
    },
    height: {
      type: { name: 'number', required: true },
      description: 'Passed to `BaseImage`.'
    },
    objectFitClass: {
      type: 'string',
      description:
        "Passed to `BaseImage`. Apply a Tailwind CSS object fit class to `BaseImage` to specify how the image will scale within the placeholder's aspect ratio.",
      control: {
        type: 'select',
        options: [
          'object-none',
          'object-contain',
          'object-cover',
          'object-fill',
          'object-scale-down'
        ]
      },
      table: {
        defaultValue: { summary: 'object-contain' }
      }
    },
    imageClass: {
      table: { disable: true }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `The \`BaseImagePlaceholder\` component is designed to appear as a temporary stand-in to be replaced by an actual image.

- expects to contain an image as a child element in its primary slot
- provides a lazy-loading block for the image to load into
- can be used to maintain an aspect ratio
- compatible with Tailwind CSS classes, e.g. \`.rounded-lg\` to have round edges around the image. Think of it like a frame to put an image within.

## Accessibility notes

BaseImagePlaceholder is a presentational element consisting of a single \`div\` with a background image (JPL Logo), without semantic meaning, it simply prevents page load becoming janky by setting a 'placeholder' for the images that are yet to be loaded with \`loading="lazy"\` or LazySizes fallback. As such it should not need to meet color contrast requirements.
          `
      }
    }
  }
}

export const Basic = BaseImagePlaceholderTemplate.bind({})
Basic.args = {
  noLogo: false,
  ...BaseImageData
}
export const BaseStory = BaseImagePlaceholderTemplate.bind({})
BaseStory.args = {
  aspectRatio: 'aspect-ratio-two-one',
  noLogo: false
}
export const LazyLoading = BaseImagePlaceholderTemplate.bind({})
LazyLoading.args = {
  noLogo: false,
  ...BaseImageData
}
LazyLoading.decorators = [
  (Story) => `
  <div class="max-w-full">
    <div style="height:2500px">
      Scroll down
    </div>
    <div id="storyRoot">
      ${Story()}
    </div>
  </div>
  `
]
LazyLoading.parameters = {
  html: {
    root: '#storyRoot'
  },
  docs: {
    storyDescription:
      "`BaseImagePlaceholder` is compatible with `BaseImage`'s lazy loading behavior."
  }
}
