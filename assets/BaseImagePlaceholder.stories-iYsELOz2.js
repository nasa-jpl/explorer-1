import{B as l}from"./BaseImage-C2wBaajf.js";import{B as g}from"./BaseImagePlaceholder-Dmde9CeQ.js";const m={title:"Components/Base/BaseImagePlaceholder",component:g,excludeStories:/.*Data$/,decorators:()=>({template:'<div id="storyRoot" class="w-3/4"><story /></div>'}),tags:["autodocs"],parameters:{slots:{default:{description:"Slot for BaseImage",components:{BaseImage:l},template:'<BaseImage :object-fit-class="args.BaseImageProps.objectFitClass" :loading="args.BaseImageProps.loading" :src="args.BaseImageProps.src" :srcset="args.BaseImageProps.srcset" :alt="args.BaseImageProps.alt" :width="args.BaseImageProps.width" :height="args.BaseImageProps.height" />'}},html:{root:"#storyRoot"},docs:{description:{component:"Placeholder image component with aspect ratio and background controls"}}}},s={aspectRatio:"12:9",darkMode:!0,transparentMode:!1,noLogo:!1},e={name:"With Image",args:{...s,BaseImageProps:{src:"https://picsum.photos/1200/900",srcset:"https://picsum.photos/1200/900 1200w,",alt:"alt text for image",width:"1200",height:"900",objectFitClass:"contain",loading:"lazy"}}},a={name:"No Image",args:{...s,BaseImageProps:{src:"",srcset:"",alt:"",width:"",height:"",objectFitClass:"scaleDown",loading:""},noLogo:!1,aspectRatio:"16:9",responsiveAspectRatio:"md:aspect-ratio-four-three lg:aspect-ratio-twelve-nine"}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const p=["BaseImagePlaceholderData","WithImage","BaseStory"],B=Object.freeze(Object.defineProperty({__proto__:null,BaseImagePlaceholderData:s,BaseStory:a,WithImage:e,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{B};
