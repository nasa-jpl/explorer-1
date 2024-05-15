const v={title:"Foundation/Grid and Layout/Column Layout Helpers",tags:["!autodocs"]},T=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base border border-success-green p-4">
    <code>.indent-col-base</code>
  </div>
</div>`,r=T.bind(),C=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-2 border border-success-green p-4">
    <code>.indent-col-base.indent-col-2</code>
  </div>
</div>`,e={name:"Start at col-2",render:C.bind({})};e.parameters={docs:{source:{state:"open"}}};const g=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-3 border border-success-green p-4">
    <code>.indent-col-base.indent-col-3</code>
  </div>
</div>`,o={name:"Start at col-3",render:g.bind({})},y=()=>`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base indent-col-4 border border-success-green p-4">
    <code>.indent-col-base.indent-col-4</code>
  </div>
</div>`,a={name:"Start at col-4",render:y.bind({})};var t,s,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => \`<div class="BaseGrid container mx-auto border border-black py-4">
  <div class="indent-col-base border border-success-green p-4">
    <code>.indent-col-base</code>
  </div>
</div>\``,...(d=(s=r.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var n,c,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Start at col-2',
  render: ColTwoStartTemplate.bind({})
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,b,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Start at col-3',
  render: ColThreeStartTemplate.bind({})
}`,...(p=(b=o.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,u,S;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Start at col-4',
  render: ColFourStartTemplate.bind({})
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const B=["BaseWidth","ColTwoStart","ColThreeStart","ColFourStart"],h=Object.freeze(Object.defineProperty({__proto__:null,BaseWidth:r,ColFourStart:a,ColThreeStart:o,ColTwoStart:e,__namedExportsOrder:B,default:v},Symbol.toStringTag,{value:"Module"}));export{r as B,e as C,h as S,o as a,a as b};
