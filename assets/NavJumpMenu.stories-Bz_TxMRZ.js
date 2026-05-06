import{_ as r}from"./NavJumpMenu-ndLOiHkX.js";import"./iframe-C9omJrl1.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-Do37eKjh.js";import"./useApi-j1E6pMaV--PgTb1sm.js";import"./NavSecondary-BfWCH-3a.js";import"./theme-D13Fc2Zm.js";import"./BaseLink-CjvD3--a.js";import"./MixinAnimationCaret-C73p62OV.js";import"./IconCaret-Dhkl0KT0.js";import"./NavDropdownToggle-DCoKaELr.js";import"./NavSecondaryDropdownContent-BzqbK7eA.js";import"./getHeadingId-Cy4UMWV6.js";import"./lodash-mDrFSDpa.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
