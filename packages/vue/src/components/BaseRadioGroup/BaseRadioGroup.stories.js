import BaseRadioGroup from './BaseRadioGroup.vue'

export default {
  title: 'Components/Base/BaseRadioGroup',
  component: BaseRadioGroup,
  parameters: {
    docs: {
      description: {
        component:
          'The BaseRadioGroup component is expected to contain an array of options and a grouping name with the goal of selecting a single option.'
      }
    }
  }
}

// stories
export const BaseStory = {
  args: {
    options: [
      {
        id: 'breaking',
        title: 'Breaking News',
        text: 'All JPL News delivered immediately'
      },
      {
        id: 'daily',
        title: 'Daily News',
        text: 'Single Daily JPL News summary'
      },
      {
        id: 'weekly',
        title: 'Weekly News',
        text: 'Single Weekly JPL News summary'
      },
      {
        id: 'monthly',
        title: 'Monthly News',
        text: 'Monthly Digest for JPL News'
      }
    ],
    group: 'email',
    preselected: 'breaking',
    heading: 'JPL Forms',
    subHeading: 'Choose how frequently you want to receive updates (opt out anytime):',
    title: 'Email Groups'
  }
}
