import{S as R}from"./SearchResultGridItem-DjHDqvZ4.js";import"./iframe-By5L8iBS.js";import"./preload-helper-D6kgxu3v.js";import"./theme-D2S4ZK8y.js";import"./BaseLink-DiyXc43X.js";import"./MixinAnimationCaret-DB8yARfW.js";import"./IconCaret-pceiXdB5.js";import"./BaseImage-od8Oq8pn.js";import"./BaseImagePlaceholder-L37j5j9Q.js";import"./BlockLinkCard-C9D0saGU.js";import"./mixins-BsmnHBlY.js";import"./IconArrow-CMDY9c_u.js";import"./IconExternal-DEIrqIHF.js";import"./BasePill-D5QZzaS5.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BKct7Jia.js";import"./rangeifyGrades-jJFkhTNK.js";import"./IconProfile-BC-AASId.js";import"./IconTime-Ri2Iyvq8.js";import"./CalendarChip-BbcKHE4c.js";import"./MetadataEvent-53WdlVG1.js";import"./IconCalendar-Ck2kswk5.js";import"./IconLocation-BaBXsFf1.js";import"./BlockLinkTile-Bq6qL8WB.js";import"./lookupContentType-fqqouDFz.js";const q={title:"Components/Cards/SearchResultGridItem",component:R,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};var o,n,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard Result',
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: SearchResultGridCardData.page.content_type
  }
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'news_news',
    headingLevel: 'h2'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,l,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: 'missions_mission',
    headingLevel: 'h2'
  }
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,h,S;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...SearchResultGridCardData.page,
    startTime: '00:00:00-08:00',
    startDate: '2021-11-11'
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const z=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];export{t as BaseStory,s as Event,a as MissionResult,r as NewsResult,e as SearchResultGridCardData,z as __namedExportsOrder,q as default};
