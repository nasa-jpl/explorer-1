import BasePill from './BasePill.vue'

export default {
  title: 'Components/Base/BasePill',
  component: BasePill,
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      description: 'The variant (color) of the tag',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'action']
    },
    size: {
      type: { name: 'string', required: false },
      description: 'The size of the tag',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  },
  parameters: {
    slots: {
      default: 'BaseStory slot'
    }
  }
}

// stories
export const PrimaryMedium = {
  args: { size: 'md', variant: 'primary', default: 'Psyche Asteroid' }
}

export const SecondarySmall = {
  args: { size: 'sm', variant: 'secondary', default: 'Do it yourself' }
}
