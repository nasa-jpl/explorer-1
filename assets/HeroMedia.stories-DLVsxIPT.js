import{a as p,b as g}from"./MixinVideoBg.stories-Zhzx3QIo.js";import{B as m}from"./BaseImageCaption-DGqx0YEt.js";import{I as u}from"./IconInfo-D1-JT0wp.js";import{I as h}from"./IconClose-BD6-dXf8.js";const o=({image:e,video:t,caption:a,credit:c,url:d})=>`
  <div class="HeroMedia">
    <div class="bg-gray-light">
      <div class="vh-crop max-w-screen-3xl relative flex items-center mx-auto overflow-hidden">
        <div class="hero">
          ${e?`<img class="object-cover object-center w-full h-full" ${e.srcSet?`srcset="${e.srcSet}"`:""} src="${e.src.url}" width="${e.src.width}" height="${e.src.height}" alt="${e.alt}"/>`:t?p({file:t.file,webm:t.webm,ogg:t.ogg}):""}
        </div>
        ${a?`
        <div class="lg:hidden absolute bottom-0 left-0 w-full h-auto mx-auto">
          <button id="HeroMediaCaptionToggle" class="text-gray-dark flex items-center justify-center w-12 h-12 ml-auto bg-white/90 cursor-pointer focus:outline-none focus:ring-2" aria-label="Toggle caption">
            ${u({})}
            ${h({})}
          </button>
        </div>`:""}
      </div>
      ${a?`<div id="HeroMediaCaption" class="max-w-screen-3xl bg-gray-light/90 lg:bg-gray-light/100 lg:block lg:pb-4 lg:px-3 xl:px-8 lg:pt-4 items-start p-4 mx-auto hidden">${m({caption:a,credit:c,url:d,linkText:"Full Image Details"})}</div>`:""}
    </div>
  </div>
  `,f={title:"Components/Blocks/Heroes/Media Only",excludeStories:/.*Data$/,decorators:[e=>`<div id="storyRoot" class="absolute inset-0">${e()}</div>`],argTypes:{image:{type:{name:"array",required:!1},description:"An array of image data objects"},video:{type:{name:"array",required:!1},description:"An array of video data objects"},caption:{type:{name:"string",required:!1},description:""},credit:{type:{name:"string",required:!1},description:""}},parameters:{html:{root:"#storyRoot"},viewMode:"docs",docs:{inlineStories:!1,iframeHeight:700,description:{component:"No text overlay, just an image or video with a caption below."}}}},i={image:{src:{url:"https://picsum.photos/869/700",width:869,height:700},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w",alt:"News detail page hero image"},caption:"<p>NASA InSight&#x27;s robotic arm will use its scoop to pin the spacecraft&#x27;s heat probe against the wall of its hole.</p>",credit:"NASA/JPL",url:"/images/image-123/"},r=o.bind({});r.args=i;const s=o.bind({});s.args={image:i.image,caption:"",credit:"",url:""};const l=o.bind({});l.args={...i,url:""};const n=o.bind({});n.args={video:g,caption:'<p>Lorem ipsum dolor sit amet. <a href="#">A link in the caption</a> testing render.</p>',credit:"NASA/JPL"};const b=["HeroMediaData","Default","NoCaption","NoLink","Video"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,HeroMediaData:i,NoCaption:s,NoLink:l,Video:n,__namedExportsOrder:b,default:f},Symbol.toStringTag,{value:"Module"}));export{$ as H};
