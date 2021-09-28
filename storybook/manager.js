// customizing Storybook's manager UI
// see config options: https://storybook.js.org/docs/vue/configure/features-and-behavior

import { addons } from '@storybook/addons'
import customTheme from './customTheme'

// to collapse all sections and use custom theme
addons.setConfig({ theme: customTheme, sidebar: { showRoots: false } })
