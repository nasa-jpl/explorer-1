import{j as t}from"./jsx-runtime-BpKW7tLe.js";import{u as s}from"./index-hvrDetzx.js";import{M as i,C as r}from"./index-DfR7D5b7.js";import{C as a}from"./ComponentList-BTywwUyI.js";import{E as m,D as c}from"./forms.example.stories-JF4qZLfS.js";import{F as p}from"./FormTextInput.stories-Dny88PdU.js";import{F as l}from"./FormTextArea.stories-9_ipd3p8.js";import{B as d}from"./BaseButton.stories-DWLpCjZB.js";import"./iframe-Cshp5o3p.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./doctrine-SJNQURFN.js";import"./FormInputLabel-DPYog2P7.js";import"./BaseButton-CkSNoISR.js";import"./IconExpand-udGnqQBS.js";import"./IconPrev-yIQlxMWd.js";import"./IconExternal-D74KcMPJ.js";import"./IconDropdown-Bsl9sJbQ.js";function n(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...s(),...e.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Components/Forms/Overview"}),`
`,t.jsx(o.h1,{id:"form-components",children:"Form Components"}),`
`,t.jsx(o.p,{children:`Form styles are currently limited to text inputs and text areas. Explorer 1 does not include any form functionality other than native HTML form controls. If you require more functionality in your forms,
you will need to build that into your implementation of the design system.`}),`
`,t.jsx(o.p,{children:"You can construct a form by combining the following components:"}),`
`,t.jsx(a,{components:[{heading:"TextInput",meta:p,path:"/docs/components-forms-textinput--docs",canvasClass:"sbdocs-inline-height sbdocs-inline-height-2xs"},{heading:"TextArea",meta:l,path:"/docs/components-forms-textarea--docs",canvasClass:"sbdocs-inline-height sbdocs-inline-height-xs"},{heading:"BaseButton",customDescription:"Our usual base button component. This component is not limited to usage in forms.",meta:d,path:"/docs/components-base-basebutton--docs"}]}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example-form",children:"Example Form"}),`
`,t.jsxs(o.p,{children:["Below is an example form that was created using the above components and a couple ",t.jsx(o.code,{children:"div"})," wrappers to adjust spacing between fields."]}),`
`,t.jsx(r,{meta:m,of:c}),`
`,t.jsxs(o.p,{children:["Depending on your framework, you will need to modify the ",t.jsx(o.code,{children:"<form>"})," attributes and possibly convert the submit ",t.jsx(o.code,{children:"<button>"})," to an input, such as:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-html",children:`<input
  type="submit"
  class="BaseButton text-contrast-none inline-block -primary"
/>
`})})]})}function L(e={}){const{wrapper:o}={...s(),...e.components};return o?t.jsx(o,{...e,children:t.jsx(n,{...e})}):n(e)}export{L as default};
