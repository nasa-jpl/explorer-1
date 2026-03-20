import{S as o}from"./SearchResultGridItem-BHytoR8v.js";import"./iframe-DykQSSCG.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-CBZiEs7X.js";import"./BaseLink-BXTWC9Jv.js";import"./MixinAnimationCaret-DEpjYl9A.js";import"./IconCaret-BrQV7_Jh.js";import"./BaseImage-DIBNPo_Y.js";import"./BaseImagePlaceholder-B0fEOkEA.js";import"./BlockLinkCard-B_K-On0K.js";import"./mixins-Bc9aeVQW.js";import"./useApi-j1E6pMaV-Clo2pbDT.js";import"./IconArrow-Ch213rDP.js";import"./IconExternal-CR4uJ-gf.js";import"./BasePill-Ca_ozjaB.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BAE3TVRp.js";import"./rangeifyGrades-BK1QHkuj.js";import"./IconEduTechnology-C7FHHAeK.js";import"./IconTime-B805woPe.js";import"./CalendarChip-DNvqH_H3.js";import"./MetadataEvent-fmtpt6_D.js";import"./IconCalendar-C1xzJI08.js";import"./IconLocation-PxlrcGYP.js";import"./BlockLinkTile-BVKRvhbf.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
