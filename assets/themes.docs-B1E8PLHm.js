import{j as e}from"./index-B5oyM6ys.js";import{useMDXComponents as i}from"./index-C6IqpQYn.js";import{M as s,C as a}from"./blocks-Ci-KO1U-.js";import{S as o,D as h,A as c}from"./themes.stories-C9GqKNrm.js";import"./iframe-jyw6MFLl.js";import"./preload-helper-D6kgxu3v.js";function r(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:o}),`
`,e.jsx(n.h1,{id:"themes",children:"Themes"}),`
`,e.jsx(n.p,{children:"Throughout this storybook, you can use the Theme and Variant selectors in the Storybook toolbar to preview components in different theme configurations."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Note:"})," some documentation pages use iframes to display components, which ignores the theme switcher. Thus, for the most accurate representation of the internal theme, we recommend viewing the story in isolation."]}),`
`,e.jsx(n.h2,{id:"dynamic-color-tokens",children:"Dynamic color tokens"}),`
`,e.jsx(n.p,{children:"There are dynamic color tokens in place that use a semantic name instead of a specific color name. These tokens are use strategically in components to support multiple themes."}),`
`,e.jsx(n.p,{children:"Changing the Theme and Variant to see how the dynamic tokens change."}),`
`,e.jsx(a,{of:h}),`
`,e.jsx(n.h2,{id:"light-dark-and-gray-variants",children:"Light, Dark, and Gray Variants"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".ThemeVariantLight"}),", ",e.jsx(n.code,{children:".ThemeVariantDark"}),", and ",e.jsx(n.code,{children:".ThemeVariantGray"})," in Explorer 1 are theme variants. Note that not all components support these variants."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Variant"}),e.jsx(n.th,{children:"Purpose"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ThemeVariantLight"})}),e.jsx(n.td,{children:"When the component or element is used over a light or white background. Usually the default."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ThemeVariantDark"})}),e.jsx(n.td,{children:"When the component or element is used over a dark or black background"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"ThemeVariantGray"})}),e.jsx(n.td,{children:"When the component or element is used over a gray background"})]})]})]}),`
`,e.jsx(n.h3,{id:"key-points",children:"Key Points"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"defaultTheme"})," and ",e.jsx(n.code,{children:"ThemeVariantLight"})," are the defaults"]}),`
`,e.jsx(n.li,{children:"It is recommended that page templates always include the default variant."}),`
`]}),`
`,e.jsx(n.h3,{id:"contributing-developers-writing-lightdark-theme-styles-for-components",children:"Contributing developers: Writing light/dark theme styles for components"}),`
`,e.jsxs(n.p,{children:["For components that have light and dark themes, add theme rules to the end of your scss. The following is an example of a component whose background should be ",e.jsx(n.code,{children:"bg-white"})," by default and in ",e.jsx(n.code,{children:"ThemeVariantLight"})," but ",e.jsx(n.code,{children:"bg-black"})," in ",e.jsx(n.code,{children:"ThemeVariantDark"})]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.MyComponent {
  // set the default background color
  @apply bg-white;
  // set the ThemeVariantDark background color
  .ThemeVariantDark & {
    @apply bg-black;
  }
}
`})}),`
`,e.jsx(n.h2,{id:"adaptive-text-colors",children:"Adaptive Text Colors"}),`
`,e.jsxs(n.p,{children:["Usage of ",e.jsx(n.code,{children:".text-action"})," vs ",e.jsx(n.code,{children:".text-action"})," in the context of ",e.jsx(n.code,{children:".ThemeVariantLight"})," and ",e.jsx(n.code,{children:".ThemeVariantDark"})," ensures that the contrast of the text color is sufficient against the background color. These adaptive text colors are supported by all themes."]}),`
`,e.jsx(n.h3,{id:"definition-excerpt",children:"Definition (excerpt)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.text-action {
  @apply text-action;
  .ThemeVariantDark & {
    @apply text-action-light;
  }
}
.text-action-hover {
  @apply text-action-dark;
  .ThemeVariantDark & {
    @apply text-action;
  }
}
`})}),`
`,e.jsx(n.h3,{id:"usage",children:"Usage"}),`
`,e.jsx(n.p,{children:"Try changing the Theme and Variant while viewing the examples below. Notice how there are slight changes in color between the Dark and Light variants."}),`
`,e.jsx(a,{of:c}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.a,{href:"?path=/docs/components-base-baselink--docs",children:"BaseLink"})," for a real usage example."]})]})}function g(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
