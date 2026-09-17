import{S as o}from"./SearchResultGridItem-DcgzB0SZ.js";import"./iframe-DnfkC-Wb.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BKbb_q9n.js";import"./BaseLink-JbZGSwKq.js";import"./MixinAnimationCaret-B2zv8CwK.js";import"./IconCaret-BUdZPeYb.js";import"./BaseImage-CJCoSshr.js";import"./BaseImagePlaceholder-CLjAWYLC.js";import"./BlockLinkCard-iNoBq_1x.js";import"./mixins-BglsLvDS.js";import"./useApi-j1E6pMaV-h1WtyilL.js";import"./IconArrow-BSWiGf4Y.js";import"./IconExternal-xFGYTEOL.js";import"./BasePill-_zAS5_Ty.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BWZ23nJO.js";import"./rangeifyGrades-BxpuSuHD.js";import"./IconEduTechnology-hLIIt9gM.js";import"./IconTime-j3qfNtJw.js";import"./CalendarChip-BsA8mVBN.js";import"./MetadataEvent-CiKfBCyx.js";import"./IconCalendar-V11dhq1w.js";import"./IconLocation-CWhGfF6p.js";import"./BlockLinkTile-BCJ8nOB0.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
