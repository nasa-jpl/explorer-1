import{B as t}from"./BlockCardGridItem-r4xDDafF.js";const a={title:"Components/Cards/BlockCardGridItem",component:t,tags:["!autodocs","cards"],decorators:[()=>({template:'<div id="storyRoot" class="lg:w-1/3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},o={label:"Factoid",title:"Nimble Limbs",description:"The robot has four limbs, each with seven degrees of freedom.",image:{alt:"Fourth image",src:{height:400,url:"https://picsum.photos/800/400",width:800},srcSet:"https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"},link:{page:{url:"#"},externalLink:null}},e={name:"BlockCardGridItem",args:o},r={args:{...o,link:void 0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'BlockCardGridItem',
  args: BlockCardData
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...BlockCardData,
    link: undefined
  }
}`,...r.parameters?.docs?.source}}};const s=["BlockCardData","BaseStory","NoLink"],d=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockCardData:o,NoLink:r,__namedExportsOrder:s,default:a},Symbol.toStringTag,{value:"Module"}));export{d as B};
