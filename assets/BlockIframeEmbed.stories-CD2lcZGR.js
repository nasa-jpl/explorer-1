import{B as l}from"./BaseIframe-CN0Xf0EZ.js";import{B as c}from"./BaseImageCaption-vks4WUeh.js";import{B as p}from"./BaseImagePlaceholder-KhPDDuZV.js";const a=({title:e,url:m,height:n,caption:t})=>{t&&(t=`<div class="lg:px-0 p-4 pb-0">${c({caption:t,url:m})}</div>`);const d=l({title:e,url:m,height:n});return`
  ${n?d:p({aspectRatio:"aspect-ratio-sixteen-nine",theme:"dark-theme",placeholder:d})}
  ${t}
  `},f={title:"Components/Blocks/BlockIframeEmbed",argTypes:{title:{type:{name:"string",required:!0},description:"Iframe title used for accessibility"},url:{type:{name:"string",required:!0},description:"Link to the embed source"},height:{type:{name:"integer",required:!1},description:"Iframe embed height. Will default to a responsive 16:9 aspect ratio if left blank."},caption:{type:{name:"string",required:!1},description:"Iframe caption"}},parameters:{viewMode:"docs",docs:{description:{component:"An iframe embed with an optional caption. View the component to see a demo."}},html:{root:"#storyRoot"}}},o={title:"Perseverance Rover Embed",url:"https://mars.nasa.gov/gltf_embed/25042",caption:'<p>Click (or touch) and drag to interact with this 3D model of the Mars 2020 Perseverance Rover. Learn more about the mission at <a href="mars.nasa.gov/mars2020/">mars.nasa.gov/mars2020/</a>.</p>'},r=a.bind({});r.args=o;r.decorators=[e=>`<div id="storyRoot" class="mx-auto container">${e()}</div>`];const s=a.bind({});s.args={...o,height:400};s.decorators=[e=>`<div id="storyRoot" class="mx-auto container">${e()}</div>`];const i=a.bind({});i.args=o;i.decorators=[e=>`
  <div class="max-w-full">
    <div style="height:2500px">
      Scroll down
    </div>
    <div id="storyRoot">
      ${e()}
    </div>
  </div>
  `];const u=["Default","CustomHeight","LazyLoad"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomHeight:s,Default:r,LazyLoad:i,__namedExportsOrder:u,default:f},Symbol.toStringTag,{value:"Module"}));export{B};
