import{T as w}from"./TopicDetailMoreItem-CL8p6fUg.js";import"./iframe-jyw6MFLl.js";import"./preload-helper-D6kgxu3v.js";import"./mixins-ElMjG5Ip.js";import"./BaseLink-B6oEi1j1.js";import"./theme-Cs1kvJ5R.js";import"./MixinAnimationCaret-D0_MEbAY.js";import"./IconCaret-C0DVZCB1.js";import"./BaseImage-Dxzskg0e.js";import"./BaseImagePlaceholder-DdVka0IT.js";import"./IconPlay-BCaPS0Uw.js";import"./IconExternal-DCLzzHq-.js";const B={title:"Components/WWW/TopicDetail/TopicDetailMore/TopicDetailMoreItem",component:w,tags:["cards"],decorators:[()=>({template:'<div id="storyRoot" class="lg:w-1/3"><story/></div>'})],parameters:{html:{root:"#storyRoot"}},excludeStories:/.*Data$/},e={default:{__typename:"ImageDetailPage",type:"ImageDetailPage",url:"/images/placeholder/",title:"An Image Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Image",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},pageChooser:{__typename:"PageChooserBlock",type:"PageChooserBlock",page:{label:"Mission",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"},title:"Autonomous Sciencecraft Experiment",url:"/missions/autonomous-sciencecraft-experiment-ase/"}},externalLink:{__typename:"ExternalLinkCard",type:"ExternalLinkCard",date:"2020-11-03",title:"Title for Link Card",url:"https://nasa.gov",label:"Link Label",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}},video:{__typename:"VideoDetailPage",type:"VideoDetailPage",url:"/video/placeholder/",title:"A Video Detail Page",date:"2020-11-12T23:56:46.346940+00:00",label:"Video",thumbnailImage:{src:{width:"600",height:"400",url:"https://picsum.photos/600/400"},srcSet:"https://picsum.photos/600/400 320w, https://picsum.photos/600/400 600w,"}}},t={args:{data:e.default}},a={args:{data:e.pageChooser}},o={args:{data:e.externalLink}},r={args:{data:e.video}},s={args:{data:{...e.externalLink,thumbnailImage:null}}};var i,p,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.default
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,n,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.pageChooser
  }
}`,...(l=(n=a.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,h,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.externalLink
  }
}`,...(u=(h=o.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,D,I;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    data: TopicDetailMoreItemData.video
  }
}`,...(I=(D=r.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var T,x,k;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: {
      ...TopicDetailMoreItemData.externalLink,
      thumbnailImage: null
    }
  }
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const A=["BaseStory","PageChooser","ExternalLink","Video","NoImage"];export{t as BaseStory,o as ExternalLink,s as NoImage,a as PageChooser,r as Video,A as __namedExportsOrder,B as default};
