import { defineNuxtModule, addComponentsDir, installModule, createResolver } from '@nuxt/kit'
import explorer1ViteConfig from '@explorer-1/vue/vite.config'

export interface ModuleOptions {
  includeStyles: boolean
  includeComponents: boolean
}

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
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')
    if (_options.includeStyles) {
      await installModule('@nuxtjs/tailwindcss', {
        configPath: resolver.resolve(runtimeDir, 'tailwind.config')
      })

      // add explorer-1 css
      _nuxt.options.css.push(
        resolver.resolve('./../node_modules/@explorer-1/vue/src/assets/scss/', 'styles.scss')
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
        path: resolver.resolve('./../node_modules/@explorer-1/vue/src/components'),
        global: true,
        pathPrefix: false,
        extensions: ['.vue']
      })
    }
  }
})
