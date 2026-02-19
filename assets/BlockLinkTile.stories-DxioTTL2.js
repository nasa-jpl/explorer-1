import{B as s}from"./BlockLinkTile-DlyqbgqB.js";const o={title:"Components/Cards/BlockLinkTile",component:s,tags:["cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},a={card:{url:"/topics/placeholder-slug-1",title:"Lorem ipsum dolor",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}}},e={name:"Single Item",args:{data:a.card,headingLevel:"h2",compact:!1}},t={args:{title:"Lorem ipsum title in search results",url:"/missions/demo",externalLink:"",label:"Mission",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"},headingLevel:"h2",compact:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Single Item',
  args: {
    data: BlockLinkTileData.card,
    headingLevel: 'h2',
    compact: false
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Lorem ipsum title in search results',
    url: '/missions/demo',
    externalLink: '',
    label: 'Mission',
    thumbnailImage: {
      src: {
        url: 'https://picsum.photos/512/288',
        width: 512,
        height: 288
      },
      alt: 'Alt text'
    },
    headingLevel: 'h2',
    compact: true
  }
}`,...t.parameters?.docs?.source}}};const r=["BlockLinkTileData","BaseStory","Compact"],i=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockLinkTileData:a,Compact:t,__namedExportsOrder:r,default:o},Symbol.toStringTag,{value:"Module"}));export{i as B};
