import{B as u}from"./BaseImagePlaceholder-BjDXo6VY.js";import{B as m}from"./BaseImageCaption-DGqx0YEt.js";import{B as p,a as c}from"./BlockImageStandard-BFjPl78h.js";const n=({image:e,fancyboxGallery:t})=>{let a=p({image:e,fancyboxGallery:t}),d=u({theme:"dark-theme",src:e.src.url,srcset:e.src.url,alt:e.alt,width:e.src.width,height:e.src.height,wrapperClass:"aspect-ratio-sixteen-nine lg:aspect-ratio-two-one",objectFitClass:"object-cover"}),r="";return(e.caption||e.credit)&&(r=`<div class="max-w-screen-3xl p-4 pb-0 mx-auto">${m({caption:e.caption,credit:e.credit,url:e.url,linkText:e.linkText})}</div>`),`
  <div>
    <div class="bg-gray-light">
      <div class="max-w-screen-3xl mx-auto group relative">
        ${a}
        ${d}
      </div>
    </div>
    ${r}
  </div>
  `},h=({fullBleed:e,image:t,fancyboxGallery:a})=>e?n({image:t,fancyboxGallery:a}):`
    <div class="BaseGrid container mx-auto">
      <div class="lg:col-start-2 lg:col-end-12 col-start-1 col-end-13 lg:px-0 px-4 relative">
        ${c({image:t,fancyboxGallery:a})}
      </div>
    </div>
    `,g={title:"Components/Blocks/BlockImage",argTypes:{fullBleed:{control:{type:"boolean"}}},excludeStories:/.*Data$/,parameters:{viewMode:"docs",docs:{description:{component:"The combination of BaseImage and BaseImageCaption, plus adding support for expanding the image in a lightbox and styling it to be a full-bleed image."}}}},s={fullBleed:!1,image:{alt:"Fourth image",caption:'<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',credit:"NASA/JPL",url:"/image/placeholder/",linkText:"Full Image Details",original:"https://picsum.photos/869/700",src:{height:700,url:"https://picsum.photos/869/700",width:869},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w"},imageFullBleed:{alt:"Fourth image",caption:'<p>Aliquam finibus accumsan dapibus. In <a href="#">sagittis et sapien</a> nec vehicula. Suspendisse euismod consequat risus, vel dignissim elit scelerisque sed. Nullam elit ipsum, suscipit ut quam et, molestie aliquam leo.</p>',credit:"NASA/JPL",url:"/image/placeholder/",linkText:"Full Image Details",src:{width:1800,height:900,url:"https://picsum.photos/1800/900"}}},l=c.bind({});l.storyName="Standard";l.args={image:s.image,fullBleed:!1};l.parameters={docs:{storyDescription:"Standard image block that has a fluid width to fill any container. Most popular variant of `BlockImage`."}};const i=n.bind({});i.args={image:s.imageFullBleed};i.parameters={docs:{storyDescription:"Switch to canvas view to see the full bleed version. Includes page layout assumptions and uses a max width of `max-w-screen-3xl`."}};const o=h.bind({});o.args=s;o.parameters={docs:{storyDescription:"A block that allows the user to switch between standard and full bleed. This variant is used when building a framework that allows content editors to choose the layout of the image. Otherwise the Standard variant is recommended for most use-cases."}};const f=["BlockImageData","Default","FullBleed","StreamfieldBlock"],w=Object.freeze(Object.defineProperty({__proto__:null,BlockImageData:s,Default:l,FullBleed:i,StreamfieldBlock:o,__namedExportsOrder:f,default:g},Symbol.toStringTag,{value:"Module"}));export{w as B,s as a};
