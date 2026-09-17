import{_ as r}from"./NavJumpMenu-ufHbkrOf.js";import"./iframe-DnfkC-Wb.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-BglsLvDS.js";import"./useApi-j1E6pMaV-h1WtyilL.js";import"./NavSecondary-Cb6KyS_D.js";import"./theme-BKbb_q9n.js";import"./BaseLink-JbZGSwKq.js";import"./MixinAnimationCaret-B2zv8CwK.js";import"./IconCaret-BUdZPeYb.js";import"./NavDropdownToggle-CdbgaJ8n.js";import"./NavSecondaryDropdownContent-_aa37og1.js";import"./getHeadingId-DFoqTPoS.js";import"./lodash-DzNpsXJA.js";const D={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
