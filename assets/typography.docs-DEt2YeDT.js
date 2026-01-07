import{j as e}from"./index-BOE4jVGk.js";import{useMDXComponents as o}from"./index-Bmsb9U-Z.js";import{M as r,C as t}from"./blocks-BzSuaB2u.js";import{S as a,F as l,T as c,a as d,H as h,b as x}from"./typography.stories-WO6Oxi_f.js";import"./iframe-bnomvYc_.js";import"./preload-helper-D6kgxu3v.js";import"./IconLocation-D_YhksiO.js";import"./BaseHeading-B9dDlbad.js";function i(n){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(s.h1,{id:"typography",children:"Typography"}),`
`,e.jsx(s.h2,{id:"fonts",children:"Fonts"}),`
`,e.jsx(s.p,{children:"Helvetica Now is the main typeface used in Explorer-1. Each family has a specific use-case:"}),`
`,e.jsx(s.h3,{id:"helvetica-now-display",children:"Helvetica Now Display"}),`
`,e.jsxs(s.p,{children:[e.jsx("em",{children:"Display"}),` is used for headlines and other large text. It is also used in body text when the
font size is large enough.`]}),`
`,e.jsx(s.h3,{id:"helvetica-now-text",children:"Helvetica Now Text"}),`
`,e.jsxs(s.p,{children:[e.jsx("em",{children:"Text"})," is used for regular-sized text."]}),`
`,e.jsx(s.h3,{id:"helvetica-now-micro",children:"Helvetica Now Micro"}),`
`,e.jsx(s.p,{children:"Helvetica Now Micro is used for subtitles and buttons and in UPPERCASE. It also used for small text (captions) in normal-case."}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(s.h2,{id:"text-colors",children:"Text Colors"}),`
`,e.jsxs(s.p,{children:["Here are colors intended for text, depending on the background. ",e.jsx(s.strong,{children:"Note:"})," Some of these colors will not pass contrast requirements if used on a different background."]}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h2,{id:"text-styles",children:"Text Styles"}),`
`,e.jsx(s.p,{children:`All of the text styles used across the project, each with its reusable component class.
Prefer reusing those classes over individual utility classes, as each text style has different properties between desktop and mobile viewports.`}),`
`,e.jsx(s.p,{children:"Note:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"All heading levels also have the corresponding text styles directly applied for convenience."}),`
`,e.jsx(s.li,{children:"This can still be overridden by adding another relevant class."}),`
`]}),`
`,e.jsx(t,{of:d}),`
`,e.jsx(s.h3,{id:"heading-icons",children:"Heading Icons"}),`
`,e.jsx(s.p,{children:"We can also add icons next to the headings."}),`
`,e.jsx(t,{of:h}),`
`,e.jsx(s.h2,{id:"text-contrast",children:"Text Contrast"}),`
`,e.jsxs(s.p,{children:["In areas where text overlays an image, use this ",e.jsx(s.code,{children:".text-contrast"})," class in conjunction with a semi-transparent overlay (ex. ",e.jsx(s.code,{children:"bg-black/*"}),") to improve readability. ",e.jsx(s.code,{children:".text-contrast"})," also works with tailwind breakpoints."]}),`
`,e.jsx(t,{of:x})]})}function w(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{w as default};
