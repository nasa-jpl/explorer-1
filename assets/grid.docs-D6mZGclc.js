import{j as e}from"./index-BB-JmmZs.js";import{useMDXComponents as d}from"./index-fCejcEO3.js";import{M as t,C as s}from"./blocks-DG4gIeml.js";import{S as a,B as o,C as r,a as c,M as h,b as x,c as m,P as p,F as g}from"./grid.stories-CErOGWue.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";import"./LayoutHelper-BumjmA7T.js";function l(i){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...d(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a}),`
`,e.jsx(n.h1,{id:"grid-and-layout",children:"Grid and Layout"}),`
`,e.jsxs(n.p,{children:["We use a 12-column grid paired with our ",e.jsx(n.a,{href:"?path=/docs/guides-responsive-design--docs",children:"Responsive Design"})," strategy to create all of our page and component layouts."]}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"The examples on this page assume you are viewing this page on a desktop. Examples may not appear correct on smaller screens."}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#basegrid",children:"BaseGrid"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage",children:"Example Usage"})}),`
`]}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"#mixed-bleed",children:"Mixed Bleed"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#example-usage-1",children:"Example Usage"})}),`
`]}),`
`]}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#page-layout-recommendations",children:"Page layout recommendations"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"#full-page-example",children:"Full Page Example"})}),`
`]}),`
`,e.jsx("span",{id:"basegrid"}),`
`,e.jsx(n.h2,{id:"basegrid",children:"BaseGrid"}),`
`,e.jsxs(n.p,{children:["There is a globally available ",e.jsx(n.code,{children:".BaseGrid"})," class that is the basis of our main grid, which contains ",e.jsx(n.code,{children:"12"})," columns with a gutter of ",e.jsx(n.code,{children:"gap-6"}),"."]}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:o}),`
`,e.jsxs(n.p,{children:["Although ",e.jsx(n.code,{children:".BaseGrid"})," is always used with or wrapped by a ",e.jsx(n.code,{children:".container"}),", ",e.jsx(n.code,{children:".BaseGrid"})," itself does not include any margins or container behavior. This is to allow for maximum flexibility when using this class in your components:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`.BaseGrid {
  @apply grid grid-cols-12 gap-6;
}
`})}),`
`,e.jsx(n.p,{children:"Adjustments like margins and container can be applied as needed, such as:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="BaseGrid container mx-auto">Centered 12 col grid bound by container</div>
`})}),`
`,e.jsxs(n.p,{children:["If you just need a container and no grid, you can simply omit the ",e.jsx(n.code,{children:"BaseGrid"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="container mx-auto">Content with no grid</div>
`})}),`
`,e.jsx("span",{id:"example-usage"}),`
`,e.jsx(n.h3,{id:"example-usage",children:"Example Usage"}),`
`,e.jsx(n.p,{children:"Some common component layouts:"}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:r}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:c}),`
`,e.jsx(n.hr,{}),`
`,e.jsx("span",{id:"mixed-bleed"}),`
`,e.jsx(n.h2,{id:"mixed-bleed",children:"Mixed Bleed"}),`
`,e.jsxs(n.p,{children:["Some components only bleed to one side of the screen. There is a ",e.jsx(n.code,{children:".MixedBleedGrid"})," class available for use that sets named grid lines. Note that these grid lines assume ",e.jsx(n.code,{children:".container"})," has zero padding."]}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{style:{textAlign:"left"},children:"Named Line"}),e.jsx(n.th,{style:{textAlign:"left"},children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"bleed-start"})}),e.jsx(n.td,{style:{textAlign:"left"},children:"Left edge of the viewport"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"container-start"})}),e.jsx(n.td,{style:{textAlign:"left"},children:"Left edge of the standard container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"indent-col-2"})}),e.jsxs(n.td,{style:{textAlign:"left"},children:["Aligns with column 2 in ",e.jsx(n.code,{children:"BaseGrid"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"indent-col-3"})}),e.jsxs(n.td,{style:{textAlign:"left"},children:["Aligns with column 3 in ",e.jsx(n.code,{children:"BaseGrid"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"container-end"})}),e.jsx(n.td,{style:{textAlign:"left"},children:"Right edge of the standard container"})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{style:{textAlign:"left"},children:e.jsx(n.code,{children:"bleed-end"})}),e.jsx(n.td,{style:{textAlign:"left"},children:"Right edge of the viewport"})]})]})]}),`
`,e.jsxs(n.p,{children:["These named lines are used to construct the following ",e.jsx(n.code,{children:"col-start-"})," and ",e.jsx(n.code,{children:"col-end-"})," classes:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`@responsive {
  .col-start-bleed {
    grid-column-start: bleed-start;
  }
  .col-end-container-start {
    grid-column-end: container-start;
  }
  .col-start-container {
    grid-column-start: container-start;
  }
  .col-start-indent-col-2 {
    grid-column-start: indent-col-2;
  }
  .col-start-indent-col-3 {
    grid-column-start: indent-col-3;
  }
  .col-end-container {
    grid-column-end: container-end;
  }
  .col-start-container-end {
    grid-column-start: container-end;
  }
  .col-end-bleed {
    grid-column-end: bleed-end;
  }
}
`})}),`
`,e.jsxs(n.p,{children:["Note the usage of ",e.jsx(n.code,{children:".px-0"})," in addition to ",e.jsx(n.code,{children:".container"})," in the example below:"]}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:h}),`
`,e.jsx("span",{id:"example-usage-1"}),`
`,e.jsx(n.h3,{id:"example-usage-1",children:"Example Usage"}),`
`,e.jsx(n.p,{children:"Responsive styles within MixedBleed will need to be determined on a case-by-base basis. Usage of this class is best followed by observing existing usage and examples."}),`
`,e.jsx(n.h4,{id:"simple-mixed-bleed",children:"Simple mixed bleed"}),`
`,e.jsxs(n.p,{children:["Starts at ",e.jsx(n.code,{children:"indent-col-2"})," (col-2 of the ",e.jsx(n.code,{children:"BaseGrid"}),") and bleeds fully to the right."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="MixedBleedGrid">
  <div class="col-start-indent-col-2 col-end-bleed">Indented to col-2 and bleeds right</div>
</div>
`})}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:x}),`
`,e.jsx(n.h4,{id:"complex-mixed-bleed",children:"Complex mixed bleed"}),`
`,e.jsxs(n.p,{children:["When elements of an indented MixedBleed area must align with the BaseGrid, we need to get a bit more creative. We will still use mixed bleed grid lines, but we will not use ",e.jsx(n.code,{children:"BaseGrid"})," within since the container is already indented. We instead need to use a custom grid for this use-case. Luckily, with Tailwind CSS, this is fairly straightforward. The nested grid should contain the number of columns offset by the amount that is already indented, and no ",e.jsx(n.code,{children:"gap"})," should be used."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<div class="MixedBleedGrid">
  <div class="col-start-indent-col-3 col-end-container bg-black">
    <div class="grid grid-cols-10">
      <div class="col-start-2 col-end-7">Text aligned with apparent col 4</div>
      <div class="col-start-7 col-end-11">Text aligned with apparent col 9</div>
    </div>
  </div>
  <div class="col-start-container-end col-end-bleed bg-black"></div>
</div>
`})}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:m}),`
`,e.jsx("span",{id:"page-layout-recommendations"}),`
`,e.jsx(n.h2,{id:"page-layout-recommendations",children:"Page layout recommendations"}),`
`,e.jsxs(n.p,{children:["Explorer 1 components vary in width. This can make page layouts challenging if the entire content area is bound by a single ",e.jsx(n.code,{children:".container"})," div, a strategy that is commonly used on other websites. For Explorer 1, we recommend avoiding this strategy and instead giving each section or component on the page its own set of layout markup."]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"?path=/docs/components-blocks-overview--docs",children:"Blocks"}),` provided by Explorer 1 are compatible with this strategy. However, if a block notes that "layout assumptions have been made," this means that the entire layout for that block is already included in the markup, and you shouldn't include any additional layout. Doing so could break the display of that block.`]}),`
`,e.jsxs(n.p,{children:["View the code below for an example of how to give each section its own set of layout markup. You can also see this strategy employed in the ",e.jsx(n.a,{href:"#full-page-example",children:"Full Page Example"}),"."]}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:p}),`
`,e.jsx("br",{}),`
`,e.jsx("span",{id:"full-page-example"}),`
`,e.jsx(n.h2,{id:"full-page-example",children:"Full Page Example"}),`
`,e.jsx(n.p,{children:"An example of the foundations of a full page layout."}),`
`,e.jsx(s,{className:"sbdocs-preview-full-width",of:g})]})}function B(i={}){const{wrapper:n}={...d(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(l,{...i})}):l(i)}export{B as default};
