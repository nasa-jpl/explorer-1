import{B as A}from"./BlockQuote-B9yrbNS6.js";import"./iframe-PUpTEj07.js";import"./preload-helper-D6kgxu3v.js";import"./BaseLink-CfcQ0NPe.js";import"./theme-g2k8ltRJ.js";import"./MixinAnimationCaret-B2885rjH.js";import"./IconCaret-DPvY5OL2.js";const W={title:"Components/Blocks/BlockQuote",component:A,tags:["wagtail-blocks"],excludeStories:/.*Data$/,parameters:{docs:{description:{component:"A big, fancy pull quote, with optional attribution and link. Can also be used for non-quotation callouts."}}}},t={blockType:"QuoteBlock",quote:"“A nice thing about it is it doesn't shatter. If impacted, it bends rather than breaks and still has good optical properties”",attribution:"Amy Ross, Spacesuit Designer",quoteLink:[{externalLink:"",page:{url:"/"}}],thumbnail:{src:"https://picsum.photos/80/80",alt:"An image"}},s=S=>({components:{BlockQuote:A},setup(){return{args:S}},template:'<BlockQuote v-bind="args" />'}),e=s.bind({});e.args={data:{quote:t.quote,attribution:t.attribution,quoteLink:[]}};const o=s.bind({});o.args={data:{quote:t.quote,attribution:t.attribution,thumbnail:t.thumbnail}};const n=s.bind({});n.args={data:{quote:t.quote,attribution:t.attribution,quoteLink:[{externalLink:"https://www.jpl.nasa.gov"}]}};const a=s.bind({});a.args={data:t};const r=s.bind({});r.args={data:{quote:t.quote}};var i,u,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var d,g,b;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,B,Q;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...(Q=(B=a.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var h,q,L;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    BlockQuote
  },
  setup() {
    return {
      args
    };
  },
  template: \`<BlockQuote v-bind="args" />\`
})`,...(L=(q=r.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};const E=["BlockQuoteData","BaseStory","WithImage","ExternalLinkedAttribution","ImageWithLocalLinkedAttribution","NoAttribution"];export{e as BaseStory,t as BlockQuoteData,n as ExternalLinkedAttribution,a as ImageWithLocalLinkedAttribution,r as NoAttribution,o as WithImage,E as __namedExportsOrder,W as default};
