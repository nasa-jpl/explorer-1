import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import packageVersions from '@explorer-1/common-storybook/src/plugins/packageVersions.js'
import path from 'path'

const VUE_PACKAGE_SRC_PATH = path.join(process.cwd(), '../packages/vue/src')
const VUE_PACKAGE_SRC_PATH_PROD = path.join(
  process.cwd(),
  '../apps/vue-storybook/node_modules/@explorer-1/vue/src'
)

export default defineConfig({
  define: {
    ...packageVersions
  },
  plugins: [
    vue({
      vueDocgenOptions: {
        // resolve co-located components in a monorepo.
        root:
          process.env.NODE_ENV === 'production' ? VUE_PACKAGE_SRC_PATH_PROD : VUE_PACKAGE_SRC_PATH
      }
    })
  ],
  publicDir: './../public/',
  // because pnpm and stories are in node_modules
  resolve: {
    preserveSymlinks: true
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    modulePreload: false // storybook only
  }
})
