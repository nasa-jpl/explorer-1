import { MainNavigationInternalMenuPanelTemplate } from './MainNavigationInternalMenuPanel'

export default {
  title: 'Global Layout/Headers/Internal/Elements/MenuPanel',
  excludeStories: /.*Data$/,
  // argTypes: {
  //   menuItems: {
  //     type: { name: 'array', required: false },
  //     description: 'Complex object of menu items',
  //   },
  // },
  parameters: {
    viewMode: 'docs',
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
    (Story) => `<div id="storyRoot" class="MainNavigation">${Story()}</div>`,
  ],
}

export const MainNavigationInternalMenuPanelData = {
  // max 3
  // id: 13,
  highlights: [
    {
      title: 'This Highlight',
      description: 'Lorem ipsum dolor sit amet consectatur adipscing',
      image: {
        src: 'http://placekitten.com/512/288',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to this Highlight',
    },
    {
      title: 'Another Highlight',
      description: 'Lorem ipsum dolor sit amet consectatur adipscing',
      image: {
        src: 'http://placekitten.com/512/288',
        width: '512',
        height: '288',
        alt: 'Alt text',
      },
      link: '#',
      ariaLabel: 'Go to this Highlight',
    },
  ],
  // unlimited
  sections: [
    {
      heading: 'Section as Item 1',
      headingLink: '#',
      isActive: false,
    },
    {
      heading: 'Section as Item 2 Acive',
      headingLink: '#',
    },
    {
      heading: 'Section 2',
      headingLink: '#',
      menuItems: [
        {
          title: 'Item 1',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 2',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 4',
          url: 'https://www.jpl.nasa.gov',
          isActive: false,
        },
      ],
    },
    {
      menuItems: [
        {
          title: 'Item 1',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 2',
          url: '#',
          isActive: false,
        },
        {
          title: 'Item 3',
          url: 'https://www.jpl.nasa.gov',
          isActive: false,
        },
      ],
    },
  ],
  allowSectionBreaks: true,
  allowSectionColumns: true,
}

export const Default = MainNavigationInternalMenuPanelTemplate.bind({})
Default.args = MainNavigationInternalMenuPanelData
