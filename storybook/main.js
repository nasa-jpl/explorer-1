module.exports = {
  "stories": [
    "./stories/**/*.stories.mdx",
    "./stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-storysource",
    "storybook-addon-themes",
    "@whitespace/storybook-addon-html",
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        actions: false,
        controls: false,
      }
    }
  ],
  features: {
    postcss: false,
  },
}