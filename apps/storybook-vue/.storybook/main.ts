/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['./../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        // viteConfigPath: './node_modules/@explorer-1/vue/vite.config.ts'
      }
    }
  }
}
export default config
