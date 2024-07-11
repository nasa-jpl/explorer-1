/** @type { import('@storybook/vue3-vite').StorybookConfig } */
import remarkGfm from 'remark-gfm'
const config = {
  stories:
    process.env.NODE_ENV === 'production'
      ? [
          './../node_modules/@explorer-1/vue/src/**/*.stories.@(js|jsx|ts|tsx)',
          './../node_modules/@explorer-1/vue/src/**/*.docs.mdx'
        ]
      : [
          './../../../packages/vue/src/**/*.stories.@(js|jsx|ts|tsx)',
          './../../../packages/vue/src/**/*.docs.mdx'
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
    'storybook-addon-vue-slots',
    '@chromatic-com/storybook'
  ],
  staticDirs: [
    './../public',
    './../node_modules/@explorer-1/common-storybook/src/public',
    './../node_modules/@explorer-1/common/src'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },

  docs: {}
}
export default config
