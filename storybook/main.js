import remarkGfm from 'remark-gfm'

export default {
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },

  stories: ['./stories/**/*.docs.mdx', './stories/**/*.stories.@(js|ts)'],
  staticDirs: ['./../dist', './static'],

  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    // '@storybook/addon-mdx-gfm',
  ],

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },
}
