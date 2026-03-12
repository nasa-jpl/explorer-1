import{_ as r}from"./NavJumpMenu-mQRlMRO7.js";import"./iframe-DOEyXX_d.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-BTp_epB9.js";import"./useApi-j1E6pMaV-aXXYAo4l.js";import"./NavSecondary-CDPwfiia.js";import"./theme-DbcyZ10s.js";import"./BaseLink-B8HKKSTO.js";import"./MixinAnimationCaret-vfKZGtGj.js";import"./IconCaret-DYMrV03w.js";import"./NavDropdownToggle-_uMKSWn5.js";import"./NavSecondaryDropdownContent-8Ox2r_z2.js";import"./getHeadingId-DQbt5AVj.js";import"./lodash-DV_obnFT.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
