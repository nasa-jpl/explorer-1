import { MainNavigationInternalMenuPanelTemplate } from './MainNavigationInternalMenuPanel'

export default {
  title: 'Components/Headers/Internal/Header/MenuPanel',
  excludeStories: /.*Data$/,
  // argTypes: {
  //   menuItems: {
  //     type: { name: 'array', required: false },
  //     description: 'Complex object of menu items',
  //   },
  // },
  // parameters: {
  //   viewMode: 'canvas',
  // },
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
      heading: 'Section 1',
      headingLink: '#',
      menutems: [
        {
          title: 'Item 1',
          url: '#',
          isExternal: false,
          isActive: false,
        },
        {
          title: 'Item 2',
          url: 'https://www.jpl.nasa.gov',
          isExternal: true,
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
