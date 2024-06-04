import { defineNuxtModule, createResolver, installModule, addComponentsDir, addImports } from '@nuxt/kit';

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
    includeStores: true
  },
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url);
    const runtimeDir = resolver.resolve("./runtime");
    if (_options.includeStyles) {
      await installModule("@nuxtjs/tailwindcss", {
        configPath: resolver.resolve(runtimeDir, "tailwind.config")
      });
      _nuxt.options.css.push(
        resolver.resolve("./../node_modules/@explorer-1/vue/src/assets/scss/", "styles.scss")
      );
      _nuxt.options.postcss = {
        plugins: {
          autoprefixer: {}
        }
      };
      _nuxt.options.vite = {
        ..._nuxt.options.vite,
        css: {
          ..._nuxt.options.css,
          preprocessorOptions: {
            scss: {
              additionalData: `@import "@explorer-1/common/src/scss/_hover.scss";`
            }
          }
        }
      };
    }
    if (_options.includeComponents) {
      addComponentsDir({
        path: resolver.resolve("./../node_modules/@explorer-1/vue/src/components"),
        global: true,
        pathPrefix: false,
        extensions: [".vue"]
      });
    }
    if (_options.includePageTemplates) {
      addComponentsDir({
        path: resolver.resolve("./../node_modules/@explorer-1/vue/src/templates"),
        global: true,
        pathPrefix: true,
        extensions: [".vue"]
      });
    }
    if (_options.includeStores) {
      await installModule("@pinia/nuxt", {});
      addImports([
        {
          name: "useHeaderStore",
          from: resolver.resolve("./../node_modules/@explorer-1/vue/src/stores/header")
        }
      ]);
    }
  }
});

export { module as default };
