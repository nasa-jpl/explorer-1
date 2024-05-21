import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

console.log('vite config accessed')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
  },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: 'assets/[name].[ext]',
  //       entryFileNames: 'assets/[name].js',
  //       chunkFileNames: 'assets/[name].js'
  //     }
  //   }
  // },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Explorer1Vue',
      // the proper extensions will be added
      fileName: 'explorer-1-vue'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'swiper'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
