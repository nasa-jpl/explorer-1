import { NavInternalTemplate } from './NavInternal'
import {
  NavInternalPanelBasicData,
  NavInternalPanelNoHighlightsData,
  NavInternalPanelAllHighlightsData,
  NavInternalPanelWithHeadingsData,
  NavInternalPanelCombinationData,
} from './NavInternalPanel.stories'

export default {
  title: 'Global Layout/Headers/For Internal Sites/Elements/Navigation',
  excludeStories: /.*Data$/,
  parameters: {
    viewMode: 'docs',
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Navigation with mega-menu dropdowns. Note: mobile view will only work when used with the [Internal Header](/?path=/docs/global-layout-headers-for-internal-sites--with-navigation).',
      },
    },
    html: {
      root: '#storyRoot',
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
          default: true,
        },
      ],
    },
  },
  decorators: [(Story) => `<div id="storyRoot">${Story()}</div>`],
}

export const NavInternalData = {
  includeSearch: true,
  menuItems: [
    {
      id: 1,
      title: 'Home',
      url: '#',
    },
    {
      id: 2,
      isActive: true,
      ...NavInternalPanelBasicData,
    },
    {
      id: 3,
      ...NavInternalPanelNoHighlightsData,
    },
    {
      id: 4,
      ...NavInternalPanelAllHighlightsData,
    },
    {
      id: 5,
      ...NavInternalPanelWithHeadingsData,
    },
    {
      id: 6,
      ...NavInternalPanelCombinationData,
    },
    {
      id: 7,
      title: 'External',
      url: 'https://www.jpl.nasa.gov/',
    },
  ],
}

export const Default = NavInternalTemplate.bind({})
Default.storyName = 'Navigation'
Default.args = NavInternalData
