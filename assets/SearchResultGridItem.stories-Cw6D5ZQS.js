import{S as o}from"./SearchResultGridItem-BvLztOqC.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./theme-BQWoGd8-.js";import"./BaseLink-C7mdSZaT.js";import"./MixinAnimationCaret-BKTqSsaA.js";import"./IconCaret-Rf9_wB61.js";import"./BaseImage-C-jvPTC0.js";import"./BaseImagePlaceholder-B0Hywvqu.js";import"./BlockLinkCard-DlJx0DNG.js";import"./mixins-DFOhzVt7.js";import"./useApi-o-nPpLEi-G-KNyTFX.js";import"./IconArrow-DWMJwvtB.js";import"./IconExternal-C8Ethc5a.js";import"./BasePill-CjUUrgh7.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-DICc6Q24.js";import"./rangeifyGrades-BRM4Ys4u.js";import"./IconEduTechnology-DM7FchE-.js";import"./IconTime-BeC5d_Pa.js";import"./CalendarChip-DCoVqpPF.js";import"./MetadataEvent-CyiqV-tH.js";import"./IconCalendar-DuXbnSrE.js";import"./IconLocation-b4jAkq_-.js";import"./BlockLinkTile-DlyqbgqB.js";import"./lookupContentType-CxkJ4PqZ.js";const N={title:"Components/Cards/SearchResultGridItem",component:o,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
