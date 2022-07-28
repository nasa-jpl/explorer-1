import { HeaderInternalTemplate } from './HeaderInternal'
import {
  NavInternalPanelBasicData,
  NavInternalPanelNoHighlightsData,
  NavInternalPanelAllHighlightsData,
  NavInternalPanelWithHeadingsData,
  NavInternalPanelCombinationData,
} from '../NavInternal/NavInternalPanel.stories'
export default {
  title: 'Global Layout/Headers/For Internal Sites',
  excludeStories: /.*Data$/,
  argTypes: {
    includeSearch: {
      type: { name: 'boolean', required: false },
      description:
        "If search should be included in the nav. Set to `false` if all you need is the AppBar or if your application doesn't support search capabilities.",
    },
    menuItems: {
      type: { name: 'array', required: false },
      description:
        'Complex object containing all menu items, including highlights. Leave empty if all you need is the AppBar',
    },
  },
  parameters: {
    viewMode: 'docs',
    layout: 'fullscreen',
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
  includeSearch: true,
  menuItems: [
    {
      id: 1,
      title: 'Home',
      url: '#',
      isActive: false,
    },
    {
      ...NavInternalPanelBasicData,
      id: 2,
      isActive: true,
    },
    {
      ...NavInternalPanelNoHighlightsData,
      id: 3,
    },
    {
      ...NavInternalPanelAllHighlightsData,
      id: 4,
    },
    {
      ...NavInternalPanelWithHeadingsData,
      id: 5,
    },
    {
      ...NavInternalPanelCombinationData,
      id: 6,
    },
    {
      id: 7,
      title: 'External',
      url: 'https://www.jpl.nasa.gov/',
      isActive: false,
    },
  ],
}

export const WithNavigation = HeaderInternalTemplate.bind({})
WithNavigation.args = HeaderInternalData

export const SignIn = HeaderInternalTemplate.bind({})
SignIn.storyName = 'With Sign In'
SignIn.args = {
  ...HeaderInternalData,
  includeSignIn: true,
}

export const AppBarOnly = HeaderInternalTemplate.bind({})
AppBarOnly.storyName = 'AppBar Only'
AppBarOnly.args = { ...HeaderInternalData, menuItems: [], includeSearch: false }

export const AppBarOnlyWithSignIn = HeaderInternalTemplate.bind({})
AppBarOnlyWithSignIn.storyName = 'AppBar with Sign In'
AppBarOnlyWithSignIn.args = {
  ...HeaderInternalData,
  menuItems: [],
  includeSearch: false,
  includeSignIn: true,
}
