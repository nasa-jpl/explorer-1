import { AnimationCaretTemplate } from './AnimationCaret.js'

export default {
  title: 'Components/Base/AnimationCaret',
  argTypes: {
    text: {
      type: 'string',
      description: 'Text',
    },
    inline: {
      type: 'boolean',
      description: 'Inline option',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'This component appends an animated caret to a line of text.',
      },
    },
  },
}

export const Default = AnimationCaretTemplate.bind({})
Default.args = { text: 'Hover for animation', inline: false }

export const Inline = AnimationCaretTemplate.bind({})
Inline.args = { text: 'Longer text to demonstrate text wrap', inline: true }
Inline.decorators = [(Story) => `<div id="storyDecorator" class="w-64">${Story()}</div>`]