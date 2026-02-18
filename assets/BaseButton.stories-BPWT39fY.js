import{B as o}from"./BaseButton-DbWpKeGD.js";const n={title:"Components/Base/BaseButton",component:o,excludeStories:/.*(Data)$/,parameters:{slots:{default:"The contents of the button, usually text. Override with `<template #default>`",icon:"Appears to the right of the `default` slot. Override with `<template #icon>`",afterIcon:"Appears to the right of the `icon` slot. Override with `<template #afterIcon>`"},docs:{description:{component:"Simple button with style variations."}}}},r={ariaLabel:"Link to learn more",compact:!1,disabled:!1,to:"/",default:"Button"},t={name:"Primary Button",args:{...r,variant:"primary"}},a={args:{...r,variant:"secondary"}},e={args:{...r,variant:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Primary Button',
  args: {
    ...BaseButtonData,
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'dark'
  }
  // globals: { themeVariant: 'ThemeVariantDark' }
}`,...e.parameters?.docs?.source}}};const s=["BaseButtonData","BaseStory","SecondaryButton","DarkButton"],c=Object.freeze(Object.defineProperty({__proto__:null,BaseButtonData:r,BaseStory:t,DarkButton:e,SecondaryButton:a,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{c as B};
