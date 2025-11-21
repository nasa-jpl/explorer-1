import{B as F}from"./BlockImage-B6tkvaOt.js";const x={title:"Components/Blocks/BlockImage",component:F,tags:["autodocs","wagtail-blocks"],excludeStories:/.*Data$/,parameters:{docs:{description:{component:"The combination of BaseImage and BaseImageCaption, plus adding support for expanding the image in a lightbox and styling it to be a full-bleed image."}}}},e={blockType:"FullBleedImageBlock",fullBleed:!1,image:{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/869/700",src:{height:700,url:"https://picsum.photos/869/700",width:869},srcSet:"https://picsum.photos/320/258 320w, https://picsum.photos/869/700 1024w"},imageFullBleed:{alt:"Fourth image",caption:"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor urna. Maecenas at est laoreet, sagittis risus a, rutrum ipsum. Quisque tincidunt lacus nunc, dapibus facilisis felis scelerisque sit amet. </p>",credit:"NASA/JPL",detailUrl:"/image/placeholder/",original:"https://picsum.photos/1800/600",src:{width:1800,height:900,url:"https://picsum.photos/1800/600"},srcCropped:{width:1024,height:341,url:"https://picsum.photos/1024/341"},screenXs:{url:"https://picsum.photos/320/107",width:320},screenLg:{url:"https://picsum.photos/1024/341",width:1024},screenXl:{url:"https://picsum.photos/1280/427",width:1280},screenThreexl:{url:"https://picsum.photos/1800/600",width:1800}}},l=_=>({components:{BlockImage:F},setup(){return{args:_}},template:`
    <BlockImage v-bind="args" />`}),t=l.bind({});t.storyName="Standard";t.args={data:e,fullBleed:e.fullBleed};const s=l.bind({});s.args={data:{...e,constrain:!1},fullBleed:e.fullBleed};const a=l.bind({});a.args={data:{...e,caption:"<p>My custom caption.</p>",displayCaption:!0},fullBleed:e.fullBleed};const r=l.bind({});r.args={data:{...e,displayCaption:!1},fullBleed:e.fullBleed};const o=l.bind({});o.args={data:{...e,constrain:!0},fullBleed:!0};const n=l.bind({});n.args={data:{...e,constrain:!1},fullBleed:!0};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
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
})`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
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
})`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,B,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
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
})`,...(h=(B=a.parameters)==null?void 0:B.docs)==null?void 0:h.source}}};var f,b,k;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(k=(b=r.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var I,S,C;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
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
})`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var v,w,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
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
})`,...(y=(w=n.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};const U=["BlockImageData","BaseStory","Unconstrained","CustomCaption","NoCaption","FullBleed","FullBleedUnconstrained"],N=Object.freeze(Object.defineProperty({__proto__:null,BaseStory:t,BlockImageData:e,CustomCaption:a,FullBleed:o,FullBleedUnconstrained:n,NoCaption:r,Unconstrained:s,__namedExportsOrder:U,default:x},Symbol.toStringTag,{value:"Module"}));export{e as B,N as a};
