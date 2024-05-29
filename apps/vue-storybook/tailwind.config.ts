/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

// import explorer 1's tailwind config
import explorer1Config from '@explorer-1/common/tailwind.config'
import plugin from 'tailwindcss/plugin'

export default {
  ...explorer1Config,
  content: ['stories/**/*', './node_modules/@explorer-1/vue/src/components/**/*.vue'],
  plugins: [
    ...explorer1Config.plugins,
    plugin(({ addBase }) => {
      addBase({
        ':root': {
          '--color-theme-color': 'red',
          '--color-theme-color-light': 'brown',
          '--color-theme-color-dark': 'fuchsia'
        },
        '.ThemeInternal.ThemeVariantDark': {
          border: '5px solid pink',
          '--color-theme-color': '#0080a4',
          '--color-theme-color-light': 'red',
          '--color-theme-color-dark': '#006480',
          '--color-theme-color-darker': '#003c4d'
          // '--gradientColorStop-theme-color-dark-w50': 'pink',
          // '--gradientColorStop-theme-color-darker-w50': 'green',
          // '--gradientColorStop-theme-color-light-w50': 'blue'
        }
      })
    })
  ]
}
