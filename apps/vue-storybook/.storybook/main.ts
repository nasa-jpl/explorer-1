/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import remarkGfm from 'remark-gfm'
const config = {
  stories: [
    './../stories/**/*.stories.@(js|jsx|ts|tsx)'
    // './../docs/**/typography.stories.(js|jsx|ts|tsx)'
    // './../docs/**/*.docs.mdx'
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
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    'storybook-addon-vue-slots'
  ],
  staticDirs: ['./../public'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  docs: {}
}
export default config
