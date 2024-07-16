import BaseCheckboxGroup from './BaseCheckboxGroup.vue'

export default {
  title: 'Components/Base/BaseCheckboxGroup',
  component: BaseCheckboxGroup
}

// stories
export const BaseStory = {
  args: {
    options: [
      {
        id: 'educators',
        title: 'Educators',
        text: null
      },
      {
        id: 'educator-workshop',
        title: 'Educators Workshops',
        text: 'Southern California'
      },
      {
        id: 'students',
        title: 'Students K-12',
        text: null
      },
      {
        id: 'internships',
        title: 'Internships',
        text: null
      }
    ],
    group: 'edumail',
    heading: 'JPL Education Groups',
    subHeading:
      'The JPL Education Office also offers email updates about classroom activities and workshops for educators, projects and competitons for K-12 students and internship opportunities at JPL and NASA.',
    title: 'Education Email Groups'
  }
}
