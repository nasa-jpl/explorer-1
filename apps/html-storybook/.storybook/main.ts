import remarkGfm from 'remark-gfm'

export default {
  refs: {
    '@explorer-1/vue': { disable: true },
    '@explorer-1/html': { disable: true }
  },
  framework: {
    name: '@storybook/html-vite',
    options: {}
  },

  stories: [
    // @explorer-1/html
    // './../node_modules/@explorer-1/html/src/**/*.stories.@(js|ts)',
    // './../node_modules/@explorer-1/html/src/**/*.docs.@(mdx|jsx)'
    './../node_modules/@explorer-1/html/src/components/FooterInternal/**/*.stories.@(js|ts)',
    './../node_modules/@explorer-1/html/src/components/FooterInternal/**/*.docs.@(mdx|jsx)',
    './../node_modules/@explorer-1/html/src/components/HeaderInternal/**/*.stories.@(js|ts)',
    './../node_modules/@explorer-1/html/src/components/HeaderInternal/**/*.docs.@(mdx|jsx)',
    './../node_modules/@explorer-1/html/src/components/NavInternal/**/*.stories.@(js|ts)',
    './../node_modules/@explorer-1/html/src/components/NavInternal/**/*.docs.@(mdx|jsx)'
  ],

  staticDirs: ['./../public', './../node_modules/@explorer-1/common-storybook/src/public'],

  addons: [
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
    '@chromatic-com/storybook'
  ],

  core: {
    disableTelemetry: true
  },

  docs: {},

  features: {
    actions: false,
    backgrounds: false,
    outlines: false
  }
}
