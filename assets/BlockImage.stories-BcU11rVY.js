import{B as i}from"./BlockImage-2okp6NSs.js";const p={title:"Components/Blocks/BlockImage",component:i,tags:["autodocs","wagtail-blocks"],excludeStories:/.*Data$/,parameters:{docs:{description:{component:"The combination of BaseImage and BaseImageCaption, plus adding support for expanding the image in a lightbox and styling it to be a full-bleed image."}}}},e={blockType:"FullBleedImageBlock",fullBleed:!1,image:{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/869/700",src:{height:700,url:"https://picsum.photos/869/700",width:869},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w"},imageFullBleed:{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/1800/600",src:{width:1800,height:900,url:"https://picsum.photos/1800/600"},srcCropped:{width:1024,height:341,url:"https://picsum.photos/1024/341"},screenXs:{url:"https://picsum.photos/320/107",width:320},screenLg:{url:"https://picsum.photos/1024/341",width:1024},screenXl:{url:"https://picsum.photos/1280/427",width:1280},screenThreexl:{url:"https://picsum.photos/1800/600",width:1800}}},l=c=>({components:{BlockImage:i},setup(){return{args:c}},template:`
    <BlockImage v-bind="args" />`}),t=l.bind({});t.storyName="Standard";t.args={data:e,fullBleed:e.fullBleed};const s=l.bind({});s.args={data:{...e,constrain:!1},fullBleed:e.fullBleed};const a=l.bind({});a.args={data:{...e,caption:"<p>My custom caption.</p>",displayCaption:!0},fullBleed:e.fullBleed};const r=l.bind({});r.args={data:{...e,displayCaption:!1},fullBleed:e.fullBleed};const o=l.bind({});o.args={data:{...e,constrain:!0},fullBleed:!0};const n=l.bind({});n.args={data:{...e,constrain:!1},fullBleed:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => ({
  components: {
    BlockImage
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <BlockImage v-bind="args" />\`
})`,...n.parameters?.docs?.source}}};const u=["BlockImageData","BaseStory","Unconstrained","CustomCaption","NoCaption","FullBleed","FullBleedUnconstrained"],d=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,BlockImageData:e,CustomCaption:a,FullBleed:o,FullBleedUnconstrained:n,NoCaption:r,Unconstrained:s,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{d as B,e as a};
