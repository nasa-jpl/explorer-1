import { HeaderInternalTemplate } from './HeaderInternal'
import { NavInternalData } from './../NavInternal/NavInternal.stories'

export const HeaderInternalData = {
  orgNumber: '18x',
  siteTitle: 'DesignLab',
  includeSignIn: false,
  includeSearch: true,
  menuItems: NavInternalData.menuItems
}

export default {
  title: 'Global Layout/Headers/For Internal Sites',
  excludeStories: /.*Data$/,
  tags: ['!autodocs'],
  argTypes: {
    includeSearch: {
      type: { name: 'boolean', required: false },
      description:
        "If search should be included in the nav. Set to `false` if all you need is the AppBar or if your application doesn't support search capabilities."
    },
    menuItems: {
      type: { name: 'array', required: false },
      description:
        'Complex object containing all menu items, including highlights. Leave empty if all you need is the AppBar'
    }
  },
  parameters: {
    viewMode: 'docs',
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Configurable to accommodate just an AppBar or complex site navigation, along with optional search and sign in/out buttons'
      }
    }
  }
}

export const BaseStory = HeaderInternalTemplate.bind({})
BaseStory.storyName = 'With Navigation'
BaseStory.args = HeaderInternalData

export const WithSignIn = HeaderInternalTemplate.bind({})
WithSignIn.args = {
  ...HeaderInternalData,
  includeSignIn: true
}

export const AppBarOnly = HeaderInternalTemplate.bind({})
AppBarOnly.args = {
  ...HeaderInternalData,
  includeSignIn: true,
  menuItems: [],
  includeSearch: false
}

export const AppBarWithSignIn = HeaderInternalTemplate.bind({})
AppBarWithSignIn.args = {
  ...HeaderInternalData,
  menuItems: [],
  includeSearch: false,
  includeSignIn: true
}
