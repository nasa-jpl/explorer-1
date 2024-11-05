# Explorer 1: JPL's Design System

[![npm](https://img.shields.io/npm/v/@nasa-jpl/explorer-1)](https://npmjs.com/package/@nasa-jpl/explorer-1)
[![pre-commit enabled](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![View the Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?logo=storybook&logoColor=white)](https://nasa-jpl.github.io/explorer-1/)

This package aims to include all of the frontend assets (JS and SCSS) necessary to create components using the HTML markup examples in the [Explorer 1 Storybook](https://nasa-jpl.github.io/explorer-1/).

## Version 3.x.x docs (draft)

Version 3.x.x adds Vue components and a Nuxt module to Explorer-1.

```bash
# Start the Vue Storybook
make vue-storybook

# Start a Vue app to test components directly (optional)
make vue

# Start a Nuxt app to test the nuxt module
make nuxt

# Start the HTML Storybook (from v2.x.x)
make html-storybook
```

### Publishing to npm

1. Update the package version for any packages that have been changed since the last publish (usually @explorer-1/vue and sometimes @explorer-1/common)
2. Also update the package version for the main workspace.

3. Commit changes and also tag with the latest main workspace version

   ```bash
   git commit -m "bumping package version for publishing"
   git tag 3.x.x
   git push
   git push --tags
   ```

4. Publish relevant packages to npm:

   ```bash
   pnpm publish --filter \@explorer-1/vue
   ```

### Developing Vue components

1. Create new component files in `packages/vue`
2. Start the Vue Storybook to preview and test your component (your component must have a `*.stories.js` file): `make vue-storybook`

--

**The below docs only apply to Explorer 1 versions 2.x.x and earlier. Docs are incomplete for version 3.x.x**

## Table of contents

- [Explorer 1: JPL's Design System](#explorer-1-jpls-design-system)
  - [Version 3.x.x docs (draft)](#version-3xx-docs-draft)
    - [Publishing to npm](#publishing-to-npm)
    - [Developing Vue components](#developing-vue-components)
  - [Table of contents](#table-of-contents)
  - [What's included](#whats-included)
  - [Installation](#installation)
  - [Using bundled assets](#using-bundled-assets)
    - [CSS and JS](#css-and-js)
    - [Fonts](#fonts)
  - [Compile your own: Using assets a la carte](#compile-your-own-using-assets-a-la-carte)
    - [Styles](#styles)
      - [Using the Explorer 1 Tailwind config](#using-the-explorer-1-tailwind-config)
      - [Importing SCSS files](#importing-scss-files)
      - [Preloading Fonts](#preloading-fonts)
    - [JavaScript](#javascript)
    - [Additional requirements for carousels](#additional-requirements-for-carousels)
    - [Additional requirements for modals and lightboxes](#additional-requirements-for-modals-and-lightboxes)
  - [Component templates (HTML)](#component-templates-html)
  - [For contributing developers](#for-contributing-developers)

## What's included

This package includes the base styles of Explorer 1 (typography, colors, spacing, etc.) along with select components. Branding guidelines, available components and usage examples can be found in the [Explorer 1 Storybook](https://nasa-jpl.github.io/explorer-1/).

<details><summary>Package contents</summary>

```

@nasa-jpl/explorer-1/
├── dist/
│ ├── css/
│ │ ├── explorer-1.min.css
│ │ └── font-face.css
│ ├── fonts/
│ │ ├── archivo-narrow/
│ │ └── metropolis/
│ └── js/
│ └── explorer-1.min.js
├── src/
│ ├── fonts/
│ ├── js/
│ └── scss/
└── tailwind.config.js

```

</details>

Explorer 1's CSS classes are based on our [custom Tailwind CSS configuration](./tailwind.config.js). Tailwind CSS is a utility-first CSS framework, and Explorer 1's CSS class names are based on this model. [Learn more about how to use Tailwind CSS](https://tailwindcss.com/docs).

## Installation

Install with [npm](https://www.npmjs.com/):

```bash
npm install --save @nasa-jpl/explorer-1
```

## Using bundled assets

### CSS and JS

Include all styles and scripts by adding the bundled CSS and JS to your project's HTML. You will need to retrieve the files from the installed package in `node_modules/@nasa-jpl/explorer-1/dist/`, place them somewhere in your project, and update the paths to point to the right location.

```html
<!-- CSS -->
<link href="/path/to/explorer-1.min.css" rel="stylesheet" />

<!-- JavaScript -->
<script src="/path/to/explorer-1.min.js"></script>
```

The bundled CSS includes only the Tailwind CSS classes that are used by our team's products and in Explorer 1's documentation; other default Tailwind CSS classes are not available. If you want to use Explorer 1 along with other Tailwind CSS classes not provided by `explorer-1.min.css`, you can use Explorer 1's Tailwind config in your own project. See [Compile your own: using assets a la carte](#compile-your-own-using-assets-a-la-carte) for more information.

### Fonts

The bundled CSS references fonts with the relative path of `../fonts/`. You will need to add the fonts to your build process to ensure they are included in the relative path. An example of how to handle this is to write a Node script that copies the `/dist/fonts/` folder to the correct path in your project.

```
your-project
├── css/
│   ├── explorer-1.min.css
└── fonts/
    ├── archivo-narrow/
    └── metropolis/
```

> Note: if you are using the bundled CSS `explorer-1.min.css`, do not include `font-face.css`, otherwise your font styles will be declared twice. See [Preloading fonts](#preloading-fonts) for more information.

## Compile your own: Using assets a la carte

Instead of including all of the bundled CSS and JS, you can import individual assets as needed and compile your own CSS and JavaScript. Using Explorer 1 in this way will require additional tooling and npm packages in your project. This documentation assumes you are familiar with configuring frontend tooling.

### Styles

Using styles a la carte requires:

1. [Tailwind CSS](https://tailwindcss.com) and [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
   ```bash
   npm install --save tailwindcss @tailwindcss/forms
   ```
2. Frontend tooling to compile and purge Tailwind CSS and SCSS, such as [Parcel](https://parceljs.org/) with PostCSS and Sass configuration. Tailwind CSS also provides [some guidance on how to use preprocessors with Tailwind](https://tailwindcss.com/docs/using-with-preprocessors#using-sass-less-or-stylus).
   > Note: [node-sass](https://www.npmjs.com/package/node-sass) is not supported. Use [dart-sass](https://sass-lang.com/dart-sass).

#### Using the Explorer 1 Tailwind config

Below is an example of how to use the Explorer 1 Tailwind CSS config in your own `tailwind.config.js`. This can be useful if you want to set custom purge settings or any other overrides:

```js
// your-project/tailwind.config.js

// import Explorer 1's Tailwind config
const explorer1Config = require('@nasa-jpl/explorer-1/tailwind.config.js');

module.exports = {
  ...explorer1Config,
  purge: ['../**/*.html'], // this will override Explorer 1's purge settings
};
```

[Learn more about Tailwind CSS configuration](https://tailwindcss.com/docs/configuration)

#### Importing SCSS files

Once your tooling and `tailwind.config.js` is set up, you can import SCSS files from `@nasa-jpl/explorer-1/src/scss/` as needed. Your SCSS entrypoint should look something like this:

```scss
// main.scss

// Tailwind CSS
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

// Vendors
// Warning: includes Parcel-specific syntax.
// Alternative: you can write your own _vendors.scss with syntax compatible with your compiler.
@import '@nasa-jpl/explorer-1/src/scss/vendors';

// Main elements: Explorer 1 base styles
@import '@nasa-jpl/explorer-1/src/scss/forms';
@import '@nasa-jpl/explorer-1/src/scss/hover';
@import '@nasa-jpl/explorer-1/src/scss/fonts';
@import '@nasa-jpl/explorer-1/src/scss/aspect-ratios';
@import '@nasa-jpl/explorer-1/src/scss/grid';
@import '@nasa-jpl/explorer-1/src/scss/typography';
@import '@nasa-jpl/explorer-1/src/scss/polyfills';
@import '@nasa-jpl/explorer-1/src/scss/animations';

// Themes: include this if you want to use the internal theme colors
@import '@nasa-jpl/explorer-1/src/scss/themes/internal';

// Components: include all components
// Alternative: cherry-pick from _components.scss and include only those that are needed
@import '@nasa-jpl/explorer-1/src/scss/components';
```

#### Preloading Fonts

If your project requires more control over font preloading, you can omit the `_fonts.scss` import, and instead use the `font-face.css` stylesheet in `/dist/css/` with the `fonts` folder in the same relative path as in `dist`:

```
your-project
├── css/
│   ├── font-face.css
└── fonts/
    ├── archivo-narrow/
    └── metropolis/
```

Then preload the CSS in your template followed by the necessary font files.

```html
<!-- your-project.html -->
<link rel="preload" href="/path/to/font-face.css" as="style" />
<link
  rel="preload"
  href="/path/to/fonts/metropolis/Metropolis-Medium.woff2"
  as="font"
  type="font/woff2"
  crossorigin="true"
/>
```

### JavaScript

At minimum, compiling your own JavaScript requires [lazysizes](https://www.npmjs.com/package/lazysizes), which is used for lazy loading images. To forgo this requirement, you will need to modify your HTML templates and remove the prepending `data-` from all `data-src` and `data-srcset` attributes.

```bash
npm install --save lazysizes
```

```js
// your-project.js
require('@nasa-jpl/explorer-1/src/js/vendors/_lazysizes.js');
```

Some components also require additional JavaScript from explorer-1:

```js
// your-project.js
require('@nasa-jpl/explorer-1/src/js/components/_HeroMedia.js');
```

Reference the JavaScript files in [`/src/js/components/`](https://github.com/nasa-jpl/explorer-1/tree/main/src/js/components) for components that require additional JavaScript. The files will share the same name as the component.

### Additional requirements for carousels

Carousel components require [swiper](https://www.npmjs.com/package/swiper) CSS and JS.

```bash
npm install --save swiper
```

```scss
// your-project.scss
// import swiper styles before Explorer 1 styles
@import 'swiper/swiper-bundle.css';
```

```js
// your-project.js
require('@nasa-jpl/explorer-1/src/js/vendors/_swiper.js');
```

### Additional requirements for modals and lightboxes

Modals and image lightboxes require [@fancyapps/ui](https://www.npmjs.com/package/@fancyapps/ui) CSS and JS.

```bash
npm install --save @fancyapps/ui
```

```scss
// your-project.scss
// import fancyapps styles and Explorer 1 fancyapps overrides before other Explorer 1 styles
@import '@fancyapps/ui/dist/fancybox.css';
@import '@nasa-jpl/explorer-1/src/scss/vendors/fancybox_customizations';
```

```js
// your-project.js
require('@fancyapps/ui');
```

## Component templates (HTML)

Reference the [Explorer 1 Storybook](https://nasa-jpl.github.io/explorer-1/) for HTML snippets you can use to create components and build your pages. Step-by-step instructions on how to copy HTML snippets can be found on the [Getting Started Guide for Developers](https://nasa-jpl.github.io/explorer-1/?path=/docs/getting-started-developer--docs#components-and-html-templates) page.

## For contributing developers

See the [contributing guide](CONTRIBUTING.md) for detailed instructions on how to contribute to Explorer 1.
