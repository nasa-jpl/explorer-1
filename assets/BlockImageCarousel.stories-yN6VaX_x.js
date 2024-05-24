import{a as r}from"./BlockImageStandard-O8rEyy_4.js";import{B as l}from"./BaseButton-CkSNoISR.js";const d=({label:e,title:t,description:i,fancyboxGallery:s,image:o})=>`
  <div class="swiper-slide group">
    <div>
      <div class="bg-gradient-to-b from-transparent-w50 to-black absolute inset-0 z-10">
        <div class="text-contrast lg:p-20 flex items-end w-full h-full p-10 text-white">
          <div class="w-full">
            ${e?`<p class="text-subtitle mb-3">${e}</p>`:""}
            <h2 class="text-h2">${t}</h2>
            ${i?`<p class="sm:block text-body-lg lg:w-2/3 xl:w-1/2 hidden mt-5">${i}</p>`:""}
          </div>
        </div>
      </div>
      ${r({image:o,fancyboxGallery:s,imageClass:"swiper-lazy",imageFitClass:"object-cover"})}
    </div>
  </div>
  `,n=({images:e,galleryCoverImage:t,fancyboxGallery:i})=>{let s="";if(e.length>0)for(const[o,c]of e.entries())s+=`<div class="swiper-slide">${r({image:c,imageClass:"swiper-lazy",imageCaptionClass:"slide-caption",imageCaptionWrapperClass:"lg:pt-3 px-4 pt-10",fancyboxGallery:"ImageGalleryName"})}</div>`;return`
  <div class="BlockImageCarousel w-full overflow-hidden ${t?"BlockImageGallery max-w-screen-3xl mx-auto":""}">
    <div class="swiper">
      <div class="swiper-wrapper">
        ${t?d({label:t.label,title:t.title,description:t.description,fancyboxGallery:"ImageGalleryName",image:t.image}):""}
        ${s}
      </div>
      <div class="swiper-nav lg:block absolute inset-x-0 top-0 hidden h-0 overflow-hidden">
        <div class="absolute inset-0">
          <div class="absolute bottom-0 right-0 z-10 flex">
            ${l({variant:"primary",cssClass:"z-10 border-collapse px-1 py-2 swiper-prev xl:text-xl",icon:"prev",label:"Previous slide",iconOnly:!0})}
            ${l({variant:"primary",cssClass:"z-10 border-collapse px-1 py-2 swiper-next xl:text-xl",icon:"next",label:"Next slide",iconOnly:!0})}
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-dots lg:hidden absolute top-0 w-full text-center"></div>
    </div>
  </div>
  `},m={title:"Components/Blocks/BlockImageCarousel",decorators:[e=>`<div id="storyRoot" class="mx-auto container">${e()}</div>`],argTypes:{images:{type:{name:"array",required:!0},description:"An array of image data objects"}},parameters:{html:{root:"#storyRoot"},viewMode:"docs",docs:{inlineStories:!1,iframeHeight:850,description:{component:"A simple image carousel with the option to open images in a lightbox."}}},excludeStories:/.*Data$/},p={images:[{alt:"First image",caption:"Lorem ipsum dolor sit amet.",credit:"NASA/JPL-Caltech",detailUrl:"/image/placeholder/",original:"https://picsum.photos/1024/576",src:{height:"576",url:"https://picsum.photos/1024/576",width:"1024"},srcSet:"https://picsum.photos/320/180 320w, https://picsum.photos/1024/576 1024w"},{alt:"Second image",caption:"",credit:"",detailUrl:"",original:"https://picsum.photos/1024/448",src:{height:"448",url:"https://picsum.photos/1024/448",width:"1024"},srcSet:"https://picsum.photos/320/140 320w, https://picsum.photos/1024/448 1024w"},{alt:"Third image",caption:"",credit:"NASA/JPL",detailUrl:"",original:"https://picsum.photos/400/800",src:{height:"800",url:"https://picsum.photos/400/800",width:"400"},srcSet:"https://picsum.photos/320/640 320w, https://picsum.photos/400/800 1024w"},{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/869/700",src:{height:"700",url:"https://picsum.photos/869/700",width:"869"},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w"}]},a=n.bind({});a.storyName="BlockImageCarousel";a.args=p;const u=["BlockImageCarouselData","Default"],v=Object.freeze(Object.defineProperty({__proto__:null,BlockImageCarouselData:p,Default:a,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{n as B,p as a,v as b};
