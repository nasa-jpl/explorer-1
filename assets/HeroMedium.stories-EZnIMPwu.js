import{BaseVideoData as s}from"./BaseVideo.stories-CmW4kh_R.js";import{H as r}from"./HeroMedium-BW06Ijpx.js";import{e as i}from"./constants-KGHeBXa6.js";const c={title:"Components/Heroes/Medium",component:r,tags:["heroes"],decorators:[()=>({template:'<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>'})],argTypes:{customPill:{type:{name:"string",required:!1},description:"Text for pill (overrides label)"},customPillType:{type:{name:"string",required:!1},control:{type:"select"},options:Object.keys(i),description:'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'}},parameters:{html:{root:"#storyRoot"},themes:{clearable:!1,list:[{name:"FullWidthDocs",class:"sbdocs-preview-full-width",default:!0,visible:!1}]},viewMode:"docs"},excludeStories:/.*Data$/},e={label:"Featured",cta:"View",feature:{url:"/news/new-maps-open-roads-to-research/",title:"Creating Robots to go Where Humans Can’t",image:{src:{url:"https://picsum.photos/id/973/1800/1200",width:1800,height:1200},srcSet:"https://picsum.photos/id/865/768/548 768w, https://picsum.photos/id/865/1024/684 1024w, https://picsum.photos/id/865/1440/770 1440w,  https://picsum.photos/id/865/1800/963 1800w",screenMd:{url:"https://picsum.photos/id/921/800/640"},screenSm:{url:"https://picsum.photos/id/247/640/900"}}}},t={name:"HeroMedium",args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0}},a={args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0,compact:!0}},o={args:{customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:s}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'HeroMedium',
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData
  }
}`,...o.parameters?.docs?.source}}};const u=["HeroMediumData","BaseStory","Compact","Video"],n=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,Compact:a,HeroMediumData:e,Video:o,__namedExportsOrder:u,default:c},Symbol.toStringTag,{value:"Module"}));export{n as H,e as a};
