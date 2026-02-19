import{B as o}from"./BaseLink-C7mdSZaT.js";const i={title:"Components/Base/BaseLink",component:o,parameters:{slots:{default:"Text or markup contained in the link"}},argTypes:{linkClicked:{description:"Click event emitted at the root-level (globally available)"},specificLinkClicked:{description:"Locally emitted click event (includes event attributes)"}},excludeStories:/.*Data$/},e={variant:"primary",to:"/",href:"/",default:"Link Text"},a={name:"Primary",args:{...e}},r={args:{...e,variant:"secondary"}},t={args:{...e,variant:"default"}},s={args:{...e,variant:"none"}},n={args:{...e,variant:"primary",caretLeft:!0}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    ...BaseLinkData
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'secondary'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'default'
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'none'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'primary',
    caretLeft: true
  }
}`,...n.parameters?.docs?.source}}};const c=["BaseLinkData","BaseStory","Secondary","DefaultBody","Unstyled","WithLeadingIcon"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseLinkData:e,BaseStory:a,DefaultBody:t,Secondary:r,Unstyled:s,WithLeadingIcon:n,__namedExportsOrder:c,default:i},Symbol.toStringTag,{value:"Module"}));export{l as B};
