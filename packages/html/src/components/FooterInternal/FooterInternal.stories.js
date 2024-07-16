import { FooterInternalTemplate } from './FooterInternal'

const contactListData = [
  {
    name: 'Lorem Ipsum',
    email: '#'
  },
  {
    name: 'Dolor Sit-Amet',
    email: '#'
  }
]

export default {
  title: 'Global Layout/Footers/For Internal Sites',
  argTypes: {
    siteEditors: {
      type: { name: 'array', required: false },
      description: 'Array of site editors. Object should include a `name` and `email`.'
    },
    siteManagers: {
      type: { name: 'array', required: false },
      description: 'Array of site editors. Object should include a `name` and `email`.'
    }
  },
  parameters: {
    // viewMode: 'story',
    docs: {
      description: {
        component: 'Simple footer with preset links.'
      }
    }
  }
}

export const BaseStory = FooterInternalTemplate.bind({})
BaseStory.storyName = 'For Internal Sites'
BaseStory.args = {
  siteEditors: contactListData,
  siteManagers: contactListData,
  dateUpdated: 'July 28, 2022',
  version: '1.0'
}
