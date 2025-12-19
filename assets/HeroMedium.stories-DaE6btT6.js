import{BaseVideoData as p}from"./BaseVideo.stories-CUuRXPQc.js";import{H as f}from"./HeroMedium-DG7hDWbh.js";import{e as h}from"./constants-KGHeBXa6.js";const b={title:"Components/Heroes/Medium",component:f,tags:["heroes"],decorators:[()=>({template:'<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>'})],argTypes:{customPill:{type:{name:"string",required:!1},description:"Text for pill (overrides label)"},customPillType:{type:{name:"string",required:!1},control:{type:"select"},options:Object.keys(h),description:'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'}},parameters:{html:{root:"#storyRoot"},themes:{clearable:!1,list:[{name:"FullWidthDocs",class:"sbdocs-preview-full-width",default:!0,visible:!1}]},viewMode:"docs"},excludeStories:/.*Data$/},e={label:"Featured",cta:"View",feature:{url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}},t={name:"HeroMedium",args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0}},a={args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0,compact:!0}},o={args:{customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:p}};var s,r,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'HeroMedium',
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,u,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,l,n;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData
  }
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const M=["HeroMediumData","BaseStory","Compact","Video"],D=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,Compact:a,HeroMediumData:e,Video:o,__namedExportsOrder:M,default:b},Symbol.toStringTag,{value:"Module"}));export{e as H,D as a};
