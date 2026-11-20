import{T as i}from"./TopicDetailMoreItem-CbTznfhE.js";import"./iframe-CUZq7Oz2.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-41YTlVRC.js";import"./useApi-CUWMwLLw-C3HfpkXu.js";import"./BaseLink-DLCWZqRj.js";import"./theme-CNK7AaU7.js";import"./MixinAnimationCaret-CCvE7RyC.js";import"./IconCaret-iQdsYJwf.js";import"./BaseImage-CwFSACUh.js";import"./BaseImagePlaceholder-_RIYbPX1.js";import"./IconPlay-D2IKlfIA.js";import"./IconExternal-C6zl5m-g.js";const k={title:"Components/WWW/TopicDetail/TopicDetailMore/TopicDetailMoreItem",component:i,tags:["cards"],decorators:[()=>({template:'<div id="storyRoot" class="lg:w-1/3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={default:{__typename:"ImageDetailPage",type:"ImageDetailPage",url:"/images/placeholder/",title:"An Image Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Image",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},pageChooser:{__typename:"PageChooserBlock",type:"PageChooserBlock",page:{label:"Mission",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"},title:"Autonomous Sciencecraft Experiment",url:"/missions/autonomous-sciencecraft-experiment-ase/"}},externalLink:{__typename:"ExternalLinkCard",type:"ExternalLinkCard",date:"2020-11-03",title:"Title for Link Card",url:"https://nasa.gov",label:"Link Label",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},video:{__typename:"VideoDetailPage",type:"VideoDetailPage",url:"/video/placeholder/",title:"A Video Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Video",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}}},t={args:{data:e.default}},a={args:{data:e.pageChooser}},o={args:{data:e.externalLink}},r={args:{data:e.video}},s={args:{data:{...e.externalLink,thumbnailImage:null}}},w=["BaseStory","PageChooser","ExternalLink","Video","NoImage"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};export{t as BaseStory,o as ExternalLink,s as NoImage,a as PageChooser,r as Video,w as __namedExportsOrder,k as default};
