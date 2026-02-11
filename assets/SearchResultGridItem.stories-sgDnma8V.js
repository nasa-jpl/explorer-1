import{S as R}from"./SearchResultGridItem-TGmkKniX.js";import"./iframe-G_CakBWE.js";import"./preload-helper-D6kgxu3v.js";import"./theme-Bkca4b8i.js";import"./BaseLink-CcTNfetl.js";import"./MixinAnimationCaret-D3tm0V1z.js";import"./IconCaret-te7yS8v9.js";import"./BaseImage-B8pQH3NJ.js";import"./BaseImagePlaceholder-CDs8KjMy.js";import"./BlockLinkCard-BGJLO8hy.js";import"./mixins-DrHwNz-4.js";import"./IconArrow-C-Sg47dA.js";import"./IconExternal-DSeA-M-G.js";import"./BasePill-DsV0D3aB.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-BsKfeRoh.js";import"./rangeifyGrades-CP9hdYcA.js";import"./IconProfile-IRX8YLGf.js";import"./IconTime-a2dzJKny.js";import"./CalendarChip-XWut31QK.js";import"./MetadataEvent-B_IEX_vA.js";import"./IconCalendar-DsclBzQQ.js";import"./IconLocation-RqyXLBYE.js";import"./BlockLinkTile-D-_xEyWb.js";import"./lookupContentType-fqqouDFz.js";const q={title:"Components/Cards/SearchResultGridItem",component:R,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};var o,n,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
