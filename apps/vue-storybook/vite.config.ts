import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
// TODO: import applicable config keys from '@explorer-1/vue/vite.config'
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: [
        './node_modules/@explorer-1/vue/src/components',
        './node_modules/@explorer-1/vue/src/templates'
      ]
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@explorer-1/common/src/scss/_hover.scss";`
      }
    }
  }
})
