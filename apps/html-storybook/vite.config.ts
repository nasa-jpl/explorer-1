import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: './../public/',
  resolve: {
    alias: {
      'css/': './public/dist/css'
    },
    preserveSymlinks: true
  }
})
