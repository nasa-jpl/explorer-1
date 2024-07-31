import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
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
  }
})
