import{_ as r}from"./NavJumpMenu-BGwVNYAu.js";import"./iframe-n3lhZlRB.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-CReUV2It.js";import"./useApi-CUWMwLLw-DUoGJCoX.js";import"./NavSecondary-BWi2YkMM.js";import"./theme-Co-t9SUs.js";import"./BaseLink-CjNxd9gr.js";import"./MixinAnimationCaret-D7FfAJso.js";import"./IconCaret-BDOfx5Hc.js";import"./NavDropdownToggle-DLkgj1q9.js";import"./NavSecondaryDropdownContent-DJ9yKP8k.js";import"./getHeadingId-DOL3KbRU.js";import"./lodash-tg4n7qwy.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}},v=["BaseStory","ExtraLong","Light"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Jump Menu',
  args: {
    title: 'Page Title',
    jumpLinks: JumpLinksData,
    invert: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    jumpLinks: [...JumpLinksData, ...JumpLinksData, ...JumpLinksData, ...JumpLinksData, ...JumpLinksData, ...JumpLinksData, ...JumpLinksData, ...JumpLinksData],
    invert: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Page Title',
    jumpLinks: JumpLinksData,
    invert: false
  }
}`,...i.parameters?.docs?.source}}};export{e as BaseStory,a as ExtraLong,i as Light,v as __namedExportsOrder,D as default};
