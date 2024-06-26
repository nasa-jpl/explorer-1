import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './../public/',
  // because pnpm and stories are in node_modules
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
