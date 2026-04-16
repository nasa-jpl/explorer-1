import{S as o}from"./SearchResultGridItem-CwxSmSt9.js";import"./iframe-DiXF1Tot.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-DFw2Y0AK.js";import"./BaseLink-fSLe-o-L.js";import"./MixinAnimationCaret-B_-a_yNq.js";import"./IconCaret-URSj5Sf0.js";import"./BaseImage-ClA8lMsA.js";import"./BaseImagePlaceholder-zDl_ybFq.js";import"./BlockLinkCard-waEo_ClK.js";import"./mixins-Bp8YEdVC.js";import"./useApi-j1E6pMaV-BsTck4fa.js";import"./IconArrow-peBPp3n0.js";import"./IconExternal-B2XQaQvL.js";import"./BasePill-CYamqPdu.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-CBFnIlpe.js";import"./rangeifyGrades-BTxgfq2H.js";import"./IconEduTechnology-Ccw4t1Fs.js";import"./IconTime-05GxmlnK.js";import"./CalendarChip-SaE5025N.js";import"./MetadataEvent-oD_ZheL4.js";import"./IconCalendar-D1IfAD4M.js";import"./IconLocation-lDvx58Ut.js";import"./BlockLinkTile-Qtybsu5S.js";import"./lookupContentType-DR6RKkTm.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
