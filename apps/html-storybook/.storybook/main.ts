import remarkGfm from 'remark-gfm'

export default {
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },

  stories: [
    // @explorer-1/html
    './../node_modules/@explorer-1/html/src/**/*.stories.@(js|ts)',
    './../node_modules/@explorer-1/html/src/**/*.docs.@(mdx|jsx)'
  ],

  staticDirs: ['./../public', './../node_modules/@explorer-1/common-storybook/src/public'],

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false
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
    '@whitespace/storybook-addon-html'
  ],

  core: {
    disableTelemetry: true
  },

  docs: {}
}
