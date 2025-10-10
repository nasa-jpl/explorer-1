import{_ as o,o as a,h as d,Y as i}from"./iframe-CIczggiG.js";import{I as l}from"./IconLocation-D_TDMt2r.js";import{B as c}from"./BaseHeading-dcfZxEQ4.js";const s={},n={class:"Fonts md:grid-cols-2 grid gap-2 mt-4"};function r(e,t){return a(),d("div",n,t[0]||(t[0]=[i('<div><h3 id="primary" class="inline-block align-top mr-4 font-primary"> Metropolis <br><code class="text-base">.font-primary</code></h3><ol class="list-none inline-block"><li><span class="leading-loose"><span class="capitalize font-primary font-light"> Metropolis light </span><code>.font-light</code></span></li><li><span class="leading-loose"><span class="capitalize font-primary font-normal"> Metropolis normal </span><code>.font-normal</code></span></li><li><span class="leading-loose"><span class="capitalize font-primary font-medium"> Metropolis medium </span><code>.font-medium</code></span></li><li><span class="leading-loose"><span class="capitalize font-primary font-semibold"> Metropolis semi bold </span><code>.font-semibold</code></span></li><li><span class="leading-loose"><span class="capitalize font-primary font-bold">Metropolis bold</span><code>.font-bold</code></span></li><li><span class="leading-loose"><span class="capitalize font-primary font-extrabold"> Metropolis extra bold </span><code>.font-extrabold</code></span></li></ol></div><div><h3 id="secondary" class="inline-block align-top mr-4 font-secondary"> Archivo Narrow <br><code class="text-base">.font-secondary</code></h3><ol class="list-none inline-block"><li></li><li></li><li></li><li><span class="leading-loose"><span class="capitalize font-secondary font-semibold"> Archivo Narrow semi bold </span><code>.font-semibold</code></span></li><li><span class="leading-loose"><span class="capitalize font-secondary font-bold"> Archivo Narrow bold </span><code>.font-bold</code></span></li><li></li></ol></div>',2)]))}const p=o(s,[["render",r]]);s.__docgenInfo={displayName:"FontVariants",description:"",tags:{},sourceFiles:["/home/runner/work/explorer-1/explorer-1/apps/vue-storybook/node_modules/@explorer-1/vue/src/docs/foundation/FontVariants.vue"]};const m={title:"Foundations/Typography",component:p,tags:["!autodocs"]},g={args:{}},h={args:{},render:()=>({template:`<div>
  <div class="md:grid-cols-3 inline-grid gap-4 p-8 mt-8 bg-white">
    <div>
      <div class="bg-gray-dark w-16 h-8"></div>
      <code class="text-gray-dark">.text-gray-dark</code>
    </div>
    <div>
      <div class="bg-gray-mid-dark w-16 h-8"></div>
      <code class="text-gray-mid-dark">.text-gray-mid-dark</code>
    </div>
    <div>
      <div class="bg-jpl-red w-16 h-8"></div>
      <code class="text-jpl-red">.text-jpl-red</code>
    </div>
  </div>
  <div class="inline-grid grid-cols-3 gap-4 p-8 bg-black">
    <div>
      <div class="w-16 h-8 bg-white"></div>
      <code class="text-white">.text-white</code>
    </div>
    <div>
      <div class="bg-gray-mid w-16 h-8"></div>
      <code class="text-gray-mid">.text-gray-mid</code>
    </div>
    <div>
      <div class="bg-jpl-red-light w-16 h-8"></div>
      <code class="text-jpl-red-light">.text-jpl-red-light</code>
    </div>
  </div>
</div>`})},x={args:{},render:()=>({template:`<div>
  <p class="text-h1-alt mt-8">Header H1 Alt</p>
  <code>.text-h1-alt</code>
  <p class="text-h1 mt-8">Header H1</p>
  <code>h1, .text-h1</code>
  <p class="text-h2 mt-8">Header H2</p>
  <code>h2, .text-h2</code>
  <p class="text-h3 mt-8">Header H3</p>
  <code>h3, .text-h3</code>
  <p class="text-h4 mt-8">Header H4</p>
  <code>h4, .text-h4</code>
  <p class="text-h5 mt-8">Header H5</p>
  <code>h5, .text-h5</code>
  <p class="text-h6 mt-8">Header H6</p>
  <code>h6, .text-h6</code>
  <p class="text-subtitle mt-8">Subtitle</p>
  <code>.text-subtitle</code>
  <p class="text-body-lg mt-8">Body large</p>
  <code>.text-body-lg</code>
  <p class="text-body-md mt-8">Body medium</p>
  <code>.text-body-md</code>
  <p class="text-body-sm mt-8">Body small</p>
  <code>.text-body-sm</code>
  <p class="text-body-xs mt-8">Body extra small</p>
  <code>.text-body-xs</code>
  <p class="mt-8"><mark>Highlighted text</mark></p>
  <code>mark</code>
  <p class="mt-8"><span class="math-text">This is math text. a<sup>2</sup> + a<sub>b</sub> = c</span></p>
  <code>.math-text</code>
</div>`})},b={argTypes:{size:{type:{name:"string",required:!0},control:{type:"select"},options:["h1","h2","h3","h4","h5","h6"]}},args:{size:"h1"},render:e=>({components:{BaseHeading:c,IconLocation:l},setup(){return{args:e}},template:`<div>
      <BaseHeading v-bind="args"><IconLocation class="inline" /> Heading H1</BaseHeading>
    </div>`})},v={args:{},render:()=>({template:`<div style="background-image: url('https://fastly.picsum.photos/id/1015/1000/40.jpg?hmac=fpUcZPtNEqNVb9cio8CwkUIBZKywJSfhaxdieF0Uxgk');" class="bg-cover bg-no-repeat bg-center">
  <div class="p-10 bg-black/30">
    <span class="text-h3 text-white text-contrast">
      This text uses a text shadow that increases readability when used with a semi-transparent overlay.
    </span>
  </div>
</div>`})},y=["Fonts","TextColors","TextStyles","HeadingIcons","TextContrast"],k=Object.freeze(Object.defineProperty({__proto__:null,Fonts:g,HeadingIcons:b,TextColors:h,TextContrast:v,TextStyles:x,__namedExportsOrder:y,default:m},Symbol.toStringTag,{value:"Module"}));export{g as F,b as H,k as S,h as T,x as a,v as b};
