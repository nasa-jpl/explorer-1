import MixinAnimationCaret from '@explorer-1/vue/src/components/MixinAnimationCaret/MixinAnimationCaret.vue'

export default {
  title: 'Mixins/MixinAnimationCaret',
  component: MixinAnimationCaret,
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: 'This component appends an animated caret to a line of text.'
      }
    }
  }
}

// templates
const MixinAnimationCaretTemplate = (args) => ({
  components: { MixinAnimationCaret },
  setup() {
    return { args }
  },
  template: `<MixinAnimationCaret v-bind="args">Demo of animated caret</MixinAnimationCaret>`
})

// stories
export const Default = MixinAnimationCaretTemplate.bind({})
