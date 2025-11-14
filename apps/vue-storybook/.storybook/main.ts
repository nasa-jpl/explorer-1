import remarkGfm from 'remark-gfm'
import type { StorybookConfig } from '@storybook/vue3-vite'
const config: StorybookConfig = {
  refs: {
    '@explorer-1/vue': { disable: true },
    '@explorer-1/html': { disable: true },
    'internal-components': {
      title: 'Internal-only Components',
      url: 'https://main--68c9f55524186336c6cb1c0c.chromatic.com',
      expanded: true
    },
    'v2-docs': {
      title: 'V2 Docs (Legacy)',
      url: 'https://v2--68c9f55524186336c6cb1c0c.chromatic.com',
      expanded: false
    }
  },
  stories:
    process.env.NODE_ENV === 'production'
      ? [
          './../node_modules/@explorer-1/vue/src/**/*.docs.mdx',
          './../node_modules/@explorer-1/vue/src/**/*.stories.@(js|jsx|ts|tsx)'
        ]
      : [
          './../../../packages/vue/src/**/*.docs.mdx',
          './../../../packages/vue/src/**/*.stories.@(js|jsx|ts|tsx)'
        ],

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

  docs: {},

  features: {
    actions: false,
    backgrounds: false,
    outlines: false
  }
}
export default config
