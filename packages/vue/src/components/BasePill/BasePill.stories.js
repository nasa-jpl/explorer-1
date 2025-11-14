import BasePill from './BasePill.vue'

export default {
  title: 'Components/Base/BasePill',
  component: BasePill
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
