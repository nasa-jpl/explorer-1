import { NavInternalPanelTemplate } from './NavInternalPanel'

export default {
  title: 'Internal Header/Elements/Panel',
  excludeStories: /.*Data$/,
  argTypes: {
    title: {
      type: { name: 'string', required: false },
      description: 'The link text of the parent menu item for this panel.'
    },
    url: {
      type: { name: 'string', required: false },
      description: 'The link URL of the parent menu item for this panel.'
    },
    repeatInPanel: {
      type: { name: 'boolean', required: false },
      description:
        'Enable to display the parent menu item as a link at the top of this panel. This may be useful because top-level menu items with panels cannot be clicked on to go to their URL; clicking only opens and closes the panel.'
    },
    repeatedTitle: {
      type: { name: 'string', required: false },
      description:
        'When `repeatInPanel` is true, this property may be set to change the text of the parent menu item link in the panel. For example, if the parent menu item’s title is “Processes” and the panel has a subset of the most popular processes, you might want the parent menu item link to be “View all processes”'
    },
    highlights: {
      type: { name: 'array', required: false },
      description: 'This template is optimized for a maximum of 3 highlights.'
    },
    menuItems: {
      type: { name: 'array', required: false },
      description: 'Menu items, including nested menus.'
    },
    allowSectionBreaks: {
      type: { name: 'boolean', required: false },
      description:
        'If a nav [Section](/?path=/docs/global-layout-headers-for-internal-sites-elements-section--basic-heading) can flow into the next column (only applies if `allowSectionColumns` is `true`.',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    allowSectionColumns: {
      type: { name: 'boolean', required: false },
      description:
        'If multiple columns should be used to display nav [Sections](/?path=/docs/global-layout-headers-for-internal-sites-elements-section--basic-heading). If set to `false`, all nav items will appear in a single column. Useful if you only have a couple items in the nav.',
      table: {
        defaultValue: { summary: 'true' }
      }
    }
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'The contents of a mega-menu-style dropdown. Intended for use within the [Internal Header](https://nasa-jpl.github.io/explorer-1/?path=/docs/global-layout-headers-for-internal-sites--docs)'
      }
    },
    html: {
      root: '#storyRoot'
    }
  },
  decorators: [(Story) => `<div id="storyRoot" class="NavInternal">${Story()}</div>`]
}

export const menuItemsData = [
  {
    title: 'Nam Cursus',
    url: '#'
  },
  {
    title: 'Pellentesque Iaculis Vel',
    url: '#'
  },
  {
    title: 'In Bibendum Imperdiet Mauris',
    url: '#'
  },
  {
    title: 'Placerat Lorem',
    url: '#'
  },
  {
    title: 'Maecenas Viverra',
    url: '#'
  },
  {
    title: 'Suspendisse Vestibulum',
    url: '#'
  },
  {
    title: 'Nunc Tincidunt Gravida Vel',
    url: '#'
  },
  {
    title: 'Sed Placerat',
    url: '#'
  },
  {
    title: 'Donec Feugiat Eu',
    url: '#'
  }
]

export const menuItemsNestedData = [
  {
    title: 'Section A',
    url: '',
    menuItems: [menuItemsData[0], menuItemsData[2], menuItemsData[3], menuItemsData[4]]
  },
  {
    title: 'Section B',
    url: '',
    menuItems: [menuItemsData[5], menuItemsData[6], menuItemsData[1], menuItemsData[3]]
  },
  {
    title: 'Section C',
    url: '',
    menuItems: [menuItemsData[7], menuItemsData[4]]
  }
]

export const NavInternalPanelBasicData = {
  title: 'Basic',
  url: '#',
  repeatInPanel: false,
  repeatedTitle: '',
  highlights: [
    {
      title: 'Highlight',
      description:
        'Quisque auctor blandit blandit. Etiam eu dolor enim. In id dui porttitor, efficitur leo et, ornare purus. Pellentesque eget malesuada tortor. Donec porta. '
    }
  ],
  menuItems: [
    {
      title: 'Quisque ligula (active)',
      url: '#',
      isActive: true
    },
    ...menuItemsData
  ],
  allowSectionBreaks: true,
  allowSectionColumns: true
}

export const NavInternalPanelNoHighlightsData = {
  title: 'No Highlights',
  url: '#',
  repeatInPanel: true,
  repeatedTitle: 'No Highlights Overview',
  menuItems: menuItemsData
}

export const NavInternalPanelAllHighlightsData = {
  title: 'All Highlights',
  url: '#',
  repeatInPanel: false,
  repeatedTitle: '',
  highlights: [
    {
      title: 'Highlight 1',
      description:
        'Praesent in eros iaculis, pulvinar est ut, maximus nisl. Vestibulum rutrum accumsan.',
      image: {
        src: 'http://picsum.photos/512/288?random=1',
        width: '512',
        height: '288',
        alt: 'Alt text'
      },
      link: '#',
      ariaLabel: 'Go to Highlight 1'
    },
    {
      title: 'Highlight 2',
      description: 'Vivamus rutrum, nibh eu euismod imperdiet, elit ante dapibus risus, ut rutrum.',
      image: {
        src: 'http://picsum.photos/512/288?random=2',
        width: '512',
        height: '288',
        alt: 'Alt text'
      },
      link: '#',
      ariaLabel: 'Go to Highlight 2'
    },
    {
      title: 'Highlight 3',
      description: 'Aliquam nisi nisi, iaculis sed iaculis et, rutrum quis orci. Quisque maximus.',
      image: {
        src: 'http://picsum.photos/512/288?random=3',
        width: '512',
        height: '288',
        alt: 'Alt text'
      },
      link: '#',
      ariaLabel: 'Go to Highlight 3'
    }
  ]
}

export const NavInternalPanelWithHeadingsData = {
  title: 'With Headings',
  url: '#',
  repeatInPanel: false,
  repeatedTitle: '',
  menuItems: menuItemsNestedData,
  allowSectionBreaks: false
}

export const NavInternalPanelCombinationData = {
  title: 'Combination',
  url: '#',
  repeatInPanel: false,
  repeatedTitle: '',
  highlights: [
    {
      title: 'Highlight',
      description:
        'Praesent in eros iaculis, pulvinar est ut, maximus nisl. Vestibulum rutrum accumsan.',
      image: {
        src: 'http://picsum.photos/512/288?random=4',
        width: '512',
        height: '288',
        alt: 'Alt text'
      },
      link: '#',
      ariaLabel: 'Go to Highlight'
    }
  ],
  menuItems: menuItemsNestedData,
  allowSectionBreaks: true,
  allowSectionColumns: true
}

export const Default = NavInternalPanelTemplate.bind({})
Default.storyName = 'Basic'
Default.args = NavInternalPanelBasicData

export const NoHighlights = NavInternalPanelTemplate.bind({})
NoHighlights.args = NavInternalPanelNoHighlightsData

export const AllHighlights = NavInternalPanelTemplate.bind({})
AllHighlights.args = NavInternalPanelAllHighlightsData

export const WithHeadings = NavInternalPanelTemplate.bind({})
WithHeadings.args = NavInternalPanelWithHeadingsData

export const Combination = NavInternalPanelTemplate.bind({})
Combination.args = NavInternalPanelCombinationData
