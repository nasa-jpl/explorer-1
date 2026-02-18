import{S as o}from"./SearchResultGridItem-sXNs2rHb.js";import"./iframe-UYtirdi4.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BRik7gSk.js";import"./BaseLink-lmH6BWCB.js";import"./MixinAnimationCaret-DSrUC3op.js";import"./IconCaret-BIX7eFZP.js";import"./BaseImage-CUK1QaiB.js";import"./BaseImagePlaceholder-BXeU4iUT.js";import"./BlockLinkCard-B2yaWjhI.js";import"./mixins-CenKgLpa.js";import"./useApi-o-nPpLEi-wlm0xV6x.js";import"./IconArrow-CrsfpwEe.js";import"./IconExternal-BL9uGUW2.js";import"./BasePill-DkYyvuik.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DJ4sc2gI.js";import"./rangeifyGrades-BsN0W6xn.js";import"./IconEduTechnology-C2M4UM86.js";import"./IconTime-C1dSvWMa.js";import"./CalendarChip-tIQEXBr4.js";import"./MetadataEvent-C5DLu9_P.js";import"./IconCalendar-S_47nupr.js";import"./IconLocation-B6dlE4Sx.js";import"./BlockLinkTile-Dj_QEOWh.js";import"./lookupContentType-CxkJ4PqZ.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
