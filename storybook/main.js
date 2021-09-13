module.exports = {
  stories: [
    './stories/**/*.stories.mdx',
    './stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
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
    'storybook-addon-themes',
  ],
  // removes deprecation warning
  features: {
    postcss: false,
  },
}
