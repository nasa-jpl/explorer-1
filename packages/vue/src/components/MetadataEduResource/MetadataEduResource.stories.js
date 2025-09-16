import MetadataEduResource from './MetadataEduResource.vue'

export default {
  title: 'Components/Utilities/MetadataEduResource',
  component: MetadataEduResource,
  tags: ['!autodocs'],
  argTypes: {
    variant: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  },
  globals: { theme: 'ThemeEdu' },
  excludeStories: /.*Data$/
}

// data
export const MetadataEduResourceData = {
  resource: {
    title: 'Event title',
    primarySubject: {
      subject: 'Engineering'
    },
    gradeLevels: [
      {
        gradeLevel: 'All Ages'
      }
    ]
  },
  compact: false,
  variant: 'primary'
}

export const BaseStory = {
  name: 'MetadataEduResource',
  args: { ...MetadataEduResourceData }
}

export const MultipleGradeLevels = {
  args: {
    ...MetadataEduResourceData,
    resource: {
      ...MetadataEduResourceData.resource,
      gradeLevels: [
        { gradeLevel: 'All Ages' },
        { gradeLevel: 'K' },
        { gradeLevel: '1' },
        { gradeLevel: '2' },
        { gradeLevel: '5' },
        { gradeLevel: '6' },
        { gradeLevel: '7' },
        { gradeLevel: '8' }
      ],
      time: {
        time: 'Under 30 mins'
      }
    },
    variant: 'secondary'
  }
}
