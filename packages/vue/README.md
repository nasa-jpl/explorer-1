# @explorer-1/vue

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Configuration (Vite)](#configuration-vite)
  - [Preloading Fonts](#preloading-fonts)
- [Using Components](#using-components)

## Prerequisites

- Recommended build tool: [Vite](https://vite.dev/)

## Getting Started

Install `@explorer-1/vue` and `@explorer-1/common` with [npm](https://www.npmjs.com/) or similar:

```bash
npm install --save @explorer-1/vue @explorer-1/common
```

Install secondary dependencies:

- @tailwindcss/forms
- click-outside-vue3
- dayjs
- mitt
- swiper
- vue
- vue-bind-once
- vue3-compare-image
- vue3-observe-visibility

```bash
npm install --save @tailwindcss/forms click-outside-vue3 dayjs mitt swiper vue vue-bind-once vue3-compare-image vue3-observe-visibility
```

### Configuration (Vite)

View files in the `@explorer-1/vue` package for examples on how to configure your Vue app with Vite.

- [vite.config.ts](./vite.config.ts)
- [postcss.config.js](./postcss.config.js)
- [tailwind.config.js](./tailwind.config.js)
- [index.html](./index.html) -- Vite entrypoint
- [main.ts](./src/main.ts) -- Vue app entrypoint
- [App.vue](./src/App.vue)

### Preloading Fonts

In the example `App.vue`, `@explorer-1/vue/src/assets/scss/styles-with-fonts.scss` is the main SCSS include. However, if you need to preload your fonts separately, you can do so by including `./assets/scss/styles.scss` instead (excludes font declarations). You can then preload fonts using a dedicated stylesheet:

1. Replace `@explorer-1/vue/src/assets/scss/styles-with-fonts.scss` with `@explorer-1/vue/src/assets/scss/styles.scss`
2. Preload fonts with this dedicated stylesheet:`@explorer-1/common/dist/assets/css/font-face.css`

## Using Components

Available components and usage guidance is documented in our [Storybook](https://nasa-jpl.github.io/explorer-1/).
