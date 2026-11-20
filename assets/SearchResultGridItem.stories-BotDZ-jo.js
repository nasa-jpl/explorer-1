import{S as o}from"./SearchResultGridItem-CyxQw9R2.js";import"./iframe-CUZq7Oz2.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-CNK7AaU7.js";import"./BaseLink-DLCWZqRj.js";import"./MixinAnimationCaret-CCvE7RyC.js";import"./IconCaret-iQdsYJwf.js";import"./BaseImage-CwFSACUh.js";import"./BaseImagePlaceholder-_RIYbPX1.js";import"./BlockLinkCard-DT8B_gur.js";import"./mixins-41YTlVRC.js";import"./useApi-CUWMwLLw-C3HfpkXu.js";import"./IconArrow-BgumnZRo.js";import"./IconExternal-C6zl5m-g.js";import"./BasePill-T9GtHXfr.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-82hkUuA4.js";import"./rangeifyGrades-Cgoq-wRj.js";import"./IconEduTechnology-D_MSo9G_.js";import"./IconTime-CKkFcOTE.js";import"./CalendarChip-Y6i3ieXw.js";import"./MetadataEvent-GqyGLsm5.js";import"./IconCalendar-BJTFpaM9.js";import"./IconLocation-ZEt51MGB.js";import"./BlockLinkTile-CuPi41IB.js";import"./lookupContentType-CrQXBylR.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}},f=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
