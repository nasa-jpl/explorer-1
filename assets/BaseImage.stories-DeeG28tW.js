import{B as a}from"./BaseImage-VZnI4aAI.js";const i={title:"Components/Base/BaseImage",excludeStories:/.*Data$/,argTypes:{src:{type:{name:"string",required:!0}},srcset:{type:"string"},alt:{type:{name:"string",required:!0}},width:{type:{name:"number",required:!0}},height:{type:{name:"number",required:!0}},objectFitClass:{type:"string",description:"Use Tailwind CSS object fit classes to specify how the image will scale within `BaseImagePlaceholder`",control:{type:"select",options:["object-none","object-contain","object-cover","object-fill","object-scale-down"]},table:{defaultValue:{summary:"object-contain"}}},imageClass:{type:"string",description:"Apply any CSS class directly to the image element"}},parameters:{docs:{description:{component:"The BaseImage component is a simple `<img />` tag wrapped in a `<div>` and is used to render an image with object-fit classes and lazy loading properties."}}}},t={src:"https://picsum.photos/800/400",srcset:"https://picsum.photos/800/400 800w, ",alt:"Alt text for image",width:800,height:400,imageClass:"",objectFitClass:"object-contain"},s=a.bind({});s.args=t;const e=a.bind({});e.args=t;e.decorators=[o=>`
  <div class="max-w-full">
    <div style="height:2500px">
      Scroll down
    </div>
    <div id="storyRoot">
      ${o()}
    </div>
  </div>
  `];e.parameters={html:{root:"#storyRoot"}};const r=["BaseImageData","Default","LazyLoading"],c=Object.freeze(Object.defineProperty({__proto__:null,BaseImageData:t,Default:s,LazyLoading:e,__namedExportsOrder:r,default:i},Symbol.toStringTag,{value:"Module"}));export{c as B,t as a};
