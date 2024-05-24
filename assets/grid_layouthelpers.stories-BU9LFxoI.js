const o={title:"Foundation/Grid and Layout/Column Layout Helpers",tags:["!autodocs"]},t=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base border border-success-green p-4">
    <code>.indent-col-base</code>
  </div>
</div>`,r=t.bind({}),d=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-2 border border-success-green p-4">
    <code>.indent-col-base.indent-col-2</code>
  </div>
</div>`,e={name:"Start at col-2",render:d.bind({})};e.parameters={docs:{source:{state:"open"}}};const a=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-3 border border-success-green p-4">
    <code>.indent-col-base.indent-col-3</code>
  </div>
</div>`,n={name:"Start at col-3",render:a.bind({})},s=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-4 border border-success-green p-4">
    <code>.indent-col-base.indent-col-4</code>
  </div>
</div>`,c={name:"Start at col-4",render:s.bind({})},i=["BaseWidth","ColTwoStart","ColThreeStart","ColFourStart"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseWidth:r,ColFourStart:c,ColThreeStart:n,ColTwoStart:e,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{r as B,e as C,l as S,n as a,c as b};
