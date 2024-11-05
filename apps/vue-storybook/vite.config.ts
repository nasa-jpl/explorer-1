import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
// import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue()
    // TODO: Doesn't work
    // Components({
    //   dirs: [
    //     './../node_modules/@explorer-1/vue/src/components',
    //     './../node_modules/@explorer-1/vue/src/templates'
    //   ]
    // })
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
    // storybook-only
    modulePreload: false
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          // Deprecation Warning: https://sass-lang.com/d/mixed-decls
          'mixed-decls',
          // Deprecation Warning: https://sass-lang.com/d/import
          'import',
          // Deprecation Warning: https://sass-lang.com/d/legacy-js-api
          'legacy-js-api'
        ]
      }
    }
  }
})
