import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// TODO: import applicable config keys from '@explorer-1/vue/vite.config'
export default defineConfig({
  plugins: [vue()],
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
  },
  resolve: {
    alias: {
      // need these until common has been converted to vite
      'npm:@fancyapps': resolve(__dirname, './node_modules/@fancyapps'),
      'npm:swiper': resolve(__dirname, './node_modules/swiper')
    }
  }
})
