import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@explorer-1/common/src/scss/_hover.scss";`
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'index.css') return 'assets/css/explorer-1.min.css'
          if (assetInfo.name?.startsWith('ArchivoNarrow'))
            return 'assets/fonts/archivo-narrow/[name].[ext]'
          if (assetInfo.name?.startsWith('Metropolis'))
            return 'assets/fonts/metropolis/[name].[ext]'
          return 'assets/[name].[ext]'
        },
        entryFileNames: (assetInfo) => {
          if (assetInfo.name === 'index') return 'assets/js/explorer-1.min.js'
          return 'assets/js/[name].js'
        },
        chunkFileNames: 'assets/chunks/[name].js'
      }
    }
  }
})
