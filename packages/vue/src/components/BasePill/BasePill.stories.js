import BasePill from './BasePill.vue'
import { eduMetadataDictionary } from './../../constants'

export default {
  title: 'Components/Base/BasePill',
  component: BasePill,
  argTypes: {
    // variant: {
    //   control: { type: 'select' },
    //   options: ['primary', 'secondary', 'action']
    // },
    // size: {
    //   control: { type: 'select' },
    //   options: ['sm', 'md', 'lg']
    // },
    // contentType: {
    //   control: { type: 'select' },
    //   options: Object.keys(eduMetadataDictionary)
    // }
  }
}

// stories
export const PrimaryMedium = {
  args: {
    size: 'md',
    variant: 'primary',
    text: 'Psyche Asteroid',
    contentType: undefined
  }
}

export const SecondarySmall = {
  args: { size: 'sm', variant: 'secondary', text: 'Do it yourself' }
}

export const WithType = {
  args: {
    size: 'sm',
    variant: 'primary',
    text: 'Student Project',
    contentType: 'EDUStudentProjectPage'
  }
}
