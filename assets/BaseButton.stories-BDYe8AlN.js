import{B as o}from"./BaseButton-CFcHEwKv.js";const n={title:"Components/Base/BaseButton",component:o,excludeStories:/.*(Data)$/,parameters:{slots:{default:"The contents of the button, usually text. Override with `<template #default>`",iconLeft:"Appears to the left of the `default` slot. Override with `<template #iconLeft>`",iconRight:"Appears to the right of the `default` slot. Override with `<template #iconRight>`"},docs:{description:{component:"Simple button with style variations."}}}},r={ariaLabel:"Link to learn more",compact:!1,disabled:!1,to:"/",default:"Button"},t={name:"Primary Button",args:{...r,variant:"primary"}},e={args:{...r,variant:"secondary"}},a={args:{...r,variant:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Primary Button',
  args: {
    ...BaseButtonData,
    variant: 'primary'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'secondary'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'dark'
  }
  // globals: { themeVariant: 'ThemeVariantDark' }
}`,...a.parameters?.docs?.source}}};const s=["BaseButtonData","BaseStory","SecondaryButton","DarkButton"],c=Object.freeze(Object.defineProperty({__proto__:null,BaseButtonData:r,BaseStory:t,DarkButton:a,SecondaryButton:e,__namedExportsOrder:s,default:n},Symbol.toStringTag,{value:"Module"}));export{c as B};
