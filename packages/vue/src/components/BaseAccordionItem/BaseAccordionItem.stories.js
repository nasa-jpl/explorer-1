import BaseAccordionItem from './BaseAccordionItem.vue'
export default {
  title: 'Components/Base/BaseAccordionItem',
  component: BaseAccordionItem,
  argTypes: {
    // slots
    header: {
      control: false
    },
    heading: {
      control: false
    },
    default: {
      control: false
    },
    panelContents: {
      control: false
    }
  }
}

// stories
export const BaseStory = {
  name: 'BaseAccordionItem',
  args: {
    headingLevel: 'h5',

    item: {
      title: 'Title for the accordion',
      body: [{ text: 'No default body template. Customize with the `panelContents` slot.' }]
    },

    header: '<h3>Test</h3>'
  }
}
