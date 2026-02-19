import{BaseVideoData as o}from"./BaseVideo.stories-CmW4kh_R.js";import{a as e}from"./HeroMedium.stories-EZnIMPwu.js";import{H as r}from"./HeroMedium-BW06Ijpx.js";import{e as s}from"./constants-KGHeBXa6.js";const c={title:"Components/Heroes/Small",component:r,tags:["heroes"],decorators:[()=>({template:'<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>'})],argTypes:{customPill:{type:{name:"string",required:!1},description:"Text for pill (overrides label)"},customPillType:{type:{name:"string",required:!1},control:{type:"select"},options:Object.keys(s),description:'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'}},parameters:{html:{root:"#storyRoot"},themes:{clearable:!1,list:[{name:"FullWidthDocs",class:"sbdocs-preview-full-width",default:!0,visible:!1}]},docs:{description:{component:"This is the same component as `HeroMedium, but with `compact` set to `true`."}}},excludeStories:/.*Data$/},t={name:"HeroMedium (compact)",args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0,compact:!0}},a={args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:o,compact:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'HeroMedium (compact)',
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData,
    compact: true
  }
}`,...a.parameters?.docs?.source}}};const i=["BaseStory","Video"],d=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,Video:a,__namedExportsOrder:i,default:c},Symbol.toStringTag,{value:"Module"}));export{d as H};
