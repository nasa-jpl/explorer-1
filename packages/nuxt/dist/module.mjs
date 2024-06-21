import { defineNuxtModule, createResolver, addPlugin, installModule, addComponentsDir, addImportsSources } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@explorer-1/nuxt",
    configKey: "explorer1"
  },
  // Default configuration options of the Nuxt module
  defaults: {
    includeStyles: true,
    includeComponents: true,
    includePageTemplates: true,
    includeStore: true
  },
  async setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);
    const runtimeDir = resolver.resolve("./runtime");
    const pluginDir = resolver.resolve("./runtime/plugins");
    nuxt.hook("nitro:config", async (nitroConfig) => {
      nitroConfig.publicAssets ||= [];
      nitroConfig.publicAssets.push({
        dir: resolver.resolve(runtimeDir, "public"),
        maxAge: 60 * 60 * 24 * 365
        // 1 year
      });
    });
    addPlugin(resolver.resolve(pluginDir, "dayjs"));
    addPlugin(resolver.resolve(pluginDir, "filters"));
    addPlugin(resolver.resolve(pluginDir, "vue-click-outside"));
    addPlugin(resolver.resolve(pluginDir, "vue-compare-image.client"));
    if (options.includeStyles) {
      await installModule("@nuxtjs/tailwindcss", {
        configPath: resolver.resolve(runtimeDir, "tailwind.config")
      });
      nuxt.options.css.push(
        resolver.resolve("./../node_modules/@explorer-1/vue/src/assets/scss/", "styles.scss")
      );
      nuxt.options.postcss = {
        plugins: {
          autoprefixer: {}
        }
      };
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
              "./../node_modules/vue",
              "./../node_modules/swiper",
              "./../node_modules/@fancyapps/ui",
              "./../node_modules/dayjs",
              "./../node_modules/click-outside-vue3",
              "./../node_modules/vue3-compare-image"
            ]
          }
        }
      };
    }
    if (options.includeComponents) {
      addComponentsDir({
        path: resolver.resolve("./../node_modules/@explorer-1/vue/src/components"),
        global: true,
        pathPrefix: false,
        extensions: [".vue"]
      });
    }
    addImportsSources({
      from: "@explorer-1/vue/src/interfaces",
      imports: ["ImageObject", "Explorer1Theme"]
    });
    if (options.includePageTemplates) {
      addComponentsDir({
        path: resolver.resolve("./../node_modules/@explorer-1/vue/src/templates"),
        global: true,
        pathPrefix: true,
        extensions: [".vue"]
      });
    }
    if (options.includeStore) {
      await installModule("@pinia/nuxt", {
        autoImports: ["useThemeStore"],
        storesDirs: ["./store/**", resolver.resolve(runtimeDir, "store")]
      });
      addImportsSources({
        from: "@explorer-1/vue/src/store/theme",
        imports: ["useThemeStore"]
      });
      addImportsSources({
        from: "@explorer-1/vue/src/store/header",
        imports: ["useHeaderStore"]
      });
    }
  }
});

export { module as default };
