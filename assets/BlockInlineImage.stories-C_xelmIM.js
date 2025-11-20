import{B as k}from"./BaseImageCaption.stories-C8m-Lop3.js";import{B as b}from"./BlockInlineImage-CraZw40l.js";import"./BaseImageCaption-DtbE-1nH.js";import"./iframe-CTVWvntx.js";import"./preload-helper-D6kgxu3v.js";import"./BaseLink-DX_OOjEO.js";import"./pinia-JvkV_l3r.js";import"./theme-BMXYhL_G.js";import"./MixinAnimationCaret-B9hXJgWm.js";import"./IconCaret-p2iu9pyC.js";import"./mixins-SlMYzAFp.js";import"./dayjs.min-BuRsCg53.js";import"./MixinFancybox-D-tKK_Gp.js";import"./IconExpand-CHw8z6oj.js";import"./BaseImagePlaceholder-B5ylXFH9.js";import"./BaseImage-BNaikajF.js";import"./BlockText-BFLS1qDs.js";const O={title:"Components/Blocks/BlockInlineImage",component:b,tags:["wagtail-blocks"],excludeStories:/.*(Data)$/},i={block:{blockType:"InlineImageBlock",text:`<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
      <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,alignTo:"right",image:{...k,alt:"Inline image",src:{height:500,url:"https://picsum.photos/700/500",width:700},original:"https://picsum.photos/1400/1000"},displayCaption:!0}},e={name:"Align Right",args:{data:i.block,variant:"large"}},a={args:{data:{...i.block,caption:"<p>My custom caption.</p>"}}},t={args:{data:{...i.block,alignTo:"left"}}},n={args:{data:{...i.block,image:{...k,alt:"Inline image",src:{height:600,url:"https://picsum.photos//500/600",width:500}}},variant:"large"}};var s,o,r;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Align Right',
  args: {
    data: BlockInlineImageData.block,
    variant: 'large'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};var l,m,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      caption: '<p>My custom caption.</p>'
    }
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,c,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(I=n.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};const R=["BlockInlineImageData","BaseStory","CustomCaption","AlignLeft","PortraitImage"];export{t as AlignLeft,e as BaseStory,i as BlockInlineImageData,a as CustomCaption,n as PortraitImage,R as __namedExportsOrder,O as default};
