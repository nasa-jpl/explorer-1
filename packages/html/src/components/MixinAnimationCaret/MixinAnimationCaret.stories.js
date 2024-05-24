import { MixinAnimationCaretTemplate } from './MixinAnimationCaret.js'

export default {
  title: 'Components/Mixins/MixinAnimationCaret',
  argTypes: {
    text: {
      type: 'string',
      description: 'Text or html markup'
    },
    inline: {
      type: 'boolean',
      description: 'Inline option',
      control: {
        type: 'boolean'
      },
      table: {
        defaultValue: { summary: 'false' }
      }
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'This mixin appends an animated caret to a line of text or to more complex HTML markup. When implemented, it must be wrapped by a link element with CSS class `group` to ensure that the animation is triggered by hovering over the link. See the `BaseLink` primary variant for an implementation example. '
      }
    }
  }
}

export const Default = MixinAnimationCaretTemplate.bind({})
Default.args = { text: 'Hover for animation', inline: false }

export const Inline = MixinAnimationCaretTemplate.bind({})
Inline.args = { text: 'Longer text to demonstrate text wrap', inline: true }
Inline.decorators = [(Story) => `<div id="storyRoot" class="w-64">${Story()}</div>`]
Inline.parameters = {
  html: {
    root: '#storyRoot'
  }
}
