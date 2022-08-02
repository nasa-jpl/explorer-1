import { NavInternalSectionTemplate } from './NavInternalSection'
import { menuItemsData, menuItemsNestedData } from './NavInternalPanel.stories'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Section',
  excludeStories: /.*Data$/,
  argTypes: {
    title: {
      type: { name: 'string', required: false },
      description:
        'Name of the menu item. If populating nested menuItems, this will be converted to a heading.',
    },
    url: {
      type: { name: 'string', required: false },
      description:
        'Link for the menu item. If populating nested menuItems, this will used as a link in the heading.',
    },
    menuItems: {
      type: { name: 'array', required: false },
      description:
        'Optional array of nested menu items. If populated, the title and url above will be converted to a heading.',
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'A flexible component that can accommodate a variety of menu item hierarchies. Usage can range from single-level menu items (one component per item) to a list of menu items with a linked heading. Intended for use within [NavInternalPanel](/?path=/docs/global-layout-headers-for-internal-sites-elements-panel--basic) ',
      },
    },
    html: {
      root: '#storyRoot',
    },
  },
  decorators: [
    (Story) =>
      `<div class="NavInternal">
  <div id="storyRoot" class="NavInternalPanel">

${Story()}
  </div>
</div>`,
  ],
}

export const BasicHeading = NavInternalSectionTemplate.bind({})
BasicHeading.args = menuItemsNestedData[0]

export const WithHeadingLink = NavInternalSectionTemplate.bind({})
WithHeadingLink.args = { ...menuItemsNestedData[0], url: '#' }

export const SingleItem = NavInternalSectionTemplate.bind({})
SingleItem.args = { ...menuItemsData[0], menuItems: [] }
