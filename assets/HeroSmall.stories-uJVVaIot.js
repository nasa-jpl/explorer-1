import{a as p,b as d}from"./MixinVideoBg.stories-Zhzx3QIo.js";import{a as m}from"./IconDownload-BH8PYKeu.js";import{B as u}from"./BaseLink-DVdOPU1x.js";const a=({label:t,cta:n,url:r,title:c,image:e,video:s})=>`
  <section
    aria-label="Feature"
    class="HeroSmall ThemeVariantDark relative flex items-center overflow-hidden"
  >
    <div class="absolute inset-0 z-10 overflow-hidden bg-black">
      ${s?p({file:s.file,ogg:s.ogg,webm:s.webm}):e?`
        <picture>
          <source media="(min-width: 768px)" srcset="${e.srcSet}" />
          <source media="(min-width: 420px)" srcset="${e.screenMd.url}" />
          <source data-srcset="${e.screenSm.url}" />
          <img
            class="object-cover w-full h-full"
            src="${e.src.url}"
            width="${e.src.width}"
            height="${e.src.height}"
            alt=""
          />
        </picture>`:""}
    </div>
    <div class="lg:flex lg:items-end lg:relative lg:h-full z-20 w-full">
      <div class="bg-gradient-to-b lg:bg-gradient-to-bl from-transparent lg:from-transparent-w50 to-black lg:to-transparent-black-75 absolute inset-0"></div>
      <div class="px-4 lg:px-10 2xl:px-0 lg:pb-0 lg:py-0 text-contrast container relative mx-auto my-6 lg:mt-0 lg:mb-10 text-white">
        <a href="${r}" class="lg:w-1/2 xl:w-5/12 block">
          ${t?`<p class="text-subtitle lg:mb-3 mb-2">${t}<span class="sr-only">.</span></p>`:""}
          <p class="text-h3 font-semibold tracking-normal mb-0">
            <span class="mr-2">${c}</span>
            <span class="text-jpl-red-light lg:hidden can-hover:group-hover:ml-2 ml-0 text-4xl transition-all duration-200 ease-in">
              ${m({customClass:"inline"})}
            </span>
          </p>
        </a>
        ${u({variant:"primary",link:r,text:n,caretWrapperClass:"py-3",wrapperClass:"lg:block hidden",linkClass:"inline-block"})}
      </div>
    </div>
  </section>
  `,g={title:"Components/Blocks/Heroes/Small",excludeStories:/.*Data$/,argTypes:{label:{type:{name:"string",required:!1},description:"Hero header label"},cta:{type:{name:"string",required:!1},description:"Call to action"},url:{type:{name:"string",required:!1},description:"Link to the feature"},title:{type:{name:"string",required:!1},description:"Feature title"},image:{type:{name:"array",required:!1},description:"An array of image data objects"}},decorators:[t=>`<div id="storyRoot" class="max-w-screen-3xl mx-auto">${t()}</div>`],parameters:{html:{root:"#storyRoot"},docs:{description:{component:"Includes a text overlay. Height of 200px (flexible) on small screens; fixed at 360px on larger screens."}}}},l={label:"Featured",cta:"View",url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}},o=a.bind({});o.args=l;const i=a.bind({});i.args={...l,video:d};const h=["Default","Video"],w=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Video:i,__namedExportsOrder:h,default:g},Symbol.toStringTag,{value:"Module"}));export{w as H};
