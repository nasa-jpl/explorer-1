import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true
    }),
    Components({
      dirs: ['./src/components', './src/templates']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          // Deprecation Warning: https://sass-lang.com/d/import
          'import',
          // Deprecation Warning: https://sass-lang.com/d/legacy-js-api
          'legacy-js-api'
        ]
      }
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Explorer1Vue',
      // the proper extensions will be added
      fileName: 'explorer-1-vue'
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled into your library
      external: ['vue', 'lodash'],
      output: {
        // Provide global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
          lodash: 'lodash',
          'lodash/throttle': '_throttle'
        }
      }
    }
  }
})
