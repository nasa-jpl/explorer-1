import{_ as r}from"./NavJumpMenu-Ba90aZCg.js";import"./iframe-Cd4oaOVZ.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-Bb7d7zEq.js";import"./useApi-j1E6pMaV-Xh5VcrA2.js";import"./NavSecondary-ZBY1mBs_.js";import"./theme-DSHjxScF.js";import"./BaseLink-BEIsD5nc.js";import"./MixinAnimationCaret-BiY6sx65.js";import"./IconCaret-CtQ-fK9U.js";import"./NavDropdownToggle-CbFKerNB.js";import"./NavSecondaryDropdownContent-Dm5fwznT.js";import"./getHeadingId-C0sRXBP1.js";import"./lodash-C7Uf-pdH.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const v=["BaseStory","ExtraLong","Light"];export{e as BaseStory,a as ExtraLong,i as Light,v as __namedExportsOrder,D as default};
