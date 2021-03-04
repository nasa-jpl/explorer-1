# JPL Design System Assets

This repo will contain all of the frontend assets necessary to work with the html markup available through the [JPL WWW Storybook](https://designlabinternal.domain/storybook/). Assets are provided via webpack. We are working on providing compiled css and js files as well.

## Important Notes

- This is an active work-in-progress
- does not contain any component-specific styles yet except for `BlockTeaser` and `BaseButton`

## Syncing with [frontend-www](https://github.com/nasa-jpl/www-frontend)

Currently, all files are manually copied over into this repository. Ideally we would write a script or action that would automate most, if not all, of this process.

**Files that are copied straight from [frontend-www](https://github.com/nasa-jpl/www-frontend):**

- Tailwind config: `tailwind.config.js`
- SCSS files: entire `/assets/scss/` folder\*
- Webfonts: entire `/static/fonts/` folder
- Webfont CSS: `/static/styles/font-face.css`\*
- Plugins/scripts: `/plugins/detect-ie.js`, `/plugins/lazysizes.client.js`

\*All of the above files are completely untouched except for:

- `purge` options may need to be altered in `tailwind.config.js`
- the renaming of `font-face.css` to `_fonts.scss`
- `/src/scss/main.scss`: In this repo, `main.scss` also imports tailwind css files, the `_hover.scss` mixin, and `_font.scss`. We may rename `main.scss` in this repo to avoid confusion.

**Additional steps needed to sync styles:**

- Extract all styles from vue components into separate scss files and import via `main.scss`. Ideally this could be automated via grunt or similar.

## Getting started

- Currently, I've manually copied over the assets from www-frontend and also created a couple scss files corresponding to components.
- I've also made an index.html that demos some html markup and scripts (lazyload).

**Install dependencies**

```
npm i
```

**Serve at http://localhost:8080/**

```
npm run dev
```

**Build to /dist**

```
# purges anything not in /html/index.html
npm run build

# build without purging (development mode)
npm run build:no-purge
```

## References

This webpack configuration is heavily informed and inspired by https://github.com/alexcanana/webpack-starter.

Other references

- https://www.creative-tim.com/learning-lab/tailwind-starter-kit/documentation/build-tools
- https://stackoverflow.com/questions/55606865/combining-tailwind-css-with-sass-using-webpack
