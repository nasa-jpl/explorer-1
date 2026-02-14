import{_ as m}from"./TextArea-CvvcLL3d.js";const u={title:"Components/Forms/TextArea",component:m,tags:["forms"]},e={args:{inputName:"message",required:!0,label:"Your Message",placeholder:"Enter your message here",rows:10}},r={name:"Hidden Label",args:{inputName:"message",label:"Your Message",showLabel:!1,required:!1,placeholder:"Your message here"}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    inputName: 'message',
    required: true,
    label: 'Your Message',
    placeholder: 'Enter your message here',
    rows: 10
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var n,t,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Hidden Label',
  args: {
    inputName: 'message',
    label: 'Your Message',
    showLabel: false,
    required: false,
    placeholder: 'Your message here'
  }
}`,...(l=(t=r.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const d=["BaseStory","HiddenLabel"],i=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,HiddenLabel:r,__namedExportsOrder:d,default:u},Symbol.toStringTag,{value:"Module"}));export{i as T};
