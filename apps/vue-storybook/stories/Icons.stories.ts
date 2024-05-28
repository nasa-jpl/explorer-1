import IconCaret from '@explorer-1/vue/src/components/Icons/IconCaret.vue'
import IconArrows from '@explorer-1/vue/src/components/Icons/IconArrows.vue'
import IconLocation from '@explorer-1/vue/src/components/Icons/IconLocation.vue'
import IconUser from '@explorer-1/vue/src/components/Icons/IconUser.vue'

export default {
  title: 'Icons',
  component: IconArrows,
  subcomponents: { IconArrows, IconCaret, IconUser },
  parameters: {
    docs: {
      description: {
        component: 'Use with tailwind text classes to specify size and color'
      }
    }
  }
}

export const Arrows = {
  render: () => ({
    components: { IconArrows },
    template: '<IconArrows />'
  })
}
export const Caret = {
  render: () => ({
    components: { IconCaret },
    template: '<IconCaret />'
  })
}
export const Location = {
  render: () => ({
    components: { IconLocation },
    template: '<IconLocation />'
  })
}
export const User = {
  render: () => ({
    components: { IconUser },
    template: '<IconUser />'
  })
}
