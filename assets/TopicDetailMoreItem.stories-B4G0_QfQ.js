import{T as i}from"./TopicDetailMoreItem-BemUKdGA.js";import"./iframe-CSe--jxI.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-9vJY5nKV.js";import"./useApi-j1E6pMaV-BU-31uqe.js";import"./BaseLink-BiH9BxW2.js";import"./theme-M0VaLCr4.js";import"./MixinAnimationCaret-DG04npCz.js";import"./IconCaret-DvGOXQaR.js";import"./BaseImage-MsWt48mi.js";import"./BaseImagePlaceholder-z5dViB34.js";import"./IconPlay-DfUb45fT.js";import"./IconExternal-CPu0hcel.js";const k={title:"Components/WWW/TopicDetail/TopicDetailMore/TopicDetailMoreItem",component:i,tags:["cards"],decorators:[()=>({template:'<div id="storyRoot" class="lg:w-1/3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={default:{__typename:"ImageDetailPage",type:"ImageDetailPage",url:"/images/placeholder/",title:"An Image Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Image",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},pageChooser:{__typename:"PageChooserBlock",type:"PageChooserBlock",page:{label:"Mission",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"},title:"Autonomous Sciencecraft Experiment",url:"/missions/autonomous-sciencecraft-experiment-ase/"}},externalLink:{__typename:"ExternalLinkCard",type:"ExternalLinkCard",date:"2020-11-03",title:"Title for Link Card",url:"https://nasa.gov",label:"Link Label",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},video:{__typename:"VideoDetailPage",type:"VideoDetailPage",url:"/video/placeholder/",title:"A Video Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Video",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}}},t={args:{data:e.default}},a={args:{data:e.pageChooser}},o={args:{data:e.externalLink}},r={args:{data:e.video}},s={args:{data:{...e.externalLink,thumbnailImage:null}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.default
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.pageChooser
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.externalLink
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.video
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...TopicDetailMoreItemData.externalLink,
      thumbnailImage: null
    }
  }
}`,...s.parameters?.docs?.source}}};const w=["BaseStory","PageChooser","ExternalLink","Video","NoImage"];export{t as BaseStory,o as ExternalLink,s as NoImage,a as PageChooser,r as Video,w as __namedExportsOrder,k as default};
