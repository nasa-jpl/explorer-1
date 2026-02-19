import{B as i}from"./BlockQuote-CeeQnwea.js";import"./iframe-Cbo-gMoN.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseLink-C7mdSZaT.js";import"./theme-BQWoGd8-.js";import"./MixinAnimationCaret-BKTqSsaA.js";import"./IconCaret-Rf9_wB61.js";const k={title:"Components/Blocks/BlockQuote",component:i,tags:["wagtail-blocks"],excludeStories:/.*Data$/,parameters:{docs:{description:{component:"A big, fancy pull quote, with optional attribution and link. Can also be used for non-quotation callouts."}}}},t={blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer",quoteLink:[{externalLink:"",page:{url:"/"}}],thumbnail:{src:"https://picsum.photos/80/80",alt:"An image"}},s=u=>({components:{BlockQuote:i},setup(){return{args:u}},template:'<BlockQuote v-bind="args" />'}),e=s.bind({});e.args={data:{quote:t.quote,attribution:t.attribution,quoteLink:[]}};const o=s.bind({});o.args={data:{quote:t.quote,attribution:t.attribution,thumbnail:t.thumbnail}};const n=s.bind({});n.args={data:{quote:t.quote,attribution:t.attribution,quoteLink:[{externalLink:"https://www.jpl.nasa.gov"}]}};const a=s.bind({});a.args={data:t};const r=s.bind({});r.args={data:{quote:t.quote}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...r.parameters?.docs?.source}}};const B=["BlockQuoteData","BaseStory","WithImage","ExternalLinkedAttribution","ImageWithLocalLinkedAttribution","NoAttribution"];export{e as BaseStory,t as BlockQuoteData,n as ExternalLinkedAttribution,a as ImageWithLocalLinkedAttribution,r as NoAttribution,o as WithImage,B as __namedExportsOrder,k as default};
