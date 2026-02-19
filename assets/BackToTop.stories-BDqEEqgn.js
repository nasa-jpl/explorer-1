import{B as e}from"./BackToTop-Y-tFj44o.js";const r={title:"Components/Utilities/BackToTop",component:e},s=t=>({components:{BackToTop:e},setup(){return{args:t}},template:`
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" v-bind="args" /></div></div>
  `}),o=s.bind({});o.storyName="BackToTop";o.args={threshold:300,scrollTo:0};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BackToTop
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" v-bind="args" /></div></div>
  \`
})`,...o.parameters?.docs?.source}}};const a=["BaseStory"],p=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:o,__namedExportsOrder:a,default:r},Symbol.toStringTag,{value:"Module"}));export{p as B};
