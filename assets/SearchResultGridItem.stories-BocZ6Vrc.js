import{S as o}from"./SearchResultGridItem-7k0ydp7n.js";import"./iframe-CSe--jxI.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-M0VaLCr4.js";import"./BaseLink-BiH9BxW2.js";import"./MixinAnimationCaret-DG04npCz.js";import"./IconCaret-DvGOXQaR.js";import"./BaseImage-MsWt48mi.js";import"./BaseImagePlaceholder-z5dViB34.js";import"./BlockLinkCard-DQnCDiiA.js";import"./mixins-9vJY5nKV.js";import"./useApi-j1E6pMaV-BU-31uqe.js";import"./IconArrow-DPUBMvBz.js";import"./IconExternal-CPu0hcel.js";import"./BasePill-DNqr2lQH.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-Dk8LQa6C.js";import"./rangeifyGrades-40JvySV1.js";import"./IconEduTechnology-B08zNgqD.js";import"./IconTime-BU1OKtm6.js";import"./CalendarChip-Dj_VZr-z.js";import"./MetadataEvent-CLIFhsRY.js";import"./IconCalendar-RmnhGmIm.js";import"./IconLocation-D0PIzSSd.js";import"./BlockLinkTile-wpOrDni7.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
