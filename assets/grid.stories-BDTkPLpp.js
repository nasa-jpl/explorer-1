const F={title:"Foundation/Grid and Layout"},_=()=>`<div class="max-w-screen-3xl mx-auto">
  <div class="BaseGrid container mx-auto mb-10 bg-gray-light-mid">
    <div class="text-center text-white bg-gray-mid-dark p-4">1</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">2</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">3</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">4</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">5</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">6</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">7</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">8</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">9</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">10</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">11</div>
    <div class="text-center text-white bg-gray-mid-dark p-4">12</div>
  </div>
  <div class="container mx-auto">
    <div class="text-white bg-gray-mid-dark p-4">
      Container, but no grid
    </div>
  </div>
</div>`,e={render:_.bind({})},A=()=>`<div class="BaseGrid container mx-auto border border-jpl-red-light">
  <div class="col-start-4 col-end-10 bg-black text-white px-4 py-10">
    Starts at col 4 and ends at the col 10 line.
  </div>
</div>`,t={render:A.bind({})},E=()=>`<div class="BaseGrid container mx-auto border border-jpl-red-light">
  <div class="col-start-2 col-end-8 bg-black text-white px-4 py-10">
    Primary content
  </div>
  <div class="col-start-8 col-end-12 bg-black text-white px-4 py-10">
    Secondary content
  </div>
</div>`,d={render:E.bind({})},O=()=>`<div class="max-w-screen-3xl mx-auto bg-white">
  <div class="BaseGrid container px-0 mx-auto bg-gray-light-mid mb-5">
    <div class="text-center text-white bg-gray-mid-dark py-4">1</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">2</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">3</div>
    <div class="text-center text-whie bg-gray-mid-dark py-4">4</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">5</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">6</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">7</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">8</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">9</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">10</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">11</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">12</div>
  </div>
  <div class="MixedBleedGrid">
    <div class="col-start-bleed col-end-bleed py-5 mb-5 text-sm border-l border-jpl-red">
      <code>[bleed-start]<br>
      .col-start-bleed</code>
    </div>
    <div class="col-start-container col-end-bleed py-5 mb-5 text-sm border-l border-jpl-red">
      <code>[container-start]<br>
      .col-start-container</code>
    </div>
    <div class="col-start-indent-col-2 col-end-bleed py-5 mb-5 text-sm border-l border-jpl-red">
      <code>[indent-col-2]<br>
      .col-start-indent-col-2</code>
    </div>
    <div class="col-start-indent-col-3 col-end-bleed py-5 mb-5 text-sm border-l border-jpl-red">
      <code>[indent-col-3]<br>
      .col-start-indent-col-3</code>
    </div>
    <div class="col-start-bleed col-end-container py-5 mb-5 text-sm border-r border-jpl-red text-right">
      <code>[container-end]<br>
      .col-end-container<br>
      .col-start-container-end</code>
    </div>
    <div class="col-start-bleed col-end-bleed py-5 mb-5 text-sm border-r border-jpl-red text-right">
      <code>[bleed-end]<br>
      .col-end-bleed</code>
    </div>
  </div>
</div>`,r={render:O.bind({})},q=()=>`<div class="MixedBleedGrid">
  <div class="col-start-indent-col-2 col-end-bleed text-white bg-black px-4 py-10">
    Gallery Container (inner layout not dependent on grid)
  </div>
</div>`,i={render:q.bind({})},D=()=>`<div>
  <div class="MixedBleedGrid mb-10">
    <div class="col-start-indent-col-3 col-end-container text-white bg-black">
      <div class="grid grid-cols-10 border border-jpl-red-light">
        <div class="col-start-2 col-end-7 text-white px-4 py-10">
          Text aligned with apparent col 4
        </div>
        <div class="col-start-7 col-end-11 px-4 py-10">
          Text aligned with apparent col 9
        </div>
      </div>
    </div>
    <div class="col-start-container-end col-end-bleed bg-black"></div>
  </div>
</div>`,a={render:D.bind({})},I=()=>`<!-- first section -->
<div class="bg-gray-light mb-5">
  <div class="max-w-screen-3xl mx-auto bg-black text-white p-6">
    Component with content bound <code>.max-w-screen-3xl</code> but with a background color that extends beyond <code>3xl</code>
  </div>
</div>
<!-- second section -->
<div class="container lg:BaseGrid mx-auto mb-5">
  <div class="col-start-3 col-end-11 bg-gray-light p-6">
    Component filling columns 3-10 on large screens and above.
  </div>
</div>
<!-- third section -->
<div class="container BaseGrid mx-auto mb-5">
  <div class="col-start-2 col-end-12 lg:col-start-4 lg:col-end-10 bg-gray-light p-6">
    Component filling columns 4-9 on large screens and above and columns 2-11 on smaller screens.
  </div>
</div>
<!-- fourth section -->
<div class="container mx-auto bg-gray-light p-6 mb-5">
  Component with content bound by <code>.container</code>
</div>
<!-- fifth section -->
<div class="max-w-screen-3xl mx-auto bg-gray-light p-6 mb-5">
  Component with content bound by <code>.max-w-screen-3xl</code>
</div>
<!-- sixth section -->
<div class="container lg:BaseGrid mx-auto">
  <div class="col-start-3 col-end-11 bg-gray-light p-6">
    Another component filling columns 3-10 on large screens and above.
  </div>
</div>`,s={render:I.bind({})},z=()=>`<div class="bg-black text-white py-5 mb-10">
  <div class="max-w-screen-2xl mx-auto border border-white p-3">
    Top Hat
  </div>
  </div>
  <div class="bg-black mb-20 py-10">
  <div class="container mx-auto text-white">
      Page title with full bleed background<br>
      Lorem ipsum dolor sit amet<br>
      Consectatur
  </div>
  </div>
  <div class="MixedBleedGrid mb-20">
  <div class="col-start-indent-col-2 col-end-container bg-gray-light-mid py-10 border border-jpl-red-light">
    <div class="grid grid-cols-11 gap-5">
      <div class="col-start-2 col-end-7">
        Countdown Timer
      </div>
      <div class="col-start-7 col-end-12">
        Distance to Target
      </div>
    </div>
  </div>
  <div class="col-start-container-end col-end-bleed bg-gray-light-mid"></div>
  </div>
  <div class="BaseGrid container mx-auto mb-20 py-10">
  <div class="col-start-2 col-end-8">
    About the mission
  </div>
  <div class="col-start-8 col-end-12">
    Instrument list
  </div>
  </div>
  <div class="bg-black mb-20">
  <div class="BaseGrid container mx-auto">
    <div class="col-start-6 col-end-11 text-white border-b border-white py-5 my-10">
      Full bleed background with BaseGrid inner container
    </div>
  </div>
  </div>
  <div class="BaseGrid container mx-auto mb-20">
  <div class="col-start-2 col-end-7 py-10">
    Mission Data
  </div>
  <div class="col-start-7 col-end-12 bg-black py-10 text-white text-center">
    Square Image
  </div>
  </div>
  <div class="BaseGrid container mx-auto mb-20">
  <div class="col-start-3 col-end-11 py-10 text-center border-t border-b">
    Blockquote
  </div>
  </div>
  <div class="MixedBleedGrid mb-20">
  <div class="col-start-indent-col-2 col-end-bleed px-5 py-10 border border-jpl-red-light">
    Gallery Container
  </div>
  </div>
  <div class="BaseGrid container mx-auto mb-2">
  <div class="col-start-2 col-end-9 p-5 bg-gray-light-mid ">
    Link 1
  </div>
  </div>
  <div class="BaseGrid container mx-auto mb-20">
  <div class="col-start-2 col-end-9 p-5 bg-gray-light-mid ">
    Link 2
  </div>
  </div>
  <div class="bg-gray-light-mid">
  <div class="MixedBleedGrid mb-20">
    <div class="col-start-indent-col-2 col-end-bleed px-5 py-10 border border-jpl-red-light">
      Gallery Container
    </div>
  </div>
  </div>
  <div class="bg-black py-20">
  <div class="container mx-auto text-white">
      Footer
  </div>
</div>`,c={render:z.bind({})};var o,l,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: BaseGridTemplate.bind({})
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var v,b,m;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: ComponentATemplate.bind({})
}`,...(m=(b=t.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var p,g,x;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: ComponentBTemplate.bind({})
}`,...(x=(g=d.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var y,u,h;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: MixedBleedGridLinesTemplate.bind({})
}`,...(h=(u=r.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var w,k,B;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: MixedBleedTemplate.bind({})
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,C,T;a.parameters={...a.parameters,docs:{...(G=a.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: MixedBleedComplexTemplate.bind({})
}`,...(T=(C=a.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var M,S,j;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: PageLayoutTemplate.bind({})
}`,...(j=(S=s.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,P,f;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: FullPageExampleTemplate.bind({})
}`,...(f=(P=c.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const H=["BaseGrid","ComponentA","ComponentB","MixedBleedGridLines","MixedBleed","MixedBleedComplex","PageLayout","FullPageExample"],J=Object.freeze(Object.defineProperty({__proto__:null,BaseGrid:e,ComponentA:t,ComponentB:d,FullPageExample:c,MixedBleed:i,MixedBleedComplex:a,MixedBleedGridLines:r,PageLayout:s,__namedExportsOrder:H,default:F},Symbol.toStringTag,{value:"Module"}));export{e as B,t as C,c as F,r as M,s as P,J as S,d as a,i as b,a as c};
