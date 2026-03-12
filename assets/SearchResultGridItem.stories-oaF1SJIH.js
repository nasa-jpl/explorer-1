import{S as o}from"./SearchResultGridItem-BJaF6INP.js";import"./iframe-DOEyXX_d.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DbcyZ10s.js";import"./BaseLink-B8HKKSTO.js";import"./MixinAnimationCaret-vfKZGtGj.js";import"./IconCaret-DYMrV03w.js";import"./BaseImage-Cu-Drkls.js";import"./BaseImagePlaceholder-CTmLK-wx.js";import"./BlockLinkCard-EikCosH5.js";import"./mixins-BTp_epB9.js";import"./useApi-j1E6pMaV-aXXYAo4l.js";import"./IconArrow-Bmo84XF8.js";import"./IconExternal-Bbuw2gIr.js";import"./BasePill-vZGmP7Mx.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DDQ13BCU.js";import"./rangeifyGrades-CtOePgYZ.js";import"./IconEduTechnology-jgz7drzw.js";import"./IconTime-DhYSz_ov.js";import"./CalendarChip-B5Fd7Mm6.js";import"./MetadataEvent-BW2kxtUi.js";import"./IconCalendar-BMhTfK24.js";import"./IconLocation-BvEK9iXN.js";import"./BlockLinkTile-ufoNFmQB.js";import"./lookupContentType-CQDtoZ5d.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
