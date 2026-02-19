import{_ as a}from"./TextInput-C3oBOI1h.js";const t={title:"Components/Forms/TextInput",component:a,tags:["forms"]},e={args:{inputName:"name",type:"text",required:!0,label:"Your Name",ariaLabel:"Your Name",placeholder:"Enter your name here",autofocus:!0}},r={args:{inputName:"name",type:"text",required:!1,placeholder:"Your name here",label:"Name",showLabel:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    inputName: 'name',
    type: 'text',
    required: true,
    label: 'Your Name',
    ariaLabel: 'Your Name',
    placeholder: 'Enter your name here',
    autofocus: true
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    inputName: 'name',
    type: 'text',
    required: false,
    placeholder: 'Your name here',
    label: 'Name',
    showLabel: false
  }
}`,...r.parameters?.docs?.source}}};const o=["BaseStory","HiddenLabel"],s=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:e,HiddenLabel:r,__namedExportsOrder:o,default:t},Symbol.toStringTag,{value:"Module"}));export{s as T};
