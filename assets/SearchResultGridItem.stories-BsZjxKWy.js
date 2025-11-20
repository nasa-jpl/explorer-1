import{S as R}from"./SearchResultGridItem-BXOtcp5f.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";import"./pinia-JvkV_l3r.js";import"./theme-BMXYhL_G.js";import"./BaseLink-DX_OOjEO.js";import"./MixinAnimationCaret-B9hXJgWm.js";import"./IconCaret-p2iu9pyC.js";import"./BaseImage-BNaikajF.js";import"./BaseImagePlaceholder-B5ylXFH9.js";import"./BlockLinkCard-t0su1ZO4.js";import"./mixins-SlMYzAFp.js";import"./dayjs.min-BuRsCg53.js";import"./IconArrow-BaZPwHCo.js";import"./IconExternal-DP2DvGhd.js";import"./BasePill-ZzLX46f0.js";import"./constants-KGHeBXa6.js";import"./MetadataEduResource-Cn6F2L8y.js";import"./rangeifyGrades-DzF1AoBP.js";import"./IconProfile-D-Mba4je.js";import"./IconTime-7yYTexec.js";import"./CalendarChip-Bhfplat7.js";import"./MetadataEvent-ZihN3cH7.js";import"./IconCalendar-BJrEsFgz.js";import"./IconLocation-BDZqrvXG.js";import"./BlockLinkTile-BVjxKqYf.js";import"./lookupContentType-fqqouDFz.js";const F={title:"Components/Cards/SearchResultGridItem",component:R,tags:["search","cards"],decorators:[()=>({template:'<div id="storyRoot" class="relative grid grid-cols-2 gap-3 lg:grid-cols-3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={page:{content_type:"",url:"/topics/placeholder-slug-1",type:"news",topic:"Moon",date:"May 22, 2018",title:"How engineers at NASA-JPL persevered to develop a ventilator",image:{src:{url:"https://picsum.photos/490/490",width:490,height:490},alt:"Alt text"}},headingLevel:"h2"},t={name:"Standard Result",args:{...e.page,pageContentType:e.page.content_type}},r={args:{...e.page,pageContentType:"news_news",headingLevel:"h2"}},a={args:{...e.page,pageContentType:"missions_mission",headingLevel:"h2"}},s={args:{...e.page,startTime:"00:00:00-08:00",startDate:"2021-11-11"}};var o,p,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Standard Result',
  args: {
    ...SearchResultGridCardData.page,
    pageContentType: SearchResultGridCardData.page.content_type
  }
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};const K=["SearchResultGridCardData","BaseStory","NewsResult","MissionResult","Event"];export{t as BaseStory,s as Event,a as MissionResult,r as NewsResult,e as SearchResultGridCardData,K as __namedExportsOrder,F as default};
