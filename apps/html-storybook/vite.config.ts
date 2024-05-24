import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './../public/',
  resolve: {
    preserveSymlinks: true
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@explorer-1/common/src/scss/_hover.scss";`
      }
    }
  }
})
