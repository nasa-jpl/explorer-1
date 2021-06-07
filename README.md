# JPL Design System Assets

[![View on GitHub](https://img.shields.io/badge/github-18x%2Fjpl--design--system-informational)](https://internal.ghe.server/18x/jpl-design-system) ![Release info](https://img.shields.io/badge/version-1.0.0--alpha-yellow)

**This package is an active work-in-progress and not ready for use on other projects.** This package will contain all of the frontend assets necessary to work with the html markup available through the [JPL WWW Storybook](https://designlabinternal.domain/storybook/).

**Table of contents**

- [Usage](#usage)
  - [Add the JPL registry to your project](#add-the-jpl-registry-to-your-project)
  - [Install the package and use assets as needed](#install-the-package-and-use-assets-as-needed)
- [Contributors: Getting started](#contributors-getting-started)
  - [Included Components:](#included-components)
  - [Important notes:](#important-notes)
  - [Publishing to JPL's registry](#publishing-to-jpls-registry)
- [Contributors: Configuration Files](#contributors-configuration-files)
- [Syncing with www-frontend](#syncing-with-www-frontend)
  - [How were the files sourced and what changes were made to them?](#how-were-the-files-sourced-and-what-changes-were-made-to-them)

## Usage

### Add the JPL registry to your project

You will first need to configure usage of the internal.npm.registry registry.

1. In your application, create an `.npmrc` file in the root that contains:

   ```bash
   @jpl:registry=https://internal.npm.registry/
   ```

2. Configure your application to trust the self-signed cert. There are various ways to do this (write-up of methods forthcoming)

### Install the package and use assets as needed

```
npm install @jpl/explorer-1
```

Try importing and using assets from it. For example, in a scss file, get the styles for a specific component:

```scss
// a la carte component scss
@import '@jpl/explorer-1/src/scss/components/_BasePlaceholder';
```

```js
// a la carte js
require('@jpl/explorer-1/src/js/_detect-ie.js')
```

Or the all-inclusive minified css and js from `dist`

```scss
// bundled css
@import '@jpl/explorer-1/dist/css/styles.min.css';
```

```js
// bundled js
require('@jpl/explorer-1/dist/js/scripts.min.js')
```

Note that accompanying assets will also need to be imported in your application's build process (i.e. to account for paths to font files in `styles.min.css`, the end-user may need to copy the `fonts` folder from `dist` into their project, etc).

## Contributors: Getting started

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

### Included Components:

A list of included components can be viewed in the `components` array in [jpl-ds.config.js](./jpl-ds.config.js)

### Important notes:

- The included components are currently arbitrary and geared toward testing. They can be selected by modifying `jpl-ds.config.js`
- `index.html` demos some html markup and scripts (lazyload) but it is not comprehensive
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

## Contributors: Configuration Files

This repo contains several configuration files. Here is a breakdown of what each one is for:

| File                       | Description                                                                                                       | Src          |
| :------------------------- | :---------------------------------------------------------------------------------------------------------------- | :----------- |
| `jpl-ds.config.js`         | Main configuration file for this repo. Determines which components are included in the distributed design system. | local        |
| `tailwind.config.js`       | Tailwind CSS config file copied directly from www-frontend without making any changes                             | www-frontend |
| `tailwind.purge.config.js` | Purge configuration for this repo.                                                                                | local        |
| `postcss.config.js`        | PostCSS configuration for this repo. Note that purge settings are handled via tailwind configuration              | local        |

## Syncing with [www-frontend](https://github.com/nasa-jpl/www-frontend)

**To update assets:**

```sh
# update base tailwind, scss, and font files
npm run sync:base

# update component scss based on components configured in `jpl-ds.config.js`
npm run sync:components

# update all assets
npm run sync:all
```

> Assets are tracked in this repo.

### How were the files sourced and what changes were made to them?

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
