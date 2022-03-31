# For contributing developers

Documentation on how to run this project locally and add more components.

- [Getting started](#getting-started)
  - [View the test page](#view-the-test-page)
  - [View the Storybook](#view-the-storybook)
  - [Testing your changes as a dependency in another project](#testing-your-changes-as-a-dependency-in-another-project)
  - [Percy](#percy)
- [Adding components](#adding-components)
  - [Storybook](#storybook)
  - [SCSS](#scss)
  - [JavaScript](#javascript)
- [Linting and Formatting](#linting-and-formatting)
- [Pull request guidance](#pull-request-guidance)
- [Publishing to npm](#publishing-to-npm)
- [Contribution licensing](#contribution-licensing)

## Getting started

1. Clone this repository and go into its directory
1. Install dependencies
   ```bash
   npm i
   ```
1. View rendered components in either the [test page](#view-the-test-page) or [Storybook](#view-the-storybook)

### View the test page

The test page (`/src/index.html`) is available only in developers' local environments and is useful for rapid prototyping or quick markup tests. This approach is only recommended as a stop-gap until the component you are working on is functional in Storybook. Running the simple HTML test page watches files for changes and recompiles automatically.

1. Serve a simple test page at http://localhost:3000/ and watch for changes, live reloading them with Browsersync
   ```bash
   npm run dev
   ```
   _Note: You may need to refresh if you've never run the project before._

### View the Storybook

Storybook deploys to GitHub pages and is available to the public. Storybook uses the compiled assets in `dist` and does not watch files for changes.

1. Build the assets Storybook needs to `dist/`
   ```bash
   npm run build
   ```
2. Serve the Storybook at http://localhost:6006/
   ```bash
   npm run storybook
   ```

As you're working on component CSS or JS, you'll need to re-run `npm run build` in order to see your changes reflected in Storybook.

### Testing your changes as a dependency in another project

1. From the root of your local clone of explorer-1, create a symlink from your global `node_modules` directory to the local explorer-1 directory:
   ```bash
   npm link
   ```
2. Then in the same directory as the `package.json` file of the project you want to test explorer-1 in (usually the root of the project), add a symlink from the project's `node_modules` to your global `node_modules`:

   ```bash
   npm link @nasa-jpl/explorer-1
   ```

   This results in a two-part symlink chain: Your project's `node_modules/@nasa-jpl/explorer-1` ➡️ npm's global `node_modules/@nasa-jpl/explorer-1` ➡️ your cloned explorer-1 repo. This works even if you had previously installed the production version of explorer-1.

3. Run your tests.

4. When you're done, remove the symlink from your project and reinstall the project's currently-specified published version of explorer-1 with:

   ```bash
   npm unlink --no-save @nasa-jpl/explorer-1
   npm i
   ```

5. Optional: you can now remove the global symlink when you're in the root of your local clone of explorer-1:

   ```bash
   npm unlink
   ```

Depending on the project you are testing, you may encounter other quirks, particularly if you compiler caches builds, or if your compiler runs within docker.

- If your compiler has a cache, delete the cache before compiling frontend assets.
- If your compiler runs in a docker container, you will likely need to find a way to compile frontend assets outside of docker, as symlinks to your global `node_modules` folder will not work in a container.

### Percy

This project includes boilerplate for [Percy's Storybook integration](https://docs.percy.io/docs/storybook#configuration). To use it:

1. Export your project's `PERCY_TOKEN`
   ```
   export PERCY_TOKEN="<your-project-token>"
   ```
2. Run storybook locally:
   ```
   npm run storybook
   ```
3. Run Percy
   ```
   npm run percy
   ```
4. You snapshots will then appear in your Percy project.

## Adding components

Adding a component requires the following:

1. Name your component. It should be unique and use CamelCase.
2. [Build it in a Storybook story](#storybook). This will be the source of truth for component markup.
3. [Add a SCSS file](#scss), if needed
4. [Add a JavaScript file](#javascript), if needed

Ultimately, the file diff for adding a new component that requires custom SCSS and JavaScript would look something like this:

```
@nasa-jpl/explorer-1/
├── README.md
├── src/
│   ├── js/
│   │   ├── components/
│   │   │   └── _MyComponent.js             # new
│   │   └── scripts.js                      # modified
│   └── scss/
│       ├── components/
│       │   └── _MyComponent.scss           # new
│       └── _components.scss                # modified
└── storybook/
    └── stories/
        └── components/
            └── MyComponent/                # new
                ├── MyComponent.js          # new
                └── MyComponent.stories.js  # new
```

### Storybook

Storybook serves as the documentation for how to use the design system's base styles and the included components. Storybook also allows for developing components in isolation, which is useful when adding new components to Explorer 1. Once the files for your component are set up, you can use its template (`MyComponent.js`) to fine-tune the markup. You can then preview and test your component in Storybook.

#### Adding a component story

1. **Create a folder:** all stories live in `/storybook/stories/`. If you are adding a component, create a new folder for your component in `/storybook/stories/components/`.
2. **Create a template file:** create a file for your HTML template. The filename should match your component name, e.g. `MyComponent.js`. It should include one exported constant, named with your component's name, and appended with `Template`. It will look something like this:

   ```js
   // MyComponent.js
   export const MyComponentTemplate = () => {
     return `<div class="MyComponent"><!-- more html markup --></div>`
   }
   ```

   You could make your component reactive by passing arguments:

   ```js
   // MyComponent.js
   export const MyComponentTemplate = ({ text }) => {
     return `<div class="MyComponent">${text}</div>`
   }
   ```

3. **Add stories for your component:** In the same folder, create your stories file. The filename should be your component name appended with `.stories.js`, e.g. `MyComponent.stories.js`. This file will import your HTML template and configure the stories that will be displayed. We are using the [Component Story Format (CSF)](https://storybook.js.org/docs/html/api/csf) to write our stories. Below is an example of CSF boilerplate for a component that has one argument:

   ```js
   // MyComponent.stories.js
   import { MyComponentTemplate } from './MyComponent.js'

   export default {
     // the title also determines where the story will appear in the sidebar
     title: 'Components/MyComponent',
     // argTypes are optional
     argTypes: {
       text: {
         type: 'string',
         description: 'Text to display within the component',
       },
     },
     // parameters are optional
     parameters: {
       viewMode: 'docs', // default to docs instead of canvas
       docs: {
         description: {
           component:
             'A brief description of the component. This will appear at the top of the docs page',
         },
       },
     },
   }
   // Each export is a story. A minimum of one is required
   export const StoryName1 = MyComponentTemplate.bind({})
   StoryName1.args = { text: 'Example text 1' }

   export const StoryName2 = MyComponentTemplate.bind({})
   StoryName2.args = { text: 'Example text 2' }
   ```

   CSF is a flexible format that allows for adding more controls and documentation to your stories. Please read the [Storybook documentation](https://storybook.js.org/docs/html/api/csf) to learn more about CSF.

#### Reusing another component template

If your component reuses other components (e.g. if you were building a dialog box component that uses `BaseButton`), you can also do the same when creating your Storybook template. Here is an example component template that imports `MyComponent` and reuses its template:

```js
// AnotherComponent.js
import { MyComponentTemplate } from 'path/to/MyComponent.js'
export const AnotherComponentTemplate = () => {
  const MyComponent = MyComponentTemplate({
    text: 'Custom text for MyComponent',
  })
  return `<div class="AnotherComponent">
    <p>Another component that reuses MyComponent</p>
    ${MyComponent}
  </div>`
}
```

#### Decorators

Decorators are useful if you want to modify the layout of your component without including it in your template or HTML output. To use a decorator, wrap your template with an immediate parent of `#storyRoot` and whatever surrounding layout that is needed. You can then set the html root of your story parameters to use the `#storyRoot` as the root.

```js
// MyComponent.js
export const MyComponentTemplate = () => {
  return `<div class="container mx-auto">
    <div id="storyRoot" class="lg:w-1/2">
      <div class="MyComponent"><!-- more html markup --></div>
    </div>
  </div>`
}
```

```js
// MyComponent.stories.js
export default {
  // parameters are optional
  parameters: {
    ...
    html: {
      root: '#storyRoot',
    },
    ...
  },
}
```

As long as `parameters.html.root` matches the parent wrapper element of your template, then this will work, but please always use `#storyRoot` for consistency with our existing stories.

#### Rebuilding assets

When making changes to a component's CSS or JS, you must run `npm run build` to see those changes reflected in Storybook.

### SCSS

Styling is achieved with inline Tailwind CSS classes in the component markup. Custom SCSS is only used where that is impossible or impractical.

SCSS files live in `/src/scss/` and [Parcel](https://parceljs.org/) is used to compile all partials and imports. If you must write custom SCSS for your component, all SCSS should be namespaced to your component. See [Adding SCSS](#adding-scss) for more information.

#### Adding SCSS

> Custom SCSS should only be added if it is impossible or impractical to style your component with inline Tailwind CSS classes.

If you are adding SCSS for component, create a SCSS partial for it in `/src/scss/components/` and import it in `/src/scss/_components.scss`. Partials for global styles should be imported in `/src/scss/styles.scss`. Filenames for component SCSS partials should use CamelCase, e.g. `_MyComponent.scss`

When defining custom classes, use extracted Tailwind CSS classes via Tailwind's `@apply` directive whenever possible.

Below is an example walkthrough of adding SCSS for a new component named `MyComponent`:

1. Create a SCSS partial for your component: `/src/scss/components/_MyComponent.scss`
2. Namespace all styles with your component name:

   ```scss
   // _MyComponent.scss
   .MyComponent {
     @apply some-tailwind-class;
     .sub-class {
       // more styles
     }
   }
   ```

3. Import the partial in `/src/scss/_components.scss`

   ```scss
   // _components.scss
   @import 'components/MyComponent';
   ```

#### Using Node modules

If your component requires styles provided by an npm package, install the package with the `--save` flag, and import the CSS or SCSS in `/src/scss/_vendors.scss` using Parcel's [`npm:` scheme](https://parceljs.org/features/dependency-resolution/#url-schemes). Below is an example installing [@fancyapps/ui](https://github.com/fancyapps/ui) and importing `fancybox.css` from it:

```bash
npm i --save @fancyapps/ui
```

```scss
// /src/scss/_vendors.scss
@import 'npm:@fancyapps/ui/dist/fancybox.css';
```

If you need to customize or override the vendor-provided styles, create a dedicated file:

1. Create a SCSS partial in `/src/scss/vendors/` that includes your overrides

   ```scss
   // /src/scss/vendors/_fancybox_customizations.scss
   // add your custom styles here
   ```

2. Import the SCSS partial in `/src/scss/_vendors/scss` after the styles provided by the npm package

   ```scss
   // import css from npm
   @import 'npm:@fancyapps/ui/dist/fancybox.css';

   // import overrides
   @import 'vendors/fancybox_customizations';
   ```

Adding npm dependencies to Explorer 1 also requires updating the [Compile your own: Using assets a la carte](README.md#compile-your-own-using-assets-a-la-carte) section in the README. See [Additional requirements for carousels](README.md#additional-requirements-for-carousels) and [Additional requirements for modals and lightboxes](README.md#additional-requirements-for-modals-and-lightboxes) for examples.

### JavaScript

JavaScript lives in `/src/js/` and is compiled by [Parcel](https://parceljs.org/).

#### Adding to scripts.js

You can add more scripts as `require()` statements to the `/src/js/scripts.js` file. Any script that will be required by `scripts.js` should start with an underscore. If the script is for a component, the name should also use the component name in CamelCase, e.g.: `_MyComponent.js`.

Below is an example walkthrough of adding JavaScript for a new component named `MyComponent`:

1. Create a JavaScript file for your component: `/src/js/components/_MyComponent.js`
2. When writing your script, be sure to scope it to your component either by CSS class or other unique identifier that will not conflict with other components or HTML elements. You should only use an ID when you are absolutely sure your component will only occur once on a page. Your script should also account for multiple iterations of your component appearing on a page, or not at all.

3. Require the component JavaScript file in `/src/js/scripts.js`

   ```js
   // scripts.js
   require('./components/_MyComponent.js')
   ```

#### Using Node modules

If your component requires use of an npm package, install the package with the `--save` flag, and require it directly in `/src/js/scripts.js`.

```bash
npm i --save @fancyapps/ui
```

```js
// scripts.js
require('@fancyapps/ui')
```

If the package requires additional configuration, you should instead create a dedicated JS file:

1. Create a file in `/src/js/vendors/`. The filename should start with an underscore and be named similarly to the package.

   ```js
   // /src/js/vendors/_package-name.js
   // init or configure package here
   ```

2. In `/src/js/scripts.js`, require the vendor script you just created.
   ```js
   // /src/js/scripts.js
   require('./vendors/_package-name.js')
   ```

Adding npm dependencies to Explorer 1 also requires updating the [Compile your own: Using assets a la carte](README.md#compile-your-own-using-assets-a-la-carte) section in the README. See [Additional requirements for carousels](README.md#additional-requirements-for-carousels) and [Additional requirements for modals and lightboxes](README.md#additional-requirements-for-modals-and-lightboxes) for examples.

## Linting and Formatting

This project uses eslint, prettier, and stylelint for linting and formatting.

Pre-commit is required on all developers' machines to ensure coding standards are met, please ensure you have the latest version installed: https://pre-commit.com/#install

1. Verify you have `pre-commit` installed and running the latest version:

   ```bash
   $ pre-commit --version
   pre-commit 2.17.0
   ```

1. Install git-hook scripts:

   ```bash
   $ pre-commit install
   pre-commit installed at .git/hooks/pre-commit
   ```

1. Next time you make a commit, `pre-commit` will run its course.

## Pull request guidance

This repository employs the [Release Drafter](https://github.com/marketplace/actions/release-drafter) GitHub Actions workflow to automatically build draft release notes as pull requests are merged. Release Drafter will categorize the main type of changes in each PR within the release notes and also determine what the version number of the next release should be (i.e., whether the release is a major, minor, or patch release).

Release Drafter's ability to do this correctly **depends on PRs being tagged with certain labels**. Most PRs should include at least two labels:

1. A label for the **category** of the changes included in the PR (e.g., `feature`, `fix`, `docs`, or `maintenance`)
2. A label for the **significance** of the chance (i.e., `major`, `minor`, or `patch`, per [Semantic Versioning](https://semver.org/) definitions)

Release Drafter will attempt to automatically apply the category label to a new PR based on its branch name, title, or paths of files that were changed. Please check that it did this sensibly, and modify the labels as necessary. Try to avoid having two major category labels on a PR, because it will then be added to both of those categories in the list.

The quality of the generated release notes also depends on PRs having good human-readable titles.

In cases where a PR is not worth noting in the release notes, you can also tell Release Drafter not to add an entry for it by labeling it with `skip-changelog`.

Finally, don't fret about this too much! The Release Drafter configuration and labeling scheme may take some time to fine-tune, and the drafted release notes can always be manually edited before final publication.

## Publishing to npm

If any changes were made to the src files, be sure to [build to dist](#getting-started) before publishing to NPM.

1. Login to the public npm registry with your account that has permission to manage this package
   ```bash
   npm login
   ```
2. Publish the package
   ```bash
   npm publish
   ```

## Contribution licensing

All contributions to this project will be released under the same MIT License as the overall project. By submitting a pull request, you are agreeing to comply with these terms.
