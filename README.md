# Explorer 1: JPL's Design System

[![Release info](https://img.shields.io/badge/version-1.0.0--alpha-yellow)](https://internal.ghe.server/18x/jpl-design-system/releases)
[![View on GitHub](https://img.shields.io/badge/npm-@jpl%2Fexplorer--1-informational)](https://internal.npm.registry/#/detail/@jpl/explorer-1)
[![View on GitHub](https://img.shields.io/badge/github-18x%2Fjpl--design--system-informational)](https://internal.ghe.server/18x/jpl-design-system)

**This package is an active work-in-progress and not ready for use on other projects.** It will aim to include all of the frontend assets (bundled and scss) necessary to work with the html markup available through the [Explorer 1 Storybook](https://designlabinternal.domain/storybook/).

## Table of contents

- [Quick start](#quick-start)
- [What's Included](#whats-included)
  - [Components](#components)
- [Using bundled assets](#using-bundled-assets)
  - [Fonts](#fonts)
- [Using assets a la carte](#using-assets-a-la-carte)
- [Using the Explorer 1 Tailwind config](#using-the-explorer-1-tailwind-config)
- [For Contributing Developers](#for-contributing-developers)
  - [Getting started](#getting-started)
  - [Publishing to JPL's registry](#publishing-to-jpls-registry)
  - [Configuration files explained](#configuration-files-explained)
  - [Syncing styles with www-frontend](#syncing-styles-with-www-frontend)
  - [JavaScript](#javascript)
  - [Step-by-step instructions of how to import more components:](#step-by-step-instructions-of-how-to-import-more-components)

## Quick start

You will first need to configure your project for scoped usage of the internal.npm.registry registry.

1. In your application, create a `.npmrc` file in the root that contains:

   ```bash
   @jpl:registry=https://internal.npm.registry/
   ```

2. Configure your application to trust the self-signed cert for internal.npm.registry. There are various ways to do this (write-up of methods forthcoming)
3. Install the package and use assets as needed

   ```
   npm install @jpl/explorer-1
   ```

## What's Included

```
@jpl/explorer-1/
├── dist/
│   ├── css/explorer-1.min.css
│   ├── fonts/
│   │   ├── ArchivoNarrow-(SemiBold|Bold).(woff|woff2)
│   │   └── Metropolis-(Regular||Medium|SemiBold|Bold|ExtraBold).(woff|woff2)
│   ├── js/explorer-1.min.js
├── src/
│   ├── fonts/
│   ├── js/
│   └── scss/
└── tailwind.config.js

```

This package includes the base styles of Explorer 1 (typography, colors, spacing, etc.) which can be used in your projects via the TailwindCSS classes that are generated by Explorer 1's [TailwindCSS configuration](./tailwind.config.js). [Learn more about how to use TailwindCSS](https://tailwindcss.com/docs).

### Components

Not all components are included. A list of available components can be viewed in the `components[]` array in [www-sync.config.js](./www-sync.config.js). Components will be added in phases which are currently dictated by DesignLab's priority projects. If there is a component you would like to have included, please submit a feature request.

## Using bundled assets

Include all styles and javascript by adding the bundled css and js to your project:

```html
<!-- css -->
<link href="/dist/css/explorer-1.min.js" rel="stylesheet" />

<!-- javascript -->
<script src="/dist/js/explorer-1.min.js"></script>
```

Reference the [Explorer 1 Storybook](https://designlabinternal.domain/storybook/) for HTML snippets.

### Fonts

The bundled CSS references fonts with the relative path of `../fonts/`. You will need to add the fonts to your build process to ensure they are included in the relative path. An example of how to handle this is to write a node script that copies the `/dist/fonts/` folder to the correct path in your project.

## Using assets a la carte

Once the npm package is installed, you can import individual assets as needed. Below are some examples:

```scss
// a la carte component scss
@import '@jpl/explorer-1/src/scss/components/_BasePlaceholder';
```

```js
// a la carte js
require('@jpl/explorer-1/src/js/_detect-ie.js')
```

## Using the Explorer 1 Tailwind config

Below is an example of how to use the Explorer 1 TailwindCSS config in your own TailwindCSS config file. This can be useful if you want to set custom purge settings or any other overrides:

```js
// custom-app/tailwind.config.js

// import explorer 1's tailwind config
const explorer1Config = require('@jpl/explorer-1/tailwind.config.js')

module.exports = {
  ...explorer1Config,
  purge: ['../**/*.html'], // this will override explorer-1's purge settings
}
```

Lean more about [TailwindCSS configuration](https://tailwindcss.com/docs/configuration).

## For Contributing Developers

Documentation on how to run this project locally and add more components from the www storybook.

### Getting started

**Install dependencies**

```sh
npm i
```

**Serve at http://localhost:3000/**

```sh
# serve at http://localhost:3000/
# you may need to refresh if you've never run the project before
npm run dev
```

**Build to /dist**

```sh
npm run build
```

#### Included Components:

A list of included components can be viewed in the `components` array in [www-sync.config.js](./www-sync.config.js)

#### Important notes:

- The included components are currently arbitrary and geared toward testing. They can be selected by modifying `www-sync.config.js`
- `index.html` demos some html markup and scripts (lazyload) but it is not comprehensive and is not intended to be.
- Purge settings can be modified in `tailwind.purge.config.js`. Currently they are set to purge against www-frontend

### Publishing to JPL's registry

Publishing has been configured according to the JPL Verdaccio documentation: https://internal.ghe.server/TPT/verdaccio. For publishing packages, you must use the non-aliased URL of `internal.npm.registry`

1. Login to the registry

   ```bash
   npm login --registry https://internal.npm.registry
   ```

2. Publish the package

   ```bash
   npm publish
   ```

### Configuration files explained

This repo contains several configuration files. Here is a breakdown of what each one is for:

| File                       | Description                                                                                                                                       | Src          |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------- |
| `www-sync.config.js`       | Configuration file for extracting files from [www-frontend](https://github.com/nasa-jpl/www-frontend/). Determines which components are included. | explorer-1   |
| `tailwind.config.js`       | Tailwind CSS config file copied directly from [www-frontend](https://github.com/nasa-jpl/www-frontend/)                                           | www-frontend |
| `tailwind.purge.config.js` | Purge configuration for this repo.                                                                                                                | explorer-1   |
| `postcss.config.js`        | PostCSS configuration for this repo.                                                                                                              | explorer-1   |

### Syncing styles with [www-frontend](https://github.com/nasa-jpl/www-frontend)

Syncing with www-frontend means to extract SCSS from [www-frontend](https://github.com/nasa-jpl/www-frontend/) for use in this package. This is a temporary solution until [www-frontend](https://github.com/nasa-jpl/www-frontend/) is refactored to also use @jpl/explorer-1. File extraction is handled by the configuration file and scripts below and assumes that you have the `www-frontend` pulled locally, in a sibling folder to the jpl-design-system repo.

```
repos
├── jpl-design-system
└── www-frontend
```

Scripts that handle the extraction:

- `www-sync.config.js`
- `utils/buildBase.js`
- `utils/buildComponentScss.js`

**To update assets:**

```sh
# update base tailwind, scss, and font files
npm run sync:base

# update component scss based on components configured in `www-sync.config.js`
npm run sync:components

# update all assets
npm run sync:all
```

> Assets are tracked in this repo.

### JavaScript

JavaScript lives in `/src/js/` and parcel.js is used to bundle all imports and script files.

#### Adding to scripts.js

You can add more scripts as `require()` statements to the `/src/js/scripts.js` file. A few files are already included: `_detect-ie.js`, `_lazysizes_.js` and `_swiper.js`.

#### Naming convention

Any script that will be required by `scripts.js` should start with an underscore. Ex: `_my-script.js`

#### Using `node_modules`

If you want to use node_modules, then install the package as usual and add the necessary imports directly to `scripts.js` or as a separate js file that is then required in `scripts.js`. See `_lazysizes.js` as an example.

### Step-by-step instructions of how to import more components:

If the component has been deemed "part of the distributed design sytem" (i.e. its styles are truly one-to-one with [www-frontend](https://github.com/nasa-jpl/www-frontend/) in all use-cases), then it should be added to this repo. If the design is customized for a specific use-case, then add it manually to the project that needs the custom component. Do not add it to this repo.

Below are step-by-step instructions of how to import/add more components to the design system, using `BasePlaceholder` as an example

1. First, this workflow requires that you have the `www-frontend` pulled locally, in a sibling folder to the jpl-design-system repo.

   ```
   repos
   ├── jpl-design-system
   └── www-frontend
   ```

2. Add the component name to `www-sync.config.js`

   ```js
   // www-sync.config.js
   components: [
     ...
     "BasePlaceholder",
   ],
   ```

3. Sync component scss

   ```bash
   # repo root
   npm run sync:components
   ```

4. If the component includes custom functionality or javascript, it will need to be refactored manually. As an example, this has been done for swiper.js, the basis of all of our sliders/carousels: [src/js/\_swiper.js](./src/js/_swiper.js). Details on how to add more scripts are documented under [JavaScript](#javascript).

#### How were the files sourced and what changes were made to them?

Several assets are copied from the www-frontend repo via npm scripts. Below is an outline of the copied files and their relation to this repo:

**Files that are copied from [frontend-www](https://github.com/nasa-jpl/www-frontend):**

- Tailwind config: `tailwind.config.js`
- SCSS files: entire `/assets/scss/` folder\*
- Webfonts: entire `/static/fonts/` folder
- Webfont CSS: `/static/styles/font-face.css`\*

\*All of the above files are untouched except for:

- `font-face.css`: automatically renamed to `_fonts.scss` and placed in `/src/scss/` via `npm sync:base`
- `/assets/scss/` folder has some files unique to this repo:
  - `styles.scss`: similar to the original `main.scss` but with key differences (see comments in file for more details)
  - `_fonts.scss`: updated and renamed from `font-face.css` via `npm sync:base`
  - `_components.scss`: the scss partial that imports all component scss in `/src/scss/components/`, which is built by this repo via `npm sync:components`
