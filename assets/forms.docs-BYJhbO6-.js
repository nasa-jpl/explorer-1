import{j as t}from"./index-1k2WA2YZ.js";import{useMDXComponents as s}from"./index-C1JNlkCH.js";import{M as i,C as r}from"./blocks-EAHfNXr0.js";import{C as a}from"./ComponentList-DfNx52kN.js";import{B as m,F as c}from"./FormContact.stories-BxbvlRGf.js";import{T as p}from"./TextInput.stories-BZ5a9-bM.js";import{T as d}from"./TextArea.stories-CFrZ2uEa.js";import{B as l}from"./BaseButton.stories-DGJOvKkX.js";import"./iframe-BPFwKcEh.js";import"./preload-helper-PPVm8Dsz.js";import"./FormContact--1AZBLSi.js";import"./stringify-DODPcf7d.js";import"./LayoutHelper-CcoaDpZ7.js";import"./BaseHeading-DhRLtF8v.js";import"./BaseButton-CI8cVyLz.js";import"./TextInput-CGlW3ZJh.js";import"./TextArea-BlyrylgK.js";function e(n){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Forms/Overview"}),`
`,t.jsx(o.h1,{id:"form-components",children:"Form Components"}),`
`,t.jsx(o.p,{children:`Form styles are currently limited to text inputs and text areas. Explorer 1 does not include any form functionality other than native HTML form controls. If you require more functionality in your forms,
you will need to build that into your implementation of the design system.`}),`
`,t.jsx(o.p,{children:"You can construct a form by combining the following components:"}),`
`,t.jsx(a,{components:[{heading:"TextInput",meta:p,path:"/docs/components-forms-textinput--docs",canvasClass:"sbdocs-inline-height sbdocs-inline-height-2xs"},{heading:"TextArea",meta:d,path:"/docs/components-forms-textarea--docs",canvasClass:"sbdocs-inline-height sbdocs-inline-height-xs"},{heading:"BaseButton",customDescription:"Our usual base button component. This component is not limited to usage in forms.",meta:l,path:"/docs/components-base-basebutton--docs"}]}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"contact-form",children:"Contact Form"}),`
`,t.jsxs(o.p,{children:["Below is contact form that was created using the above components and a couple ",t.jsx(o.code,{children:"div"})," wrappers to adjust spacing between fields."]}),`
`,t.jsx(r,{meta:c,of:m}),`
`,t.jsxs(o.p,{children:["Depending on your framework, you will need to modify the ",t.jsx(o.code,{children:"<form>"})," attributes and possibly convert the submit ",t.jsx(o.code,{children:"<button>"})," to an input, such as:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<input
  type="submit"
  class="BaseButton text-contrast-none inline-block -primary"
/>
`})})]})}function I(n={}){const{wrapper:o}={...s(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(e,{...n})}):e(n)}export{I as default};
