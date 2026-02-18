import{B as s}from"./BaseImage-CUK1QaiB.js";const o={title:"Components/Base/BaseImage",component:s,excludeStories:/.*Data$/,parameters:{docs:{description:{component:"The BaseImage component is a simple `<img />` tag wrapped in a `<div>` and is used to render an image with object-fit classes and lazy loading properties."}},html:{root:"#storyRoot"}}},t={src:"https://picsum.photos/800/400",srcset:"https://picsum.photos/800/400 800w, ",alt:"Alt text for image",width:800,height:400,imageClass:"",objectFitClass:"contain"},e={args:t,decorators:[()=>({template:'<div id="storyRoot" class="max-w-full"><story /></div>'})]},a={args:t,decorators:[()=>({template:'<div class="max-w-full"><div style="height:3500px">Scroll down and watch the network tab ⬇️</div><div id="storyDecorator"><story /></div></div>'})]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: BaseImageData,
  decorators: [() => ({
    template: '<div id="storyRoot" class="max-w-full"><story /></div>'
  })]
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: BaseImageData,
  decorators: [() => ({
    template: '<div class="max-w-full"><div style="height:3500px">Scroll down and watch the network tab ⬇️</div><div id="storyDecorator"><story /></div></div>'
  })]
}`,...a.parameters?.docs?.source}}};const r=["BaseImageData","BaseStory","LazyLoading"],d=Object.freeze(Object.defineProperty({__proto__:null,BaseImageData:t,BaseStory:e,LazyLoading:a,__namedExportsOrder:r,default:o},Symbol.toStringTag,{value:"Module"}));export{d as B};
