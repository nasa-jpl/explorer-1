// customizing Storybook's manager UI
// see config options: https://storybook.js.org/docs/vue/configure/features-and-behavior

import { addons } from 'storybook/manager-api'
import customTheme from '@explorer-1/common-storybook/src/config/customTheme'

// to collapse all sections and use custom theme
addons.setConfig({
  theme: customTheme,
  sidebar: { showRoots: false }
})
