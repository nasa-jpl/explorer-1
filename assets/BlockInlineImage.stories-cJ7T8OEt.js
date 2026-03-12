import{a as s}from"./BaseImageCaption.stories-DbZDJhfC.js";import{B as o}from"./BlockInlineImage-Bet5B2KY.js";import"./BaseImageCaption-CPy3AU1W.js";import"./iframe-Y1adRlUN.js";import"./preload-helper-PPVm8Dsz.js";import"./BaseLink-xeNaTMVJ.js";import"./theme-DrdrCy7d.js";import"./MixinAnimationCaret-D6F7OZLw.js";import"./IconCaret-DqTdTTo9.js";import"./mixins-Dq0e2eCZ.js";import"./useApi-j1E6pMaV-DAlil3FN.js";import"./MixinFancybox-B81Z4Hz9.js";import"./IconExpand-BYsmJLvC.js";import"./BaseImagePlaceholder-BdjpUEQL.js";import"./BaseImage-BZMqLbmU.js";import"./BlockText-CoriLWFe.js";const S={title:"Components/Blocks/BlockInlineImage",component:o,tags:["wagtail-blocks"],excludeStories:/.*(Data)$/},i={block:{blockType:"InlineImageBlock",text:`<p>Maecenas luctus finibus arcu, a sodales leo varius quis. Aenean bibendum pellentesque eros, porttitor tempus lectus elementum venenatis. Aliquam erat volutpat. Pellentesque congue sapien lacus, sit amet imperdiet diam pellentesque vitae. In egestas aliquet tellus et pulvinar.</p>
      <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean vestibulum eros sed erat elementum mattis. Etiam fermentum velit id libero vulputate, quis lacinia nunc consequat. Nullam maximus turpis non elementum mattis. Proin volutpat tellus et nibh suscipit posuere. </p>
      <p>Sed ipsum lorem, sodales a lacinia nec, sagittis in erat. Praesent vel est turpis. Suspendisse potenti. Vivamus quis odio ligula. Sed ornare magna elementum nibh tincidunt, non maximus felis lobortis. Cras in quam ornare, egestas nulla et, semper orci. Vivamus sed ornare ipsum. Aenean at tincidunt nunc, at euismod nibh. Integer molestie aliquam risus sed ultrices. </p>`,alignTo:"right",image:{...s,alt:"Inline image",src:{height:500,url:"https://picsum.photos/700/500",width:700},original:"https://picsum.photos/1400/1000"},displayCaption:!0}},e={name:"Align Right",args:{data:i.block,variant:"large"}},a={args:{data:{...i.block,caption:"<p>My custom caption.</p>"}}},t={args:{data:{...i.block,alignTo:"left"}}},n={args:{data:{...i.block,image:{...s,alt:"Inline image",src:{height:600,url:"https://picsum.photos//500/600",width:500}}},variant:"large"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Align Right',
  args: {
    data: BlockInlineImageData.block,
    variant: 'large'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      caption: '<p>My custom caption.</p>'
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      ...BlockInlineImageData.block,
      alignTo: 'left'
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const C=["BlockInlineImageData","BaseStory","CustomCaption","AlignLeft","PortraitImage"];export{t as AlignLeft,e as BaseStory,i as BlockInlineImageData,a as CustomCaption,n as PortraitImage,C as __namedExportsOrder,S as default};
