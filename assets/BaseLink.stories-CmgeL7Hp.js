import{B as g}from"./BaseLink-BgYQaPbO.js";const v={title:"Components/Base/BaseLink",component:g,parameters:{slots:{default:"Text or markup contained in the link"}},argTypes:{linkClicked:{description:"Click event emitted at the root-level (globally available)"},specificLinkClicked:{description:"Locally emitted click event (includes event attributes)"}},excludeStories:/.*Data$/},s={variant:"primary",to:"/",href:"/",default:"Link Text"},e={name:"Primary",args:{...s}},a={args:{...s,variant:"secondary"}},r={args:{...s,variant:"default"}},t={args:{...s,variant:"none"}};var n,o,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Primary',
  args: {
    ...BaseLinkData
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,d,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'secondary'
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'default'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var k,y,B;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...BaseLinkData,
    variant: 'none'
  }
}`,...(B=(y=t.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const L=["BaseLinkData","BaseStory","Secondary","DefaultBody","Unstyled"],S=Object.freeze(Object.defineProperty({__proto__:null,BaseLinkData:s,BaseStory:e,DefaultBody:r,Secondary:a,Unstyled:t,__namedExportsOrder:L,default:v},Symbol.toStringTag,{value:"Module"}));export{S as B};
