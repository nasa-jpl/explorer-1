import{S as o}from"./SearchResultGridItem-CiUDWcgp.js";import"./iframe-By-Q1zBi.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DXyRchnE.js";import"./BaseLink-a-0k3cqn.js";import"./MixinAnimationCaret-Bj8yKzAI.js";import"./IconCaret-BR1Hsp9K.js";import"./BaseImage-D2HaAslA.js";import"./BaseImagePlaceholder-jtRYf7fd.js";import"./BlockLinkCard-BsyFeAL7.js";import"./mixins-Ch8MItPr.js";import"./useApi-j1E6pMaV-CxlOMZRL.js";import"./IconArrow-2ZpOSEgX.js";import"./IconExternal-CY9xXqya.js";import"./BasePill-hTDOaxss.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BV9hHimt.js";import"./rangeifyGrades-BLAtO-Y3.js";import"./IconEduTechnology-C4mL0hzI.js";import"./IconTime-Vc0hDMb6.js";import"./CalendarChip-CmD5Lr8l.js";import"./MetadataEvent-DPzDUq60.js";import"./IconCalendar-ChkBsevw.js";import"./IconLocation-CMJZompf.js";import"./BlockLinkTile-qeaHuKsz.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
