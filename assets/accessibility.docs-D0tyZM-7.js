import{j as e}from"./index-CRfsARG6.js";import{useMDXComponents as s}from"./index-Bz25zh8w.js";import{M as i}from"./blocks-DOyX331v.js";import"./iframe-DkrkwOlF.js";import"./preload-helper-D6kgxu3v.js";function t(o){const n={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Guides/Accessibility",parameters:{viewMode:"docs"}}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Usage of Explorer 1 must be in compliance with ",e.jsx(n.a,{href:"https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines",rel:"nofollow",children:"Section 508 of the Rehabilitation Act of 2001"})," which states that:"]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Electronic content shall conform to Level A and Level AA Success Criteria and Conformance Requirements in ",e.jsx(n.a,{href:"https://www.w3.org/TR/WCAG20/",rel:"nofollow",children:"WCAG 2.0"})]}),`
`]}),`
`,e.jsx(n.h2,{id:"our-qa-strategy",children:"Our QA Strategy"}),`
`,e.jsx(n.p,{children:"To meet compliance requirements, we use the following strategy:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"When developing a component, employ best practices to make individual components accessible."}),`
`,e.jsxs(n.li,{children:["Follow up with ",e.jsx(n.a,{href:"#manual-testing",children:"manual testing"})," of the component."]}),`
`,e.jsx(n.li,{children:"Use automated accessibility tests as part of our CI/CD process for any final checks."}),`
`,e.jsx(n.li,{children:"Finally, run checks (manual and automated) on select full pages."}),`
`]}),`
`,e.jsx(n.h3,{id:"automated-testing-options",children:"Automated testing options"}),`
`,e.jsxs(n.p,{children:["Automated tests are a good baseline, but note they can only find ",e.jsx(n.a,{href:"https://alphagov.github.io/accessibility-tool-audit/",rel:"nofollow",children:"30 to 40% of issues"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["For individual components, the Explorer 1 Storybook uses the ",e.jsx(n.a,{href:"https://github.com/storybookjs/storybook/tree/master/addons/a11y",rel:"nofollow",children:"a11y addon"}),", and in some cases ",e.jsx(n.a,{href:"https://www.deque.com/axe/",rel:"nofollow",children:"Axe"})," in jsdom via Storyshots"]}),`
`,e.jsxs(n.li,{children:["For full pages, ",e.jsx(n.a,{href:"https://github.com/GoogleChrome/lighthouse-ci",rel:"nofollow",children:"Lighthouse CI"})," checks are recommended."]}),`
`]}),`
`,e.jsx("span",{id:"manual-testing"}),`
`,e.jsx(n.h3,{id:"manual-testing",children:"Manual testing"}),`
`,e.jsx(n.p,{children:"When conducting manual accessibility testing, check for the following as a baseline:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Keyboard-only navigation is possible"}),`
`,e.jsx(n.li,{children:"Screen reader announces the UI as expected"}),`
`,e.jsx(n.li,{children:"Mobile touch interaction testing with iOS Safari or Android"}),`
`,e.jsx(n.li,{children:"Zoom the whole browser UI, or font size, or on-screen magnifier"}),`
`]})]})}function d(o={}){const{wrapper:n}={...s(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(t,{...o})}):t(o)}export{d as default};
