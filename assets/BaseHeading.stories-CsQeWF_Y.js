import{B as A}from"./BaseHeading-B8Hvvzww.js";import{I as O}from"./IconArrows-tYtuxFHh.js";import{I as U}from"./IconLocation-JeHJCcgc.js";import{I as T}from"./IconUser-Cz3oE6vp.js";const W={title:"Components/Base/BaseHeading",component:A,parameters:{slots:{default:"The contents of the heading, usually text. Override with `<template #default>`"},docs:{description:{component:"Base component for headings. Allows for retaining semantic markup while varying the text size."}}}},a={name:"H1",args:{size:"h1",level:"h1",default:"Heading 1"}},s={name:"H2",args:{size:"h2",level:"h2",default:"Heading 2"}},n={name:"H3",args:{size:"h3",level:"h3",default:"Heading 3"}},r={name:"H4",args:{size:"h4",level:"h4",default:"Heading 4"}},o={name:"H5",args:{size:"h5",level:"h5",default:"Heading 5"}},t={name:"H6",args:{size:"h6",level:"h6",default:"Heading 6"}},j=L=>({components:{BaseHeading:A,IconArrows:O,IconLocation:U,IconUser:T},setup(){return{args:L}},template:'<div><BaseHeading v-bind="args"><IconArrows class="inline" /> {{ args.default }}</BaseHeading><BaseHeading class="mt-8" v-bind="args"><IconLocation class="inline" /> {{ args.default }}</BaseHeading></div><BaseHeading class="mt-8" v-bind="args"><IconUser class="inline" /> {{ args.default }}</BaseHeading>'}),e=j.bind({});e.args={size:"h3",level:"h3",default:"Heading 3 with Icon"};e.parameters={docs:{description:{story:"Example of overriding the default slot to include an icon component."}}};var i,d,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'H1',
  args: {
    size: 'h1',
    level: 'h1',
    default: 'Heading 1'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,g,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'H2',
  args: {
    size: 'h2',
    level: 'h2',
    default: 'Heading 2'
  }
}`,...(m=(g=s.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,u,H;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'H3',
  args: {
    size: 'h3',
    level: 'h3',
    default: 'Heading 3'
  }
}`,...(H=(u=n.parameters)==null?void 0:u.docs)==null?void 0:H.source}}};var h,f,v;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'H4',
  args: {
    size: 'h4',
    level: 'h4',
    default: 'Heading 4'
  }
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var B,I,z;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'H5',
  args: {
    size: 'h5',
    level: 'h5',
    default: 'Heading 5'
  }
}`,...(z=(I=o.parameters)==null?void 0:I.docs)==null?void 0:z.source}}};var S,b,w;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'H6',
  args: {
    size: 'h6',
    level: 'h6',
    default: 'Heading 6'
  }
}`,...(w=(b=t.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var y,_,x;e.parameters={...e.parameters,docs:{...(y=e.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
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
})`,...(x=(_=e.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};const E=["BaseStory","H2","H3","H4","H5","H6","HeadingsWithIcons"],q=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:a,H2:s,H3:n,H4:r,H5:o,H6:t,HeadingsWithIcons:e,__namedExportsOrder:E,default:W},Symbol.toStringTag,{value:"Module"}));export{q as B};
