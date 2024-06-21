import type {} from '@nuxt/schema'
import {
  defineNuxtModule,
  addComponentsDir,
  addImports,
  addPlugin,
  installModule,
  createResolver,
  addImportsSources
} from '@nuxt/kit'
export interface ModuleOptions {
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
    includeStyles: true,
    includeComponents: true,
    includePageTemplates: true,
    includeStore: true
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)
    const runtimeDir = resolver.resolve('./runtime')
    const pluginDir = resolver.resolve('./runtime/plugins')

    // inject public assets
    nuxt.hook('nitro:config', async (nitroConfig) => {
      nitroConfig.publicAssets ||= []
      nitroConfig.publicAssets.push({
        dir: resolver.resolve(runtimeDir, 'public'),
        maxAge: 60 * 60 * 24 * 365 // 1 year
      })
    })

    // inject plugins
    addPlugin(resolver.resolve(pluginDir, 'dayjs'))
    addPlugin(resolver.resolve(pluginDir, 'filters'))
    addPlugin(resolver.resolve(pluginDir, 'vue-click-outside'))
    addPlugin(resolver.resolve(pluginDir, 'vue-compare-image.client'))

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
              './../node_modules/vue',
              './../node_modules/swiper',
              './../node_modules/@fancyapps/ui',
              './../node_modules/dayjs',
              './../node_modules/click-outside-vue3',
              './../node_modules/vue3-compare-image'
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
    } // types
    addImportsSources({
      from: '@explorer-1/vue/src/interfaces',
      imports: ['ImageObject', 'Explorer1Theme']
    })
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
      await installModule('@pinia/nuxt', {
        autoImports: ['useThemeStore'],
        storesDirs: ['./store/**', resolver.resolve(runtimeDir, 'store')]
      })
      addImportsSources({
        from: '@explorer-1/vue/src/store/theme',
        imports: ['useThemeStore']
      })
      addImportsSources({
        from: '@explorer-1/vue/src/store/header',
        imports: ['useHeaderStore']
      })
    }
  }
})
