/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['./../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  docs: {}
}
export default config
