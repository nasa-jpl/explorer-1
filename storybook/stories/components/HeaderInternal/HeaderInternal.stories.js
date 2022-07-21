import { HeaderInternalTemplate } from './HeaderInternal'

export default {
  title: 'Components/Headers/Internal/Header',
  excludeStories: /.*Data$/,
  argTypes: {
    menuItems: {
      type: { name: 'array', required: false },
      description: 'Complex object of menu items',
    },
  },
  parameters: {
    viewMode: 'docs',
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

export const Default = HeaderInternalTemplate.bind({})
Default.args = HeaderInternalData

export const SignIn = HeaderInternalTemplate.bind({})
SignIn.storyName = 'With Sign In'
SignIn.args = {
  ...HeaderInternalData,
  includeSignIn: true,
}
