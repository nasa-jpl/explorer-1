import MixinAnimationCaret from '@explorer-1/vue/src/components/MixinAnimationCaret/MixinAnimationCaret.vue'

export default {
  title: 'Mixins/MixinAnimationCaret',
  component: MixinAnimationCaret,
  parameters: {
    slots: {
      default: 'Default slot content'
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

export const Default = {
  args: {
    default: 'Text with caret'
  }
}
