import MixinAnimationCaret from './MixinAnimationCaret.vue'

export default {
  title: 'Mixins/MixinAnimationCaret',
  component: MixinAnimationCaret,
  parameters: {
    slots: {
      default: 'BaseStory slot content'
    },
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'This mixin appends an animated caret to a line of text or to more complex HTML markup. When implemented, it must be wrapped by a link element with CSS class `group` to ensure that the animation is triggered by hovering over the link. See the `BaseLink` primary variant for an implementation example.'
      }
    }
  }
}

export const BaseStory = {
  args: {
    default: 'Text with caret'
  }
}
