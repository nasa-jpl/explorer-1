import{S as o}from"./SearchResultGridItem-DPRV2PEr.js";import"./iframe-C9omJrl1.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-D13Fc2Zm.js";import"./BaseLink-CjvD3--a.js";import"./MixinAnimationCaret-C73p62OV.js";import"./IconCaret-Dhkl0KT0.js";import"./BaseImage-B0zq8_3p.js";import"./BaseImagePlaceholder-DUWqWTHA.js";import"./BlockLinkCard-CycmxEKb.js";import"./mixins-Do37eKjh.js";import"./useApi-j1E6pMaV--PgTb1sm.js";import"./IconArrow-CLlxh7_-.js";import"./IconExternal-CTbr9pk-.js";import"./BasePill-x7JdxGai.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-O8qxo3_x.js";import"./rangeifyGrades-RkCVndfS.js";import"./IconEduTechnology-rvAipY_F.js";import"./IconTime-Cu6H2aa3.js";import"./CalendarChip-DkFqM2R-.js";import"./MetadataEvent-DsvFvugQ.js";import"./IconCalendar-CYoc2_uK.js";import"./IconLocation-jmA_-OLI.js";import"./BlockLinkTile-DgErV0Xf.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
