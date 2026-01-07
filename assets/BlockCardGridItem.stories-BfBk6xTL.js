import{B as n}from"./BlockCardGridItem-dsbAXs0a.js";const l={title:"Components/Cards/BlockCardGridItem",component:n,tags:["!autodocs","cards"],decorators:[()=>({template:'<div id="storyRoot" class="lg:w-1/3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},o={label:"Factoid",title:"Nimble Limbs",description:"The robot has four limbs, each with seven degrees of freedom.",image:{alt:"Fourth image",src:{height:400,url:"https://picsum.photos/800/400",width:800},srcSet:"https://picsum.photos/400/200 320w, https://picsum.photos/800/400 1024w"},link:{page:{url:"#"},externalLink:null}},e={name:"BlockCardGridItem",args:o},r={args:{...o,link:void 0}};var t,a,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'BlockCardGridItem',
  args: BlockCardData
}`,...(s=(a=e.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var c,d,i;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...BlockCardData,
    link: undefined
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const m=["BlockCardData","BaseStory","NoLink"],u=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockCardData:o,NoLink:r,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{u as B};
