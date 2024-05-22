import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import explorer1ViteConfig from '@explorer-1/vue/vite.config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: explorer1ViteConfig.css,
  resolve: {
    alias: explorer1ViteConfig.resolve.alias
  }
})
