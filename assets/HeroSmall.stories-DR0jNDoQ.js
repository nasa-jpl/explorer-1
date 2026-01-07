import{BaseVideoData as l}from"./BaseVideo.stories-BlC-d2GF.js";import{H as e}from"./HeroMedium.stories-CTZEXE2f.js";import{H as u}from"./HeroMedium-BvoJAEvO.js";import{e as n}from"./constants-KGHeBXa6.js";const d={title:"Components/Heroes/Small",component:u,tags:["heroes"],decorators:[()=>({template:'<div id="storyRoot" class="max-w-screen-3xl mx-auto"><story/></div>'})],argTypes:{customPill:{type:{name:"string",required:!1},description:"Text for pill (overrides label)"},customPillType:{type:{name:"string",required:!1},control:{type:"select"},options:Object.keys(n),description:'Maps to EDU resource types. Label is replaced with a color-themed "pill." Must use with `.ThemeEdu`'}},parameters:{html:{root:"#storyRoot"},themes:{clearable:!1,list:[{name:"FullWidthDocs",class:"sbdocs-preview-full-width",default:!0,visible:!1}]},docs:{description:{component:"This is the same component as `HeroMedium, but with `compact` set to `true`."}}},excludeStories:/.*Data$/},t={name:"HeroMedium (compact)",args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:void 0,compact:!0}},o={args:{customPill:"News",customLabel:e.label,feature:e.feature,cta:e.cta,customVideo:l,compact:!0}};var a,r,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'HeroMedium (compact)',
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: undefined,
    compact: true
  }
}`,...(s=(r=t.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var c,i,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    customPill: 'News',
    customLabel: HeroMediumData.label,
    feature: HeroMediumData.feature,
    cta: HeroMediumData.cta,
    customVideo: BaseVideoData,
    compact: true
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const p=["BaseStory","Video"],M=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,Video:o,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{M as H};
