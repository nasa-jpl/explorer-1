module.exports = {
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
    '@storybook/addon-a11y',
    '@whitespace/storybook-addon-html',
    '@storybook/addon-mdx-gfm',
  ],

  core: {
    disableTelemetry: true,
  },

  docs: {
    autodocs: true,
  },
}
