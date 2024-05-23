/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['./../stories/**/*.stories.@(js|jsx|ts|tsx)'],
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
    '@whitespace/storybook-addon-html'
  ],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  docs: {}
}
export default config
