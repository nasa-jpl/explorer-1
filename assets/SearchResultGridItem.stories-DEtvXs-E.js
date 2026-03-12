import{S as o}from"./SearchResultGridItem-DmMDt7fE.js";import"./iframe-Y1adRlUN.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DrdrCy7d.js";import"./BaseLink-xeNaTMVJ.js";import"./MixinAnimationCaret-D6F7OZLw.js";import"./IconCaret-DqTdTTo9.js";import"./BaseImage-BZMqLbmU.js";import"./BaseImagePlaceholder-BdjpUEQL.js";import"./BlockLinkCard-IZkGBYvj.js";import"./mixins-Dq0e2eCZ.js";import"./useApi-j1E6pMaV-DAlil3FN.js";import"./IconArrow-DOfsRsJ6.js";import"./IconExternal-fqjuLkv0.js";import"./BasePill-CwV_RYhY.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CylCU6aO.js";import"./rangeifyGrades-BNdHyEhu.js";import"./IconEduTechnology-D7Dy2MCi.js";import"./IconTime-ByfGdVy_.js";import"./CalendarChip-F2tfHFtS.js";import"./MetadataEvent-C7Joz79v.js";import"./IconCalendar-vRq3bEm_.js";import"./IconLocation-DVOPrLvA.js";import"./BlockLinkTile-D5jhXwyl.js";import"./lookupContentType-CQDtoZ5d.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
