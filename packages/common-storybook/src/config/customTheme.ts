// custom theme for storybook UI
// see: https://storybook.js.org/docs/vue/configure/theming
import { create } from 'storybook/theming'

export default create({
  base: 'light',
  colorPrimary: '#E31937', // jpl red
  colorSecondary: '#05809E', // jpl teal

  // Typography
  // fontBase: 'Metropolis, sans-serif',

  // White Labeling
  brandTitle: 'JPL Design System',
  // brandUrl: 'https://example.com',
  brandImage: 'brand-jpl-logo.svg'
})
