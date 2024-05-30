import { defineNuxtModule, addComponentsDir, installModule } from '@nuxt/kit'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import explorer1ViteConfig from '@explorer-1/vue/vite.config'
import path from 'path'

export interface ModuleOptions {
  includeStyles: boolean
  includeComponents: boolean
}

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@explorer-1/nuxt',
    configKey: 'explorer1'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    includeStyles: true,
    includeComponents: true
  },
  async setup(_options, _nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    if (_options.includeStyles) {
      await installModule('@nuxtjs/tailwindcss', {
        configPath: resolve(runtimeDir, 'tailwind.config')
      })

      // add explorer-1 css
      _nuxt.options.css.push(
        resolve(__dirname, './../node_modules/@explorer-1/vue/src/assets/scss/styles.scss')
      )
      // add postcss options
      _nuxt.options.postcss = {
        plugins: {
          autoprefixer: {}
        }
      }

      // extend nuxt's vite config without overriding nuxt.config.js
      _nuxt.options.vite = {
        ..._nuxt.options.vite,
        resolve: {
          ..._nuxt.options.vite.resolve,
          alias: {
            ..._nuxt.options.vite?.resolve?.alias,
            ...explorer1ViteConfig?.resolve?.alias
          }
        },

        css: {
          ..._nuxt.options.css,
          ...explorer1ViteConfig.css
        }
      }
    }
    if (_options.includeComponents) {
      // add all @explorer-1/vue components
      addComponentsDir({
        path: resolve(__dirname, './../node_modules/@explorer-1/vue/src/components'),
        global: true,
        pathPrefix: false,
        extensions: ['.vue']
      })
    }
  }
})
