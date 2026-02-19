import{_ as s}from"./TextArea-CLunGitu.js";const a={title:"Components/Forms/TextArea",component:s,tags:["forms"]},e={args:{inputName:"message",required:!0,label:"Your Message",placeholder:"Enter your message here",rows:10}},r={name:"Hidden Label",args:{inputName:"message",label:"Your Message",showLabel:!1,required:!1,placeholder:"Your message here"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    inputName: 'message',
    required: true,
    label: 'Your Message',
    placeholder: 'Enter your message here',
    rows: 10
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Hidden Label',
  args: {
    inputName: 'message',
    label: 'Your Message',
    showLabel: false,
    required: false,
    placeholder: 'Your message here'
  }
}`,...r.parameters?.docs?.source}}};const o=["BaseStory","HiddenLabel"],t=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,HiddenLabel:r,__namedExportsOrder:o,default:a},Symbol.toStringTag,{value:"Module"}));export{t as T};
