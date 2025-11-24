import{L,i as H}from"./LayoutHelper-a1yJvoD5.js";const S={title:"Foundations/Grid and Layout/Column Layout Helpers",component:L,tags:["!autodocs"],argTypes:{indent:{control:{type:"select"},options:Object.keys(H)}},parameters:{html:{root:"#storyRoot"}},decorators:[()=>({template:'<div id="storyRoot" class="container mx-auto border border-black"><story/></div>'})]},o=v=>({components:{LayoutHelper:L},setup(){return{args:v}},template:'<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>'}),e=o.bind({});e.args={indent:"col-1"};const t=o.bind({});t.args={indent:"col-2"};const r=o.bind({});r.args={indent:"col-3"};const a=o.bind({});a.args={indent:"col-4"};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,i,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var g,y,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    LayoutHelper
  },
  setup() {
    return {
      args
    };
  },
  template: \`<LayoutHelper v-bind="args"><div class="w-full text-white bg-black py-10 px-2">Indent starts at <code>{{args}}</code></div></LayoutHelper>\`
})`,...(b=(y=a.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const x=["BaseWidth","ColTwoStart","ColThreeStart","ColFourStart"],h=Object.freeze(Object.defineProperty({__proto__:null,BaseWidth:e,ColFourStart:a,ColThreeStart:r,ColTwoStart:t,__namedExportsOrder:x,default:S},Symbol.toStringTag,{value:"Module"}));export{e as B,t as C,h as S,r as a,a as b};
