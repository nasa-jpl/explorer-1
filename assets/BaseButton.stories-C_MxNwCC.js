import{B as m}from"./BaseButton-DSsnqbyg.js";const B={title:"Components/Base/BaseButton",component:m,excludeStories:/.*(Data)$/,parameters:{slots:{default:"The contents of the button, usually text. Override with `<template #default>`",icon:"Appears to the right of the `default` slot. Override with `<template #icon>`",afterIcon:"Appears to the right of the `icon` slot. Override with `<template #afterIcon>`"},docs:{description:{component:"Simple button with style variations."}},to:{description:"If populated, a router-link will be generated. Overrides `href`"},click:{type:"@click emit"}}},r={ariaLabel:"Link to learn more",compact:!1,disabled:!1,to:"/",default:"Button"},t={name:"Primary Button",args:{...r,variant:"primary"}},e={args:{...r,variant:"secondary"}},a={args:{...r,variant:"dark"}};var o,n,s;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Primary Button',
  args: {
    ...BaseButtonData,
    variant: 'primary'
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,u;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'secondary'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,p,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...BaseButtonData,
    variant: 'dark'
  }
  // globals: { themeVariant: 'ThemeVariantDark' }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const f=["BaseButtonData","BaseStory","SecondaryButton","DarkButton"],h=Object.freeze(Object.defineProperty({__proto__:null,BaseButtonData:r,BaseStory:t,DarkButton:a,SecondaryButton:e,__namedExportsOrder:f,default:B},Symbol.toStringTag,{value:"Module"}));export{h as B};
