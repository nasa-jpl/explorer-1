import{B as m}from"./BaseImage-C2wBaajf.js";const l={title:"Components/Base/BaseImage",component:m,excludeStories:/.*Data$/,parameters:{docs:{description:{component:"The BaseImage component is a simple `<img />` tag wrapped in a `<div>` and is used to render an image with object-fit classes and lazy loading properties."}},html:{root:"#storyRoot"}}},t={src:"https://picsum.photos/800/400",srcset:"https://picsum.photos/800/400 800w, ",alt:"Alt text for image",width:800,height:400,imageClass:"",objectFitClass:"contain"},e={args:t,decorators:[()=>({template:'<div id="storyRoot" class="max-w-full"><story /></div>'})]},a={args:t,decorators:[()=>({template:'<div class="max-w-full"><div style="height:3500px">Scroll down and watch the network tab ⬇️</div><div id="storyDecorator"><story /></div></div>'})]};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: BaseImageData,
  decorators: [() => ({
    template: '<div id="storyRoot" class="max-w-full"><story /></div>'
  })]
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: BaseImageData,
  decorators: [() => ({
    template: '<div class="max-w-full"><div style="height:3500px">Scroll down and watch the network tab ⬇️</div><div id="storyDecorator"><story /></div></div>'
  })]
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const n=["BaseImageData","BaseStory","LazyLoading"],g=Object.freeze(Object.defineProperty({__proto__:null,BaseImageData:t,BaseStory:e,LazyLoading:a,__namedExportsOrder:n,default:l},Symbol.toStringTag,{value:"Module"}));export{g as B};
