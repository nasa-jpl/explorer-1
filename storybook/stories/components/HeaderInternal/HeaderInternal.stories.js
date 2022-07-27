import { HeaderInternalTemplate } from './HeaderInternal'

export default {
  title: 'Global Layout/Headers/Internal',
  excludeStories: /.*Data$/,
  argTypes: {
    menuItems: {
      type: { name: 'array', required: false },
      description: 'Complex object of menu items',
    },
  },
  parameters: {
    viewMode: 'docs',
    themes: {
      clearable: false,
      list: [
        // {
        //   name: 'ThemeLight',
        //   class: ['ThemeLight', 'sbdocs-preview-full-width'],
        //   color: '#ffffff',
        //   default: true,
        // },
        // {
        //   name: 'ThemeDark',
        //   class: ['ThemeDark', 'sbdocs-preview-full-width'],
        //   color: '#000000',
        // },
        {
          name: 'ThemeInternal',
          class: ['ThemeInternal', 'sbdocs-preview-full-width'],
          color: '#53C8ED',
          default: true,
        },
      ],
    },
  },
}

export const HeaderInternalData = {
  orgNumber: '18x',
  siteTitle: 'DesignLab',
  includeSignIn: false,
  menuItems: [
    {
      id: 1,
      title: 'Home',
      url: '#',
      isExternal: false,
      isActive: true,
      isMegaMenu: false,
    },
    {
      id: 2,
      title: 'Menu Item',
      url: '#',
      isExternal: false,
      isActive: false,
      isMegaMenu: true,
      menuItems: [
        {
          title: 'Sub 1',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: null,
        },
        {
          title: 'Sub 2',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: null,
        },
        {
          title: 'Sub 3 w/ Sub',
          url: '#',
          isExternal: false,
          isActive: false,
          subItems: [
            {
              title: 'SubSub 1',
              url: '#',
              isExternal: false,
              isActive: false,
              subItems: null,
            },
            {
              title: 'SubSub 2',
              url: 'https://www.jpl.nasa.gov',
              isExternal: true,
              isActive: false,
              subItems: null,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'External',
      url: 'https://www.jpl.nasa.gov/',
      isExternal: true,
      isActive: false,
      isMegaMenu: false,
    },
  ],
}

export const Basic = HeaderInternalTemplate.bind({})
// Default.storyName = 'Internal'
Basic.args = HeaderInternalData

export const SignIn = HeaderInternalTemplate.bind({})
SignIn.storyName = 'With Sign In'
SignIn.args = {
  ...HeaderInternalData,
  includeSignIn: true,
}
