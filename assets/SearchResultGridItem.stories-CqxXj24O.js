import{S as o}from"./SearchResultGridItem-bZt76HXz.js";import"./iframe-DwvVnlic.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-B6gcOtf5.js";import"./BaseLink-BL0MN8Sf.js";import"./MixinAnimationCaret-BvRzXP6b.js";import"./IconCaret-C6YijGCn.js";import"./BaseImage-msKawZy0.js";import"./BaseImagePlaceholder-DvHgApy3.js";import"./BlockLinkCard-yfEdFiGK.js";import"./mixins-BD-RyTuL.js";import"./useApi-j1E6pMaV-CCIDf71l.js";import"./IconArrow-CmrFLKd_.js";import"./IconExternal-gWLrNXIJ.js";import"./BasePill-CyoU7m-4.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CB7VbtlX.js";import"./rangeifyGrades-INPs6hNK.js";import"./IconEduTechnology-DX1fovQJ.js";import"./IconTime-K4GkkRPB.js";import"./CalendarChip-B6jrqyJl.js";import"./MetadataEvent-ULCF8Yy1.js";import"./IconCalendar-BVvZAChD.js";import"./IconLocation-CtCyfRsV.js";import"./BlockLinkTile-DE9y7yeG.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
