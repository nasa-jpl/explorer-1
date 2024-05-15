import{j as e}from"./jsx-runtime-DD1zlnHV.js";import{u as j}from"./index-CYgeuNF3.js";import{M as g,C as i,d as t}from"./index-BBqV_5dE.js";import{S as f,D as a,W as r,A as l,a as h}from"./HeaderInternal.stories-DD4jrjr2.js";import{N as o,D as d,c,A as p,W as m,C as u}from"./NavInternalPanel.stories-jfFRJalo.js";import"./iframe-DSghEARu.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./chunk-QN4WKJDJ-Bf_F3oir.js";import"./index-DvzDrELh.js";import"./index-DrFu-skq.js";import"./AppBarInternal-CTam0wyK.js";import"./IconClose-BD6-dXf8.js";import"./IconMenu-DV0OjQIk.js";import"./IconUser-CqYZ7HgZ.js";import"./NavInternal.stories-C1bOM3Na.js";import"./SearchInput-ZLYMymV6.js";import"./IconSearch-B_HupseB.js";import"./IconDropdown-Bsl9sJbQ.js";import"./IconExternal-D74KcMPJ.js";import"./NavInternalHighlight-Cmu-52Ib.js";import"./BaseImagePlaceholder-KhPDDuZV.js";import"./BaseImage-VZnI4aAI.js";import"./BaseLink-BM1wc07I.js";import"./MixinAnimationCaret-BbklVmGz.js";import"./IconDownload-BH8PYKeu.js";function x(s){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...j(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(g,{of:f}),`
`,e.jsx(n.h1,{id:"internal-header",children:"Internal Header"}),`
`,e.jsx(n.p,{children:"Configurable to accommodate just an AppBar or complex site navigation, along with optional search and sign in/out buttons."}),`
`,e.jsxs(n.p,{children:["Note: to view with functioning dropdowns and search field expansion, you must switch to ",e.jsx("strong",{children:"Canvas View"}),"."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#top",children:"With Navigation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#with-sign-in-buttons",children:"With Sign In Buttons"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#configuring-dropdowns-and-menu-items",children:"How to configure dropdowns and menu items"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#just-the-appbar",children:"AppBar Only"})}),`
`]}),`
`,e.jsx("span",{id:"top"}),`
`,e.jsx(n.h2,{id:"with-navigation",children:"With Navigation"}),`
`,e.jsx(i,{of:a}),`
`,e.jsx("span",{id:"props"}),`
`,e.jsx(n.h3,{id:"props",children:"Props"}),`
`,e.jsx(t,{of:a}),`
`,e.jsx("span",{id:"with-sign-in-buttons"}),`
`,e.jsx(n.h2,{id:"with-sign-in-buttons",children:"With Sign In buttons"}),`
`,e.jsx(i,{of:r}),`
`,e.jsx(t,{of:r}),`
`,e.jsx("span",{id:"configuring-dropdowns-and-menu-items"}),`
`,e.jsx(n.h2,{id:"configuring-dropdowns-and-menu-items",children:"Configuring dropdowns and menu items"}),`
`,e.jsxs(n.p,{children:["The create your own menu items, you can either copy the html template as rendered here and manually edit as needed, or you can populate the ",e.jsx(n.code,{children:"menuItems"})," array to have the template generated for you in Storybook. Either way, be sure that each menu item is given a unique id."]}),`
`,e.jsxs(n.p,{children:["To populate the ",e.jsx(n.code,{children:"menuItems"})," array, a specific structure for each object in the array must be followed. Use the examples below as starting points to construct your array. You can then update the ",e.jsx(n.code,{children:"menuItems"})," value in the ",e.jsx(n.a,{href:"#props",children:"Props Table"})," at the top of the page (or in Canvas view). Be sure to switch to raw data values when doing this."]}),`
`,e.jsxs(n.p,{children:["Items in ",e.jsx(n.code,{children:"menuItems"})," can be given a property of ",e.jsx(n.code,{children:"isActive: true"})," to highlight them with a red underline to indicate that they are the page you are on (or section you are in)."]}),`
`,e.jsx(n.h3,{id:"example-of-a-single-menu-item-no-dropdown",children:"Example of a single menu item, no dropdown"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "id": 1, "title": "Home", "url": "#" }
`})}),`
`,e.jsxs(n.p,{children:["The navigation assumes you are using relative links for local links and will auto-detect external links by checking for ",e.jsx(n.code,{children:"h"})," (as in http or https) at the beginning of the url string."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{ "id": 7, "title": "External", "url": "https://www.jpl.nasa.gov/" }
`})}),`
`,e.jsxs(n.p,{children:['This data would create similar navigation links such as "Home" and "External" in the example ',e.jsx(n.a,{href:"#top",children:"at the top of this page"})]}),`
`,e.jsx(n.h3,{id:"example-panel-with-a-simple-combination",children:"Example panel with a simple combination"}),`
`,e.jsx(n.p,{children:"One highlight, and several single-level nav items."}),`
`,e.jsx(i,{class:"sbdocs-preview-full-width",meta:o,of:d}),`
`,e.jsx(t,{of:d,include:["menuItems","highlights"]}),`
`,e.jsx(n.h3,{id:"example-panel-with-no-highlights",children:"Example panel with no highlights"}),`
`,e.jsx(i,{class:"sbdocs-preview-full-width",meta:o,of:c}),`
`,e.jsxs(n.p,{children:["Note the lack of ",e.jsx(n.code,{children:"highlights"})," in the data structure below:"]}),`
`,e.jsx(t,{of:c,include:["menuItems","highlights"]}),`
`,e.jsx(n.h3,{id:"example-panel-with-highlights-only",children:"Example panel with highlights only"}),`
`,e.jsx(i,{class:"sbdocs-preview-full-width",meta:o,of:p}),`
`,e.jsxs(n.p,{children:["Note the lack of ",e.jsx(n.code,{children:"menuItems"})," in the data structure below:"]}),`
`,e.jsx(t,{of:p,include:["menuItems","highlights"]}),`
`,e.jsx(n.h3,{id:"example-panel-with-navigation-headings",children:"Example panel with navigation headings"}),`
`,e.jsx(i,{class:"sbdocs-preview-full-width",meta:o,of:m}),`
`,e.jsxs(n.p,{children:["Note the nested ",e.jsx(n.code,{children:"menuItems"})," array within each top-level ",e.jsx(n.code,{children:"menuItem"}),". For more details on how these work, view the nav ",e.jsx(n.a,{href:"?path=/story/global-layout-headers-for-internal-sites-elements-panel--with-headings",children:"Section"})," documentation."]}),`
`,e.jsx(t,{of:m,include:["menuItems","highlights"]}),`
`,e.jsx(n.h3,{id:"example-panel-with-a-more-complex-combination",children:"Example panel with a more complex combination"}),`
`,e.jsx(n.p,{children:"One highlight, section headings, and allowing breaks across columns."}),`
`,e.jsx(i,{class:"sbdocs-preview-full-width",meta:o,of:u}),`
`,e.jsx(t,{of:u}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["In all of the above examples, ",e.jsx(n.code,{children:"allowSectionBreaks"})," and ",e.jsx(n.code,{children:"allowSectionColumns"})," can be modified as needed. For information on what these are, see documentation on the Internal Navigation ",e.jsx(n.a,{href:"?path=/story/global-layout-headers-for-internal-sites-elements-panel--default",children:"Panel"})]}),`
`]}),`
`,e.jsx("span",{id:"just-the-appbar"}),`
`,e.jsx(n.h2,{id:"just-the-appbar",children:"Just the AppBar"}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(t,{of:l}),`
`,e.jsx(n.h3,{id:"with-sign-in-buttons-1",children:"With Sign In buttons"}),`
`,e.jsx(i,{of:h}),`
`,e.jsx(t,{of:h})]})}function U(s={}){const{wrapper:n}={...j(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(x,{...s})}):x(s)}export{U as default};
