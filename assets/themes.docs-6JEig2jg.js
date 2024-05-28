import{j as e}from"./jsx-runtime-rpP16sDQ.js";import{u as a}from"./index-DmtiSzd5.js";import{M as r,C as s}from"./index-Bex6mQI_.js";import{S as i,I as h,A as l}from"./themes.stories-BsAusCh7.js";import"./iframe-DpE_MaXw.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./doctrine-SJNQURFN.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...a(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:i}),`
`,e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.h2,{id:"internal-theme",children:"Internal Theme"}),`
`,e.jsxs(n.p,{children:["Apply a body class of ",e.jsx(n.code,{children:".ThemeInternal"})," to your build to reflect JPL's internal color scheme. The difference between the internal theme and the default theme is subtle: for the most part, only link colors are changed to ",e.jsx(n.code,{children:"jpl-sky-blue"})," and ",e.jsx(n.code,{children:"jpl-sky-blue-dark"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body class="ThemeInternal">
  <!-- page layout and components go here -->
</body>
`})}),`
`,e.jsxs(n.p,{children:["The following story shows a direct comparison of how BaseLink changes when using ",e.jsx(n.code,{children:".ThemeInternal"})," vs the default theme (no body class)."]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.p,{children:'By default, all stories displayed within this Storybook do not use the internal theme. You can enable the theme by clicking on the "picture" icon in the toolbar menu and selecting "ThemeInternal." You can test this with the above story--switching to ThemeInternal should make both links appear blue.'}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," some documentation pages use iframes to display components, which ignores the theme switcher. Thus, for the most accurate representation of the internal theme, we recommend checking the component in the Canvas tab."]}),`
`,e.jsx(n.h2,{id:"light--dark-themes",children:"Light & Dark Themes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".ThemeVariantLight"})," and ",e.jsx(n.code,{children:".ThemeVariantDark"})," in Explorer 1 are structured differently from ",e.jsx(n.code,{children:".ThemeInternal"}),", and are ",e.jsx(n.strong,{children:"not intended for use as a body class"}),". These themes should only ever be used on the wrapper for an individual component or group of components."]}),`
`,e.jsxs(n.p,{children:["These are often set on a page template wrapper. If that scope is too wide, usage can be scoped to layout elements within as needed. Again, these should not be used as a body class, as that is reserved for ",e.jsx(n.code,{children:".ThemeInternal"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body>
  <div class="ThemeVariantDark">
    <!-- the rest of the page -->
  </div>
</body>
`})}),`
`,e.jsx(n.p,{children:"A more complex example showing nested usage:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body class="ThemeInternal">
  <div class="ThemeVariantDark">
    <!-- components  -->
    <div class="ThemeVariantLight">
      <!-- a component that should use light colors regardless of its ancestors -->
    </div>
    <!-- more components -->
  </div>
</body>
`})}),`
`,e.jsx(n.h3,{id:"key-points",children:"Key Points"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ThemeVariantLight"})," is the default"]}),`
`,e.jsx(n.li,{children:"It is recommended that page templates always include the default theme."}),`
`,e.jsxs(n.li,{children:["If a page theme is controllable by a site editor, then include appropriate class bindings to switch between ",e.jsx(n.code,{children:".ThemeVariantLight"})," or ",e.jsx(n.code,{children:".ThemeVariantDark"})]}),`
`,e.jsx(n.li,{children:"These theme classes do not apply styles directly. Instead, components use them as an ancestor selector to modify their own styles."}),`
`]}),`
`,e.jsx(n.h3,{id:"usage-in-storybook",children:"Usage in Storybook"}),`
`,e.jsxs(n.p,{children:["Storybook can mimic these theme choices. All stories are wrapped in ",e.jsx(n.code,{children:"ThemeVariantLight"})," by default. You can switch to ",e.jsx(n.code,{children:"ThemeVariantDark"})," on any story by using the toolbar menu (the icon looks like a picture). ",e.jsxs(n.strong,{children:['Note that most components do not have a dark theme, and thus will appear "broken" when viewed with ',e.jsx(n.code,{children:"ThemeVariantDark"}),"."]})]}),`
`,e.jsx(n.h3,{id:"contributing-developers-writing-lightdark-theme-styles-for-components",children:"Contributing developers: Writing light/dark theme styles for components"}),`
`,e.jsxs(n.p,{children:["For components that have light and dark themes, add theme rules to the end of your scss. The following is an example of a component whose background should be ",e.jsx(n.code,{children:"bg-white"})," by default and in ",e.jsx(n.code,{children:"ThemeVariantLight"})," but ",e.jsx(n.code,{children:"bg-black"})," in ",e.jsx(n.code,{children:"ThemeVariantDark"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-scss",children:`.MyComponent {
  // set the default background color
  @apply bg-white;
  // set the ThemeVariantDark background color
  .ThemeVariantDark & {
    @apply bg-black;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"adaptive-text-colors",children:"Adaptive Text Colors"}),`
`,e.jsxs(n.p,{children:["Usage of ",e.jsx(n.code,{children:".text-jpl-red"})," vs ",e.jsx(n.code,{children:".text-jpl-red-light"})," (or the ",e.jsx(n.code,{children:".text-jpl-sky-blue"})," variants for internal sites) in the correct context of ",e.jsx(n.code,{children:".ThemeVariantLight"})," and ",e.jsx(n.code,{children:".ThemeVariantDark"})," ensures that the contrast of the text color is sufficient against the background color. To avoid rewriting the CSS rules for each use-case, we created text color classes that follow this rule automatically. These color classes also check for usage of ",e.jsx(n.code,{children:".ThemeInternal"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.text-theme-color
.text-theme-color-hover
`})}),`
`,e.jsx(n.h3,{id:"definition-excerpt",children:"Definition (excerpt)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.text-theme-color {
  @apply text-jpl-red;
  .ThemeVariantDark & {
    @apply text-jpl-red-light;
  }
}
.text-theme-color-hover {
  @apply text-jpl-red-dark;
  .ThemeVariantDark & {
    @apply text-jpl-red;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Below are examples of all combinations (note: using the theme switcher in the toolbar will override the below examples):"}),`
`,e.jsx(s,{of:l}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"?path=/docs/components-base-baselink--docs",children:"BaseLink"})," for a real usage example."]})]})}function b(t={}){const{wrapper:n}={...a(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{b as default};
