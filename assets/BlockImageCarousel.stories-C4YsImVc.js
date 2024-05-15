import{a as r}from"./BlockImageStandard-P3W0cbNK.js";import{B as o}from"./BaseButton-DpIDzJwf.js";const d=({label:t,title:e,description:i,fancyboxGallery:s,image:l})=>`
  <div class="swiper-slide group">
    <div>
      <div class="bg-gradient-to-b from-transparent-w50 to-black absolute inset-0 z-10">
        <div class="text-contrast lg:p-20 flex items-end w-full h-full p-10 text-white">
          <div class="w-full">
            ${t?`<p class="text-subtitle mb-3">${t}</p>`:""}
            <h2 class="text-h2">${e}</h2>
            ${i?`<p class="sm:block text-body-lg lg:w-2/3 xl:w-1/2 hidden mt-5">${i}</p>`:""}
          </div>
        </div>
      </div>
      ${r({image:l,fancyboxGallery:s,imageClass:"swiper-lazy",imageFitClass:"object-cover"})}
    </div>
  </div>
  `,n=({images:t,galleryCoverImage:e,fancyboxGallery:i})=>{let s="";if(t.length>0)for(const[l,c]of t.entries())s+=`<div class="swiper-slide">${r({image:c,imageClass:"swiper-lazy",imageCaptionClass:"slide-caption",imageCaptionWrapperClass:"lg:pt-3 px-4 pt-10",fancyboxGallery:"ImageGalleryName"})}</div>`;return`
  <div class="BlockImageCarousel w-full overflow-hidden ${e?"BlockImageGallery max-w-screen-3xl mx-auto":""}">
    <div class="swiper">
      <div class="swiper-wrapper">
        ${e?d({label:e.label,title:e.title,description:e.description,fancyboxGallery:"ImageGalleryName",image:e.image}):""}
        ${s}
      </div>
      <div class="swiper-nav lg:block absolute inset-x-0 top-0 hidden h-0 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute bottom-0 right-0 z-10 flex">
            ${o({variant:"primary",cssClass:"z-10 border-collapse px-1 py-2 swiper-prev xl:text-xl",icon:"prev",label:"Previous slide",iconOnly:!0})}
            ${o({variant:"primary",cssClass:"z-10 border-collapse px-1 py-2 swiper-next xl:text-xl",icon:"next",label:"Next slide",iconOnly:!0})}
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-dots lg:hidden absolute top-0 w-full text-center"></div>
    </div>
  </div>
  `},m={title:"Components/Blocks/BlockImageCarousel",tags:["autodocs"],decorators:[t=>`<div id="storyRoot" class="mx-auto container">${t()}</div>`],argTypes:{images:{type:{name:"array",required:!0},description:"An array of image data objects"}},parameters:{html:{root:"#storyRoot"},viewMode:"docs",docs:{inlineStories:!1,iframeHeight:850,description:{component:"A simple image carousel with the option to open images in a lightbox."}},themes:{clearable:!1,list:[{name:"ThemeLight",class:["ThemeLight","sbdocs-preview-full-width"],color:"#ffffff",default:!0},{name:"ThemeDark",class:["ThemeDark","sbdocs-preview-full-width"],color:"#000000"},{name:"ThemeInternal",class:["ThemeInternal","sbdocs-preview-full-width"],color:"#53C8ED"}]}},excludeStories:/.*Data$/},p={images:[{alt:"First image",caption:"Lorem ipsum dolor sit amet.",credit:"NASA/JPL-Caltech",detailUrl:"/image/placeholder/",original:"https://picsum.photos/1024/576",src:{height:"576",url:"https://picsum.photos/1024/576",width:"1024"},srcSet:"https://picsum.photos/320/180 320w, https://picsum.photos/1024/576 1024w"},{alt:"Second image",caption:"",credit:"",detailUrl:"",original:"https://picsum.photos/1024/448",src:{height:"448",url:"https://picsum.photos/1024/448",width:"1024"},srcSet:"https://picsum.photos/320/140 320w, https://picsum.photos/1024/448 1024w"},{alt:"Third image",caption:"",credit:"NASA/JPL",detailUrl:"",original:"https://picsum.photos/400/800",src:{height:"800",url:"https://picsum.photos/400/800",width:"400"},srcSet:"https://picsum.photos/320/640 320w, https://picsum.photos/400/800 1024w"},{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/869/700",src:{height:"700",url:"https://picsum.photos/869/700",width:"869"},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w"}]},a=n.bind({});a.storyName="BlockImageCarousel";a.args=p;const u=["BlockImageCarouselData","Default"],w=Object.freeze(Object.defineProperty({__proto__:null,BlockImageCarouselData:p,Default:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{w as B,n as a,p as b};
