import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // silence @import deprecation warnings
        silenceDeprecations: ['import']
      }
    }
  },
  publicDir: './../public/',
  // because pnpm and stories are in node_modules
  resolve: {
    preserveSymlinks: true
  }
})
