import MetaPanelItems from './MetaPanelItems.vue'

export default {
  title: 'Components/Utilities/MetaPanel/MetaPanelItems',
  component: MetaPanelItems,
  tags: [],
  parameters: {
    docs: {
      description: {
        component: 'The metadata that should be displayed within `MetaPanel`'
      }
    }
  }
}

// stories
export const BaseStory = {
  name: 'MetaPanelItems',
  args: {
    primarySubject: { subject: 'Math' },
    additionalSubjects: [{ subject: 'Science' }],
    time: { time: '30mins - hr' },
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
