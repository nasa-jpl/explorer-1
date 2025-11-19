import{L as e}from"./LayoutHelper-BwcQcrps.js";const t={title:"Foundations/Grid and Layout",component:e,tags:["!autodocs"]},d={args:{},render:()=>({template:`<div class="max-w-screen-3xl mx-auto">
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
</div>`})},i={args:{},render:()=>({template:`<div class="BaseGrid container mx-auto border border-jpl-red-light">
  <div class="col-start-4 col-end-10 bg-black text-white px-4 py-10">
    Starts at col 4 and ends at the col 10 line.
  </div>
</div>`})},a={args:{},render:()=>({template:`<div class="BaseGrid container mx-auto border border-jpl-red-light">
  <div class="col-start-2 col-end-8 bg-black text-white px-4 py-10">
    Primary content
  </div>
  <div class="col-start-8 col-end-12 bg-black text-white px-4 py-10">
    Secondary content
  </div>
</div>`})},r={args:{},render:()=>({template:`<div class="max-w-screen-3xl mx-auto bg-white">
  <div class="BaseGrid container px-0 mx-auto bg-gray-light-mid mb-5">
    <div class="text-center text-white bg-gray-mid-dark py-4">1</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">2</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">3</div>
    <div class="text-center text-white bg-gray-mid-dark py-4">4</div>
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
</div>`})},l={args:{},render:()=>({template:`<div class="MixedBleedGrid">
  <div class="col-start-indent-col-2 col-end-bleed text-white bg-black px-4 py-10">
    Gallery Container (inner layout not dependent on grid)
  </div>
</div>`})},s={args:{},render:()=>({template:`<div>
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
</div>`})},c={args:{},render:()=>({template:`<!-- first section -->
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
</div>`})},o={args:{},render:()=>({template:`<div class="bg-black text-white py-5 mb-10">
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
</div>`})},n=["BaseGrid","ComponentA","ComponentB","MixedBleedGridLines","MixedBleed","MixedBleedComplex","PageLayout","FullPageExample"],b=Object.freeze(Object.defineProperty({__proto__:null,BaseGrid:d,ComponentA:i,ComponentB:a,FullPageExample:o,MixedBleed:l,MixedBleedComplex:s,MixedBleedGridLines:r,PageLayout:c,__namedExportsOrder:n,default:t},Symbol.toStringTag,{value:"Module"}));export{d as B,i as C,o as F,r as M,c as P,b as S,a,l as b,s as c};
