import{B as c}from"./BlockLinkTile-DYj8lyl5.js";const m={title:"Components/Cards/BlockLinkTile",component:c,tags:["cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},n={card:{url:"/topics/placeholder-slug-1",title:"Lorem ipsum dolor",label:"Solar System",thumbnailImage:{src:{url:"https://picsum.photos/490/430",width:490,height:430},alt:"Alt text"}}},e={name:"Single Item",args:{data:n.card,headingLevel:"h2",compact:!1}},t={args:{title:"Lorem ipsum title in search results",url:"/missions/demo",externalLink:"",label:"Mission",thumbnailImage:{src:{url:"https://picsum.photos/512/288",width:512,height:288},alt:"Alt text"},headingLevel:"h2",compact:!0}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'Single Item',
  args: {
    data: BlockLinkTileData.card,
    headingLevel: 'h2',
    compact: false
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var r,l,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const p=["BlockLinkTileData","BaseStory","Compact"],u=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,BlockLinkTileData:n,Compact:t,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{u as B};
