import{S as o}from"./SearchResultGridItem-HrArDODN.js";import"./iframe-BPFwKcEh.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-3Ig3wil9.js";import"./BaseLink-BXX5bfwf.js";import"./MixinAnimationCaret-CL21IM4A.js";import"./IconCaret-DHu4gTqt.js";import"./BaseImage-CCJn8eQ_.js";import"./BaseImagePlaceholder-wOHfr57l.js";import"./BlockLinkCard-CwTBSWxv.js";import"./mixins-BQ_0RFFF.js";import"./useApi-j1E6pMaV-4noHurWZ.js";import"./IconArrow-62Is6-t5.js";import"./IconExternal-B0wx5pQq.js";import"./BasePill-DGEoGDqV.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-R2DR7mhe.js";import"./rangeifyGrades-57BKSe74.js";import"./IconEduTechnology-DoALDqL_.js";import"./IconTime-NgpcoO69.js";import"./CalendarChip-A6VRPvrs.js";import"./MetadataEvent-Dq-fHEU6.js";import"./IconCalendar-Ddc0brUn.js";import"./IconLocation-r6wlJH6D.js";import"./BlockLinkTile-CMjzrCFg.js";import"./lookupContentType-CxkJ4PqZ.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
