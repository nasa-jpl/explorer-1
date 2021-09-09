import { BaseHeadingTemplate } from './BaseHeading.js'

export default {
  title: 'Components/Base/BaseHeading',
  argTypes: {
    text: {
      type: 'string',
      description: 'Heading text',
    },
    size: {
      type: 'string',
      description: 'Heading size',
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5'],
      },
      table: {
        defaultValue: { summary: 'h3' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'Base component for headings. Allows for different sizes with html tags for semantic markup.',
      },
    },
  },
}

export const H1 = BaseHeadingTemplate.bind({})
H1.args = { text: 'Heading 1', size: 'h1' }

export const H2 = BaseHeadingTemplate.bind({})
H2.args = { text: 'Heading 2', size: 'h2' }

export const H3 = BaseHeadingTemplate.bind({})
H3.args = { text: 'Heading 3', size: 'h3' }

export const H4 = BaseHeadingTemplate.bind({})
H4.args = { text: 'Heading 4', size: 'h4' }

export const H5 = BaseHeadingTemplate.bind({})
H5.args = { text: 'Heading 5', size: 'h5' }
