import{B as t}from"./BaseImage-CUK1QaiB.js";import{B as o}from"./BaseImagePlaceholder-BXeU4iUT.js";const r={title:"Components/Base/BaseImagePlaceholder",component:o,excludeStories:/.*Data$/,decorators:()=>({template:'<div id="storyRoot" class="w-3/4"><story /></div>'}),tags:["autodocs"],parameters:{slots:{default:{description:"Slot for BaseImage",components:{BaseImage:t},template:'<BaseImage :object-fit-class="args.BaseImageProps.objectFitClass" :loading="args.BaseImageProps.loading" :src="args.BaseImageProps.src" :srcset="args.BaseImageProps.srcset" :alt="args.BaseImageProps.alt" :width="args.BaseImageProps.width" :height="args.BaseImageProps.height" />'}},html:{root:"#storyRoot"},docs:{description:{component:"Placeholder image component with aspect ratio and background controls"}}}},s={aspectRatio:"12:9",darkMode:!0,transparentMode:!1,noLogo:!1},e={name:"With Image",args:{...s,BaseImageProps:{src:"https://picsum.photos/1200/900",srcset:"https://picsum.photos/1200/900 1200w,",alt:"alt text for image",width:"1200",height:"900",objectFitClass:"contain",loading:"lazy"}}},a={name:"No Image",args:{...s,BaseImageProps:{src:"",srcset:"",alt:"",width:"",height:"",objectFitClass:"scaleDown",loading:""},noLogo:!1,aspectRatio:"16:9",responsiveAspectRatio:"md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'With Image',
  args: {
    ...BaseImagePlaceholderData,
    BaseImageProps: {
      src: 'https://picsum.photos/1200/900',
      srcset: 'https://picsum.photos/1200/900 1200w,',
      alt: 'alt text for image',
      width: '1200',
      height: '900',
      objectFitClass: 'contain',
      loading: 'lazy'
    }
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'No Image',
  args: {
    ...BaseImagePlaceholderData,
    BaseImageProps: {
      src: '',
      srcset: '',
      alt: '',
      width: '',
      height: '',
      objectFitClass: 'scaleDown',
      loading: ''
    },
    noLogo: false,
    aspectRatio: '16:9',
    responsiveAspectRatio: 'md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine'
  }
}`,...a.parameters?.docs?.source}}};const n=["BaseImagePlaceholderData","WithImage","BaseStory"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseImagePlaceholderData:s,BaseStory:a,WithImage:e,__namedExportsOrder:n,default:r},Symbol.toStringTag,{value:"Module"}));export{l as B};
