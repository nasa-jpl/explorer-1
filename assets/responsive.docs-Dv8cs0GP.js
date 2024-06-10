import{j as e}from"./jsx-runtime-CaavPzjJ.js";import{u as i}from"./index-Cb-YVr64.js";import{M as r,C as d}from"./index-MTbPeaGr.js";import{S as l,D as o}from"./responsive.stories-BpOfwm-d.js";import"./iframe-BW56-kSy.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./doctrine-SJNQURFN.js";function s(t){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:l}),`
`,e.jsx(n.h1,{id:"responsive-design",children:"Responsive Design"}),`
`,e.jsx(n.p,{children:"Responsive design adapts the flow and layout of information to respond to a user’s behavior and environment based on screen size, platform and orientation. Adapting the flow of information and visual elements may sometimes require an optimized user experience to help fit content within certain parameters of a particular display or device. It may also require limiting the layout of the design to only include necessary modules, depending on a device’s parameters and resolution."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#breakpoints-and-containers",children:"Breakpoints and Containers"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#maximum-width",children:"Maximum Width"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#tokens",children:"Tokens"})}),`
`]}),`
`,e.jsx("span",{id:"breakpoints-and-containers"}),`
`,e.jsx(n.h2,{id:"breakpoints-and-containers",children:"Breakpoints and Containers"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The examples on this page illustrate breakpoints based on viewport size. Try changing your browser size to see how the examples adapt. You can also switch over to canvas view and toggle through different viewport sizes using the toolbar menu."}),`
`]}),`
`,e.jsx(n.p,{children:"Breakpoints are the values at which content included on a webpage is resized and reflowed to fit a screen size on a particular device. Designing for different breakpoints allows designers and developers to optimize the display of information for mobile, tablet and desktop users alike."}),`
`,e.jsxs(n.p,{children:["We set our breakpoints and associated containers via the ",e.jsx(n.code,{children:"screens"})," and ",e.jsx(n.code,{children:"containers.screens"})," options in our ",e.jsx(n.a,{href:"?path=/docs/appendix-tailwindcss--docs",children:"Tailwind CSS configuration"}),". These containers are used in conjunction with our ",e.jsx(n.a,{href:"?path=/docs/foundation-grid-and-layout--docs",children:"Grid"})," to create the site and page layouts, all the way down to the component level."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"left"},children:"Screen Token"}),e.jsxs(n.th,{style:{textAlign:"right"},children:["Viewport ",e.jsx(n.code,{children:"min-width"})]}),e.jsxs(n.th,{style:{textAlign:"right"},children:[e.jsx(n.code,{children:".container"})," ",e.jsx(n.code,{children:"max-width"})]})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"sm"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"640px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"640px"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"md"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"768px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"768px"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"lg"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1024px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1024px"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"xl"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1280px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1280px"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"2xl"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1440px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1320px"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"3xl"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1800px"})}),e.jsx(n.td,{style:{textAlign:"right"},children:e.jsx(n.code,{children:"1320px"})})]})]})]}),`
`,e.jsxs(n.p,{children:["The below example uses ",e.jsx(n.a,{href:"#tokens",children:"Tokens"})," to set the maximum width based on the screens defined in our Tailwind config. It also illustrates the foundation of the design system's layout for desktop screens."]}),`
`,e.jsx(d,{className:"sbdocs-preview-full-width",of:o}),`
`,e.jsx("span",{id:"maximum-width"}),`
`,e.jsx(n.h2,{id:"maximum-width",children:"Maximum width"}),`
`,e.jsxs(n.p,{children:["Explorer 1 uses screen ",e.jsx(n.code,{children:"3xl"}),' as its maximum width. No content in a component, not even in those labeled as "full bleed," ever exceeds ',e.jsx(n.code,{children:"3xl"}),", although visual layout elements may (i.e. background colors). You can find examples of this in our ",e.jsx(n.a,{href:"?path=/docs/foundation-grid-and-layout--docs#page-layout-recommendations",children:"Grid & Layout"})," documentation."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="max-w-screen-3xl mx-auto">Content</div>
`})}),`
`,e.jsx("span",{id:"tokens"}),`
`,e.jsx(n.h2,{id:"tokens",children:"Tokens"}),`
`,e.jsx(n.p,{children:"Screen tokens are used with Tailwind CSS classes to control widths:"}),`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:".max-w-screen-{token}"})}),`
`,e.jsx(n.p,{children:"They can also be used as directives for writing media queries:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@screen lg {
  /* rules for large screens */
}
@screen xl {
  /* rules for xl screens */
}
`})})]})}function f(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{f as default};
