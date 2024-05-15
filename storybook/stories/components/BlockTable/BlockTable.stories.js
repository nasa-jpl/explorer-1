import { BlockTableTemplate } from './BlockTable'

export default {
  title: 'Components/Blocks/BlockTable',
  excludeStories: /.*Data$/,
  argTypes: {
    caption: {
      type: { name: 'string', required: false },
      description: 'Table caption.',
    },
    table: {
      type: { name: 'array', required: true },
      description: 'An array of table data objects.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'A simple table with some basic formatting.',
      },
    },
  },
}

export const Default = BlockTableTemplate.bind({})
Default.storyName = 'BlockTable'
Default.args = {
  caption: 'Third row intentionally blank to test parsing.',
  table: {
    data: [
      ['Header 1', 'Header 2', 'Header 3'],
      [
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
        'Lorem ipsum dolor sit amet',
      ],
      ['', '', ''],
    ],
  },
}
