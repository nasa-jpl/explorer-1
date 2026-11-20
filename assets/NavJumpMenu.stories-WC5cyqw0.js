import{_ as r}from"./NavJumpMenu-DCqbumCn.js";import"./iframe-CUZq7Oz2.js";import"./preload-helper-PPVm8Dsz.js";import"./mixins-41YTlVRC.js";import"./useApi-CUWMwLLw-C3HfpkXu.js";import"./NavSecondary-BvRndIaL.js";import"./theme-CNK7AaU7.js";import"./BaseLink-DLCWZqRj.js";import"./MixinAnimationCaret-CCvE7RyC.js";import"./IconCaret-iQdsYJwf.js";import"./IconDropdown-uvSpdW7z.js";import"./NavDropdownToggle-DK6MqPep.js";import"./NavSecondaryDropdownContent-CoitUN-x.js";import"./getHeadingId-BZfZZ_-N.js";import"./lodash-CrifzT-M.js";const v={title:"Navigation/Jump Menu",component:r,tags:["navigation"],excludeStories:/.*Data$/,decorators:()=>({template:'<story style="visibility: visible!important;" />'})},t=[{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"},{title:"Heading title",path:"#heading_title"}],e={name:"Jump Menu",args:{title:"Page Title",jumpLinks:t,invert:!0}},a={args:{title:"Page Title",jumpLinks:[...t,...t,...t,...t,...t,...t,...t,...t],invert:!0}},i={args:{title:"Page Title",jumpLinks:t,invert:!1}},_=["BaseStory","ExtraLong","Light"];e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};export{e as BaseStory,a as ExtraLong,i as Light,_ as __namedExportsOrder,v as default};
