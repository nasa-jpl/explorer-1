# For contributing developers

Documentation on how to run this project locally and add more components.

- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
  - [Run Storybook for Vue Components](#run-storybook-for-vue-components)
  - [Other commands](#other-commands)
- [Developing Vue components](#developing-vue-components)
- [Developing HTML components](#developing-html-components)
  - [HTML Storybook](#html-storybook)
  - [SCSS](#scss)
  - [JavaScript](#javascript)
  - [Using the HTML test page (optional)](#using-the-html-test-page-optional)
- [Testing your changes as a dependency in another project](#testing-your-changes-as-a-dependency-in-another-project)
- [Linting and Formatting](#linting-and-formatting)
- [Testing](#testing)
- [Pull requests](#pull-requests)
- [Publishing to npm](#publishing-to-npm)
- [Contribution licensing](#contribution-licensing)

## Prerequisites

- [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)
- [pnpm](https://pnpm.io/installation)

## Getting started

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

## Developing Vue components

The majority of the Explorer-1 components are built as Vue components. To understand when it's appropriate to build an HTML component instead, refer to [Developing HTML components](#developing-html-components).

To create a new component:

1. Create new component files in `packages/vue/components`
2. Start the Vue Storybook to preview and test your component (your component must have a `*.stories.js` file): `make vue-storybook`
3. **This documentation is currently being developed. Please refer to existing vue component files for guidance.**

## Developing HTML components

We only use HTML components when there is no need to build a Vue component. This usually only applies to JPL internal-only components, as internal sites are not Vue-based. As a result, we only have a few HTML components. Vue components are preferred and have a smoother developer experience and workflow.

Adding a component to the HTML Storybook requires the following:

1. Name your component. It should be unique and use CamelCase.
2. [Build the component with a story file](#html-storybook). This will be the source of truth for component markup.
3. [Add a SCSS file](#scss), if needed
4. [Add a JavaScript file](#javascript), if needed

Ultimately, the file diff for adding a new component that requires both custom SCSS and JavaScript would look something like this:

```
@nasa-jpl/explorer-1/
└── packages
    └── html
       └── src/
           ├── assets/
           │   ├── js/
           │   │   ├── components/
           │   │   │   └── _MyComponent.js      # new
           │   │   └── scripts.js               # modified
           │   └── scss/
           │       ├── components/
           │       │   └── _MyComponent.scss    # new
           │       └── _components.scss         # modified
           └── components/
               └── MyComponent/                 # new
                   ├── MyComponent.js           # new
                   └── MyComponent.stories.js   # new
```

### HTML Storybook

Storybook serves as the documentation for how to use the design system's base styles and the included components. Storybook also allows for developing components in isolation, which is useful when adding new components to Explorer 1. Once the files for your component are set up, you can use its template (`MyComponent.js`) to fine-tune the markup. You can then preview and test your component in Storybook.

#### Adding a component with a story file

1. **Create a folder in @explorer-1/html:** all stories live adjacent to the component's template file and end in `*.stories.js` in `/storybook/stories/`. If you are adding a component, create a new folder for your component in `/packages/html/src/components/`.
2. **Create a template file:** create a file for your HTML template. The filename should match your component name, e.g. `MyComponent.js`. It should include one exported constant, named with your component's name, and appended with `Template`. It will look something like this:

   ```js
   // MyComponent.js
   export const MyComponentTemplate = () => {
     return `<div class="MyComponent"><!-- more html markup --></div>`;
   };
   ```

   You could make your component reactive by passing arguments:

   ```js
   // MyComponent.js
   export const MyComponentTemplate = ({ text }) => {
     return `<div class="MyComponent">${text}</div>`;
   };
   ```

3. **Add stories for your component:** In the same folder, create your stories file. The filename should be your component name appended with `.stories.js`, e.g. `MyComponent.stories.js`. This file will import your HTML template and configure the stories that will be displayed. We are using the [Component Story Format (CSF)](https://storybook.js.org/docs/html/api/csf) to write our stories. Below is an example of CSF boilerplate for a component that has one argument:

   ```js
   // MyComponent.stories.js
   import { MyComponentTemplate } from './MyComponent.js';

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
   };
   // Each export is a story. A minimum of one is required
   export const StoryName1 = MyComponentTemplate.bind({});
   StoryName1.args = { text: 'Example text 1' };

   export const StoryName2 = MyComponentTemplate.bind({});
   StoryName2.args = { text: 'Example text 2' };
   ```

   CSF is a flexible format that allows for adding more controls and documentation to your stories. Please read the [Storybook documentation](https://storybook.js.org/docs/html/api/csf) to learn more about CSF.

#### Reusing another component template

If your component reuses other components (e.g. if you were building a dialog box component that uses `BaseButton`), you can also do the same when creating your Storybook template. Here is an example component template that imports `MyComponent` and reuses its template:

```js
// AnotherComponent.js
import { MyComponentTemplate } from 'path/to/MyComponent.js';
export const AnotherComponentTemplate = () => {
  const MyComponent = MyComponentTemplate({
    text: 'Custom text for MyComponent',
  });
  return `<div class="AnotherComponent">
    <p>Another component that reuses MyComponent</p>
    ${MyComponent}
  </div>`;
};
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
  </div>`;
};
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

When making changes to an HTML component's CSS or JS, you must run `make html-build` to see those changes reflected in Storybook.

### SCSS

Styling is achieved with inline Tailwind CSS classes in the component markup. Custom SCSS is only used where that is impossible or impractical.

SCSS files live in `@explorer-1/common` and is compiled by Vite. If you must write custom SCSS for your component, all SCSS should be namespaced to your component. See [Adding SCSS](#adding-scss) for more information.

#### Adding SCSS

> Custom SCSS should only be added if it is impossible or impractical to style your component with inline Tailwind CSS classes.

If you are adding SCSS for component, create a SCSS partial for it in `/packages/common/src/scss/components/` and import it in `/packages/common/src/scss/_components.scss`. Partials for global styles should be imported in `/packages/common/src/scss/styles.scss`. Filenames for component SCSS partials should use CamelCase, e.g. `_MyComponent.scss`

When defining custom classes, use extracted Tailwind CSS classes via Tailwind's `@apply` directive whenever possible.

Below is an example walkthrough of adding SCSS for a new component named `MyComponent`:

1. Create a SCSS partial for your component: `/packages/common/src/scss/components/_MyComponent.scss`
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

3. Import the partial in `/packages/common/src/scss/_components.scss`

   ```scss
   // _components.scss
   @import 'components/MyComponent';
   ```

#### Using Node modules

If your component requires styles provided by an npm package, install the package with the `--save` flag, and import the CSS or SCSS in `/packages/common/src/scss/_vendors.scss`. Below is an example installing [@fancyapps/ui](https://github.com/fancyapps/ui) and importing `fancybox.css` from it:

```bash
pnpm i --save @fancyapps/ui
```

```scss
// /src/scss/_vendors.scss
@import '@fancyapps/ui/dist/fancybox.css';
```

If you need to customize or override the vendor-provided styles, create a dedicated file:

1. Create a SCSS partial in `/packages/common/src/scss/vendors/` that includes your overrides

   ```scss
   // /src/scss/vendors/_fancybox_customizations.scss
   // add your custom styles here
   ```

2. Import the SCSS partial in `/packages/common/src/scss/_vendors/scss` after the styles provided by the npm package

   ```scss
   // import css from npm
   @import '@fancyapps/ui/dist/fancybox.css';

   // import overrides
   @import 'vendors/fancybox_customizations';
   ```

### JavaScript

JavaScript, like SCSS, lives in `/packages/common/src/js/` and is compiled by Vite.

#### Adding to scripts.js

You can import more scripts to the `/packages/common/src/js/scripts.js` file. Any script that will be required by `scripts.js` should start with an underscore. If the script is for a component, the name should also use the component name in CamelCase, e.g.: `_MyComponent.js`.

Below is an example walkthrough of adding JavaScript for a new component named `MyComponent`:

1. Create a JavaScript file for your component: `/packages/common/src/js/components/_MyComponent.js`
2. When writing your script, be sure to scope it to your component either by CSS class or other unique identifier that will not conflict with other components or HTML elements. You should only use an ID when you are absolutely sure your component will only occur once on a page. Your script should also account for multiple iterations of your component appearing on a page, or not at all.

3. Require the component JavaScript file in `/packages/common/src/js/scripts.js`

   ```js
   // scripts.js
   import initMyComponent from '@explorer-1/common/src/js/components/_MyComponent.js';
   initMyComponent();
   ```

#### Using Node modules

If your component uses an npm package, install the package with the `--save` flag, and import it directly in `/packages/common/src/js/scripts.js`.

```bash
pnpm i --save @fancyapps/ui
```

```js
// scripts.js
import '@fancyapps/ui';
```

If the package requires additional configuration, you should instead create a dedicated JS file:

1. Create a file in `/packages/common/src/js/vendors/`. The filename should start with an underscore and be named similarly to the package.

   ```js
   // /src/js/vendors/_package-name.js
   // init or configure package here
   ```

2. In `/packages/common/src/js/scripts.js`, import the vendor script you just created.
   ```js
   // scripts.js
   import { vendorMethod } from '@explorer-1/common/src/js/vendors/_package-name.js';
   ```

### Using the HTML test page (optional)

The test page (`/src/index.html`) is available only in developers' local environments and is useful for rapid prototyping or quick markup tests. This approach is only recommended as a stop-gap until the component you are working on is functional in Storybook. Running the simple HTML test page watches files for changes and recompiles automatically.

1. Serve a simple test page
   ```bash
   make html-dev
   ```
   _Note: You may need to refresh if you've never run the project before._

## Testing your changes as a dependency in another project

You will need to make sure you have cloned the Explorer-1 repo adjacent to your other project's repo.

#### Setting a local link

In your project's `/package.json`, change the path to `@explorer-1` `dependencies` to:

```json
    "@explorer-1/common": "link:./../../../explorer-1/packages/common",
    "@explorer-1/vue": "link:./../../../explorer-1/packages/vue",
```

Once you've completed your feature work, and the Explorer-1 package has been published, change the paths in `dependencies` back to:

```json
    "@explorer-1/common": "latest",
    "@explorer-1/vue": "latest",
```

## Linting and Formatting

This project uses eslint, prettier, and stylelint for linting and formatting.

Pre-commit is recommended on all developers' machines to ensure coding standards are met, please ensure you have the latest version installed: https://pre-commit.com/#install

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

## Testing

Accessibility tests and visual regression tests are all handled in CI as part of our [Chromatic](https://www.chromatic.com) integration. To gain access to test results, you must have write access to the repo. Once you have access, log in to [Chromatic](https://www.chromatic.com) using your GitHub credentials. You will automatically have access to the Explorer 1 Chromatic projects.

## Pull requests

This repo uses [Changesets](https://github.com/changesets/changesets) to manage workspace package versions. When finalizing a pull request, be sure to run Changesets:

```bash
make changeset
```

Follow the prompts to complete the changeset.

## Publishing to npm

Dist files are built automatically when publishing to npm (see the `prepublishOnly` script in `@explorer-1/common`'s package.json file.)

1. Bump the version number of the main package.json file.
   1. Do this with changesets: `make changesets` and select just `@nasa-jpl/explorer-1`
   2. Commit and push the changeset
2. Approve and merge the changesets-created pull request titled "Version Packages." Be sure it includes your changes from step 1. This will automatically update all package versions within the monorepo.
3. Run `pnpm install` to propagate version numbers to the lockfile.

4. Commit changes and also tag with the latest main workspace version

   ```bash
   git commit -m "bumping package version for publishing"
   git tag x.x.x
   git push
   git push --tags
   ```

5. Publish relevant packages to npm:

   ```bash
   pnpm publish --filter \@explorer-1/vue
   ```

## Contribution licensing

All contributions to this project will be released under the same MIT License as the overall project. By submitting a pull request, you are agreeing to comply with these terms.
