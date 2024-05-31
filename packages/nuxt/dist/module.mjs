import { defineNuxtModule, createResolver, installModule, addComponentsDir } from '@nuxt/kit';

const module = defineNuxtModule({
  meta: {
    name: "@explorer-1/nuxt",
    configKey: "explorer1"
  },
  // Default configuration options of the Nuxt module
  defaults: {
    includeStyles: true,
    includeComponents: true
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
  }
});

export { module as default };
