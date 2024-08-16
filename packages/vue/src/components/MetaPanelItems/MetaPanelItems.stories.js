import MetaPanelItems from './MetaPanelItems.vue'

export default {
  title: 'Components/Utilities/MetaPanelItems',
  component: MetaPanelItems,
  tags: ['!autodocs']
}

// stories
export const BaseStory = {
  name: 'MetaPanelItems',
  args: {
    primarySubject: 'Math',
    additionalSubjects: ['Science'],
    time: '30mins - hr',
    gradeLevels: [
      { gradeLevel: 'All Ages' },
      { gradeLevel: 'K' },
      { gradeLevel: '1' },
      { gradeLevel: '2' },
      { gradeLevel: '5' },
      { gradeLevel: '6' },
      { gradeLevel: '7' },
      { gradeLevel: '8' }
    ]
  }
}
