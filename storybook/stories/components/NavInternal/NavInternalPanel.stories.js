import { NavInternalPanelTemplate } from './NavInternalPanel'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Panel',
  excludeStories: /.*Data$/,
  argTypes: {
    highlights: {
      type: { name: 'array', required: false },
      description: 'This template is optimized for a maximum of 3 highlights',
    },
    menuItems: {
      type: { name: 'array', required: false },
      description: 'Menu items, including nested menus.',
    },
    allowSectionBreaks: {
      type: { name: 'boolean', required: false },
      description:
        'If a nav [Section](/?path=/docs/global-layout-headers-for-internal-sites-elements-section--basic-heading) can flow into the next column (only applies if `allowSectionColumns` is `true`.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    allowSectionColumns: {
      type: { name: 'boolean', required: false },
      description:
        'If multiple columns should be used to display nav [Sections](/?path=/docs/global-layout-headers-for-internal-sites-elements-section--basic-heading). If set to `false`, all nav items will appear in a single column. Useful if you only have a couple items in the nav.',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component:
          'The contents of a mega-menu-style dropdown. Intended for use within the [Internal Header](global-layout-headers-for-internal-sites--with-navigation)',
      },
    },
    themes: {
      clearable: false,
      list: [
        {
          name: 'ThemeLight',
          class: ['ThemeLight', 'sbdocs-preview-full-width'],
          color: '#ffffff',
          default: true,
        },
        {
          name: 'ThemeDark',
          class: ['ThemeDark', 'sbdocs-preview-full-width'],
          color: '#000000',
        },
        {
          name: 'ThemeInternal',
          class: ['ThemeInternal', 'sbdocs-preview-full-width'],
          color: '#53C8ED',
        },
      ],
    },
    html: {
      root: '#storyRoot',
    },
  },
  decorators: [
    (Story) => `<div id="storyRoot" class="NavInternal">${Story()}</div>`,
  ],
}

export const menuItemsData = [
  {
    title: 'Nam Cursus',
    url: '#',
    isActive: false,
  },
  {
    title: 'Pellentesque Iaculis Vel',
    url: '#',
    isActive: false,
  },
  {
    title: 'In Bibendum Imperdiet Mauris',
    url: '#',
    isActive: false,
  },
  {
    title: 'Placerat Lorem',
    url: '#',
    isActive: false,
  },
  {
    title: 'Maecenas Viverra',
    url: '#',
    isActive: false,
  },
  {
    title: 'Suspendisse Vestibulum',
    url: '#',
    isActive: false,
  },
  {
    title: 'Nunc Tincidunt Gravida Vel',
    url: '#',
    isActive: false,
  },
  {
    title: 'Sed Placerat',
    url: '#',
    isActive: false,
  },
  {
    title: 'Donec Feugiat Eu',
    url: '#',
    isActive: false,
  },
]

export const menuItemsNestedData = [
  {
    title: 'Section A',
    url: '',
    menuItems: [
      menuItemsData[0],
      menuItemsData[2],
      menuItemsData[3],
      menuItemsData[4],
    ],
  },
  {
    title: 'Section B',
    url: '',
    menuItems: [
      menuItemsData[5],
      menuItemsData[6],
      menuItemsData[1],
      menuItemsData[3],
    ],
  },
  {
    title: 'Section C',
    url: '',
    menuItems: [menuItemsData[7], menuItemsData[4]],
  },
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
        'Quisque auctor blandit blandit. Etiam eu dolor enim. In id dui porttitor, efficitur leo et, ornare purus. Pellentesque eget malesuada tortor. Donec porta. ',
    },
  ],
  menuItems: [
    {
      title: 'Quisque ligula (active)',
      url: '#',
      isActive: true,
    },
    ...menuItemsData,
  ],
  allowSectionBreaks: true,
  allowSectionColumns: true,
}

export const NavInternalPanelNoHighlightsData = {
  title: 'No Highlights',
  url: '#',
  repeatInPanel: true,
  repeatedTitle: 'No Highlights Overview',
  menuItems: menuItemsData,
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
        src: 'http://placekitten.com/512/288?image=12',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to Highlight 1',
    },
    {
      title: 'Highlight 2',
      description:
        'Vivamus rutrum, nibh eu euismod imperdiet, elit ante dapibus risus, ut rutrum.',
      image: {
        src: 'http://placekitten.com/512/288?image=9',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to Highlight 2',
    },
    {
      title: 'Highlight 3',
      description:
        'Aliquam nisi nisi, iaculis sed iaculis et, rutrum quis orci. Quisque maximus.',
      image: {
        src: 'http://placekitten.com/512/288?image=8',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to Highlight 3',
    },
  ],
}

export const NavInternalPanelWithHeadingsData = {
  title: 'With Headings',
  url: '#',
  repeatInPanel: false,
  repeatedTitle: '',
  menuItems: menuItemsNestedData,
  allowSectionBreaks: false,
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
        src: 'http://placekitten.com/512/288?image=12',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to Highlight',
    },
  ],
  menuItems: menuItemsNestedData,
  allowSectionBreaks: true,
  allowSectionColumns: true,
}

export const Basic = NavInternalPanelTemplate.bind({})
Basic.args = NavInternalPanelBasicData

export const NoHighlights = NavInternalPanelTemplate.bind({})
NoHighlights.args = NavInternalPanelNoHighlightsData

export const AllHighlights = NavInternalPanelTemplate.bind({})
AllHighlights.args = NavInternalPanelAllHighlightsData

export const WithHeadings = NavInternalPanelTemplate.bind({})
WithHeadings.args = NavInternalPanelWithHeadingsData

export const Combination = NavInternalPanelTemplate.bind({})
Combination.args = NavInternalPanelCombinationData
