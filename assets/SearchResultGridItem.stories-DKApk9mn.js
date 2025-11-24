import{S as R}from"./SearchResultGridItem-tuKHPT4u.js";import"./iframe-C7sUqjuf.js";import"./preload-helper-D6kgxu3v.js";import"./theme-BvZJzlFx.js";import"./BaseLink-BeywXnPi.js";import"./MixinAnimationCaret-C7B3s6-2.js";import"./IconCaret-DYdyehXt.js";import"./BaseImage-MKkcCT9v.js";import"./BaseImagePlaceholder-BzKrM7y5.js";import"./BlockLinkCard-BoHKEjtj.js";import"./mixins-Bk6YYECq.js";import"./IconArrow-Bh-9ceMI.js";import"./IconExternal-D-_VX71p.js";import"./BasePill-COldhQuH.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BAP_toGW.js";import"./rangeifyGrades-BaN0RLFz.js";import"./IconProfile-Damk45jU.js";import"./IconTime-xErMSe9l.js";import"./CalendarChip-BrFzqzVq.js";import"./MetadataEvent-BCz5fb1a.js";import"./IconCalendar-B5r09cVz.js";import"./IconLocation-DNSICFAs.js";import"./BlockLinkTile-CYF5HfR9.js";import"./lookupContentType-fqqouDFz.js";const q={title:"Components/Cards/SearchResultGridItem",component:R,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};var o,n,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard Result',
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: SearchResultGridCardData.page.content_type
  }
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'news_news',
    headingLevel: 'h2'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'missions_mission',
    headingLevel: 'h2'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    startTime: '00:00:00-08:00',
    startDate: '2021-11-11'
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const z=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];export{t as BaseStory,s as Event,a as MissionResult,r as NewsResult,e as SearchResultGridCardData,z as __namedExportsOrder,q as default};
