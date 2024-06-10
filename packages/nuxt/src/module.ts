import type {} from '@nuxt/schema'
import { useHead } from 'unhead'
import {
  defineNuxtModule,
  addComponentsDir,
  addImports,
  addPlugin,
  installModule,
  createResolver
} from '@nuxt/kit'
import { type Explorer1Theme } from '@explorer-1/vue/src/store/theme'

export interface ModuleOptions {
  theme: Explorer1Theme
  includeStyles: boolean
  includeComponents: boolean
  includePageTemplates: boolean
  includeStore: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@explorer-1/nuxt',
    configKey: 'explorer1'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    theme: 'defaultTheme',
    includeStyles: true,
    includeComponents: true,
    includePageTemplates: true,
    includeStore: true
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')
    const pluginDir = resolver.resolve('./runtime/plugins')

    // add plugins
    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    // if (options.includeStore) {
    //   switch (options.theme) {
    //     case 'defaultTheme':
    //       addPlugin(resolver.resolve(pluginDir, 'set-theme-default'))
    //       break
    //     case 'ThemeEdu':
    //       addPlugin(resolver.resolve(pluginDir, 'set-theme-edu'))
    //       break
    //     case 'ThemeInternal':
    //       addPlugin(resolver.resolve(pluginDir, 'set-theme-internal'))
    //       break
    //     default:
    //       addPlugin(resolver.resolve(pluginDir, 'set-theme-default'))
    //   }
    // }

    addPlugin(resolver.resolve(pluginDir, 'dayjs'))
    addPlugin(resolver.resolve(pluginDir, 'filters'))
    addPlugin(resolver.resolve(pluginDir, 'vue-click-outside'))
    addPlugin(resolver.resolve(pluginDir, 'vue-compare-image.client'))

    // TODO: Find a more elegant way to set htmlAttrs.class
    if (!nuxt.options.app.head.htmlAttrs) {
      nuxt.options.app.head['htmlAttrs'] = {
        class: [options.theme]
      }
    } else if (!nuxt.options.app.head.htmlAttrs.class) {
      nuxt.options.app.head.htmlAttrs['class'] = options.theme
    } else {
      nuxt.options.app.head.htmlAttrs.class = options.theme
    }

    if (options.includeStyles) {
      await installModule('@nuxtjs/tailwindcss', {
        configPath: resolver.resolve(runtimeDir, 'tailwind.config')
      })

      // add explorer-1 css
      nuxt.options.css.push(
        resolver.resolve('./../node_modules/@explorer-1/vue/src/assets/scss/', 'styles.scss')
      )

      // add postcss options
      nuxt.options.postcss = {
        plugins: {
          autoprefixer: {}
        }
      }

      // extend nuxt's vite config without overriding nuxt.config.js
      nuxt.options.vite = {
        ...nuxt.options.vite,
        css: {
          ...nuxt.options.css,
          preprocessorOptions: {
            scss: {
              additionalData: `@import "@explorer-1/common/src/scss/_hover.scss";`
            }
          }
        },
        build: {
          rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
              // './../node_modules/vue3-compare-image',
              './../node_modules/vue',
              './../node_modules/swiper',
              './../node_modules/@fancyapps/ui',
              './../node_modules/dayjs',
              './../node_modules/click-outside-vue3'
            ]
          }
        }
      }
    }
    if (options.includeComponents) {
      // add @explorer-1/vue components
      addComponentsDir({
        path: resolver.resolve('./../node_modules/@explorer-1/vue/src/components'),
        global: true,
        pathPrefix: false,
        extensions: ['.vue']
      })
    }
    if (options.includePageTemplates) {
      // add @explorer-1/vue page template components
      addComponentsDir({
        path: resolver.resolve('./../node_modules/@explorer-1/vue/src/templates'),
        global: true,
        pathPrefix: true,
        extensions: ['.vue']
      })
    }
    if (options.includeStore) {
      await installModule('@pinia/nuxt', {})
      // add header store
      addImports([
        {
          name: 'useHeaderStore',
          from: resolver.resolve('./../node_modules/@explorer-1/vue/src/store/header')
        },
        {
          name: 'useThemeStore',
          from: resolver.resolve('./../node_modules/@explorer-1/vue/src/store/theme')
        }
      ])
    }
  }
})
