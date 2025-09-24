# Explorer 1: JPL's Design System

[![npm](https://img.shields.io/npm/v/@nasa-jpl/explorer-1)](https://npmjs.com/package/@nasa-jpl/explorer-1)
[![pre-commit enabled](https://img.shields.io/badge/pre--commit-enabled-brightgreen?logo=pre-commit&logoColor=white)](https://github.com/pre-commit/pre-commit)
[![View the Storybook](https://img.shields.io/badge/Storybook-FF4785.svg?logo=storybook&logoColor=white)](https://nasa-jpl.github.io/explorer-1/)

## Prerequisites

- [pnpm](https://pnpm.io/installation)
- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

## Getting Started

First, install dependencies:

```bash
nvm use
pnpm install
```

### Run Storybook for Vue Components

```bash
# http://localhost:6006/
make vue-storybook
```

### Other commands

```bash
# Start the HTML Storybook (internal-only components)
# http://localhost:7007/
make html-storybook

# Start a Vue app to test components directly (optional)
make vue

# Start a Nuxt app to test the nuxt module (currently broken)
make nuxt
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

## Table of contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Run Storybook for Vue Components](#run-storybook-for-vue-components)
  - [Other commands](#other-commands)
  - [Publishing to npm](#publishing-to-npm)
  - [Developing Vue components](#developing-vue-components)
- [What's included](#whats-included)
  - [Published Packages](#published-packages)
  - [Tailwind](#tailwind)
- [Getting Started](#getting-started-1)
- [For contributing developers](#for-contributing-developers)
- [Change imports](#change-imports)

## What's included

This package includes all frontend assets (JS and CSS) necessary to use Explorer-1 components in your project. Branding guidelines, available components and usage examples can be found in the [Explorer 1 Storybook](https://nasa-jpl.github.io/explorer-1/).

Version 3 adds a Vue component library and also introduces a monorepo structure. The Storybook has evolved to include all Vue components, internal-only components (i.e. our HTML components), and legacy V2 docs.

### Published Packages

- @explorer-1/vue: Vue components
- @explorer-1/common: Static assets and shared assets between @explorer-1/vue

#### Other available packages, though generally unused and unnecessary

- @explorer-1/vue-storybook
- @explorer-1/html-storybook
- @explorer-1/storybook-common

### Tailwind

Explorer 1's CSS classes are generated from our [custom Tailwind CSS configuration](./packages/common/tailwind.config.js). Tailwind CSS is a utility-first CSS framework, and Explorer 1's CSS class names are based on this model. [Learn more about how to use Tailwind CSS](https://tailwindcss.com/docs).

## Getting Started

There are two ways to integrate Explorer-1 with your project. You can either 1) use the Vue component library or 2) use the compiled assets with your own component library or HTML

- [Use the Vue component library](./packages/vue/README.md) (requires the [Vue.js](https://vuejs.org/) framework)
- [Use compiled assets](./packages/common/README.md) (compatible with other frameworks)

## For contributing developers

See the [contributing guide](CONTRIBUTING.md) for a detailed guide on how to contribute to Explorer 1.

# V2 to V3 Migration Guide

## Change imports

- `@nasa-jpl/explorer-1` change to `@explorer-1/common`
- change includes like `require('@nasa-jpl/explorer-1/src/js/vendors/_swiper.js');` to
