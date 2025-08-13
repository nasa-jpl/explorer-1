import BasePill from './BasePill.vue'
import { eduMetadataDictionary } from './../../constants'

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
    },
    contentType: {
      control: { type: 'select' },
      options: Object.keys(eduMetadataDictionary)
    }
  }
}

// stories
export const PrimaryMedium = {
  args: {
    size: 'md',
    variant: 'primary',
    text: 'Psyche Asteroid',
    contentType: "EDULessonPage"
  }
}

export const SecondarySmall = {
  args: { size: 'sm', variant: 'secondary', text: 'Do it yourself' }
}

export const WithType = {
  args: { size: 'sm', variant: 'secondary', text: 'Do it yourself' }
}
