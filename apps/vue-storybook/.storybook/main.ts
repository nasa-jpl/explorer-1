/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: [
    './../stories/**/*.stories.@(js|jsx|ts|tsx)'
    // './../node_modules/@explorer-1/vue/src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        backgrounds: false,
        outlines: false
      }
    },
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-vue-slots'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  docs: {}
}
export default config
