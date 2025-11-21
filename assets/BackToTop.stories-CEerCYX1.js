import{B as s}from"./BackToTop-EL_Uqk0z.js";const n={title:"Components/Utilities/BackToTop",component:s},p=a=>({components:{BackToTop:s},setup(){return{args:a}},template:`
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" v-bind="args" /></div></div>
  `}),o=p.bind({});o.storyName="BackToTop";o.args={threshold:300,scrollTo:0};var e,t,r;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
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
})`,...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const c=["BaseStory"],l=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:o,__namedExportsOrder:c,default:n},Symbol.toStringTag,{value:"Module"}));export{l as B};
