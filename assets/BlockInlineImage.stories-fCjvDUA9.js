import{B as k}from"./BaseImageCaption.stories-CYTSn05n.js";import{B as b}from"./BlockInlineImage-BGrqEtED.js";import"./BaseImageCaption-DN6pOlBl.js";import"./iframe-DI0ok8AA.js";import"./preload-helper-D6kgxu3v.js";import"./BaseLink-CS6yEVao.js";import"./theme-B3sYGVxw.js";import"./MixinAnimationCaret-D9Cvu4DQ.js";import"./IconCaret-BGyeD6QJ.js";import"./mixins-D0wooHhi.js";import"./MixinFancybox-B7KNIYaL.js";import"./IconExpand-BHRd0UQ0.js";import"./BaseImagePlaceholder-Dt0gpSSu.js";import"./BaseImage-BFycSJmR.js";import"./BlockText-jlYiqlIh.js";const E={title:"Components/Blocks/BlockInlineImage",component:b,tags:["wagtail-blocks"],excludeStories:/.*(Data)$/},s={block:{blockType:"InlineImageBlock",text:`<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
      <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,alignTo:"right",image:{...k,alt:"Inline image",src:{height:500,url:"https://picsum.photos/700/500",width:700},original:"https://picsum.photos/1400/1000"},displayCaption:!0}},e={name:"Align Right",args:{data:s.block,variant:"large"}},a={args:{data:{...s.block,caption:"<p>My custom caption.</p>"}}},t={args:{data:{...s.block,alignTo:"left"}}},n={args:{data:{...s.block,image:{...k,alt:"Inline image",src:{height:600,url:"https://picsum.photos//500/600",width:500}}},variant:"large"}};var i,o,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Align Right',
  args: {
    data: BlockInlineImageData.block,
    variant: 'large'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,m,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      caption: '<p>My custom caption.</p>'
    }
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,c,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      alignTo: 'left'
    }
  }
}`,...(g=(c=t.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var d,I,h;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      image: {
        ...BaseImageCaptionData,
        alt: 'Inline image',
        src: {
          height: 600,
          url: 'https://picsum.photos//500/600',
          width: 500
        }
      }
    },
    variant: 'large'
  }
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const L=["BlockInlineImageData","BaseStory","CustomCaption","AlignLeft","PortraitImage"];export{t as AlignLeft,e as BaseStory,s as BlockInlineImageData,a as CustomCaption,n as PortraitImage,L as __namedExportsOrder,E as default};
