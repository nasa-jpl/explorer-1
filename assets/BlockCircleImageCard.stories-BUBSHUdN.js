import{I as t}from"./IconExternal-C8Ethc5a.js";import{B as a}from"./BlockCircleImageCard-DNO35AaV.js";const s={title:"Components/Cards/BlockCircleImageCard",component:a,tags:["!autodocs","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative max-w-xl mx-auto container"><story/></div>'})],parameters:{html:{root:"#storyRoot"},slots:{icon:{description:"Icon slot",components:{IconExternal:t},template:'<IconExternal v-if="args.icon" />'}}},excludeStories:/.*Data$/},o={title:"First Flight of Technology for Returning Warheads from Space",label:"September 20, 1956",secondaryLabel:"Re-entry test vehicle program",image:{src:{url:"https://picsum.photos/130/130",width:130,height:130},srcSet:"https://picsum.photos/90/90 320w, https://picsum.photos/130/130 1024w",alt:"Alt text for image"},imageOnRight:!0,icon:!0},e={args:{...o,icon:!1}},r={args:o};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...BlockCircleImageCardData,
    icon: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: BlockCircleImageCardData
}`,...r.parameters?.docs?.source}}};const c=["BlockCircleImageCardData","BaseStory","WithIcon"],n=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockCircleImageCardData:o,WithIcon:r,__namedExportsOrder:c,default:s},Symbol.toStringTag,{value:"Module"}));export{n as B};
