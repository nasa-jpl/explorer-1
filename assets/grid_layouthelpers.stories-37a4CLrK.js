import{L as s,i as l}from"./LayoutHelper-hmng7OlB.js";const c={title:"Foundations/Grid and Layout/Column Layout Helpers",component:s,tags:["!autodocs"],argTypes:{indent:{control:{type:"select"},options:Object.keys(l)}},parameters:{html:{root:"#storyRoot"}},decorators:[()=>({template:'<div id="storyRoot" class="container mx-auto border border-black"><story/></div>'})]},o=n=>({components:{LayoutHelper:s},setup(){return{args:n}},template:'<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>'}),e=o.bind({});e.args={indent:"col-1"};const t=o.bind({});t.args={indent:"col-2"};const r=o.bind({});r.args={indent:"col-3"};const a=o.bind({});a.args={indent:"col-4"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...a.parameters?.docs?.source}}};const p=["BaseWidth","ColTwoStart","ColThreeStart","ColFourStart"],u=Object.freeze(Object.defineProperty({__proto__:null,BaseWidth:e,ColFourStart:a,ColThreeStart:r,ColTwoStart:t,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{e as B,t as C,u as S,r as a,a as b};
