# Migration Guide: Upgrading to Explorer-1 v3

This document outlines the changes and steps required to update from v2 to **Explorer-1 v3**. The update includes a new package structure, configuration changes, and several breaking changes.

## Configuration & Dependency Updates

### Package Name and Structure Update

The `@nasa-jpl/explorer-1` project has been restructured into a monorepo under the new `@explorer-1` scope. This provides separate packages for assets, Vue components, and common utilities.

- **Old Package:** `@nasa-jpl/explorer-1` (Deprecated)
- **New Main Package:** **`@explorer-1/common`**

### Action Required

You must update your project to remove the old package and install the new one.

```bash
npm rm @nasa-jpl/explorer-1
npm install --save @explorer-1/common
```

The `dist` files are now **located** in `@explorer-1/common/dist`. Key file paths include:

- `@explorer-1/common/dist/assets/css/explorer-1.min.css`
- `@explorer-1/common/dist/assets/css/font-face.css`
- `@explorer--1/common/dist/assets/fonts/`
- `@explorer-1/common/dist/js/explorer-1.min.js`

_For more details, see the [`@explorer-1/common` README](packages/common/README.md)._

---

## Breaking Changes

### Global CSS Change

- **`.ThemeInternal` class**
  - If using the internal theme, you must now add the `ThemeInternal` class to your main wrapper element (e.g., the `<body>` tag).

### Component Updates

The markup for the following components has changed and will need to be updated in your templates.

- **`BaseLink`**
  - Class assignment logic has been completely refactored. All dynamic classes are now assigned directly within the component's template.

- **`BaseImage`**
  - The `data-src` attribute has been removed. Use the standard `src` attribute.

- **`KeyPoints`**
  - The internal markup for each list item (`<li>`) has changed.

- **`AccordionItem`**
  - The markup for the component's `header` section has been modified.

- **`BlockCardGridItem`**
  - The component now includes a link option with a CSS-driven arrow effect.
