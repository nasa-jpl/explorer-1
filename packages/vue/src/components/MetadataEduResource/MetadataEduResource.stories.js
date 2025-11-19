import MetadataEduResource from './MetadataEduResource.vue'

export default {
  title: 'Components/Utilities/MetadataEduResource',
  component: MetadataEduResource,
  tags: ['cards'],
  globals: { theme: 'ThemeEdu' },
  excludeStories: /.*Data$/,
  parameters: {
    docs: {
      description: {
        component:
          'A row of metadata icons and text that displays key information about a post. Specifically for use with ThemeEdu'
      }
    }
  }
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
    variant: 'secondary',
    showTime: true
  }
}
