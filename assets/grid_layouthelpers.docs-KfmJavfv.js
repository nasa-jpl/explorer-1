import{j as e}from"./jsx-runtime-BB56VHHM.js";import{u as t}from"./index-Bm20VFDe.js";import{M as d,C as o}from"./index-BAYKquEy.js";import{S as l,B as r,C as i,a,b as h}from"./grid_layouthelpers.stories-BU9LFxoI.js";import"./iframe-Dy4NYGCP.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./doctrine-SJNQURFN.js";function c(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(d,{of:l}),`
`,e.jsx(n.h1,{id:"column-layout-helpers",children:"Column Layout helpers"}),`
`,e.jsx(n.p,{children:"Sometimes you may want to use a few common column indentations in your layouts for blocks on your page. Explorer 1 provides a few helper classes to aid in quickly creating these indented blocks. These helper classes also include responsive fallbacks."}),`
`,e.jsx(n.h2,{id:"indent-col-base",children:".indent-col-base"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".indent-col-base"})," is the ",e.jsx(n.strong,{children:"base class that you must add to any element that will use additional helper classes covered in this documentation"}),". Its immediate parent must be ",e.jsx(n.code,{children:".BaseGrid"})," (or any 12-column grid). It sets the width to start at the first column and end after the last column, i.e. full width."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.indent-col-base {
  @apply col-start-1 col-end-13; // full width of 12 grid container
}
`})}),`
`,e.jsx(o,{className:"sbdocs-preview-full-width",of:r}),`
`,e.jsx(n.h2,{id:"indent-col-2",children:".indent-col-2"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".indent-col-2"})," adds to ",e.jsx(n.code,{children:".indent-col-base"})," by overriding the ",e.jsx(n.code,{children:"col-start"})," and ",e.jsx(n.code,{children:"col-end"})," for ",e.jsx(n.code,{children:"lg"})," screens to indent content to the ",e.jsx(n.strong,{children:"second"})," column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.indent-col-2 {
  @screen lg {
    @apply col-start-2 col-end-12;
  }
}
`})}),`
`,e.jsx(o,{className:"sbdocs-preview-full-width",of:i}),`
`,e.jsx(n.h2,{id:"indent-col-3",children:".indent-col-3"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".indent-col-3"})," adds to ",e.jsx(n.code,{children:".indent-col-base"})," by overriding the ",e.jsx(n.code,{children:"col-start"})," and ",e.jsx(n.code,{children:"col-end"})," for ",e.jsx(n.code,{children:"lg"})," screens to indent content to the ",e.jsx(n.strong,{children:"third"})," column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.indent-col-3 {
  @screen lg {
    @apply col-start-3 col-end-11;
  }
}
`})}),`
`,e.jsx(o,{className:"sbdocs-preview-full-width",of:a}),`
`,e.jsx(n.h2,{id:"indent-col-4",children:".indent-col-4"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:".indent-col-4"})," adds to ",e.jsx(n.code,{children:".indent-col-base"})," by overriding the ",e.jsx(n.code,{children:"col-start"})," and ",e.jsx(n.code,{children:"col-end"})," for ",e.jsx(n.code,{children:"lg"})," screens to indent content to the ",e.jsx(n.strong,{children:"fourth"})," column, and at ",e.jsx(n.code,{children:"md"})," screens to the ",e.jsx(n.strong,{children:"third"})," column."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.indent-col-4 {
  @screen md {
    @apply col-start-3 col-end-11;
  }

  @screen lg {
    @apply col-start-4 col-end-10;
  }
}
`})}),`
`,e.jsx(o,{className:"sbdocs-preview-full-width",of:h})]})}function w(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(c,{...s})}):c(s)}export{w as default};
