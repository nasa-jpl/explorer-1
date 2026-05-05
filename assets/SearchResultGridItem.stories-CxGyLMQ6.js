import{S as o}from"./SearchResultGridItem-DM_KpIsY.js";import"./iframe-BMO96iuk.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-C4zQiDhS.js";import"./BaseLink-CjTGIJiA.js";import"./MixinAnimationCaret-XOUTBY6Y.js";import"./IconCaret-Be_Zch5B.js";import"./BaseImage-DnXr4oEj.js";import"./BaseImagePlaceholder-tESlx3md.js";import"./BlockLinkCard-BP957Adx.js";import"./mixins-C6Dkq0hS.js";import"./useApi-j1E6pMaV-PWiyysiJ.js";import"./IconArrow-XDqWta2i.js";import"./IconExternal-ReBXTLyN.js";import"./BasePill-CujnTU7P.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DX2F8dh5.js";import"./rangeifyGrades-DagCv8qQ.js";import"./IconEduTechnology-DccM0Xp6.js";import"./IconTime-Bl3OCvdO.js";import"./CalendarChip-CNqNxAYU.js";import"./MetadataEvent-gPlgWd8f.js";import"./IconCalendar-CpNaliPe.js";import"./IconLocation-BljDY952.js";import"./BlockLinkTile-DUuBwkiG.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Standard Result',
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: SearchResultGridCardData.page.content_type
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'news_news',
    headingLevel: 'h2'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'missions_mission',
    headingLevel: 'h2'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    startTime: '00:00:00-08:00',
    startDate: '2021-11-11'
  }
}`,...s.parameters?.docs?.source}}};const f=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];export{t as BaseStory,s as Event,a as MissionResult,r as NewsResult,e as SearchResultGridCardData,f as __namedExportsOrder,N as default};
