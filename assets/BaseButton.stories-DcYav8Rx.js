import{B as o}from"./BaseButton-MiEHQC4X.js";const s={title:"Components/Base/BaseButton",component:o,excludeStories:/.*(Data)$/,parameters:{slots:{default:"The contents of the button, usually text. Override with `<template #default>`",iconLeft:"Appears to the left of the `default` slot. Override with `<template #iconLeft>`",iconRight:"Appears to the right of the `default` slot. Override with `<template #iconRight>`"},docs:{description:{component:"Simple button with style variations."}}}},r={ariaLabel:"Link to learn more",compact:!1,disabled:!1,to:"/",default:"Button"},t={name:"Primary Button",args:{...r,variant:"primary"}},a={args:{...r,variant:"secondary"}},e={args:{...r,variant:"dark"},decorators:[()=>({template:'<div id="storyRoot" class="p-8 bg-gray-dark edu:bg-primary-dark"><story/></div>'})]};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  },
  decorators: [() => ({
    template: \`<div id="storyRoot" class="p-8 bg-gray-dark edu:bg-primary-dark"><story/></div>\`
  })]
  // globals: { themeVariant: 'ThemeVariantDark' }
}`,...e.parameters?.docs?.source}}};const n=["BaseButtonData","BaseStory","SecondaryButton","DarkButton"],c=Object.freeze(Object.defineProperty({__proto__:null,BaseButtonData:r,BaseStory:t,DarkButton:e,SecondaryButton:a,__namedExportsOrder:n,default:s},Symbol.toStringTag,{value:"Module"}));export{c as B};
