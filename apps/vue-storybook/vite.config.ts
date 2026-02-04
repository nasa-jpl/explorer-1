import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { packageVersions } from '@explorer-1/common-storybook/src/plugins/packageVersions.js'
import path from 'path'

const getModulePath = (packageName) => path.join(process.cwd(), 'node_modules', packageName)

const VUE_PACKAGE_SRC_PATH = path.join(process.cwd(), '../packages/vue/src')

export default defineConfig({
  define: {
    packageVersions
  },
  plugins: [
    vue({
      // @ts-ignore
      vueDocgenOptions: {
        // resolve co-located components in a monorepo.
        root: VUE_PACKAGE_SRC_PATH
      }
    })
  ],
  publicDir: './../public/',
  // because pnpm and stories are in node_modules
  resolve: {
    preserveSymlinks: true,
    // Brute force deduping (only necessary for Storybook)
    alias: {
      // Force all Vue and Pinia imports to resolve to the TOP-LEVEL node_modules
      vue: getModulePath('vue'),
      pinia: getModulePath('pinia'),
      dayjs: getModulePath('dayjs')
    }
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
