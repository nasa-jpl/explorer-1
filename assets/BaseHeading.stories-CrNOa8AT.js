import{B as i}from"./BaseHeading-WJvwHq44.js";import{I as c}from"./IconArrows-Br8sBwEM.js";import{I as l}from"./IconLocation-B6dlE4Sx.js";import{I as g}from"./IconUser-CPpH7C6r.js";const m={title:"Components/Base/BaseHeading",component:i,parameters:{slots:{default:"The contents of the heading, usually text. Override with `<template #default>`"},docs:{description:{component:"Base component for headings. Allows for retaining semantic markup while varying the text size."}}}},a={name:"H1",args:{size:"h1",level:"h1",default:"Heading 1"}},s={name:"H2",args:{size:"h2",level:"h2",default:"Heading 2"}},n={name:"H3",args:{size:"h3",level:"h3",default:"Heading 3"}},r={name:"H4",args:{size:"h4",level:"h4",default:"Heading 4"}},o={name:"H5",args:{size:"h5",level:"h5",default:"Heading 5"}},t={name:"H6",args:{size:"h6",level:"h6",default:"Heading 6"}},p=d=>({components:{BaseHeading:i,IconArrows:c,IconLocation:l,IconUser:g},setup(){return{args:d}},template:'<div><BaseHeading v-bind="args"><IconArrows class="inline" /> {{ args.default }}</BaseHeading><BaseHeading class="mt-8" v-bind="args"><IconLocation class="inline" /> {{ args.default }}</BaseHeading></div><BaseHeading class="mt-8" v-bind="args"><IconUser class="inline" /> {{ args.default }}</BaseHeading>'}),e=p.bind({});e.args={size:"h3",level:"h3",default:"Heading 3 with Icon"};e.parameters={docs:{description:{story:"Example of overriding the default slot to include an icon component."}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'H1',
  args: {
    size: 'h1',
    level: 'h1',
    default: 'Heading 1'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'H2',
  args: {
    size: 'h2',
    level: 'h2',
    default: 'Heading 2'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'H3',
  args: {
    size: 'h3',
    level: 'h3',
    default: 'Heading 3'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'H4',
  args: {
    size: 'h4',
    level: 'h4',
    default: 'Heading 4'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'H5',
  args: {
    size: 'h5',
    level: 'h5',
    default: 'Heading 5'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'H6',
  args: {
    size: 'h6',
    level: 'h6',
    default: 'Heading 6'
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BaseHeading,
    IconArrows,
    IconLocation,
    IconUser
  },
  setup() {
    return {
      args
    };
  },
  template: '<div><BaseHeading v-bind="args"><IconArrows class="inline" /> {{ args.default }}</BaseHeading><BaseHeading class="mt-8" v-bind="args"><IconLocation class="inline" /> {{ args.default }}</BaseHeading></div><BaseHeading class="mt-8" v-bind="args"><IconUser class="inline" /> {{ args.default }}</BaseHeading>'
})`,...e.parameters?.docs?.source}}};const u=["BaseStory","H2","H3","H4","H5","H6","HeadingsWithIcons"],B=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:a,H2:s,H3:n,H4:r,H5:o,H6:t,HeadingsWithIcons:e,__namedExportsOrder:u,default:m},Symbol.toStringTag,{value:"Module"}));export{B};
