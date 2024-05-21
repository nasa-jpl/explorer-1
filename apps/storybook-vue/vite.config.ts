import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
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
      'npm:@fancyapps': './node_modules/@fancyapps',
      'npm:swiper': './node_modules/swiper'
    }
  }
})
