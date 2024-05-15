import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      'css/font-face.css': './src/scss/_fonts.scss',
    },
  },
})
