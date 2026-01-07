import{I as n}from"./IconExternal-76vN0ypg.js";import{B as m}from"./BlockCircleImageCard-BcMasdTp.js";const p={title:"Components/Cards/BlockCircleImageCard",component:m,tags:["!autodocs","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative max-w-xl mx-auto container"><story/></div>'})],parameters:{html:{root:"#storyRoot"},slots:{icon:{description:"Icon slot",components:{IconExternal:n},template:'<IconExternal v-if="args.icon" />'}}},excludeStories:/.*Data$/},o={title:"First Flight of Technology for Returning Warheads from Space",label:"September 20, 1956",secondaryLabel:"Re-entry test vehicle program",image:{src:{url:"https://picsum.photos/130/130",width:130,height:130},srcSet:"https://picsum.photos/90/90 320w, https://picsum.photos/130/130 1024w",alt:"Alt text for image"},imageOnRight:!0,icon:!0},e={args:{...o,icon:!1}},r={args:o};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    ...BlockCircleImageCardData,
    icon: false
  }
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,i,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: BlockCircleImageCardData
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const d=["BlockCircleImageCardData","BaseStory","WithIcon"],C=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockCircleImageCardData:o,WithIcon:r,__namedExportsOrder:d,default:p},Symbol.toStringTag,{value:"Module"}));export{C as B};
