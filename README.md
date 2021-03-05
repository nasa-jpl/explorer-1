# JPL Design System Assets

**This is an active work-in-progress**

This repo will contain all of the frontend assets necessary to work with the html markup available through the [JPL WWW Storybook](https://designlabinternal.domain/storybook/). Assets are provided via webpack. We are working on providing compiled css and js files as well.

**Table of contents**

- [JPL Design System Assets](#jpl-design-system-assets)
  - [Getting started](#getting-started)
  - [Syncing with frontend-www](#syncing-with-frontend-www)
  - [References](#references)

## Getting started

- Currently, I've manually copied over the base assets from www-frontend.
- The included components thus far are arbitrary and more for testing. They can be selected by modifying `main.config.js`
- I've also made an index.html that demos some html markup and scripts (lazyload).

**Install dependencies**

```sh
npm i
```

**Serve at http://localhost:8080/**

```sh
npm run dev
```

**Build to /dist**

```sh
# purges anything not in /html/index.html
npm run build
```

To rebuild scss based on `main.config.js`:

```
npm run build-scss
```

## Syncing with [frontend-www](https://github.com/nasa-jpl/www-frontend)

Currently, all files are manually copied over into this repository. Ideally we would write a script or action that would automate most, if not all, of this process.

**Files that are copied straight from [frontend-www](https://github.com/nasa-jpl/www-frontend):**

- Tailwind config: `tailwind.config.js`\*
- SCSS files: entire `/assets/scss/` folder\*
- Webfonts: entire `/static/fonts/` folder
- Webfont CSS: `/static/styles/font-face.css`\*
- Plugins/scripts: `/plugins/detect-ie.js`, `/plugins/lazysizes.client.js`

\*All of the above files are completely untouched except for:

- `tailwind.config.js`: `purge` options changed to `false`
- `font-face.css`: renamed to `_fonts.scss` and placed in `/src/scss/`
- `/assets/scss/` folder has some files added to it
  - `main-design-system.scss`: similar to the original `main.scss` but with key differences (see comments in file for more details)
  - `_fonts.scss`: the renamed `font-face.css` file
  - `_components.scss`: the scss partial that imports all component scss in `/src/scss/components/`, which is built by this repo

**Components SCSS folder:**

`main.config.js` contains an array of all components that should be part of the design system. It only includes a few sample components for now. To build scss based on these components:

```
npm run build-scss
```

This does a few things:

- copies the css from all matching vue components and puts them into individual scss files in `/src/scss/components`
- overwrites `_components.scss` with `@import` statements for each component scss file created
- **important note**: currently, the components array in `main.config.js` only works for components that live in a parent folder of the same name

## References

This webpack configuration is heavily informed and inspired by https://github.com/alexcanana/webpack-starter.

Other references

- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/build-tools
- https://stackoverflow.com/questions/55606865/combining-tailwind-css-with-sass-using-webpack
