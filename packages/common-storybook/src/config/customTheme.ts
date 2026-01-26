// custom theme for storybook UI
// see: https://storybook.js.org/docs/vue/configure/theming
import { create } from 'storybook/theming'

export default create({
  base: 'light',
  colorPrimary: 'rgb(228, 0, 43)', // jpl red
  colorSecondary: 'rgb(15, 126, 177)', // earth blue

  // Typography
  // fontBase: 'Metropolis, sans-serif',

  // White Labeling
  brandTitle: 'JPL Design System',
  // brandUrl: 'https://example.com',
  brandImage: 'brand-jpl-logo.svg'
})
