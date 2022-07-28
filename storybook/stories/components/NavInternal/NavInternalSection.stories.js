import { NavInternalSectionTemplate } from './NavInternalSection'
import {
  menuItemsData,
  menuItemsNestedData,
} from '../NavInternal/NavInternalPanel.stories'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Section',
  excludeStories: /.*Data$/,
  // argTypes: {
  //   menuItems: {
  //     type: { name: 'array', required: false },
  //     description: 'Complex object of menu items',
  //   },
  // },
  parameters: {
    viewMode: 'docs',

    html: {
      root: '#storyRoot',
    },
  },
  decorators: [
    (Story) =>
      `<div class="NavInternal"><div id="storyRoot" class="NavInternalPanel">
        <!-- Start Component -->
          ${Story()}<!-- End Component -->
      </div></div>`,
  ],
}

export const BasicHeading = NavInternalSectionTemplate.bind({})
BasicHeading.args = menuItemsNestedData[0]

export const WithHeadingLink = NavInternalSectionTemplate.bind({})
WithHeadingLink.args = { ...menuItemsNestedData[0], url: '#' }

export const SingleItem = NavInternalSectionTemplate.bind({})
SingleItem.args = { ...menuItemsData[0], menuItems: [] }
