import{_ as r}from"./NavJumpMenu-Dj0eBRWO.js";import"./iframe-By-Q1zBi.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-Ch8MItPr.js";import"./useApi-j1E6pMaV-CxlOMZRL.js";import"./NavSecondary-D3fIXrId.js";import"./theme-DXyRchnE.js";import"./BaseLink-a-0k3cqn.js";import"./MixinAnimationCaret-Bj8yKzAI.js";import"./IconCaret-BR1Hsp9K.js";import"./NavDropdownToggle-KFwlEAJS.js";import"./NavSecondaryDropdownContent-WczOYX1p.js";import"./getHeadingId-BXfxXzZL.js";import"./lodash-Ds9-b4md.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
