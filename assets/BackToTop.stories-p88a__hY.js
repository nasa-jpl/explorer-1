import{B as e}from"./BackToTop-DpsBi4oa.js";const s={title:"Components/Utilities/BackToTop",component:e},r=t=>({components:{BackToTop:e},setup(){return{args:t}},template:`
    <div style="height: 2000px;"><div class="fixed">Will appear here on scroll: <BackToTop v-show="true" v-bind="args" /></div></div>
  `}),o=r.bind({});o.storyName="BackToTop";o.args={threshhold:300,scrollTo:0};const a=["BaseStory"],c=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:o,__namedExportsOrder:a,default:s},Symbol.toStringTag,{value:"Module"}));export{c as B};
