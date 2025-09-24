# @explorer-1/common

## Table of contents

- [Table of contents](#table-of-contents)
- [What's included](#whats-included)
  - [Tailwind](#tailwind)
- [Getting Started](#getting-started)
  - [Include the assets in your project](#include-the-assets-in-your-project)
  - [Fonts](#fonts)
- [Build your own component templates using our docs as a guide](#build-your-own-component-templates-using-our-docs-as-a-guide)

## What's included

This package includes compiled assets for Explorer-1 and assets shared with @explorer-1/vue.

<details><summary>Workspace contents</summary>

```

@nasa-jpl/common/
├── dist/            <-- Compiled Assets
│ ├── css/
│ │ ├── explorer-1.min.css
│ │ └── font-face.css
│ ├
├── src/             <-- Source code, use by @explorer-1/vue
│ ├── fonts/
│ ├── images/
│ ├── js/
│ ├── public/
│ └── scss/
├── stylelint.config.js
├── tailwind.colors.ts
└── tailwind.config.ts

```

</details>

### Tailwind

Explorer 1's CSS classes are generated from our [custom Tailwind CSS configuration](./packages/common/tailwind.config.js). Tailwind CSS is a utility-first CSS framework, and Explorer 1's CSS class names are based on this model. [Learn more about how to use Tailwind CSS](https://tailwindcss.com/docs).

There are two ways to integrate Explorer-1 with your project. You can either 1) use the Vue component library or 2) use the compiled assets with your own component library or HTML

## Getting Started

Install with [npm](https://www.npmjs.com/) or similar:

```bash
npm install --save @explorer-1/common
```

### Include the assets in your project

Include all styles and scripts by adding the bundled CSS and JS to your project's HTML. You will need to retrieve the files from the installed package in `node_modules/@explorer-1/common/dist/`, place them somewhere in your project, and update the paths to point to the right location.

```html
<!-- CSS -->
<link
  href="/path/to/explorer-1.min.css"
  rel="stylesheet"
/>

<!-- JavaScript -->
<script src="/path/to/explorer-1.min.js"></script>
```

The bundled CSS includes only the Tailwind CSS classes that are used by our team's products and in Explorer 1's documentation; other default Tailwind CSS classes are not available.

### Fonts

The bundled CSS references fonts with the relative path of `../fonts/`. You will need to add the fonts to your build process to ensure they are included in the relative path. An example of how to handle this is to write a Node script that copies the `/dist/fonts/` folder to the correct path in your project.

```
your-project
├── css/
│   ├── explorer-1.min.css
├── fonts/
│   ├── archivo-narrow/
│   └── metropolis/
└── js/
    └── explorer-1.min.js
```

#### Preloading Fonts

If your project requires more control over font preloading, you can preload the `font-face.css` stylesheet in `/dist/css/`:

```
your-project
└── css/
    └── font-face.css
```

Then preload the CSS in your template followed by the necessary font files.

```html
<!-- your-project.html -->
<link
  rel="preload"
  href="/path/to/font-face.css"
  as="style"
/>
<link
  rel="preload"
  href="/path/to/fonts/metropolis/Metropolis-Medium.woff2"
  as="font"
  type="font/woff2"
  crossorigin="true"
/>
```

## Build your own component templates using our docs as a guide

Reference the [Explorer 1 Storybook](https://nasa-jpl.github.io/explorer-1/) for HTML snippets you can use to create components and build your pages. Step-by-step instructions on how to copy HTML snippets can be found on the [Getting Started Guide for Developers](https://nasa-jpl.github.io/explorer-1/?path=/docs/getting-started-developer--docs#components-and-html-templates) page.
