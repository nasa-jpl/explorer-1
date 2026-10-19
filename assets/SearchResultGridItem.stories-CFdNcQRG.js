import{S as o}from"./SearchResultGridItem-BDSJBInQ.js";import"./iframe-n3lhZlRB.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-Co-t9SUs.js";import"./BaseLink-CjNxd9gr.js";import"./MixinAnimationCaret-D7FfAJso.js";import"./IconCaret-BDOfx5Hc.js";import"./BaseImage-RXBsQX-4.js";import"./BaseImagePlaceholder-CB7zVNDC.js";import"./BlockLinkCard-CRxId5lf.js";import"./mixins-CReUV2It.js";import"./useApi-CUWMwLLw-DUoGJCoX.js";import"./IconArrow-w7Lj_fNh.js";import"./IconExternal-BJsLNLDk.js";import"./BasePill-ghsqLPEt.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-OWoZxaqs.js";import"./rangeifyGrades--vI-het2.js";import"./IconEduTechnology-DzhqrRGf.js";import"./IconTime-B_dy5iHJ.js";import"./CalendarChip-CKgaeuYn.js";import"./MetadataEvent-CFyrWaf_.js";import"./IconCalendar-DIwAFxNC.js";import"./IconLocation-BRtc32Gk.js";import"./BlockLinkTile-BYSkOl3m.js";import"./lookupContentType-CrQXBylR.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}},f=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{t as BaseStory,s as Event,a as MissionResult,r as NewsResult,e as SearchResultGridCardData,f as __namedExportsOrder,N as default};
