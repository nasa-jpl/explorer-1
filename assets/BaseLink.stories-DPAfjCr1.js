import{B as n}from"./BaseLink-lmH6BWCB.js";const o={title:"Components/Base/BaseLink",component:n,parameters:{slots:{default:"Text or markup contained in the link"}},argTypes:{linkClicked:{description:"Click event emitted at the root-level (globally available)"},specificLinkClicked:{description:"Locally emitted click event (includes event attributes)"}},excludeStories:/.*Data$/},s={variant:"primary",to:"/",href:"/",default:"Link Text"},e={name:"Primary",args:{...s}},a={args:{...s,variant:"secondary"}},r={args:{...s,variant:"default"}},t={args:{...s,variant:"none"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    ...BaseLinkData
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'default'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'none'
  }
}`,...t.parameters?.docs?.source}}};const i=["BaseLinkData","BaseStory","Secondary","DefaultBody","Unstyled"],d=Object.freeze(Object.defineProperty({__proto__:null,BaseLinkData:s,BaseStory:e,DefaultBody:r,Secondary:a,Unstyled:t,__namedExportsOrder:i,default:o},Symbol.toStringTag,{value:"Module"}));export{d as B};
