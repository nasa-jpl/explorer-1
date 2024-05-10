// https://github.com/storybookjs/storybook/issues/20583
import path, { dirname } from 'path'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

const config = defineConfig({
  base: '/',
  // server: {
  //   watch: {
  //     usePolling: true,
  //   },
  // },
  // assetsInclude: ['/sb-preview/runtime.js'],
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@smd/hds/src/assets/scss/_variables.scss";`,
  //     },
  //   },
  // },
  css: {
    postcss: {
      plugins: [autoprefixer({})],
    },
  },
  build: {
    rollupOptions: {
      external: [
        '@whitespace/storybook-addon-html'
      ]
    },
  },
  optimizeDeps: {
    exclude: ['./../node_modules/.cache/'],
  },
  resolve: {
    alias: {
      // // handles imports from @smd/hds when a component lives in @smd/frontend
      // '@smd/hds': path.resolve(__dirname, './../../packages/hds'),
      // '@smd/backend': path.resolve(__dirname, './../../apps/backend'),
      // '@storybook/blocks': dirname(
      //   require.resolve('@storybook/blocks/package.json')
      // ),
      // '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})

export default config
