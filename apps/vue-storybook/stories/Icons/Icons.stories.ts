import IconCaret from '@explorer-1/vue/src/components/Icons/IconCaret.vue'

export default {
  title: 'Icons',
  component: IconCaret,
  decorators: [
    () => ({
      template: `<div class="inline-block"><story/></div>`
    })
  ],
  parameters: {
    docs: {
      description: {
        component: 'Use with tailwind text classes to specify size and color'
      }
    }
  }
}

export const Caret = (args) => ({
  components: { IconCaret },
  setup() {
    return { args }
  },
  template: `<IconCaret v-bind="args" />`
})
