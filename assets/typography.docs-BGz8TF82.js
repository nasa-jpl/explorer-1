import{j as e}from"./jsx-runtime-rpP16sDQ.js";import{u as r}from"./index-DmtiSzd5.js";import{M as i,C as t}from"./index-Bex6mQI_.js";import{S as a,F as l,T as d,a as c,H as h,b as x}from"./typography.stories-YQXPELZr.js";import{I as p}from"./IconLocation-CUyqMFQl.js";import"./iframe-DpE_MaXw.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./doctrine-SJNQURFN.js";const T=p({customClass:"inline"});function o(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a}),`
`,e.jsx(s.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(s.h2,{id:"fonts",children:"Fonts"}),`
`,e.jsx(s.p,{children:"Below are all fonts used in the design system."}),`
`,e.jsx(s.h3,{id:"metropolis",children:"Metropolis"}),`
`,e.jsx(s.p,{children:"Metropolis is used for all heading levels and body copy."}),`
`,e.jsx(s.h3,{id:"archivo-narrow",children:"Archivo Narrow"}),`
`,e.jsx(s.p,{children:"Archivo Narrow is used for subtitles and buttons and is always used in UPPERCASE."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(s.h2,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(s.p,{children:["Here are colors intended for text, depending on the background. ",e.jsx(s.strong,{children:"Note:"})," Some of these colors will not pass contrast requirements if used on a different background."]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(s.h2,{id:"text-styles",children:"Text Styles"}),`
`,e.jsx(s.p,{children:`All of the text styles used across the project, each with its reusable component class.
Prefer reusing those classes over individual utility classes, as each text style has different properties between desktop and mobile viewports.`}),`
`,e.jsx(s.p,{children:"Note:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"All heading levels also have the corresponding text styles directly applied for convenience."}),`
`,e.jsx(s.li,{children:"This can still be overridden by adding another relevant class."}),`
`]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h3,{id:"heading-icons",children:"Heading Icons"}),`
`,e.jsx(s.p,{children:"We can also add icons next to the headings."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.h2,{id:"text-contrast",children:"Text Contrast"}),`
`,e.jsxs(s.p,{children:["In areas where text overlays an image, use this ",e.jsx(s.code,{children:".text-contrast"})," class in conjunction with a semi-transparent overlay (ex. ",e.jsx(s.code,{children:"bg-black/*"}),") to improve readability. ",e.jsx(s.code,{children:".text-contrast"})," also works with tailwind breakpoints."]}),`
`,e.jsx(t,{of:x})]})}function M(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(o,{...n})}):o(n)}export{M as default,T as testHeadingIcon};
